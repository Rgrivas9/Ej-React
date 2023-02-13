const Character = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <h4>{character.company}</h4>
    </div>
  );
};
export default Character;
