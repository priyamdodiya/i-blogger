import React from 'react'
import '../Style.css';
import '../bootstrap.min.css'
import '../font-awesome.css'
import { makeStyles } from '@material-ui/core';

const useStyles=makeStyles({
    main:{
        marginTop:70
    }
})

function About1() {
    const classes=useStyles();

  return (
    <div className={classes.main} id="about">
    <section className="section section-bg" id="call-to-action" style={{backgroundImage : "url('./image/banner-image-1-1920x500.jpg')"}}>

    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cta-content">
                    <br/>
                    <br/>
                    <h2>Learn more <em>About Us</em></h2>
                    <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
  )
}

export default About1