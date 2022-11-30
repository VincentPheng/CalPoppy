import { Chatbot } from "./components/Chatbot";
import "./axios-config.js";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Donate from "./components/Donate";
import PageNotFound from "./components/PageNotFound";
import logo from "./images/spr_sp_logo.png";
import { useState, useEffect } from "react";
import './style/custom.scss';
import "./style/navbar.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function App() {
    const usualNavWidth = 540;
    const [ breakpoint, setBreakpoint ] = useState( {
        size:
            (window.innerWidth < usualNavWidth) ? "small" :             // mobile
            (window.innerWidth > (usualNavWidth * 3)) ? "large" :       // kiosk
            "default",                                                  // regular
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight
    });

    useEffect(() => {
        const checkWidth = () => {
            // not working rn, using default nav width to calculate
            // const navWidth = document.getElementById("nav").style.width;
    
            setBreakpoint({
                size:
                    (window.innerWidth < usualNavWidth) ? "small" :              // mobile
                    (window.innerWidth > (usualNavWidth * 3)) ? "large" :   // kiosk
                    "default",                                              // regular
                screenWidth: window.innerWidth
            });
            console.log("Screen size", breakpoint.size);
        }

        window.addEventListener("resize", checkWidth);

        return() => {
            window.removeEventListener("resize", checkWidth);
        }
    })

    return (
        <ThemeProvider theme={theme}>  
            <Router>
                <div className={"content"}>
                    <nav className={"topnav sticky-top" + (breakpoint.size === "small" ? " mobile" : "")} id="nav">
                        <Link to="/">
                            <button
                              className={"navbutton"}
                                type="button"
                                style={{padding: 1.5}}
                            >
                                {/* Home */}
                                <div className={"homeLogoContainer"}>
                                    <img src={logo} className="homeLogo" alt="Poppy logo"/>
                                </div>
                            </button>
                        </Link>
                        <Link to="/about">
                            <button
                                className={"navbutton"}
                                type="button"
                            >
                                Learn More
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button
                                className={"navbutton"}
                                type="button"
                            >
                                Contact
                            </button>
                        </Link>
                        {/* later change link to /Donate */}
                        <Link to="/donate">
                            <button
                                className={"navbutton"}
                                type="button"
                            >
                                {/* donation and support tab */}
                                Help Poppy Grow
                            </button>
                        </Link>
                    </nav>
                {/* A <Routes> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/" element={<Chatbot/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/donate" element={<Donate/>}/>
                    <Route path="/404" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </Router>
    </ThemeProvider>
  );
}
