import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../mydata';

class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact Us</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Have Any <br></br>
                <span className='amazing-color'>Questions, Comments, Enquiries ?? </span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>
                    {data.social.map((link,index)=>(
                        <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                    ))}   
                </ul>
        </div>
        </Fade>

            <span className='footer'> ❤ <a href="http://chetanverma.com/">Bolanle Adeboye</a></span>
        </div>);
    }
}
 
export default Contact;