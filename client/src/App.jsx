import './App.css';
import {Link, useLocation } from "react-router";

function App() {
    const hostRootURL = import.meta.env.VITE_API_ENDPOINT;

  return (
    <>
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"></link>
        <div className="Header">
            <div className="HeaderTextContainer">
                Greetings :D
            </div>
            <div className="HeaderImageContainer">
                <img className="HeaderImage" src={hostRootURL + "/headerImage"}/>
            </div>
        </div>
        <nav>
            <div className="TabButtonContainer">
                <div className={useLocation().pathname == "/" ? "ActiveTabButton": "TabButton"} >
                <Link className="TabLink" to="/">ABOUT</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/digitalart") ? "ActiveTabButton": "TabButton"} >
                <Link className="TabLink" to="/digitalart">DIGITAL ART</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/penonpaper") ? "ActiveTabButton": "TabButton"} >
                <Link className="TabLink" to="/penonpaper">PEN ON PAPER</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/animation") ? "ActiveTabButton": "TabButton"} >
                <Link className="TabLink" to="/animation">ANIMATION</Link>
                </div>
                <div className={useLocation().pathname.startsWith("/code") ? "ActiveTabButton": "TabButton"} >
                <Link className="TabLink" to="/code">CODE</Link>
                </div>
            </div>
        </nav>
    </div>
    </>
  )
}

export default App
