import axios from "axios";
import React from "react";
// import {} from "react-router-dom"
import { Form, FormGroup, Label, Input, Button, Container, Col, Row, Alert, FormFeedback, FormText } from 'reactstrap'

const api = "http://localhost:8080"

class AddData extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            author: '',
            description: '',
            price: 10,
            rating: 10,
            title: '',
            block: 'none',
            visible: false,
            massage: 'Insert Data Succesfuly',
            button: 'success'
        }
    }

    HandleChange = (c) => {
        this.setState({ [c.target.name]: c.target.value })
    }

    onDismiss = () => {
        this.setState({ visible: !this.state.visible })
    };

    AddData = () => {
        axios.post(api + "/books", {
            author: this.state.author,
            description: this.state.description,
            price: Number(this.state.price),
            rating: Number(this.state.rating),
            title: this.state.title,
        }).then(res => {
            console.log(res)
            if (res.status === 201) {   
                this.setState({ visible: true ,massage:"Insert Data Succesfuly", button:"success"})
            }
        }).catch(error => {
            this.setState({ visible: true , massage:"Failed Insert Data", button:"danger"})
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="auto"><h1>Add Book Data</h1></Col>
                </Row>
                {/* Alert */}
                <Alert color={this.state.button} isOpen={this.state.visible} toggle={this.onDismiss}>
                    {this.state.massage}
                </Alert>
                <Form>
                    <FormGroup>
                        <Label for="title">
                            Title
                        </Label>
                        <Input
                            onChange={this.HandleChange}
                            value={this.state.title}
                            id="title"
                            name="title"
                            placeholder="ADD Title"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">
                            Price
                        </Label>
                        <Input
                            onChange={this.HandleChange}
                            value={this.state.price}
                            id="price"
                            name="price"
                            placeholder="Insert Price"
                            type="number"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rating">
                            rating
                        </Label>
                        <Input
                            onChange={this.HandleChange}
                            value={this.state.rating}
                            id="rating"
                            name="rating"
                            placeholder="Insert rating"
                            type="number"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">
                            Description
                        </Label>
                        <Input
                            onChange={this.HandleChange}
                            value={this.state.description}
                            id="description"
                            name="description"
                            placeholder="Foo"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="author">
                            Author
                        </Label>
                        <Input
                            onChange={this.HandleChange}
                            value={this.state.author}
                            id="author"
                            name="author"
                            placeholder="Insert Author"
                            type="text"
                        />
                    </FormGroup>
                    <Button onClick={this.AddData}>
                        Submit
                    </Button>
                </Form>
            </Container>
        )
    }
}

export default AddData