import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';
import Reactooltip from 'react-tooltip';

const logoUri = [
  {
    image: './images/mongodb-logo-rgb-j6w271g1xn.jpg',
    caption: 'MongoDB',
  },
  {
    image: './images/Redis_Logo.svg',
    caption: 'Redis',
  },
  {
    image: './images/sqlite-logo.svg',
    caption: 'SQLite',
  },
  {
    image: './images/firebase-logo.svg',
    caption: 'Firebase',
  },
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
    <div className='databases-container' ref={divRef}>
      <h2>Databases</h2>
      <div className='logo-container'>
        {trail.map(({...props}, index) => (
          <animated.div key={logoUri[index].image} className='logo' style={props}>
            <img
              src={logoUri[index].image}
              alt={logoUri[index].caption}
              data-tip
              data-for={logoUri[index].image}
            />
            <Reactooltip id={logoUri[index].image}>{logoUri[index].caption}</Reactooltip>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsComponentDatabases;
