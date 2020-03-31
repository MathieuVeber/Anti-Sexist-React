// React
import React from 'react'
import { connect } from 'react-redux'

// Components
import Admin from './Admin.js'


export function AdminList(props){
    return (
        <div className="AdminList">
                {props.admins.map(admin => <Admin key={admin._id} admin={admin} variant="dark"/>)}
        </div>
    )
}

function mapStateToProps(state,){
    admins = state.content.admins
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminList)
