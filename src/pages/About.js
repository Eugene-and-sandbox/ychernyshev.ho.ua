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
      <Grid container className="mt-5 bg-white-1">
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <div>
            <div className="mt-2 ml-1 w-26 h-26 border-3 color-purple"></div>
            <div className="personal-photo mt--28 w-26 h-26"></div>
          </div>
        </Grid>
        <Grid item xs={5} className="fs-1-2 color-grey-3 line-height-2-5">
          <Grid container className="mt-5">
            <Grid item xs={4}>
              First Name:{" "}
              <span className="ml-1 color-purple-1">Eugene</span>
            </Grid>
            <Grid item xs={3}>
              Freelance:{" "}
              <span className="ml-1 color-purple-1">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Last Name:
              <span className="ml-1 color-purple-1">Chernyshev</span>
            </Grid>
            <Grid item xs={4}>
              Wirk in office:
              <span className="ml-1 color-purple-1">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Birthdate:
              <span className="ml-1 color-purple-1">14 april 1987</span>
            </Grid>
            <Grid item xs={7}>
              Langages:
              <span className="ml-1 color-purple-1">
                English (B1), Ukraine (C2), Russian (C2)
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Nationality:
              <span className="ml-1 color-purple-1">Ukrainian</span>
            </Grid>
            <Grid item xs={4}>
              Phone:
              <span className="ml-1 color-purple-1">
                +38 (068) 117 57 07
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Experience:
              <span className="ml-1 color-purple-1">1 year</span>
            </Grid>
            <Grid item xs={4}>
              Email:
              <span className="ml-1 color-purple-1">
                eugene.chernishov@zohomail.com
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Address:
              <span className="ml-1 color-purple-1">Lviv</span>
            </Grid>
            <Grid item xs={4}>
              LinkedIn:
              <span className="ml-1 color-purple-1">
                <a href="" className="color-amber text-decoration-none">
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
                </  Button>{' '}
                <div className="mt-4"></div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container className="mt-3">
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          <hr className="w-auto h-01 bg-grey-2 border-none" />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <Grid container className="mt-1 color-grey-1">
        <Grid xs={2}></Grid>
        <Grid xs={4}>
          <p className="tt-upper fs-1-5 fw-bold color-white-default">
            cover letter
          </p>
        </Grid>
        <Grid xs={4}>
          <p className="tt-upper fs-1-5 fw-bold color-white-default">
            education & courses
          </p>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <Grid container className="fs-1-5 color-grey-1 line-height-1">
        <Grid item xs={2}></Grid>
        <Grid item xs={4} className="line-height-2 ta-justify">

        </Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={1}>
              point point
            </Grid>
            <Grid item xs={11}>
              <div>
                <small>2011 - 2016</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper color-white-default ws-5">
                    Institute of information and diagnostic systems, Bachelor -{" "}
                    <span className="fw-bold">
                      National Aviation University
                    </span>
                  </p>
                  <p className="ta-justify">My diploma work theme was "Use of VPN-technologies to protect information in information networks"</p>
                </div>
              </div>
              <div className="mt-4">
                <small>October - December 2013</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper color-white-default ws-5">
                  Quality Assurance Engineer -{" "}
                    <span className="fw-bold">
                        QA Group
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <small>February - June 2019</small>
                <div className="fs-1-2 line-height-2">
                  <p className=" tt-upper color-white-default ws-5">
                  PHP Junior Developer -{" "}
                    <span className="fw-bold">
                        skill up
                    </span>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
          <Grid container className="mt-3 color-grey-1">
            <Grid xs={2}></Grid>
            <Grid xs={4}>
              <p className="tt-upper fs-1-5 fw-bold color-white-default">
                skills
              </p>
            </Grid>
            <Grid xs={4}></Grid>
            <Grid xs={2}></Grid>
          </Grid>
          <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8} className="tt-upper">
                  <div className="position-relative">
                      <Grid container className="fs-1-2">
                          <Grid item xs={2} className="ml--2">
                              <div className="display-flex justify-content-center align-items-center w-10 h-10 border-radius-50 bg-purple-1 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>html/css</p>
                                      <p className="fs-2">90%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center position-absolute left-9 w-10 h-10 border-radius-50 bg-purple-2 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>js</p>
                                      <p className="fs-2   ">60%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--2 w-10 h-10 border-radius-50 bg-purple-3 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>bootstrap</p>
                                      <p className="fs-2">60%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={2}>
                              <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml-0 w-10 h-10 position-relative zindex-1 border-radius-50 bg-purple-4 color-white-default ta-center">
                                  <div className="line-height-05 fs-1-5">
                                      <p>react.js</p>
                                      <p className="fs-2">40%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--5 w-10 h-10 position-relative zindex-1 border-radius-50 bg-purple-5 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>java core</p>
                                      <p className="fs-2">80%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center position-relative zindex-1 ml--3 w-10 h-10 border-radius-50 bg-purple-6 color-white-default ta-center">
                                  <div className="line-height-05 fs-1">
                                      <p>java collections</p>
                                      <p className="fs-2">80%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center ml--1 w-10 h-10 border-radius-50 bg-purple-7 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>spring core</p>
                                      <p className="fs-2">70%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={1}>
                              <div className="display-flex justify-content-center align-items-center ml-1 w-10 h-10 border-radius-50 bg-purple-8 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>maven</p>
                                      <p className="fs-2-5">70%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={2}>
                              <div className="display-flex justify-content-center align-items-center ml-3 w-10 h-10 border-radius-50 bg-purple-9 color-white-default ta-center">
                                  <div className="line-height-05">
                                      <p>sql</p>
                                      <p className="fs-2-5">70%</p>
                                  </div>
                              </div>
                          </Grid>
                          <Grid item xs={2}></Grid>
                      </Grid>
                  </div>
              </Grid>
              <Grid item xs={2}></Grid>
          </Grid>
          <Grid container>
            <Grid container className="mt-2 color-grey-1">
              <Grid xs={2}></Grid>
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
            <Grid item xs={2}></Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={1} className="bg-white-1">
                  point point
                </Grid>
                <Grid item xs={11}>
                  <small>03.2018-04.2020</small>
                  <div className="fs-1-2 line-height-2">
                    <p className=" tt-upper color-white-default ws-5">
                      Call Center Operator - <span className="fw-bold">Oriflame Cosmetics</span>
                    </p>
                    <p className="fs-1-5 ta-justify">
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
                  <div className="mt-3"></div>
                  <small>11.2016-11.2017</small>
                  <div className="fs-1-2 line-height-2">
                    <p className=" tt-upper color-white-default ws-5">
                      typesetter - <span className="fw-bold">almaz-cnc</span>
                    </p>
                    <p className="fs-1-5 ta-justify">
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
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} className="p-07-3">
              <p className="mt-2 tt-upper fs-1-5 fw-bold color-white-default">
                summary
              </p>
              <p className="line-height-2 ta-justify"> love hard tasks. It activates, awakens, allows to move forward, update knowledge, get new ones. It is filling life with an idea. I see this dynamics in IT. I feel like a fish in water when I programming something: sites, instructions or documentations, programs, anything. And IT is my choice, my ocean. In other jobs I programming anyway. But I want to do it in professional level</p>
              <p className="mt-3 tt-upper fs-1-5 fw-bold color-white-default">
                preferences in work
              </p>
              <p className="line-height-2 ta-justify">I like when employees do their work. I like when they are a team in all questions (working and non-working). I like when tasks are correct. I dislike when we do not know what we do. It is not good position for team, department, all organization. </p>
              <p className="mt-3 tt-upper fs-1-5 fw-bold color-white-default">
                I like
              </p>
              <p className="line-height-2 ta-justify">IT, information security themes, I sometime write articles about it. I like psychology (I write a book on this theme), history, astronomy. I believe people and like to help them, and I hope on good result in this</p>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
      </Grid>
    </>
  );
}
