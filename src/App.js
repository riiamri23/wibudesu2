import React, { useEffect } from 'react';
// import PokemonListing from './pages/pokemon/PokemonListing';
import RouterApp from './router/RouterApp';

function App() {
  useEffect(() => {
    document.body.classList.add('bg-slate-100');
    document.body.classList.add('dark:bg-current');
    document.body.classList.add('transition-colors');
    document.body.classList.add('duration-300');
    //  
  
    return function cleanup() {
      document.body.classList.remove('bg-slate-100');
      document.body.classList.remove('dark:bg-current');
      document.body.classList.remove('transition-colors');
      document.body.classList.remove('duration-300');
    };
  }, []);
 
  return (
      // <PokemonListing />
      <RouterApp />
  );
}

export default App;
