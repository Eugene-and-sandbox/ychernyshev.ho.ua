import React, { Component } from 'react'
import defStles from '../css/default-styles.css';
import homeStyles from './css/Home.css';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import TodayIcon from '@material-ui/icons/Today';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import About from './About';
import Source from './Source';

const menu =[
  { name: 'About', link: '/about' },
  { name: 'Source', link: '/source'},
  { name: 'CV', link: '/cv'},
  { name: 'Send', link: '/send'}
]

export default class Home extends Component {
    render() {
      // const styles ={
      //   background:'#ffffff'
      // };
      return (
          <>
            <Grid container className="bg-white-1">
              <Grid item xs={12}>
                <Grid container className="mt-8">
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4} className="line-height-05">
                    <div>
                      <p className="fs-2">HI THERE! My name is</p>
                      <p className="fs-3 fw-bold tt-upper">eugene chernyshev</p>
                      <p className="fs-1-5">I am is</p>
                      <p className="fs-2 tt-upper">trainee js/react.js developer </p>
                      <Grid container>
                        <p className="line-height-2 ta-justify fs-1-5">  I'm a Developer based in Lviv, Ukraine. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                      </Grid>
                      <Grid container className="fs-1-2 line-height-05">
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <TodayIcon /></Grid>
                          <Grid item xs={8}> <p>14 april 1987</p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <LocalPhoneIcon /> </Grid>
                          <Grid item xs={8}> <p>+38 063 227 9670</p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <MailIcon /> </Grid>
                          <Grid item xs={8}> <p><a href="mailto:eugene.chernishov@zohomail.com">eugene.chernishov@zohomail.com</a></p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={8}>
                            <div className="display-flex mt-1">
                              <a href="https://www.linkedin.com/in/chernyshev-eugene-79145886/">
                                <div className="flex-1 image-li-icon w-10 h-10"></div>
                              </a>
                              <a href="https://www.facebook.com/eugene.chernishev">
                                <div className="flex-1 ml-1 image-fb-icon w-10 h-10"></div>
                              </a>
                              <div className="flex-1"></div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                      <div className="mt--5">
                      <Link to="/about">
                        <Button className="p-07-3 bg-blue-g border-none color-white-default fs-1-2 cursor-pointer box-shadow-purple transition-3">More about me</Button>{' '}
                      </Link>

                      <Link to="">
                        <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1-2 cursor-pointer box-shadow-amber transition-3">View CV</Button>{' '}
                      </Link>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div className="mt-3 ml-1 position-relative">
                      <div className="w-40 h-40 image-code"></div>
                      <div className="position-absolute top--6 left-5 w-30 h-30 image-author"></div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="pt-3 pb-4 bg-dark-2">
              <Grid item xs={2}></Grid>
              <Grid item xs={8} className="fs-1-2">
                <p className="ta-center fs-3 color-white-default">My main skills</p>
                <div className="display-flex justify-content-between">
                  <div className="justify-content-center align-items-center w-25-p border-01 color-grey-1">
                    <div className="w-10 h-10 image-js-icon"></div>
                    <p>Animation and other modules for site</p>
                    <p>Skills: <span className="color-blue-1">starting</span></p>
                    <Link to="">
                      <Button className="p-07-3-5 w-100-p bg-blue-g2 border-none color-white-default fs-1-2 cursor-pointer">Source code</Button>{' '}
                    </Link>
                  </div>

                  <div className="ml-1 w-25-p border-01 color-grey-1">
                    <div className="w-10 h-10 image-react-icon"></div>
                    <p>Frontend library for site construction</p>
                    <p>Skills: <span className="color-blue-1">starting</span></p>
                    <div className="mt-05">
                      <Link to="">
                        <Button className="p-07-3-5 w-100-p bg-blue-g2 border-none color-white-default fs-1-2 cursor-pointer">Source code</Button>{' '}
                      </Link>
                    </div>
                  </div>

                  <div className="ml-1 w-25-p border-01 color-grey-1">
                    <div className="w-10 h-10 image-java-icon"></div>
                    <p>Powerful backend programming language</p>
                    <p>Core and Collections: <span className="color-amber">middle</span></p>
                    <div className="mt-05">
                      <Link to="">
                        <Button className="p-07-3-5 w-100-p bg-blue-g2 border-none color-white-default fs-1-2 cursor-pointer">Source code</Button>{' '}
                      </Link>
                    </div>
                  </div>

                  <div className="ml-1 w-25-p border-01 color-grey-1">
                    <div className="w-10 h-10 image-spring-icon"></div>
                    <p>Java Framework for programs of any complexity and orientation</p>
                    <p>Skills in core: <span className="color-amber">middle</span></p>
                    <div className="mt-05">
                      <Link to="">
                        <Button className="p-07-3-5 w-100-p bg-blue-g2 border-none color-white-default fs-1-2 cursor-pointer">Source code</Button>{' '}
                      </Link>
                    </div>
                  </div>
                </div>
                  <div className="display-flex align-items-center  mt-2 p-07-3 bg-white-1">
                      <div className="flex-1"></div>
                      <div className="flex-3 p-07-3 bg-white-1">
                        <p className="ml-5 fs-1-5">You can see more about my skills on the About page</p>
                      </div>
                      <div className="flex-1 bg-white-1">
                          <Link to="/about">
                            <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1 cursor-pointer box-shadow-amber transition-3 fs-1-2">Go on About page</Button>{' '}
                          </Link>
                      </div>
                  </div>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
              <Grid container className="bg-dark-1">
                  <Grid item xs={12}>
                      <Grid container className="mt-5">
                          <Grid item xs={2}></Grid>
                          <Grid item xs={8} className="color-grey-1 line-height-05">
                              <p className="fs-3 ta-center">Contact with me</p>
                              <div className="justify-content-center display-flex ta-center">
                                  <div className="flex-3 ">
                                      <p><LocalPhoneIcon/></p>
                                      <p className="fs-1-5 color-white-default">Call me on</p>
                                      <p className="fs-1-2">+38 063 227 9670</p>
                                  </div>
                                  <div className="flex-3">
                                      <p><MailIcon /></p>
                                      <p className="fs-1-5 color-white-default">Email me on</p>
                                      <p className="fs-1-2">eugene.chernishov@zohomail.com</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={2}></Grid>
                      </Grid>
                      <Grid container className="mt-3">
                          <Grid item xs={2}></Grid>
                          <Grid item xs={8}>
                              <div className="display-flex">
                                  <div className="flex-5">
                                      <input type="text" placeholder="Enter your name" className="w-94-5-p p-04-1 border-grey border-radius-03 bg-transparent fs-1 color-white-default"></input>
                                  </div>
                                  <div className="flex-5 ml-3">
                                      <input type="text" placeholder="Enter email adress" className="w-94-5-p p-04-1 border-grey border-radius-03 bg-transparent fs-1 color-white-default"></input>
                                  </div>
                              </div>
                              <p><input type="text" placeholder="Enter subject" className="w-97-p p-04-1 border-grey border-radius-03 bg-transparent fs-1 color-white-default"></input></p>
                              <p><textarea type="message" placeholder="Enter Message"  className="w-97-p p-04-1 w-40 h-15 border-grey border-radius-03 bg-transparent fs-1 color-white-default textarea-r-vertical"></textarea></p>
                              <Button variant="outline-primary" className="p-07-3-5 w-100-p bg-blue-g border-none color-white-default fs-1-2 cursor-pointer box-shadow-purple">Send message</Button>{' '}
                          </Grid>
                          <Grid item xs={2}></Grid>
                      </Grid>
                  </Grid>
              </Grid>

            <Router>
              <Switch>
                <Route exact path="/about" component={About} />
                <Router exact path="/source" component={Source} />
              </Switch>
            </Router>
          </>
      )
    }
}
