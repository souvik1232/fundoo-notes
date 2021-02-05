import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import './forgotpassword.scss'

class Forgot extends Component {


    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        return (
            <div>
                    
                
                <div className="container-body2">
                    <div class="box1"><Typography className="app_name" variant="h5" color="textSecondary">
          <span style={{ color: "#0606f8" }}>F</span>
          <span style={{ color: "#d10303" }}>u</span>
          <span style={{ color: "#f0b000" }}>n</span>
          <span style={{ color: "#0606f8" }}>d</span>
          <span style={{ color: "green" }}>o</span>
          <span style={{ color: "#d10303" }}>o</span>
        </Typography></div>
                    <div className="sign"><h4>Find Your password</h4></div>
                    <div className="abc"><h6>Enter your recovery email</h6></div>
                    <div className="form"><Form>
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>Email address</Form.Label> */}
                            <TextField
                                id="outlined-textarea"
                                label="Email"
                                placeholder=""
                                multiline
                                variant="outlined"
                                
                            />
                            {/* <Form.Control type="email" placeholder="Enter email" /> */}
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                        </Form.Group>
                        <Button className="but" variant="primary" type="submit">
                            Next
            </Button>
                    </Form></div>


                </div>
            </div>

        )
    }
}

export default Forgot