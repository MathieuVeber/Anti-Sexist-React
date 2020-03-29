// React
import React from 'react'
import { connect } from 'react-redux'

// Components
import Label from './Label'


export function LabelList(props){
    return (
        <div className="LabelList">
                {props.labels.map(label => <Label key={label._id} posts={props.posts} label={label} variant="dark"/>)}
        </div>
    )
}

function mapStateToProps(state,ownProps){
    if (ownProps.posts){
        return{
            labels: state.content.labelsPost,
        };
    } else {
        return{
            labels: state.content.labelsComment,
        };
    }
    
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LabelList)
