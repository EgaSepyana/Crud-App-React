import React from "react";
import { Row, Container, Table } from 'reactstrap';

class CobaBootstrap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Username
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        1
                                    </th>
                                    <td>
                                        Mark
                                    </td>
                                    <td>
                                        Otto
                                    </td>
                                    <td>
                                        @mdo
                                    </td>
                                    <td>
                                        @mdo
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        2
                                    </th>
                                    <td>
                                        Jacob
                                    </td>
                                    <td>
                                        Thornton
                                    </td>
                                    <td>
                                        @fat
                                    </td>
                                    <td>
                                        @fat
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        3
                                    </th>
                                    <td>
                                        Larry
                                    </td>
                                    <td>
                                        the Bird
                                    </td>
                                    <td>
                                        @twitter
                                    </td>
                                    <td>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CobaBootstrap