import React from 'react'
import Link from 'next/link'
import '../navbar/_navbar.scss'


const Navbar = ({ titulo, links }) => {
    return (

        <div>

            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">{titulo}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav d-flex justify-content-center align-items-center">
                            {links.map((link, index) => (
                                <li key={index} className="nav-item">
                                    <Link
                                        className={`nav-link ${link.disabled ? 'disabled' : ''}`}
                                        href={link.href}
                                        aria-disabled={link.disabled}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar


