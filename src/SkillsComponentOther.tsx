import React, {useState, useEffect} from 'react';
import {useTrail, animated} from 'react-spring';
import Reactooltip from 'react-tooltip';

const logoUri = [
  {
    image: './images/heroku-logo.svg',
    caption: 'Heroku',
  },
  {
    image: './images/github-logo.png',
    caption: 'Github',
  },
  {
    image: './images/Git-logo.svg',
    caption: 'Git',
  },
  {
    image: './images/redux-logo.png',
    caption: 'Redux',
  },
  {
    image: './images/Boostrap_logo.svg',
    caption: 'Bootstrap',
  },
  {
    image: './images/mongoose-logo.png',
    caption: 'Mongoose',
  },
  {
    image: './images/socket-io.svg',
    caption: 'Socket.io',
  },
  {
    image: './images/passport-logo.png',
    caption: 'Passport.JS'
  },
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
    <div className='other-container' ref={divRef}>
      <h2>Other</h2>
      <div className='logo-container'>
        {trail.map(({...props}, index) => (
          <animated.div key={logoUri[index].image} className='logo' style={props}>
          <img
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
  );
};

export default SkillsComponentOther;