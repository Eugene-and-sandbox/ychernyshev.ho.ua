import React from 'react'
import defStyles from '../css/default-styles.css';
import contactsStyles from './css/Contacts.css';
import Grid from '@material-ui/core/Grid';
import { Button } from 'react-bootstrap';
import TodayIcon from '@material-ui/icons/Today';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import MailIcon from '@material-ui/icons/Mail';

class Contacts extends React.Component {
  render () {
    return(
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={2}>
          <Grid container>
            <Grid container alignItems="center">
              <Grid item xs={1} className="ta-center"> <p><TodayIcon /></p> </Grid>
              <Grid item xs={8}> <p>14 april 1987</p> </Grid>
            </Grid>
            {/* // */}
            <Grid container alignItems="center">
              <Grid item xs={1} className="ta-center"> <p><LocalPhoneIcon /></p> </Grid>
              <Grid item xs={8}> <p>38 066 117 57 07</p> </Grid>
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
        </Grid>
        <Grid item xs={6}>

        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    )
  }
}

export default Contacts;
