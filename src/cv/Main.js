import "../styles.css";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";
import Education from "./Education";
import Languages from "./Languages";
import Experience from "./Experience";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";

export default function Main() {
  return (
    <div>
      <div className="App">
        <div className="short_div">
          <Contacts />
          <Education />
          <Languages />
          <Experience />
        </div>

        <div className="large_div">
          <Header />
          <About />
          <Skills />
        </div>
        <br />
      </div>
      <div style={{ textAlign: "right" }}>
        <Link className="contact-button" to="/your_contacts">
          Зворотній зв'язок
        </Link>
      </div>
    </div>
  );
}
