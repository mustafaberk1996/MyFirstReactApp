import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Details = () => {
  const petId = useParams().id;
  console.log(petId);

  return (
    <div>
      <h2>Hello this is details page </h2>
      <p>Pet Id = {petId}</p>
    </div>
  );
};

export default Details;
