import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';
import Reactooltip from 'react-tooltip';

const logoUri = [
  {
    image: './images/jest-logo.svg',
    caption: 'Jest',
  },
  {
    image: './images/mocha-logo.svg',
    caption: 'Mocha',
  },
  {
    image: './images/chai-logo.png',
    caption: 'Chai',
  },
];

const SkillsComponentTests: React.FC = () => {
  const [showLogos, setShowLogos] = useState(false);

  let divRef = React.createRef<HTMLDivElement>();

  const trail = useTrail(logoUri.length, {
    from: {
      transform: 'rotateZ(0deg)',
      opacity: 0,
    },
    transform: showLogos ? 'rotateZ(0deg)' : 'rotateZ(360deg)',
    opacity: showLogos ? 1 : 0,
  });

  const handleScroll = (e: any) => {
    const scrollingElement = e.target.scrollingElement;
    const node = divRef.current;

    if (node && scrollingElement) {
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
    <div className='tests-container' ref={divRef}>
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
      <h2>Test Libraries</h2>
    </div>
  );
};

export default SkillsComponentTests;