import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePage from "./pages/CreatePage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import CrewmateDetailPage from "./pages/CrewamateDetailPage";
import EditCrewmateDetailPage from "./pages/EditCrewmateDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index={true} element={<HomePage />} />
          <Route path="create" element={<CreatePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path=":id" element={<CrewmateDetailPage />}></Route>
          <Route path=":id/edit" element={<EditCrewmateDetailPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
