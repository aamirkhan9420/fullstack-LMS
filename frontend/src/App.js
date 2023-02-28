
import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';
// let AllRoutes=lazy(()=>import('./Components/Routes/AllRoutes'))
function App() {

  return (
    <div className="App"> 
   
      {/* <Suspense fallback={<div>Loading....</div>}> */}
<AllRoutes />
      {/* </Suspense> */}
   
    
    
    </div>
  );
}

export default App;
