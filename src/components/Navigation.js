// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { logout } from '../actions/userAction'

// Components
import {Link, Redirect} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

// Logo
import logo from '../logoTransparent.png'


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
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Link to="/"> <Navbar.Brand className="align-middle" > <img src={logo} alt="Logo de Réplique" style={{width:"175px", height:"auto"}} /> </Navbar.Brand> </Link>
                {this.props.isAdmin ?
                    <div>
                        <Navbar.Text className="m-1 align-middle" > <Link to="/"> Accueil </Link> </Navbar.Text>
                        <Navbar.Text className="m-1 align-middle" > <Link to="/categories"> Catégories </Link> </Navbar.Text>
                        <Navbar.Text className="m-1 align-middle" > <Link to="/moderation"> Modération </Link> </Navbar.Text>
                    </div>
                :
                    null
                }

                <Navbar.Collapse className="justify-content-end">
                    {this.props.loggedIn ?
                        <div >
                            <Navbar.Text className="m-1 align-middle" > Bonjour, {this.props.pseudo} </Navbar.Text>
                            <Link to="/"> <Button className="m-1 align-middle" variant="outline-light" onClick={this.logout}> Déconnexion </Button> </Link>
                        </div>
                    :
                        <div >
                            <Navbar.Text className="m-1 align-middle" > <Link to="/connexion"> Connexion </Link> </Navbar.Text>
                            <Link to="/inscription"> <Button className="m-1 align-middle" variant="outline-light" >  S'inscrire </Button> </Link>
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
