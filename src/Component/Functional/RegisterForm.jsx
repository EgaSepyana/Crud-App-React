import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

function RegisterForm() {
    const [data, SetData] = useState({ password: "", first_name: "", last_name: "", email: "" })


    const handlePasswordForm = (c) => {
        SetData({ [c.target.name]: c.target.value })
    }

    return (
        <Form>
            <FormGroup>
                <Label for="fname">First Name</Label>
                <Input type="text" id="fname" placeholder="Foo" required />
            </FormGroup>
            <FormGroup>
                <Label for="lname">Last Name</Label>
                <Input type="text" id="lname" placeholder="Bar" required />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" id="" placeholder="Example@gmail.com" required />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={handlePasswordForm} required />
            </FormGroup>
            <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input type="password" id="confirmPassword" placeholder="Password" disabled={data.password ? false : true} required />
            </FormGroup>

            <Button>Register</Button>
        </Form>
    );
}

export default RegisterForm;
