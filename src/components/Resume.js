import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="pdf-button">
          
            <h2>Resume PDF</h2>
                <button style={{backgroundColor: "#11ABB0"}}>
                  <a href='https://kai-resume.s3.us-east-2.amazonaws.com/Kai_Burkholder_Resume_2021.pdf' 
                      className="pdf-link"
                      target='_blank' 
                      rel='noopener noreferrer'>
                        open pdf
                  </a>
                </button>
          
        </div>

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Experience</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          {
                            item.Achievments.map((ach) => {
                              return(
                                <p className="achievments">
                                <span>&bull;</span> <em className="date">{ach.Achievement}</em>
                                </p>
                              )
                            })
                          }
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
      </section>
    );
  }
}