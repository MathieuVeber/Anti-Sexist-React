// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { deleteLabel } from '../actions/contentAction'

// Components
import Button from 'react-bootstrap/Button'


export class LabelDelete extends Component {

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.deleteLabel(this.props.labels,this.props.of,this.props.name,this.props.token);
    }

    render() {
        return (
            <Button variant="danger" onClick={this.handleClick}>
                Supprimer
            </Button>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.user.token,
    labels: state.content.labels
})

const mapDispatchToProps = {
    deleteLabel,
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelDelete)
