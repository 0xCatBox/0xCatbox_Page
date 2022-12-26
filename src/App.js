import './App.css';
import { useEffect } from 'react';
import Main from './pages/mainPage';
function App() {
  useEffect(() => { 
    window.onbeforeunload = function pushRefresh() {
        window.scrollTo(0, 0);
      };
    }, []);

  return (
      <div >
        <Main />
      </div>
  );
}

export default App;
