import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';

const logoUri = [
  './images/mongodb-logo-rgb-j6w271g1xn.jpg',
  './images/Redis_Logo.svg',
  './images/sqlite-logo.svg',
  './images/firebase-logo.svg',
];

const SkillsComponentDatabases: React.FC = () => {
  const [showLogos, setShowLogos] = useState(false);

  let divRef = React.createRef<HTMLDivElement>();

  const trail = useTrail(logoUri.length, {
    from: {
      transform: 'scale3d(1,1,1)',
      opacity: 0,
    },
    transform: showLogos ? 'scale3d(1,1,1)' : 'scale3d(0,0,0)',
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
    <div className='databases-container' ref={divRef}>
      <h2>Databases</h2>
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

export default SkillsComponentDatabases;
