import { createContext, useState } from 'react';
import './App.css';
import { Content } from './Components/Content';

export const Mycontext = createContext()

function App() {
  const [theme, setTheme] = useState(false)
  const value1="hello"

  return (
    <div className="App">
      <Mycontext.Provider value={[theme,setTheme,value1]}>
      <Content />
      </Mycontext.Provider>
    
    </div>
  );
}

export default App;
