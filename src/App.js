import { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import { UserContext } from './Dropdown/user-context';


function App() {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <UserContext.Provider value={{isShown, setIsShown}}>
        <Dropdown />
      </UserContext.Provider>
    </div>
  );
}

export default App;