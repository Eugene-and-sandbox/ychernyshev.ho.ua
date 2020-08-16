import React, { Component } from 'react'
import headerStyles from './Header.css';
import defStyles from '../../css/default-styles.css'
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Pages
import Home from '../../pages/Home';
import About from '../../pages/About';
import CV from '../../pages/cv';
import Contacts from '../../pages/Contacts';


const menu =[
    {name: "Home", link: "/"},
    {name: "About", link: "/about"},
    {name: "Technologes", link: "/technologes"},
    {name: "CV", link: "/cv"},
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
                    <div className="display-flex flex-column position-fixed mt-3 ml-5 w-10">
                      <a href="/" className="p-07-3 border-none box-shadow-dark transition-3 simple-menu-link-w color-grey-3 fs-1 ta-center fw-bold cursor-pointer">Home</a>
                      <a href="/about" className="mt-1 p-07-3 border-none box-shadow-dark transition-3 simple-menu-link-w border-01 color-grey-3 fs-1 ta-center fw-bold cursor-pointer">About</a>
                      <a href="/cv" className="mt-1 p-07-3 bg-amber-g border-none box-shadow-amber transition-3 simple-menu-link-w border-01 color-white-default fs-1 fw-bold cursor-pointer">View CV</a>
                    </div>
                  </Col>
                </Row>
            </Container>

            <Router>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/cv" component={CV}/>
                <Route exact path="/contacts" component={Contacts}/>
              </Switch>
            </Router>
            </>
        )
    }
}
