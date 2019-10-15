import React from 'react';

const NavBar = (props) => {

    const onDonate = () => {
        props.number(0)
    }
    const onRequest = () => {
        props.number(1)
    }
    const onVampire = () => {
        props.number(2)
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Donate</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a onClick={onDonate} className="nav-link" href="#">Donate</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={onRequest} className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Request</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={onVampire} className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Vampire</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar