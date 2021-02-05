import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './register.scss';
import Typography from "@material-ui/core/Typography";
import {  } from "../../services/userservice";

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleRegister=()=>{

    }

    render() {
        return (
            <div>

                <div className="container1-body">

                    <div class="box2"><Typography className="app_name1" variant="h5" color="textSecondary">
                        <span style={{ color: "#0606f8" }}>F</span>
                        <span style={{ color: "#d10303" }}>u</span>
                        <span style={{ color: "#f0b000" }}>n</span>
                        <span style={{ color: "#0606f8" }}>d</span>
                        <span style={{ color: "green" }}>o</span>
                        <span style={{ color: "#d10303" }}>o</span>
                    </Typography></div>
                    <div className='text'><h4>Create your Fundoo Account</h4></div>
                    <Form className="pwd">
                        <Row>
                            <Col className="fname">
                                <TextField
                                    id="outlined-textarea1"
                                    label="FirstName"
                                    placeholder=""
                                    multiline
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                />
                                {/* <Form.Control placeholder="First name" /> */}
                            </Col>

                            <Col className='lname'>
                                <TextField
                                    id="outlined-textarea1"
                                    label="LastName"
                                    placeholder=""
                                    variant="outlined"
                                    multiline
                                    // type="text"
                                    color="blue"
                                    size="small"
                                    margin="dense"
                                />
                                {/* <Form.Control placeholder="Last name" /> */}
                            </Col>
                        </Row>
                        <div class="user"><TextField
                            id="outlined-textarea2"
                            label="Username"
                            placeholder=""
                            variant="outlined"
                            type="text"
                            color="blue"
                            helperText="You can use letters,numbers & symbols"
                            // size="medium"
                            margin="dense"
                        /><span class="gmail">@gmail.com</span></div>
                        <div class="line1"><Button variant="link">Use my current email address instead</Button></div>
                        <div class="cnfmpass">
                            <Row>
                                <Col className="pass1">
                                    <TextField
                                        id="outlined-textarea3"
                                        label="Password"
                                        placeholder=""
                                        name="password"
                                        variant="outlined"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        margin="dense"
                                    />
                                    {/* <Form.Control placeholder="First name" /> */}
                                </Col>

                                <Col className='cnfm1'>
                                    <TextField
                                        id="outlined-textarea3"
                                        label="Confirm"
                                        placeholder=""
                                        name=""
                                        variant="outlined"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        margin="dense"
                                    />
                                    {/* <Form.Control placeholder="Last name" /> */}
                                </Col>
                            </Row>
                            <div class="hint">Use 8 or more characters with a mix of letters, numbers & symbols </div>
                        </div>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Show password" />
                        </Form.Group>
                        <Button className="link2" variant="link">Sign in instead</Button>
                        <Button onClick={handleRegister} className="but2" variant="primary" type="submit">
                            Next
  </Button>
                        <div class="accnt"><img /></div>
                        {/* <div>One account. All of Google working for you.</div> */}
                    </Form>
                </div>
            </div>
        )
    }

}
export default Register