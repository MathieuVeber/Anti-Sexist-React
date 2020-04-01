import React, { Component } from 'react'
import { connect } from 'react-redux'

//action
import {getAdmins} from '../actions/contentAction'

//Component
import AdminList from './AdminList';
import AdminNew from './AdminNew';

//bootstrap
import Container from 'react-bootstrap/Container'

export class PageAdmin extends Component {
    componentDidMount(){
        this.props.getAdmins(this.props.token);
    }
    render() {
        return (
            <Container fluid>
                <AdminList/>
                <AdminNew/>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    token:state.user.token,
})

const mapDispatchToProps = {
    getAdmins
}

export default connect(mapStateToProps, mapDispatchToProps)(PageAdmin)
