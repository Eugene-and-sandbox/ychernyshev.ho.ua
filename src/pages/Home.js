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
import CV from './cv';

const menu =[
  { name: 'About', link: '/about' },
  { name: 'Source', link: '/source' },
  { name: 'CV', link: '/cv' },
  { name: 'Send', link: '/send' }
]

let cl = () => {
  alert('My personal qualities and competencies are the main "drivers" to the goal. Working with clients, I learned to understand the undeniable importance of each individual client in the life of the whole company, and understanding and feeling the "pain" of the client, eventually leads to finding the right solution when considering his question. Working in a team, I felt the inability to maintain at the appropriate, professional level, absolutely any process within the company without its employees, their qualifications, motivation, desire to constantly develop with the company. I was lucky to work as a leader, teacher and examiner when working with staff. Participating in the process of developing working tools both as a team and independently, I was able to develop a sense of the overall flow of the company`s processes to the extent that allowed me to identify their shortcomings and offer solutions to eliminate or optimize them, as well as implement these solutions. practice. Some of the tools developed and used by me personally allowed new employees to work with a large amount of information more comfortably and in the shortest possible time to find comprehensive information on issues that interest them at the time of their greatest interest in them. A key role in creating such solutions was played by a sense of involvement in the overall process of the company and a deep connection with its team of employees. Working with clients and on the company`s internal processes allowed me to gain experience in resilience in stressful situations, including conflict situations, a very wide range of complexity in parallel with the ability to work overtime, if necessary, supporting several independent projects. Training employees and giving presentations to them allowed me to find an understanding that I really like being in this role for them, which, in my opinion, should play an important role in companies of any type, which primarily position their interest in continuous training of their employees, gaining an understanding that they will always have support from more experienced colleagues and managers, as well as in establishing close ties and relationships between them. In my opinion, this has a corresponding effect on the stability of processes within the company and on the professional approach to these processes by its employees. All these skills allowed me to reluctantly accept the challenge to move to another city to use the experience to work on a new project, which was successfully implemented and in a short time allowed to achieve significant success in the customer support sector, marked by positive feedback from a wide range of customers.');
}

