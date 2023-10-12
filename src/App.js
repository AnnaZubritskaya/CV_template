import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./cv/Main";
import ContactMe from "./ContactMe";
import Gratitude from "./Gratitude";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>

          <Route path="/your_contacts" element={<ContactMe />}></Route>
          <Route
            path="/gratitude"
            element={<Gratitude text="Thank you! I'll contact you later" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
