import React, { Component } from 'react'
import { connect } from 'react-redux'

//bootstrap
import Container from 'react-bootstrap/Container'

export class PageAdmin extends Component {
    render() {
        return (
            <Container fluid>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)
