const Card = ({ character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <h2>{character.status}</h2>
      <img src={character.image} alt={`${character.name} image`} />
      <h3>{character.location.name}</h3>
    </div>
  );
};
export default Card;
