import "./App.css";
import WholePage from "./components/WholePage";
import SideNav from "./components/SideNav";
import HistorySidebar from "./components/HistorySidebar";
import { useArtState } from "./states";

function App() {
  const { displayAttr, isDiscovered, listOfSeenArts, banList, banAttr, removeBanAttr, discover } = useArtState();

  return (
    <div className="App">
      <WholePage
        displayAttr={displayAttr}
        isDiscovered={isDiscovered}
        discoverHandler={discover}
        banAttrHandler={banAttr}
      ></WholePage>
      <SideNav banList={banList} removeBanAttrHandler={removeBanAttr}></SideNav>
      <HistorySidebar listOfSeenArts={listOfSeenArts}></HistorySidebar>
    </div>
  );
}

export default App;
