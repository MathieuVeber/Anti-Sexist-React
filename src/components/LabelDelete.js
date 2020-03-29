// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Actions
import { deleteLabelComment, deleteLabelPost } from '../actions/contentAction'

// Components
import Button from 'react-bootstrap/Button'


export class LabelDelete extends Component {

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.posts ? (
            this.props.deleteLabelPost(this.props.labels,this.props.name,this.props.token)
        ):(
            this.props.deleteLabelComment(this.props.labels,this.props.name,this.props.token)
        )
        
    }

    render() {
        return (
            <Button variant="danger" onClick={this.handleClick}>
                Supprimer
            </Button>
        )
    }
}

function mapStateToProps(state,ownProps){
    if (ownProps.posts){
        return ({
            token: state.user.token,
            labels: state.content.labelsPost
        });
    } else {
        return{
            token: state.user.token,
            labels: state.content.labelsComment
        };
    }
    
}

const mapDispatchToProps = {
    deleteLabelPost,
    deleteLabelComment
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelDelete)
