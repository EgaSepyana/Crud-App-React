import React from "react";
import axios from "axios";
import { Button, Container, Table, Row, Col} from 'reactstrap'
import { Link, NavLink } from "react-router-dom";
import Notif from "./AlertNotif";
// import qs from 'querystring'

const api = "http://localhost:8080"

class ListCompo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            books: []
        }
    }

    componentDidMount() {
        axios.get(api + '/books').then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    render() {
        return (
            <Container>
                <h2>Book DataBase</h2>
                <NavLink to="/data/add"><Button color="success">Add Data</Button></NavLink>
                <hr />
                <Table striped>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Rating</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book =>
                            <tr key={book.ID}>
                                <td>{book.title}</td>
                                <td>{book.description}</td>
                                <td>{book.rating}</td>
                                <td><Row xs="3">
                                    <Col>
                                    <Link to={{ pathname: `/update` }} state={{
                                        id: book.ID,
                                        title: book.title,
                                        description: book.description,
                                        rating: book.rating,
                                        price: book.price,
                                        author: book.author
                                    }}><Button color="success">Update</Button></Link>
                                    </Col>
                                    <Col><Notif id={book.ID} title={book.title}/></Col>
                                </Row></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListCompo