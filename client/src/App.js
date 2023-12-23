import React, { useEffect, useState } from 'react'
import RouterIndex from './router/RouterIndex'

function App() {

  const [scrollTop, setScrollTop] = useState(0);


  useEffect(() => {
    const handleScroll = event => {
      setScrollTop(Math.round(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return (
    <div>
      <RouterIndex />
    </div>
  )
}

export default App