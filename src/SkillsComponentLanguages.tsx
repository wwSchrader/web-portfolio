import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';
import './SkillsComponentLanguages.css';
import Reactooltip from 'react-tooltip';

const logoUri = [
  {
    image: './images/HTML5_logo_and_wordmark.svg',
    caption: 'HTML5',
  },
  {
    image: './images/CSS3_logo_and_wordmark.svg',
    caption: 'CSS3',
  },
  {
    image: './images/js.png',
    caption: 'Javascript',
  },
  {
    image: './images/Java_logo.svg',
    caption: 'Java',
  }
];

const SkillsComponentLanguages: React.FC = () => {
  const [showLogos, setShowLogos] = useState(false);

  let divRef = React.createRef<HTMLDivElement>();

  const trail = useTrail(logoUri.length, {
    from: {
      transform: 'translate3d(500px,0,0)',
      opacity: 0,
    },
    transform: showLogos ? 'translate3d(0px,0,0)' : 'translate3d(500px,0,0)',
    opacity: showLogos ? 1 : 0,
  });

  const handleScroll = (e: any) => {
    const scrollingElement = e.target.scrollingElement;
    const node = divRef.current;

    if (node && scrollingElement) {
      if ((scrollingElement.clientHeight + scrollingElement.scrollTop) > (node.offsetTop + 200)) {
        setShowLogos(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });

  return (
    <div className='language-container' ref={divRef}>
      <h2 className='header'>Languages</h2>
      <div className='logo-container'>
        {trail.map(({...props}, index) => (
          <animated.div className='logo' style={props}>
            <img
              key={logoUri[index].image}
              alt={logoUri[index].caption}
              src={logoUri[index].image}
              data-tip
              data-for={logoUri[index].image}
            />
            <Reactooltip id={logoUri[index].image}>{logoUri[index].caption}</Reactooltip>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default SkillsComponentLanguages;
