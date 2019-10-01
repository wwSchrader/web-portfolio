import React, {useState, useEffect} from 'react';
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
      <a href='/#'>Home</a>
      <a href='/#'>Bio</a>
      <a href='/#'>Skills</a>
      <a href='/#'>Contact</a>
    </div>
  );
}

export default NavBarComponent;