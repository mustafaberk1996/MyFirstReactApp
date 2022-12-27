import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="dv-results">
      {!pets.length ? (
        <h1>No Pets</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
