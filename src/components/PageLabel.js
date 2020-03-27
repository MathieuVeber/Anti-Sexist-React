import React, { Component } from 'react'
import { connect } from 'react-redux'

//Component
import ContentLabel from './ContentLabel'

//Bootstrap
import Container from 'react-bootstrap/Container'

export class PageLabel extends Component {
    render() {
        return (
            <Container fluid>
                <ContentLabel 
                    of={'posts'}/>
                {/*
                <ContentLabel
                    of={'comments'}/>
                */}
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLabel)
