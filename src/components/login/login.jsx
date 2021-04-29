import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import './login.scss'
import Snackbar from "@material-ui/core/Snackbar";
import { isemailValid, ispasswordValid } from './utility';
import UserService from "../../services/userservice";
const userService = new UserService()

class Login extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: '',
            emailflag: false,
            password: '',
            passwordflag: false,
            snackbaropen: false,
            snackbarmsg: '',
            loggedIn: '',
        }
    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    }



    handleChange = (e) => {
        // e.preventDefault();
        console.log("on change calling", e.target.value);
        this.setState({ [e.target.name]: e.target.value })
    }


    handleRegister = (e) => {
        e.preventDefault();
        const valid = this.validation()
        if (valid) {
            
            let data = {
                email: this.state.email,
                password: this.state.password,
                service: "advance"
            }

            userService.login(data).then((response) => {
                console.log("response successfull", response);
                localStorage.setItem('token', response.data.id);
                this.setState({ snackbaropen: true, snackbarmsg: 'Logged In', loggedIn: true })
            }).catch((error) => {
                console.log("error", error);
                this.setState({ snackbaropen: true, snackbarmsg: 'error' })
            })
        }

    }
    validation = () => {
        let isValid = true;
        let emaileerrors = '';
        let passworderrors = '';
        if (!isemailValid(this.state.email)) {
            emaileerrors = 'Not Valid';
            isValid = false;
            this.setState({ emailflag: true })
        } else {
            this.setState({ emailflag: false })
        }
        if (!ispasswordValid(this.state.password)) {
            passworderrors = 'Not Valid';
            isValid = false;
            this.setState({ passwordflag: true })
        } else {
            this.setState({ passwordflag: false })
        }
        this.setState({ emaileerrors, passworderrors });
        return isValid;
    }

    createPage = () => {
        window.location.href = "http://localhost:4200/register"
    }
    forgotPage = () => {
        window.location.href = "http://localhost:4200/forgotpassword"
    }
    render() {
        if (this.state.loggedIn) {
            return <Redirect to='/dashboard/notes' />
        }

        return (
            <div>


                <div className="container-body1">
                    <div className="box1"><Typography className="app_name" variant="h5" color="textSecondary">
                        <span style={{ color: "#0606f8" }}>F</span>
                        <span style={{ color: "#d10303" }}>u</span>
                        <span style={{ color: "#f0b000" }}>n</span>
                        <span style={{ color: "#0606f8" }}>d</span>
                        <span style={{ color: "green" }}>o</span>
                        <span style={{ color: "#d10303" }}>o</span>
                    </Typography></div>
                    <div className="sign"><h4>Sign in</h4></div>
                    <div className="abc"><h6>Use your Google Account</h6></div>
                    <div className="form"><Form>
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <TextField
                                value={this.state.email}
                                name="email"
                                id="outlined-textarea"
                                label="Email"
                                placeholder=""
                                error={this.state.emailflag}
                                helperText={this.state.emaileerrors}
                                multiline
                                variant="outlined"
                                // color="blue"
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control type="email" placeholder="Enter email" /> */}
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            {/* <Form.Label>Password</Form.Label> */}
                            <TextField
                                value={this.state.password}
                                name="password"
                                id="outlined-textarea"
                                label="Password"
                                placeholder=""
                                variant="outlined"
                                type="password"
                                error={this.state.passwordflag}
                                helperText={this.state.passworderrors}
                                autoComplete="current-password"
                                onChange={this.handleChange}
                            />
                            {/* <Form.Control type="password" placeholder="Password" /> */}
                        </Form.Group>
                        <Button onClick={this.forgotPage} className="frgt" variant="link">Forgot password?</Button>
                        <Form.Group controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button onClick={this.createPage} className="link" variant="link">Create account</Button>
                        <Button onClick={this.handleRegister} className="but1" variant="primary" type="submit">
                            Next
                            </Button>
                        <Snackbar
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            open={this.state.snackbaropen}
                            autoHideDuration={3000}
                            onClose={this.snackbarClose}
                            message={<span id="message-id">{this.state.snackbarmsg}</span>}
                        // action
                        />
                    </Form></div>


                </div>
            </div>

        )
    }
}
export default Login