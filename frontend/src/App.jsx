import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

// import core package
import { useEffect } from 'react';

// import animation
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 0,
      duration: 1000,
      once: true,
      mirror: true,
    });
  }, []);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
