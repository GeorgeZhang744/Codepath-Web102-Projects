import "./App.css";
import Card from "./components/Card";
import { DINING_INFO } from "./diningInfo";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src="./src/assets/awning.png" height="169px" width="1000px" />
        <h1>UMA Campus Center Dining</h1>
      </div>
      <div className="container">
        {DINING_INFO.map(({ img, name, webLink }, i) => (
          <Card key={i} img={img} name={name} webLink={webLink}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
