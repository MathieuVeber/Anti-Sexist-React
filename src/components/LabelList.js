// React
import React from 'react'
import { connect } from 'react-redux'

// Components
import Label from './Label'


export function LabelList(props){
    return (
        <div className="LabelList">
                {props.labels.map(label => <Label key={label._id} label={label} variant="dark"/>)}
        </div>
    )
}

function mapStateToProps(state,ownProps){
    if (ownProps.of ==='posts'){
        return{
            labels: state.content.labels.posts,
        };
    } else {
        return{
            labels: state.content.labels.comments,
        };
    }
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
