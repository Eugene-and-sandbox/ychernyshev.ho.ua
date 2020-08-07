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
            <Grid container className="p-0-5 bg-white-1">
              <Grid item xs={12}>
                <Grid container>
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
                      <p>
                        <Button variant="outline-primary" className="p-07-3 bg-blue-g border-none color-white-default fs-1 cursor-pointer box-shadow-purple transition-3">More about me</  Button>{' '}

                        <Button variant="outline-primary" className="p-07-3 bg-amber-g border-none color-white-default fs-1 cursor-pointer box-shadow-amber transition-3">View CV</  Button>{' '}
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

            {/* // <Grid container>
            //   <Grid item className="home-bg w-100 h-100-vh">
            //     <Grid container className="mt-7">
            //       <Grid item xs={1}></Grid>
            //         <Grid item xs={10}>
            //           <Grid container className="p-3 opacity-50 border-3-grey">
            //             <Grid item xs={4}>
            //               <div className="w-40 h-40 personal-photo border-3 color-amber"></div>
            //             </Grid>
            //             <Grid item xs={8}>
            //               <Grid container className="mt-3">
            //                 <Grid item xs={2}></Grid>
            //                 <Grid item xs={8}>
            //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequ
            //                 </Grid>
            //                 <Grid item xs={2}></Grid>
            //               </Grid>
            //             </Grid>
            //           </Grid>
            //         </Grid>
            //       <Grid item xs={1}></Grid>
            //     </Grid>
            //   </Grid>
            // </Grid> */}
          </>
      )
    }
}
