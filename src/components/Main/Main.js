import React,{useEffect} from 'react';
import './Main.css';
import {NavBar} from '../NavBar/NavBar';
import {HeadAnimation} from '../HeadAnimation/HeadAnimation';
import {Heading} from '../Heading/Heading';
import {pixelRatio} from '../HeadAnimation/HeadAnimation';
import { isMobile } from '../../App';
import {isIphone} from '../../App';
import facebookIcon from '../../images/facebook.svg'
import youtubeIcon from '../../images/youtube.svg';
import instagramIcon from '../../images/instagram.svg';
import githubIcon from '../../images/github.svg';
import { Link } from 'react-router-dom';
import {firebase} from '../../App';
import text from '../../utils/text';




let heading = <HeadAnimation/>;

export const Main=(props)=>{

  useEffect(()=>{  
    if(pixelRatio <= 2 && isMobile && !isIphone)
    {
      heading = <Heading onClick={props.playChord} onRelease={props.stopChord} />;
    }
    else
    {
      heading= <HeadAnimation onClick={props.playChord} onRelease={props.stopChord}/>
    }
  });

  

  return( 
    <div className="main">
          <header>
            <NavBar lang={props.lang} setLang={props.setLang} setPage={props.setPage}/>
          </header>
          {heading}
          <Link to='play' className='no_link_decoration'>
            <button className="button" onClick={()=>{
              props.setPage('play');firebase.analytics().logEvent('pressed_play');
              }}>{text.home.button[props.lang]}</button>
          </Link>
          <p>{text.home.text[props.lang]}</p>
          <div className='socialmedia_icons'>
                <ul>
                    <li><a href='http://www.instagram.com/omrinuri' rel="noopener noreferrer" target="_blank" ><img className="social_icon"  alt='instagram' src={instagramIcon}/></a></li>
                    <li><a href="https://www.facebook.com/theomrinuriproject" rel="noopener noreferrer" target="_blank" ><img className="social_icon" alt='facebook' src={facebookIcon} /></a></li>
                    <li><a href="https://www.youtube.com/channel/UCWTtkU868XGUQy0uMJt71kA" rel="noopener noreferrer" target="_blank"><img className="social_icon" alt='youtube' src={youtubeIcon} /></a></li>
                    <li><a href="https://github.com/onurio" rel="noopener noreferrer" target="_blank" ><img className="social_icon"  alt='github' src={githubIcon} /></a></li>
                </ul>
          </div>
    </div>  
    
  );
}