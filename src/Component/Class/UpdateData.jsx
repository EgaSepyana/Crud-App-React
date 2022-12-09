import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Container, Col, Row } from 'reactstrap'

const api = "http://localhost:8080"

function EditComp() {
    const location = useLocation()
    const [title, setTitle] = useState(location.state.title)
    const [MainTitle,] = useState(location.state.title)
    const [id, ] = useState(location.state.id)
    const [author, setauthor] = useState(location.state.author)
    const [price, setPrice] = useState(location.state.price)
    const [rating, setRating] = useState(location.state.rating)
    const [description, setDescription] = useState(location.state.description)

    const UpdateData = () => {
        axios.put(api+`/books/${id}`,{
            author:author,
            description:description,
            price:Number(price),
            rating:Number(rating),
            title:title 
        })
    }

    return (
        <Container>
            <Row>
                <Col xs="auto"><h1>Update Book <b>{MainTitle}</b></h1></Col>
            </Row>
            <Form>
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        id="title"
                        name="title"
                        placeholder="ADD Title"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">
                    Description
                    </Label>
                    <Input
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        id="description"
                        name="description"
                        placeholder="Add Description"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="author">
                        Author
                    </Label>
                    <Input
                        onChange={(e) => setauthor(e.target.value)}
                        value={author}
                        id="author"
                        name="author"
                        placeholder="Add author"
                        type="text"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">
                        Price
                    </Label>
                    <Input
                        onChange={(e) => setPrice(e.target.value)}
                        value={price}
                        id="price"
                        name="price"
                        placeholder="Add price"
                        type="number"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="rating">
                        Rating
                    </Label>
                    <Input
                        onChange={(e) => setRating(e.target.value)}
                        value={rating}
                        id="rating"
                        name="rating"
                        placeholder="Add rating"
                        type="number"
                    />
                </FormGroup>
                <Button onClick={UpdateData}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditComp