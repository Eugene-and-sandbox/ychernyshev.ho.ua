import React, { Component } from 'react'
import defStyles from '../../css/default-styles.css';
import headerStyles from './Footer.css';
import logo from '../../logo.svg';
import '../../App.css';
import Grid from '@material-ui/core/Grid';

export default class footer extends Component {
    render() {
        return (
              <>
              <Grid container className="App bg-white-1">
                <Grid item xs={2}></Grid>
                <Grid item xs={1} className="App-header bg-dark-1">
                  <img src={logo} className="App-logo" alt="logo" />
                </Grid>
                <Grid item xs={7} className="ta-center line-height-05 bg-dark-1 color-white-default">
                  <div className="display-flex justify-content-between mt-2">
                    <div>
                      <p className="fs-1">Based on</p>
                      <p className="fs-1-5 color-blue-3">React.JS</p>
                    </div>
                    <div className="mr-3 ta-right fs-1">
                      <p>2020</p>
                      <p className="fs-1-5">Eugene Chernyshev</p>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              </>
            )
    }
}
