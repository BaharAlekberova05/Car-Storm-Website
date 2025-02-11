import { Route, Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="font-rethink">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
