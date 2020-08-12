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
                <Grid item xs={2} className="bg-dark-1"></Grid>
                <Grid item xs={1} className="App-header bg-dark-1">
                  <img src={logo} className="App-logo" alt="logo" />
                </Grid>
                <Grid item xs={1} className="ta-center line-height-05 bg-dark-1 color-white-default">
                  <p className="fs-1-2">Based on</p>
                  <p className="fs-2 color-blue-3">React.JS</p>
                </Grid>
                <Grid item xs={6} className="bg-dark-1 color-white-default color-blue-3 line-height-05">
                  <div>
                    <p>2020</p>
                    <p>Eugene Chernyshev</p>
                  </div>
                </Grid>
                <Grid item xs={2}></Grid>
              </Grid>
              </>
            )
    }
}
