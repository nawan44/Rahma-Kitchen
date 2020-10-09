import React from 'react';
import { Carousel, Jumbotron, Form, FormGroup, Button, Input, Label } from 'reactstrap';
import './css/admin.css';
import Content from '../../content';

class Admin extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        };
    }
    logoutMethod = () => {
        this.setState({ isLoggedIn: false })
    }
    loginMethod = () => {
        this.setState({ isLoggedIn: true })
    }
    render() {
        let { isLoggedIn } = this.state;
        const renderButton = () => {
            if (isLoggedIn) {
                return (
                    <div >
                        {/* <NavAdmin/> */}
                        {/* <Carousel/> */}
                        <div className="login">
                            <Button block onClick={this.logoutMethod}>Logout</Button>
                        </div>
                        <Content />
                        Admin
                        {/* <Footer/> */}
                    </div>
                );


            }
            else {
                return (
                    <div className="login">
                        <Form>
                            <Label><h1>LOGIN ADMIN</h1></Label>
                            <hr />
                            <FormGroup>
                                <Label for="text">Username</Label>
                                <Input type="text"
                                    name="username"
                                    id="username"
                                    placeholder="username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleNumber">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                />
                            </FormGroup>
                            <Button block onClick={this.loginMethod}>Login</Button>

                        </Form>
                    </div>
                );
            }
        }
        return (
            <div className="App">
                <h1>Halaman Admin</h1>
                {renderButton()}
            </div>
        );


    }
}
export default Admin;