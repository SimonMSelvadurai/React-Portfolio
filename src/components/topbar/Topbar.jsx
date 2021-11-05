import "./topbar.scss";
import { Person, Mail,LinkedIn,GitHub,FileCopy } from "@material-ui/icons";
// eslint-disable-next-line

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>0452524619</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>simon.selvadurai0607@gmail.com</span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/simon-selvadurai-850ab3117/">linkedin</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/SimonMSelvadurai/">GitHub</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
