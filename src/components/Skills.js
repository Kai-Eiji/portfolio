import React, { Component } from 'react';


export default class Skills extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="skills">
         <div className="skill row">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>
        </div>
        <div className="skill-sets">
          {
            resumeData.skillCategories.map((category) =>{
              return(

                <div className="skill-category">

                  <h4>
                    {category.skillsDescription}
                  </h4>

                  <div className="bars">
                    <ul className="skills">
                        {
                          category.skills && category.skills.map((item, idx) => {
                            
                            return(
                              <li>
                                <span className={`bar-expand ${item.skillname.toLowerCase().replace('.js', '')}`}></span>
                                <div style={{display: "flex"}}>
                                  <img src={`images/logo/${item.skillname.toLowerCase().replace('.js', '')}-logo.svg`}/>
                                  <em>
                                    {item.skillname}
                                  </em>
                                </div>
                              </li>
                            )
                           
                          })
                        }
                    </ul>
                  </div>
              </div>
              )
            })
          }
        </div>

           
      </section>
    );
  }
}