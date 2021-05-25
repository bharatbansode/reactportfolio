import React from 'react';
import imgsrc from '../src/images/about.jpg';
import Common from './Common';
import Card from './Card';
import Sdata from './Sdata';

const About = () => {

  //const img = `https://source.unsplash.com/700x350/?about`;

  return (
      <>
        <Common name='Welcome to About page' imgsrc={imgsrc} visit='./contact' btname="Contact Now" />
        <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />  
                                })
                            }                         
                        </div>
                    </div>
                </div>
            </div>
      </>
  )
}

export default About;