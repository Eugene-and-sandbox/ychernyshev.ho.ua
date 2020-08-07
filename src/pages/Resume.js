import React from 'react'
import defStyles from '../css/default-styles.css';
import resimeStyles from './css/Resume.css';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';

class Resume extends React.Component {
  render () {
    return(
      <>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={7} className="line-height-1">
              <p className="fs-3 fw-bold color-purple-1">Eugene Chernyshev</p>
              <p className="fs-1-5">JS/React JS programmer</p>
              <p className="ta-justify line-height-1-5 fs-1-5">I love hard tasks. It activates, awakens, allows to move forward, update knowledge, get new ones. It is filling life with an idea. I see this dynamics in IT. I feel like a fish in water when I programming something: sites, instructions or documentations, programs, anything. And IT is my choice, my ocean. In other jobs I programming anyway. But I want to do it in professional level</p>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <div className="personal-photo w-26 h-26"></div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="mt-3">
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          <hr className="w-auto h-01 bg-grey-3 border-none" />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={3} className="tt-upper">
            <div className="position-relative">
                <div className="position-relative display-flex justify-content-center align-items-center w-14 h-14 border-radius-50 bg-purple-1 color-white-default ta-center">
                    <div className="line-height-05 fs-2">
                        <p>html/css</p>
                        <p className="fs-3 fw-bold">90%</p>
                    </div>
                </div>
                <div className="display-flex justify-content-center align-items-center position-absolute top-2 left-10 w-15 h-15 border-radius-50 bg-purple-2 color-white-default ta-center zindex-1">
                    <div className="line-height-05 fs-2">
                        <p>js</p>
                        <p className="fs-3">60%</p>
                    </div>
                </div>
                <div className="display-flex justify-content-center align-items-center position-absolute left-10 w-10 h-10 border-radius-50 bg-purple-3 color-white-default ta-center">
                    <div className="line-height-05 fs-1">
                        <p>bootstrap</p>
                        <p className="fs-2">60%</p>
                    </div>
                </div>
                <div className="display-flex justify-content-center align-items-center position-absolute top-10 left--1 w-13 h-13 border-radius-50 bg-purple-4 color-white-default ta-center zindex-1">
                    <div className="line-height-05 fs-2">
                        <p>react.js</p>
                        <p className="fs-3">40%</p>
                    </div>
                </div>
            </div>
            {/*Item*/}
            <div className="position-relative">
                <div className="display-flex justify-content-center align-items-center position-absolute top-5 w-15 h-15 border-radius-50 bg-purple-5 color-white-default ta-center zindex-1">
                    <div className="line-height-05 fs-2">
                        <p>java core</p>
                        <p className="fs-3">80%</p>
                    </div>
                </div>
                <div className="display-flex justify-content-center align-items-center position-absolute top-6 right-2 w-15 h-15 border-radius-50 bg-purple-6 color-white-default ta-center zindex-1">
                    <div className="line-height-05 fs-1-5">
                        <p>java collections</p>
                        <p className="fs-3">80%</p>
                    </div>
                </div>
            </div>
            {/*Item*/}
            <div className="position-relative top-10">
                <div className="display-flex justify-content-center align-items-center position-absolute top-7 right-9 w-12 h-12 border-radius-50 bg-purple-7 color-white-default ta-center">
                    <div className="line-height-05 fs-1-5">
                        <p>spring core</p>
                        <p className="fs-2-5">70%</p>
                    </div>
                </div>
                <div className="display-flex justify-content-center align-items-center position-absolute top-7 w-10 h-10 border-radius-50 bg-purple-8 color-white-default ta-center">
                    <div className="line-height-05 fs-1-5">
                        <p>maven</p>
                        <p className="fs-2-5">70%</p>
                    </div>
                </div>
            </div>
            {/*Item*/}
            <div className="position-relative top-10">
                <div className="display-flex justify-content-center align-items-center position-absolute top-9 right-2 w-10 h-10 border-radius-50 bg-purple-9 color-white-default ta-center zindex--1">
                    <div className="line-height-05 fs-1-5">
                        <p>sql</p>
                        <p className="fs-2-5">70%</p>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={11} className="fs-1-2">
                <p className="fs-1-5 color-purple-1 tt-upper">education, courses</p>
                <div className="line-height-08">
                    <p>National Aviation University</p>
                    <p>Security of information and communication systems, Bachelor</p>
                    <p>2011 - 2016</p>
                </div>
                <div className="mt-2 line-height-08">
                    <p>PHP Junior Developer</p>
                    <p>February - June 2019</p>
                </div>
                <div className="mt-2 line-height-08">
                    <p>Quality Assurance Engineer</p>
                    <p>October - December 2013</p>
                </div>
                <p className="fs-1-5 color-purple-1 tt-upper">summary</p>
                <p className="ta-justify">I love hard tasks. It activates, awakens, allows to move forward, update knowledge, get new ones. It is filling life with an idea. I see this dynamics in IT. I feel like a fish in water when I programming something: sites, instructions or documentations, programs, anything. And IT is my choice, my ocean. In other jobs I programming anyway. But I want to do it in professional level</p>
                <p className="fs-1-5 color-purple-1 tt-upper">experience</p>
                <div className="line-height-08">
                    <p className="fw-bold">Oriflame Cosmetics | Call Center Operator</p>
                    <p>03/2018 - 04/2020</p>
                    <p className="line-height-1-5 ta-justify">Learned business processes all time, updated this knowledge, had many hard tasks with biggest load and with short time realization or hard tasks with long time load and long time realization. This approach allowed me to take on complex/hard tasks at work without fear and complete them on time or faster and at the same time provide recommendations on the technological process, optimization, improvement and generation of new ideas. I introduced ideas and templates about optimization and modification work with Database in time my work in Oriflame and many time updated it. I used my some work instruments when I taught. Some employees used these instruments without me.</p>
                </div>
                <div className="mt-2 fs-1-2 line-height-02">
                    <p className="fw-bold">Almaz® CNC | Web and Graphic Designer / System administrator</p>
                    <p>11/2016 - 11/2017</p>
                    <p className="line-height-1-5 ta-justify">The firm is engaged in designing, manufacturing, selling and servicing the engraving machines. Basically, my task in this work was to create and develop, support and improve the trading platform to expand the range of services provided by the company. Also, I was engaged in supporting the IT infrastructure of the firm and advising on information security issues. I introduced new web-platform with store, knowledge base with support and mailing system when I been on this job.</p>
                </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      </>
    )
  }
}

export default Resume;
