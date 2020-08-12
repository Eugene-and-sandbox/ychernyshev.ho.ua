import React from "react";
import AboutStyles from "./css/About.css";
import defStyles from '../css/default-styles.css';
import Grid from "@material-ui/core/Grid";
import { Button } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles({
  buttonStyle: {
    color: "#ffc107",
  },
});

// const styles ={
//     buttonStyle: {
//         color: '#ffc107'
//     }
// }

export default function About() {
  const classes = styles();
  console.log(classes);
  return (
    <>
      <Grid container className="mt-5">
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <div>
            <div className="mt-2 ml-1 w-26 h-26 border-3 color-amber"></div>
            <div className="personal-photo mt--28 w-26 h-26"></div>
          </div>
        </Grid>
        <Grid item xs={5} className="fs-1-2 color-grey-3 line-height-2-5">
          <Grid container className="mt-5">
            <Grid item xs={4}>
              First Name:{" "}
              <span className="ml-1 color-dark-1">Eugene</span>
            </Grid>
            <Grid item xs={3}>
              Freelance:{" "}
              <span className="ml-1 color-dark-1">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Last Name:
              <span className="ml-1 color-dark-1">Chernyshev</span>
            </Grid>
            <Grid item xs={4}>
              Wirk in office:
              <span className="ml-1 color-dark-1">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Birthdate:
              <span className="ml-1 color-dark-1">14 april 1987</span>
            </Grid>
            <Grid item xs={7}>
              Langages:
              <span className="ml-1 color-dark-1">
                English (B1), Ukraine (C2), Russian (C2)
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Nationality:
              <span className="ml-1 color-dark-1">Ukrainian</span>
            </Grid>
            <Grid item xs={4}>
              Phone:
              <span className="ml-1 color-dark-1">
                +38 (068) 117 57 07
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Experience:
              <span className="ml-1 color-dark-1">1 year</span>
            </Grid>
            <Grid item xs={4}>
              Email:
              <span className="ml-1 color-dark-1">
                eugene.chernishov@zohomail.com
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Address:
              <span className="ml-1 color-dark-1">Lviv</span>
            </Grid>
            <Grid item xs={4}>
              LinkedIn:
              <span className="ml-1 color-purple-1">
                <a href="https://www.linkedin.com/in/chernyshev-eugene-79145886/" className="color-amber text-decoration-none" target="_blank">
                  view personal page
                </a>
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={12}>
                <Button variant="outline-primary" className="mt-3 p-07-3 bg-amber-g border-none color-white-default fs-1 cursor-pointer box-shadow-amber transition-3">
                    View CV
                </Button>{' '}
                <div className="mt-5"></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} className="bg-dark-1 h-2"></Grid>
      </Grid>
      <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className="tt-upper">
              <div className="mt-1 position-relative">
                  <Grid container className="fs-1-5 line-height-05">
                      <Grid item xs={2} className="ml--2">
                          <div className="display-flex justify-content-center align-items-center w-10 h-10 border-radius-50 bg-purple-1 color-white-default ta-center">
                            <div>
                                <p>html/css</p>
                                <p className="fs-1-2">Skills: </p>
                                <span className="color-green-1 fw-bold">good</span>
                            </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center position-absolute left-9 w-10 h-10 border-radius-50 bg-purple-2 color-white-default ta-center">
                            <div>
                                <p>js</p>
                                <p className="fs-1   ">Skills: </p>
                                <span className="color-blue-2 fw-bold">starting</span>
                            </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--2 w-10 h-10 border-radius-50 bg-purple-3 color-white-default ta-center">
                              <div>
                                  <p className="fs-1-2">bootstrap</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={2}>
                          <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml-0 w-10 h-10 position-relative zindex-1 border-radius-50 bg-purple-4 color-white-default ta-center">
                              <div className="line-height-05 fs-1-5">
                                  <p>react.js</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-blue-2 fw-bold">starting</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--5 w-10 h-10 position-relative zindex-1 border-radius-50 bg-purple-5 color-white-default ta-center">
                              <div className="line-height-05">
                                  <p>java core</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--3 w-10 h-10 border-radius-50 bg-purple-6 color-white-default ta-center">
                              <div className="line-height-05 fs-1">
                                  <p>java collections</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold fs-1-5">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center ml--1 w-10 h-10 border-radius-50 bg-purple-7 color-white-default ta-center">
                              <div className="line-height-05">
                                  <p className="fs-1-2">spring core</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold fs-1-5">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={1}>
                          <div className="display-flex justify-content-center align-items-center ml-1 w-10 h-10 border-radius-50 bg-purple-8 color-white-default ta-center">
                              <div className="line-height-05">
                                  <p>maven</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold fs-1-5">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={2}>
                          <div className="display-flex justify-content-center align-items-center ml-3 w-10 h-10 border-radius-50 bg-purple-9 color-white-default ta-center">
                              <div className="line-height-05">
                                  <p>sql</p>
                                  <p className="fs-1-2">Skills: </p>
                                  <span className="color-amber fw-bold fs-1-5">middle</span>
                              </div>
                          </div>
                      </Grid>
                      <Grid item xs={2}></Grid>
                  </Grid>
              </div>
          </Grid>
          <Grid item xs={2}></Grid>
      </Grid>
      <Grid container className="mt-1 bg-dark-1 color-grey-1">
        <Grid xs={2}></Grid>
        <Grid xs={8}>
          <p className="tt-upper fs-1-5 fw-bold color-white-default">
            My personal qualities
          </p>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <Grid container className="fs-1-5 color-grey-1 line-height-1">
        <Grid item xs={2} className="bg-dark-1"></Grid>
        <Grid item xs={8} className="line-height-2 ta-justify bg-dark-1">
          <p>My personal qualities and competencies are the main "drivers" to the goal. Working with clients, I learned to understand the undeniable importance of each individual client in the life of the whole company, and understanding and feeling the "pain" of the client, eventually leads to finding the right solution when considering his question. Working in a team, I felt the inability to maintain at the appropriate, professional level, absolutely any process within the company without its employees, their qualifications, motivation, desire to constantly develop with the company. I was lucky to work as a leader, teacher and examiner when working with staff. Participating in the process of developing working tools both as a team and independently, I was able to develop a sense of the overall flow of the company's processes to the extent that allowed me to identify their shortcomings and offer solutions to eliminate or optimize them, as well as implement these solutions. practice. Some of the tools developed and used by me personally allowed new employees to work with a large amount of information more comfortably and in the shortest possible time to find comprehensive information on issues that interest them at the time of their greatest interest in them. A key role in creating such solutions was played by a sense of involvement in the overall process of the company and a deep connection with its team of employees. Working with clients and on the company's internal processes allowed me to gain experience in resilience in stressful situations, including conflict situations, a very wide range of complexity in parallel with the ability to work overtime, if necessary, supporting several independent projects. Training employees and giving presentations to them allowed me to find an understanding that I really like being in this role for them, which, in my opinion, should play an important role in companies of any type, which primarily position their interest in continuous training of their employees, gaining an understanding that they will always have support from more experienced colleagues and managers, as well as in establishing close ties and relationships between them. In my opinion, this has a corresponding effect on the stability of processes within the company and on the professional approach to these processes by its employees. All these skills allowed me to reluctantly accept the challenge to move to another city to use the experience to work on a new project, which was successfully implemented and in a short time allowed to achieve significant success in the customer support sector, marked by positive feedback from a wide range of customers.</p>
        </Grid>
        <Grid item xs={2} className="bg-dark-1"></Grid>
        <Grid container>
          <Grid container className="bg-dark-1">
            <Grid xs={2} className="bg-dark-1"></Grid>
            <Grid xs={4}>
              <p className="tt-upper fs-1-5 fw-bold color-white-default">
                experience
              </p>
            </Grid>
            <Grid xs={4} className="p-07-3">
              <p className="tt-upper fs-1-5 fw-bold color-white-default">
                about me
              </p>
            </Grid>
            <Grid xs={2}></Grid>
          </Grid>
          <Grid item xs={2} className="bg-dark-1"></Grid>
          <Grid item xs={4}>
            <Grid container className="color-dark-1">
              <Grid item xs={1} className="bg-dark-1 color-white-default">
                point point
              </Grid>
              <Grid item xs={11} className="bg-purple-1 color-white-default">
                <div className="p-1 fs-1-5 line-height-1">
                  <small className="fw-bold">03.2018-04.2020</small>
                  <p className=" tt-upper fw-bold line-height-2">
                    Call Center Operator - <span className="fw-bold">Oriflame Cosmetics</span>
                  </p>
                  <p className="ta-justify line-height-2">
                    The firm is engaged in designing, manufacturing, selling and
                    servicing the engraving machines. Basically, my task in this
                    work was to create and develop, support and improve the
                    trading platform to expand the range of services provided by
                    the company. Also, I was engaged in supporting the IT
                    infrastructure of the firm and advising on information
                    security issues. I introduced new web-platform with store,
                    knowledge base with support and mailing system when I been on
                    this job.
                  </p>
                </div>
                <div className="p-1">
                    <small className="fw-bold">11.2016-11.2017</small>
                    <div className="fs-1-5 line-height-1">
                      <p className=" tt-upper fw-bold">
                        typesetter - <span className="fw-bold">almaz-cnc</span>
                      </p>
                      <p className="ta-justify line-height-2">
                        The firm is engaged in designing, manufacturing, selling and
                        servicing the engraving machines. Basically, my task in this
                        work was to create and develop, support and improve the
                        trading platform to expand the range of services provided by
                        the company. Also, I was engaged in supporting the IT
                        infrastructure of the firm and advising on information
                        security issues. I introduced new web-platform with store,
                        knowledge base with support and mailing system when I been on
                        this job.
                      </p>
                    </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} className="p-07-3 color-dark-1">
            <p className="mt-1 tt-upper fs-1-5 fw-bold">
              summary
            </p>
            <p className="line-height-2 ta-justify"> love hard tasks. It activates, awakens, allows to move forward, update knowledge, get new ones. It is filling life with an idea. I see this dynamics in IT. I feel like a fish in water when I programming something: sites, instructions or documentations, programs, anything. And IT is my choice, my ocean. In other jobs I programming anyway. But I want to do it in professional level</p>
              <div className="bg-amber">
                  <p className="mt-3 tt-upper fs-1-5 fw-bold">
                      preferences in work
                  </p>
                  <p className="line-height-2 ta-justify">I like when employees do their work. I like when they are a team in all questions (working and non-working). I like when tasks are correct. I dislike when we do not know what we do. It is not good position for team, department, all organization. </p>
              </div>
            <p className="mt-3 tt-upper fs-1-5 fw-bold">
              I like
            </p>
            <p className="line-height-2 ta-justify">IT, information security themes, I sometime write articles about it. I like psychology (I write a book on this theme), history, astronomy. I believe people and like to help them, and I hope on good result in this</p>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Grid>
      <Grid container className="bg-dark-1 color-grey-1">
        <Grid xs={2}></Grid>
        <Grid xs={4}>
          <p className="tt-upper fs-1-5 fw-bold color-white-default"></p>
        </Grid>
        <Grid xs={4} className="border-radius-50">
          <p className="tt-upper fs-1-5 fw-bold color-white-default">
            education & courses
          </p>
        </Grid>
        <Grid xs={2} className="bg-white-1"></Grid>
      </Grid>
      <Grid container className="fs-1-5 color-grey-1 line-height-1">
        <Grid item xs={2} className="bg-dark-1"></Grid>
        <Grid item xs={4} className="line-height-2 ta-justify bg-dark-1">
        </Grid>
        <Grid item xs={4}>
          <Grid container className="bg-dark-1 color-white-default">
            <Grid item xs={1}>
              point point
            </Grid>
            <Grid item xs={11}>
              <div className="mt-1">
                <small className="fw-bold">2011 - 2016</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper fw-bold">
                    Institute of information and diagnostic systems, Bachelor -{" "}
                    <span className="fw-bold">
                      National Aviation University
                    </span>
                  </p>
                  <p className="ta-justify">My diploma work theme was "Use of VPN-technologies to protect information in information networks"</p>
                </div>
              </div>
              <div className="mt-4">
                <small className="fw-bold">October - December 2013</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper fw-bold">
                  Quality Assurance Engineer -{" "}
                    <span className="fw-bold">
                        QA Group
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <small className="fw-bold">February - June 2019</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper fw-bold">
                  PHP Junior Developer -{" "}
                    <span className="fw-bold">
                        skill up
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-5"></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}
