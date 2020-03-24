// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { logout } from '../actions/userAction'

// Components
import {Link, Redirect} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {redirect: false};
    }
    
    logout = () => {
        this.props.logout();
        if (this.props.location.pathname === "/moderation") {
            this.setState({redirect: true});
        }
    }

    componentDidUpdate = () => {
        if (this.state.redirect) {
            this.setState({redirect: false});
        }
    }

    render() {

        // When logged out
        if(this.state.redirect) {
            return <Redirect to="/"/>
        }

        return (
            <Navbar bg="dark" variant="dark" sticky="top" >
                <Navbar.Brand> <Link to="/" style={{textDecoration:'none'}} > Anti-Sexiste </Link> </Navbar.Brand>

                <Navbar.Text > <Link to="/"> Accueil </Link> </Navbar.Text>
                <Navbar.Text > <Link to="/categorie"> Selon le contexte </Link> </Navbar.Text>
                {this.props.isAdmin ?
                    <Navbar.Text > <Link to="/moderation"> Modération </Link> </Navbar.Text>
                :
                    null
                }

                <Navbar.Collapse className="justify-content-end">
                    {this.props.loggedIn ?
                        <div >
                            <Navbar.Text> Bonjour, {this.props.pseudo} </Navbar.Text>
                            <Button variant="outline-info" onClick={this.logout}> <Link to="/"> Déconnexion </Link> </Button>
                        </div>
                    :
                        <div >
                            <Navbar.Text> <Link to="/connexion"> Connexion </Link> </Navbar.Text>
                            <Button variant="outline-info"> <Link to="/inscription" style={{textDecoration:'none'}}> S'inscrire </Link> </Button>
                        </div>
                    }
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.user.token,
    isAdmin: state.user.isAdmin,
    pseudo: state.user.pseudo,
})

const mapDispatchToProps = {    
    logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
