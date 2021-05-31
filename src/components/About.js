import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{resumeData.website}</span>
       				</p>
                  </div>
               </div>

               <h2>Resume PDF</h2>
               <a href='pdf/Kai_Burkholder_Resume.pdf' target='_blank' rel='noopener noreferrer'>open pdf</a>
               
            </div>
         </div>
      </section>
    );
  }
}