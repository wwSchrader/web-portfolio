import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';

const logoUri = [
  './images/heroku-logo.svg',
  './images/github-logo.png',
  './images/Git-logo.svg',
  './images/redux-logo.png',
  './images/Boostrap_logo.svg',
  './images/mongoose-logo.png',
  './images/socket-io.svg',
  './images/passport-logo.png',
];

const SkillsComponentOther: React.FC = () => {
  const [showLogos, setShowLogos] = useState(false);

  let divRef = React.createRef<HTMLDivElement>();

  const trail = useTrail(logoUri.length, {
    from: {
      transform: 'translate3d(0,200px,0)',
      opacity: 0,
    },
    transform: showLogos ? 'translate3d(0,0,0)' : 'translate3d(0,200px,0)',
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
    <div className='other-container' ref={divRef}>
      <h2>Other</h2>
      <div className='logo-container'>
        {trail.map(({...props}, index) => (
          <animated.img
            key={logoUri[index]}
            style={props}
            src={logoUri[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsComponentOther;