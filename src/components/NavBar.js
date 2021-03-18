import React  from "react"
import { Link } from "react-router-dom";



export default () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">
                        FINTECH Landing Page
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sub-items">
                        Pay
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sub-items">
                        Loans
                    </Link>
                </li>
                <li>
                    <Link to="/" className="sub-items">
                        Media
                    </Link>
                </li>
                <li>
                    <Link to="/"className="subitems">
                        Help
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/" className="subitems">Contact Me</Link>
                </li>
            </ul>
        </nav>
    )
}