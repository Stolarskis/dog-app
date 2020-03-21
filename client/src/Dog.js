import React from "react";

const Dog = ({ dogInfo }) => {
  return (
    <div>
      <p>{dogInfo.name}</p>
      <p>{dogInfo.breed}</p>
      <p>{dogInfo.owner}</p>
      <p>{dogInfo.sex}</p>
      <p>{dogInfo.weight}</p>
    </div>
  );
};

export default Dog;
