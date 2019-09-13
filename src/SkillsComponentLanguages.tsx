import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';

const logoUri = [
  './images/HTML5_logo_and_wordmark.svg',
  './images/CSS3_logo_and_wordmark.svg',
  './images/js.png',
  './images/Java_logo.svg',
];

const SkillsComponentLanguages: React.FC = () => {
  const [showLogos, setShowLogos] = useState(false);

  const trail = useTrail(logoUri.length, {
    from: {
      transform: 'translate3d(500px,0,0)',
      opacity: 0,
    },
    transform: showLogos ? 'translate3d(0px,0,0)' : 'translate3d(500px,0,0)',
    opacity: showLogos ? 1 : 0,
  });

  const handleScroll = (e: Event) => {
    setShowLogos(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });

  return (
    <div className='language-container'>
      <h2 className='header'>Languages</h2>
      <div className='logo-continer'>
        {trail.map(({...props}, index) => (
          <animated.img
            key={logoUri[index]}
            style={props}
            src={logoUri[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default SkillsComponentLanguages;
