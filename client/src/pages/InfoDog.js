import React, { useEffect, useState } from "react";
import DogTable from "../components/DogTable";
import { useHistory } from "react-router-dom";

const DogInfo = (props) => {
  const [dogInfo, setDogInfo] = useState(props.location.state);
  const history = useHistory();
  const dogId = history.location.pathname.split("/").pop();
  //Get Vacc Record

  useEffect(() => {
    async function getVaccRecord() {
      const result = await fetch(
        `http://localhost:9000/dog/${dogId}/vaccRecord`,
        {
          method: "GET",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const vaccRecord = await result.json();

      //Combine dogInfo prop with the values from the vaccRecord
      console.log(vaccRecord);
      setDogInfo({ ...dogInfo, ...vaccRecord.body });
    }

    getVaccRecord();
  }, []);

  return (
    <div>
      <h1>Dog Info</h1>
      <DogTable dogInfo={dogInfo} />
    </div>
  );
};

export default DogInfo;
