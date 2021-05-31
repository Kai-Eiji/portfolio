import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row" style={{maxWidth: '1700px'}}>
        <div className="twelve columns collapsed" >
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" style={{paddingLeft: '60px', paddingRight: '60px'}}>
                  <h3>{item.name}</h3>
                  <div className="item-wrap">
                    <a href={item.projecturl} target="_blank" rel="noopener noreferrer">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5 style={{marginBottom: '10px'}}>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <p style={{color: 'black' ,fontSize:'15px'}}>{item.short_description}</p>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}