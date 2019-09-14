import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';

const logoUri = [
  './images/nodejs-new-pantone-black.png',
  './images/express-facebook-share.png',
  './images/iconfinder_react.js_logo_1174949.svg',
  './images/angular.svg',
];

const SkillsComponentFrameworks: React.FC = () => {
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

    if (node) {
      if ((scrollingElement.clientHeight + scrollingElement.scrollTop) > (node.offsetTop + 200)) {
        setShowLogos(true);
      } else {
        setShowLogos(false);
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
    <div className='frameworks-container' ref={divRef}>
      <div className='logo-container'>
        {trail.map(({...props}, index) => (
          <animated.img
            key={logoUri[index]}
            style={props}
            src={logoUri[index]}
          />
        ))}
      </div>
      <h2 className='header'>Frameworks</h2>
    </div>
  )
};

export default SkillsComponentFrameworks;
