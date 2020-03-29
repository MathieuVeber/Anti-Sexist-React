import React, { Component } from 'react'
import { connect } from 'react-redux'

//Component
import ContentLabel from './ContentLabel'

//Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export class PageLabel extends Component {
    render() {
        return (
            <Container fluid>
                <h1>Gestion des catégories</h1>
                <Row>
                <ContentLabel
                    title={"Témoignages"}
                    posts={true}/>
                <ContentLabel
                    title={"Commentaires"}
                    posts={false}/>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLabel)
