import React, {useState, useEffect} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import './NavBarComponent.css';

const NavBarComponent: React.FC = () => {
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

  return (
    <div id='navbar' className={stickNav ? 'sticky' : ''} ref={divRef}>
      <NavLink smooth to='/#splash'>Home</NavLink>
      <NavLink smooth to='/#bio'>Bio</NavLink>
      <NavLink smooth to='/#skills'>Skills</NavLink>
      <NavLink smooth to='/#projects'>Projects</NavLink>
      <NavLink smooth to='/#contact'>Contact</NavLink>
    </div>
  );
}

export default NavBarComponent;