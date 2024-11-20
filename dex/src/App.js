import { Route, Routes } from "react-router-dom";
import "./App.css";
import Swap from "./components/Swap";
import Tokens from "./components/Tokens";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap />}></Route>
          <Route path="/tokens" element={<Tokens />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
