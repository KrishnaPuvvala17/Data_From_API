import "./styles.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ui>
        {data.map((item) => {
          return (
            <>
              <li>Id: {item.id}</li>
              <li>Name: {item.name}</li>
              <li>Email: {item.email}</li>
              <hr />
            </>
          );
        })}
      </ui>
    </div>
  );
};

export default App;