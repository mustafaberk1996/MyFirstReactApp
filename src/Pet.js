const Pet = ({ animal, breed, id, name, location, images }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";

  console.log(images);

  if (images != undefined && images.length > 0) {
    hero = images[0];
  }

  return (
    <a href={`/defails/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </a>
  );
};

export default Pet;
