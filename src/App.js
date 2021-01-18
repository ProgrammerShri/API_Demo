import React, { useEffect, useState } from "react";

const App = () => {
  let [data, setData] = useState(null);
  let [input, setInput] = useState("");

  const fetchURL = "https://jsonplaceholder.typicode.com";
  const getData = () => fetch(`${fetchURL}/posts`).then((res) => res.json());

  useEffect(() => {
    getData().then((data) => setData(data));
    return console.log(data);
  }, []);

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
      {data?.map((item) => (
        <ul>
          <li>{item.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
