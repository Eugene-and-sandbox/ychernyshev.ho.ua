import React, { Component } from 'react'
import headerStyles from './Header.css';
import defStyles from '../../css/default-styles.css'
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import Resume from '../../pages/Resume';
import Contacts from '../../pages/Contacts';


const menu =[
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Technologes", link: "/technologes"},
    {name: "Resume", link: "/resume"},
    {name: "Source", link: "/source"},
    {name: "Blog", link: "/blog"},
    {name: "Contacts", link: "/contacts"}
]

export default class header extends Component {
    render() {
        return (
            <>
            <Container fluid='md'>
                <Row className="justify-content-md-center">
                  <Col xs={6}>
                    <div className="display-flex justify-content-end">
                      <a href="/" className="p-07-3 simple-menu-link border-01 color-blue-1 fs-1-5">Home</a>
                      <a href="/about" className="ml-1 simple-menu-link p-07-3 simple-menu-link border-01 color-blue-1 fs-1-5">About</a>
                      {/*<a href="" className="ml-1 simple-menu-link color-blue-1 fs-1-5">Technologes</a>*/}
                      {/*<a href="/resume" className="ml-1 simple-menu-link color-blue-1 fs-1-5">Resume</a>*/}
                      {/*// <a href="" className="ml-1 simple-menu-link color-blue-1 fs-1-5">Source code</a>*/}
                      {/*<a href="" className="ml-1 simple-menu-link color-blue-1 fs-1-5">My blog</a>*/}
                      {/*// <a href="/contacts" className="ml-1 simple-menu-link color-blue-1 fs-1-5">Contacts</a>*/}
                    </div>
                  </Col>
                </Row>
            </Container>

            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/resume" component={Resume}/>
                <Route exact path="/contacts" component={Contacts}/>
              </Switch>
            </Router>
            </>
        )
    }
}
