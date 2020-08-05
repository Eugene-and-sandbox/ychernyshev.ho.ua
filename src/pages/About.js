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
        <Grid item xs={5} className="fs-1-2 color-grey-1 line-height-2-5">
          <Grid container className="mt-5">
            <Grid item xs={4}>
              First Name:{" "}
              <span className="ml-1 color-white-default">Eugene</span>
            </Grid>
            <Grid item xs={3}>
              Freelance:{" "}
              <span className="ml-1 color-white-default">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Last Name:
              <span className="ml-1 color-white-default">Chernyshev</span>
            </Grid>
            <Grid item xs={4}>
              Wirk in office:
              <span className="ml-1 color-white-default">Available</span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Birthdate:
              <span className="ml-1 color-white-default">14 april 1987</span>
            </Grid>
            <Grid item xs={7}>
              Langages:
              <span className="ml-1 color-white-default">
                English (B1), Ukraine (C2), Russian (C2)
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Nationality:
              <span className="ml-1 color-white-default">Ukrainian</span>
            </Grid>
            <Grid item xs={4}>
              Phone:
              <span className="ml-1 color-white-default">
                +38 (068) 117 57 07
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Experience:
              <span className="ml-1 color-white-default">1 year</span>
            </Grid>
            <Grid item xs={4}>
              Email:
              <span className="ml-1 color-white-default">
                eugene.chernishov@zohomail.com
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={4}>
              Address:
              <span className="ml-1 color-white-default">Lviv</span>
            </Grid>
            <Grid item xs={4}>
              LinkedIn:
              <span className="ml-1 color-white-default">
                <a href="" className="color-amber text-decoration-none">
                  view personal page
                </a>
              </span>
            </Grid>
          </Grid>
          {/* // */}
          <Grid container>
            <Grid item xs={12}>
              <Button
                variant="warning"
                className="mt-3 p-1 bg-amber border-none fs-1-2"
              >
                DOWNLOAD MY CV
              </Button>{" "}
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
            experience
          </p>
        </Grid>
        <Grid xs={4}>
          <p className="tt-upper fs-1-5 fw-bold color-white-default">
            education
          </p>
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <Grid container className="fs-1-5 color-grey-1 line-height-1">
        <Grid item xs={2}></Grid>
        <Grid item xs={4}>
          <Grid container>
            <Grid item xs={1}>
              point point
            </Grid>
            <Grid item xs={11}>
              <small>2016-2017</small>
              <div className="fs-1-2 line-height-2">
                <p className=" tt-upper color-white-default ws-5">
                  web-designer - <span className="fw-bold">almaz-cnc</span>
                </p>
                <p className="ta-justify">
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
      </Grid>
    </>
  );
}
