import React, { useState, useEffect } from "react";
import Dog from "./Dog";

const Dogs = props => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/dog/all", { mode: "cors" })
      .then(res => res.json())
      .then(res => {
        setDogs(res.body);
        console.log(res.body);
      });
  }, []);

  return (
    <div>
      <h1>Dogs</h1>
      {dogs.map(dog => (
        <Dog key={dog.id} dogInfo={dog} />
      ))}
    </div>
  );
};

export default Dogs;
