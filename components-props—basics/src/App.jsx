import "./App.css";
import './components/components.css'
import { ImageR, ParagraphR, TitleR, SubTitleR } from "./components/index";
function App() {
  const image = {
    src: "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
    alt: "react logo",
  };
  const title = "Título";
  const subTitle = "subtítulo";
  const p = "párrafo";
  return (
    <div className="App">
      <ImageR image={image} />
      <TitleR content={title} />
      <SubTitleR content={subTitle} />
      <ParagraphR content={p} />
    </div>
  );
}

export default App;
