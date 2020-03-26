// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Date extends Component {

    handleDate = (dateTime) => {
        const splitDate = dateTime.split('T');
        const date = splitDate[0].split('-');
        const time = splitDate[1].split(':');
        return `le ${date[2]}/${date[1]}/${date[0]} à ${time[0]}:${time[1]}`;
    }

    render() {
        return (
            <span>
                {this.handleDate(this.props.date)}
            </span>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Date)
