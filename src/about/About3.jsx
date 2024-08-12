import React from 'react'
import { useNavigate } from 'react-router-dom'

function About3() {
    const navigate=useNavigate();
  return (
    <section className="section section-bg" id="call-to-action" style={{backgroundImage : "url('./image/banner-image-1-1920x500.jpg')"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="cta-content">
                    <h2>Send us a <em>message</em></h2>
                    <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula, sit amet dapibus odio augue eget libero. Morbi tempus mauris a nisi luctus imperdiet.</p>
                    <div className="main-button" onClick={()=>{
                       navigate('/contact')}}>
                        <a href="">Experts</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About3