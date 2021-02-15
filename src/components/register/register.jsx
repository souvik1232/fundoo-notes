import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Snackbar from "@material-ui/core/Snackbar";
import './register.scss';
import Typography from "@material-ui/core/Typography";
import UserService from "../../services/userservice";
const userService = new UserService()
class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            email: '',
            snackbaropen: false,
            snackbarmsg: ''
        };
    }
    snackbarClose =(event) =>{
        this.setState({snackbaropen:false});
    }

    handleChange = (e) => {
        // e.preventDefault();
        console.log("on change calling", e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRegister = (e) => {
        e.preventDefault();
        let data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            service: "advance"
        }

        userService.registration(data).then((response) => {
            console.log("response successfull", response);
            this.setState({snackbaropen:true,snackbarmsg:'registered'})
        }).catch((error) => {
            console.log("error", error);
            this.setState({snackbaropen:true,snackbarmsg:error})
        })
    }
    login = () => {
        window.location.href = "http://localhost:4200/login"
    }
    myFunction = () => {
        let x = document.getElementById("outlined-textarea3");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    render() {
        return (
            <div>
                
                <div className="container1-body">
                    

                    <div className="box2"><Typography className="app_name1" variant="h5" color="textSecondary">
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
                                    value={this.state.firstName}
                                    name="firstName"
                                    id="outlined-textarea1"
                                    label="FirstName"
                                    placeholder=""
                                    multiline
                                    variant="outlined"
                                    size="small"
                                    margin="dense"
                                    onChange={this.handleChange}
                                />
                                {/* <Form.Control placeholder="First name" /> */}
                            </Col>

                            <Col className='lname'>
                                <TextField
                                    value={this.state.lastName}
                                    name="lastName"
                                    id="outlined-textarea1"
                                    label="LastName"
                                    placeholder=""
                                    variant="outlined"
                                    multiline
                                    // type="text"
                                    size="small"
                                    margin="dense"
                                    onChange={this.handleChange}
                                />
                                {/* <Form.Control placeholder="Last name" /> */}
                            </Col>
                        </Row>
                        <div className="user"><TextField
                            value={this.state.email}
                            name="email"
                            id="outlined-textarea2"
                            label="Username"
                            placeholder=""
                            variant="outlined"
                            type="text"
                            // color="blue"
                            helperText="You can use letters,numbers & symbols"
                            // size="medium"
                            margin="dense"
                            onChange={this.handleChange}
                        />
                            <span class="gmail">@gmail.com</span>
                        </div>
                        <div className="line1"><Button variant="link">Use my current email address instead</Button></div>
                        <div className="cnfmpass">
                            <Row>
                                <Col className="pass1">
                                    <TextField
                                        value={this.state.password}
                                        name="password"
                                        id="outlined-textarea3"
                                        label="Password"
                                        placeholder=""
                                        name="password"
                                        variant="outlined"
                                        type="password"
                                        autoComplete="current-password"
                                        size="small"
                                        margin="dense"
                                        onChange={this.handleChange}
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
                            <div className="hint">Use 8 or more characters with a mix of letters, numbers & symbols </div>
                        </div>
                        <Form.Group id="formGridCheckbox">
                            <Form.Check onClick={this.myFunction} type="checkbox" label="Show password" />
                        </Form.Group>
                        <Button onClick={this.login} className="link2" variant="link">Sign in instead</Button>
                        <Button onClick={this.handleRegister} className="but2" variant="primary" type="submit">
                            Next
  </Button>
  <Snackbar
                    anchorOrigin={{vertical:'bottom',horizontal:'center'}}
                    open = {this.state.snackbaropen}
                    autoHideDuration = {3000}
                    onClose={this.snackbarClose}
                    message = {<span id ="message-id">registered successfully</span>}
                    // action
                    />
                        <div className="accnt"><img /></div>
                        {/* <div>One account. All of Google working for you.</div> */}
                    </Form>
                </div>
            </div>
        )
    }

}
export default Register