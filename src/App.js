import React, { useEffect, useState } from "react";


const App = () => {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");

  const fetchURL = "https://jsonplaceholder.typicode.com";
  const getData = () => fetch(`${fetchURL}/posts`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  const filteredPerson = data.filter((i) => {
    return i.title.toLowerCase().includes(input.toLowerCase());
  });

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder=" Search"
        value={input}
        onChange={handleChange}
      />
      {filteredPerson.map((i) => (
          <li key={i.title}>{i.title}</li>
        ))}
    </div>
  );
};

export default App;
