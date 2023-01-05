import React from 'react';
import {BsTwitter, BsLinkedin} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const SocialMedia = () => 
  (
    <div className="app__social">
        <a href = "https://twitter.com/abjiang22" target="_blank">
          <div>
              <BsTwitter/>
              
          </div> 
        </a>
        <a href = "https://www.facebook.com/alex.jiang.1848/" target="_blank">
          <div>
              <FaFacebookF />
          </div>
        </a>

        <a href = "https://www.linkedin.com/in/alex-jiang-831ab2200/" target="_blank">
          <div>
              <BsLinkedin />
          </div>
        </a>
    </div>
  );


export default SocialMedia