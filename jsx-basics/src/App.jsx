import { useState } from 'react'
import './App.css'
import Character from './components/Character';
import Image from './components/Image';
import ToModify from './components/ToModify';

function App() {
  const imageList = [
    {
      src: "https://images.unsplash.com/photo-1675705552912-18f9052a8af4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Ventana",
    },
    {
      src: "https://images.unsplash.com/photo-1675576466385-1a2429a4b72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      alt: "Playa",
    },
    {
      src: "https://images.unsplash.com/photo-1675706754972-a9f74f3c9093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      alt: "Playa",
    },
    {
      src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      alt: "Mailchimp",
    },
  ];

  const characters = [
    {
      id: 1,
      name: "Daredevil",
      company: "Marvel",
    },
    {
      id: 2,
      name: "Batman",
      company: "DC",
    },
    {
      id: 3,
      name: "Namor",
      company: "Marvel",
    },
  ];
  const [time,setTime] = useState(10)
  return (
    <div className="App">
      <ToModify/>
      <input type="number" min={1} max={24} onChange={(ev)=>setTime(ev.currentTarget.value)}/>
      <h1>{time>=6 && time <=12 ? "Buenos días" : time>=13 && time <=19 ? "Buenas tardes" : "Buenas noches"}</h1>
      <div className='Character'>
        {imageList.map((img)=>(
          <Image source={img.src} alt={img.alt} key={img.src}></Image>
        ))}
        {characters.map((character)=>(
          <Character character={character} key={character.name}></Character>
        ))}
      </div>
    </div>
  )
}

export default App
