import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand href="#home">Anti-Sexiste</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Accueil</Nav.Link>
                    <Nav.Link href="#location">Selon le contexte</Nav.Link>
                    <Nav.Link href="#admin">Modération</Nav.Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
        <Navbar.Text> <Link to="/login"> Connexion </Link> </Navbar.Text> {/* style={{textDecoration: 'none'}}*/}
                    <Button variant="outline-info">S'inscrire</Button>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
