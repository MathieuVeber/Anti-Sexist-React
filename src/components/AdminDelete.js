// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { deleteAdmin} from '../actions/contentAction'

// Components
import Button from 'react-bootstrap/Button'

export class AdminDelete extends Component {

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteAdmin(this.props._id,this.props.token)
    }

    render() {
        return (
            <Button variant="danger" onClick={this.handleClick}>
                Retirer 
            </Button>
        )
    }
}

function mapStateToProps(state){
    return{token: state.user.token};
}

const mapDispatchToProps = {
    deleteAdmin
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminDelete)
