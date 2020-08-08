import React, { Component } from 'react'
import defStles from '../css/default-styles.css';
import homeStyles from './css/Home.css';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import TodayIcon from '@material-ui/icons/Today';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

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
                      <p className="fs-1">HI THERE! My name is</p>
                      <p className="fs-2-5 tt-upper">eugene chernyshev</p>
                      <p className="fs-1">And I am is</p>
                      <p className="fs-1-2 tt-upper">trainee js/react.js developer </p>
                      <Grid container>
                        <p className="line-height-1-5">  I'm a Developer based in Lviv, Ukraine. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                      </Grid>
                      <Grid container>
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <p><TodayIcon /></p> </Grid>
                          <Grid item xs={8}> <p>14 april 1987</p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <p><LocalPhoneIcon /></p> </Grid>
                          <Grid item xs={8}> <p>+38 063 227 9670</p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <p><MailIcon /></p> </Grid>
                          <Grid item xs={8}> <p><a href="mailto:eugene.chernishov@zohomail.com">eugene.chernishov@zohomail.com</a></p> </Grid>
                        </Grid>
                        {/* // */}
                        <Grid container alignItems="center">
                          <Grid item xs={1} className="ta-center"> <p></p> </Grid>
                          <Grid item xs={8}>
                            <p>
                              <a href="https://www.linkedin.com/in/chernyshev-eugene-79145886/">LinkedIn page(icon) </a>
                              <a href="https://www.facebook.com/eugene.chernishev">Facebook page(icon)</a>
                            </p>
                          </Grid>
                        </Grid>
                      </Grid>
                      <p>
                        <Button variant="outline-primary" className="p-07-3 bg-blue-g border-none color-white-default fs-1 cursor-pointer box-shadow-purple transition-3">More about me</Button>{' '}

                        <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1 cursor-pointer box-shadow-amber transition-3">View CV</Button>{' '}
                      </p>
                    </div>

                  </Grid>
                  <Grid item xs={2}>
                    <div className="mt-3 position-relative">
                      <div className="w-40 h-40 image-code"></div>
                      <div className="position-absolute top--6 left-5 w-30 h-30 image-author"></div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <Grid container>
                  <Grid item xs={2}>
                    <div className="p-3 border-01 color-grey-1">
                      <img src="../images/js-icon.png" />
                      <p>Animation and other modules for site</p>
                      <p>skill: starting</p>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="ml-1 p-3 border-01 color-grey-1">
                      <img src="../images/react-icon.png" />
                      <p>Frontend library for site construction</p>
                      <p>skill: starting</p>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="ml-1 p-3 border-01 color-grey-1">
                      <img src="../images/java-icon.png" />
                      <p>Powerful backend programming language</p>
                      <p>skill in core: middle</p>
                    </div>
                  </Grid>
                  <Grid item xs={3}>
                    <div className="ml-1 p-3 border-01 color-grey-1">
                      <img src="../images/spring-icon.png" />
                      <p>Java Framework for programs of any complexity and orientation</p>
                      <p>skill in core: middle</p>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <p className="fs-3">Contact Me</p>
                <div className="display-flex color-grey-1">
                    <div xs={3}>
                      <p><LocalPhoneIcon /></p>
                    <p className="fs-2 color-white-default">Call me on</p>
                    <p className="fs-1-5">+38 063 227 9670</p>
                  </div>
                  <div xs={3}>
                    <p><MailIcon /></p> 
                    <p className="fs-2 color-white-default">Email me on</p>
                    <p className="fs-1-5">eugene.chernishov@zohomail.com</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <p><input type="text" placeholder="Enter your name" className="p-04-1 border-grey fs-1"></input>
                <input type="text" placeholder="Enter email adress" className="p-04-1 border-grey fs-1"></input></p>
                <p><input type="text" placeholder="Enter subject" className="p-04-1 border-grey fs-1"></input></p>
                <p className="ml-1"><textarea type="message" placeholder="Enter Message"  className="p-04-1 w-40 h-15 border-grey fs-1 textarea-r-vertical"></textarea></p>
                <p>
                  <Button variant="outline-primary" className="p-07-3-5 bg-blue-g border-none color-white-default fs-1 cursor-pointer box-shadow-purple">Send message</Button>{' '}
                </p>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </>
      )
    }
}
