import './App.css'
import Card from './components/Card/Card';
import { useEffect, useRef, useState } from 'react';
const charactersMock = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {name: 'earth c-137'}
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    location: {name: 'earth c-137'}
  },
];
function App() {
  const [characterList,setList] = useState(charactersMock)
  const nameInput = useRef(null);
  const handleClick = async (name) => {
    const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
    const json = await data.json()
    const character = json.results
    setList(character)
  }

  useEffect(()=>{
    Card
  },[characterList])
  return (
    <div className="App">
      <input type="text" ref={nameInput}/>
      <button onClick={()=>{handleClick(nameInput.current.value)}}>search</button>
      <section>
        {characterList.map((character)=>(
          character.status=='Alive' && <Card character={character} key={character.id} />
        ))}
      </section>
    </div>
  )
}

export default App
