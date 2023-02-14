import "./App.css";
import "./components/components.css";
import {
  Header1,
  Footer1,
  Image1,
  Main1,
  Paragraph1,
  SubTitle1,
  Title1,
} from "./components/index";
function App() {
  const innerP = "párrafo";
  const innerT = "Título";
  const innerS = "Subtítulo";
  const imgSrc =
    "https://estaticos-cdn.sport.es/clip/8dae5223-2b57-4e08-88d9-11feba832cf7_media-libre-aspect-ratio_default_0.jpg";
  const imgAlt = "AMR23";
  return <div className="App">
    <Header1 children={<Title1 inner={innerT}/>}/>
    <Main1 children1={<SubTitle1 inner={innerS}/>} children2={<Image1 src={imgSrc} alt={imgAlt}/>}/>
    <Footer1 children={<Paragraph1 inner={innerP}/>}/>
  </div>;
}

export default App;
