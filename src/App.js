import React, { useState, useEffect } from "react";
import axios from "axios";
import PromisePolyfill from "promise-polyfill";

if (!window.Promise) {
  window.Promise = PromisePolyfill;
}

const useNotes = (url) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, [url]);

  return notes;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);
  const notes = useNotes(BACKEND_URL);

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  };

  return (
    <div className="container">
      hello there {counter} clicks
      <button onClick={handleClick}>press</button>
      <div>
        there are {notes.length} notes on server {BACKEND_URL}
      </div>
    </div>
  );
};

export default App;
