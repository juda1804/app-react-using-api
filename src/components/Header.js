import React from 'react'
import { Navbar } from 'react-bootstrap'

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img alt=""
                src="https://en.bitcoin.it/w/images/en/6/69/Btc-sans.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                ></img>{" "} Cripto trades
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header
