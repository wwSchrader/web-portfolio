import React, {useState, useEffect} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './NavBarComponent.css';

interface IProps {
  activeNav: string,
}

const NavBarComponent: React.FC<IProps> = (props) => {
  const [stickNav, setStickNav] = useState(false);
  const [initialOffsetTop, setInitialOffsetTop] = useState<null | number>(null);

  let divRef = React.createRef<HTMLDivElement>();

  const handleScroll = (e: any) => {
    const scrollingElement = e.target.scrollingElement;
    const node = divRef.current;
    if (node) {
      if (!initialOffsetTop) {
        // saves the initial offsetTop so it can unstuck when scrolling back over spash component
        setInitialOffsetTop(node.offsetTop);
      } else if ((scrollingElement.scrollTop) > (initialOffsetTop)) {
        setStickNav(true);
      } else {
        setStickNav(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });

  function determineActiveLink(link: string) {
    return (link === props.activeNav) ? true : false
  }

  return (
    <div id='navbar' className={stickNav ? 'sticky' : ''} ref={divRef}>
      <NavLink smooth to='/#splash' activeClassName='active' isActive={() => determineActiveLink('splash')}>Home</NavLink>
      <NavLink smooth to='/#bio' activeClassName='active' isActive={() => determineActiveLink('bio')}>Bio</NavLink>
      <NavLink smooth to='/#skills' activeClassName='active' isActive={() => determineActiveLink('skills')}>Skills</NavLink>
      <NavLink smooth to='/#projects' activeClassName='active' isActive={() => determineActiveLink('projects')}>Projects</NavLink>
      <NavLink smooth to='/#contact' activeClassName='active' isActive={() => determineActiveLink('contact')}>Contact</NavLink>
    </div>
  );
}

export default NavBarComponent;