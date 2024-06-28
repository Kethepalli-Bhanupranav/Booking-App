import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import List from "./Pages/list/List.jsx";
import Hotel from "./Pages/hotel/Hotel.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
          <Route path="/hotels/:id" element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