export default class Home extends Component {
    render() {
      // const styles ={
      //   background:'#ffffff'
      // };
      return (
          <>
            <Grid container>
              <Grid item xs={12}>
                <Grid container className="mt-3">
                  <Grid item xs={2}></Grid>
                  <Grid item xs={4} className="line-height-05">
                    <div>
                      <p className="fs-2">HI THERE! My name is</p>
                      <p className="fs-3 fw-bold tt-upper">eugene chernyshev</p>
                      <p className="fs-1-5">I am is</p>
                      <p className="fs-2 tt-upper">trainee js/react.js developer </p>
                      <div className="mt--3 p-1 w-40-p bg-green-1 ta-center color-white-default fw-bold">Open for new opportunities</div>
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
                                <div className="flex-1 image-li-icon w-10 h-5"></div>
                              </a>
                              <a href="https://www.facebook.com/eugene.chernishev">
                                <div className="flex-1 ml-1 image-fb-icon w-10 h-5"></div>
                              </a>
                              <div className="flex-1"></div>
                            </div>
                          </Grid>
                        </Grid>
                      </Grid>
                        <div className="mt--3">
                            <Link to="/about">
                                <Button className="p-07-3 bg-blue-g border-none color-white-default fs-1-2 cursor-pointer box-shadow-purple transition-3">More about me</Button>{' '}
                            </Link>

                            <Link to="/cv">
                                <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1-2 cursor-pointer box-shadow-amber transition-3">View CV</Button>{' '}
                            </Link>

                            {/*<Link to="">*/}
                                {/*<Button variant="outline-primary" className="p-07-3 border-none fs-1-2 fw-bold cursor-pointer box-shadow-dark transition-3" onClick={cl}>Personal Qualities</Button>{' '}*/}
                            {/*</Link>*/}
                        </div>
                        <div className="mt-6"></div>
                    </div>
                  </Grid>
                  <Grid item xs={2}>
                    <div className="mt-3 ml-1 position-relative">
                      <video className="w-40 h-35" controls>
                        <source src="../media/presentation.mp4" type="video/mp4; codecs='avc1.42E01E, mp4a.40.2'" />
                        Your browser does not support HTML video.
                        <a href="../media/presentation.mp4">Download video</a>.
                      </video>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container className="mt-3 p-3 bg-white-2">
                <Grid item xs={2}></Grid>
                <Grid item xs={4} className="display-flex flex-column align-items-center justify-content-center">
                    <div className="line-height-05">
                        <p className="fs-3">My skills</p>
                        <p className="fs-1-5 color-grey-3">those technologies I am practicing</p>
                    </div>
                    <div>
                        <p className="fs-1-5">More about me and my skills on the About page</p>
                        <Link to="/about">
                            <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1 cursor-pointer box-shadow-amber transition-3 fs-1-2">Go on About page</Button>{' '}
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className="display-flex">
                        <div>
                            <div className="w-15 h-15 image-js-icon"></div>
                            <div className="w-15 h-15 image-react-icon"></div>
                        </div>
                        <div>
                            <div className="w-10 h-10 image-java-icon"></div>
                            <div className="w-10 h-10 image-spring-icon"></div>
                            <div className="w-10 h-10 image-sql-icon"></div>
                        </div>
                        <div>
                            <div className="w-5 h-5 image-html-css-icon"></div>
                            <div className="w-5 h-5 image-bootstrap-icon"></div>
                            <div className="w-5 h-5 image-maven-icon"></div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
              <Grid container>
              <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={12} className="p-2 color-grey-3 line-height-05">
                            <p className="fs-2-5 ta-center">Contact with me</p>
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
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={12} className="p-2">
                            <div className="display-flex flex-column">
                                <div className="line-height-05">
                                    <p className="fs-2-5 color-grey-3">Why me?</p>
                                    <p className="fs-1-2 color-grey-2">Maybe next message give you answer for your question</p>
                                    <p className="fs-1-5 color-blue-2 ta-justify line-height-2-5">
                                        My personal qualities and competencies are the main "drivers" to the goal. Working with clients, I learned to understand the undeniable importance of each individual client in the life of the whole company, and understanding and feeling the "pain" of the client, eventually leads to finding the right solution when considering his question.
                                      </p>

                                        <Link to="">
                                            <Button variant="outline-primary" className="p-07-3 bg-blue-1 border-none color-white-default fs-1-2 cursor-pointer box-shadow-blue transition-3">Reed more</Button>{' '}
                                        </Link> {/*Working in a team, I felt the inability to maintain at the appropriate, professional level, absolutely any process within the company without its employees, their qualifications, motivation, desire to constantly develop with the company. I was lucky to work as a leader, teacher and examiner when working with staff. Participating in the process of developing working tools both as a team and independently, I was able to develop a sense of the overall flow of the company`s processes to the extent that allowed me to identify their shortcomings and offer solutions to eliminate or optimize them, as well as implement these solutions. practice. Some of the tools developed and used by me personally allowed new employees to work with a large amount of information more comfortably and in the shortest possible time to find comprehensive information on issues that interest them at the time of their greatest interest in them. A key role in creating such solutions was played by a sense of involvement in the overall process of the company and a deep connection with its team of employees. Working with clients and on the company`s internal processes allowed me to gain experience in resilience in stressful situations, including conflict situations, a very wide range of complexity in parallel with the ability to work overtime, if necessary, supporting several independent projects. Training employees and giving presentations to them allowed me to find an understanding that I really like being in this role for them, which, in my opinion, should play an important role in companies of any type, which primarily position their interest in continuous training of their employees, gaining an understanding that they will always have support from more experienced colleagues and managers, as well as in establishing close ties and relationships between them. In my opinion, this has a corresponding effect on the stability of processes within the company and on the professional approach to these processes by its employees. All these skills allowed me to reluctantly accept the challenge to move to another city to use the experience to work on a new project, which was successfully implemented and in a short time allowed to achieve significant success in the customer support sector, marked by positive feedback from a wide range of customers.*/}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              <Grid container className="mt-3">
                <Grid item xs={2}></Grid>
                <Grid item xs={8} className="p-2 bg-blue-1">
                    <div className="display-flex">
                        <div className="flex-5">
                            <input type="text" placeholder="Enter your name" className="p-04-1 w-95-p border-none border-bottom bg-transparent fs-1 color-white-default transition-3"></input>
                        </div>
                        <div className="flex-5 ml-3">
                            <input type="text" placeholder="Enter email adress" className="p-04-1 w-95-p border-none border-bottom bg-transparent fs-1 color-white-default transition-3"></input>
                        </div>
                    </div>
                    <div className="display-flex">
                        <div className="flex-4">
                            <p><input type="text" placeholder="Enter subject" className="w-97-p p-04-1 border-none border-bottom bg-transparent fs-1 color-white-default transition-3"></input></p>
                            <p><textarea type="message" placeholder="Enter Message"  className="w-97-p p-04-1 w-40 h-15 border-none bg-transparent fs-1 color-white-default textarea-r-vertical"></textarea></p>
                            <Button variant="outline-primary" className="p-07-3-5 w-100-p bg-white-2 border-none color-grey-3 fs-1-2 cursor-pointer box-shadow-light transition-3">Send message</Button>{' '}
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>

            <Router>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/cv" component={CV} />
              </Switch>
            </Router>
          </>
      )
    }
}
