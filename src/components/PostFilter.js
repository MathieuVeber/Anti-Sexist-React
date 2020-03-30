// React
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export class PostFilter extends Component {

    render() {
        return (
            <div className="filter">
                <Container className="" fluid>
                    <Row className="justify-content-md-center">
                        <Card bg="dark" className="" >
                            <Card.Body className="m-0 p-0" >
                        <ButtonToolbar className="m-1 d-flex justify-content-center">
                                <ButtonGroup className="m-1">
                                    <Button onClick={() => this.props.onSortChange()} variant={this.props.current.sort === "latest" ? "light" : "outline-light"} >
                                        Les plus récents
                                    </Button>
                                    <Button onClick={() => this.props.onSortChange()} variant={this.props.current.sort === "popular" ? "light" : "outline-light"} >
                                        Les plus courants
                                    </Button>
                                </ButtonGroup>
                                {this.props.labels ?
                                    <ButtonGroup className="m-1">
                                        <Button onClick={() => this.props.onLabelChange("all")} variant={this.props.current.label === "all" ? "light" : "outline-light"} >Tout</Button>
                                        {this.props.labels.map(label =>
                                            <Button onClick={() => this.props.onLabelChange(label.name)} key={label._id} variant={this.props.current.label === label.name ? "light" : "outline-light"} >{label.name}</Button>
                                        )}
                                    </ButtonGroup>
                                : null}
                        </ButtonToolbar>
                        </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFilter)
