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
        <Grid item xs={3}>
          <div className="w-15 h-15 border-radius-50 bg-purple-1 color-white-default fs-1-5 ta-center">HTML/CSS</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-2 color-white-default fs-2-5 ta-center">JS</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-3 color-white-default fs-2-5 ta-center">BOOTSTRAP</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-4 color-white-default fs-2-5 ta-center">REACT JS</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-5 color-white-default fs-2-5 ta-center">JAVA CORE</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-6 color-white-default fs-2-5 ta-center">Java Collections</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-7 color-white-default fs-2-5 ta-center">Spring Core</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-8 color-white-default fs-2-5 ta-center">Maven</div>
          <div className="w-15 h-15 border-radius-50 bg-purple-9 color-white-default fs-2-5 ta-center">SQL</div>
        </Grid>
        <Grid item xs={5}>
          <Grid container>
            <Grid item xs={1} className="h-100-vh bg-purple-1"></Grid>
            <Grid item xs={11}>
              <p className="fs-1-5 color-purple-1 tt-upper">education, courses</p>
              <p className="fs-1-5 color-purple-1 tt-upper">summary</p>
              <p className="fs-1-5 color-purple-1 tt-upper">experience</p>
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
