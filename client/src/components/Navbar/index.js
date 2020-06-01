// Dependencies
import React from "react"
import { Link } from "react-router-dom;"


// NavBar Component
function NavBar() {
    return (
        <nav className = "navbar-expand-lg navbar-light bg-dark">
            <link className="navbar-brand" to = "/">Google Book Search</link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to = "/"
                            className = {
                                window.location.pathname === "/" ||
                                window.location.pathname === "/search"
                                ? "nav-link active"
                                : "nav-link"
                            }
                            >Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to = "/saved"
                        className = {
                            window.location.pathname === "/saved"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;