import React from "react";
import VaccForm from "../components/VaccForm";
import { useHistory } from "react-router-dom";

const EditVacc = (props) => {
  const history = useHistory();
  const dogId = history.location.pathname.split("/").pop();

  function handleSubmit(vaccInfo) {
    //In case of api changes, this decouples this component from vaccForm
    const vaccDueDates = {
      dhppDappDueDate: vaccInfo.dhppDappDueDate,
      rabiesDueDate: vaccInfo.rabiesDueDate,
      bordetellaDueDate: vaccInfo.bordetellaDueDate,
    };

    fetch(`http://localhost:9000/dog/${dogId}/vaccRecord`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vaccDueDates),
    }).then(() => {
      history.push("/");
    });
  }

  return (
    <div>
      <h1>Set Vaccination Due Dates</h1>
      <VaccForm handleSubmit={handleSubmit} dogId={dogId} />
    </div>
  );
};

export default EditVacc;
