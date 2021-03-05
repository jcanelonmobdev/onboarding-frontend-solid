import React from "react"
import { BrowserRouter, Link } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <div className="menu">
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </BrowserRouter>
        </div>
    )
}

export default Header
