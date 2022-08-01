
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useFormContext } from "./FormContext";
import Admin from "./pages/Admin";
import Homepage from './pages/Homepage';
import { ChakraProvider } from '@chakra-ui/react'
import CountDownSpinner from './pages/countdownSpinner';


function App() {
 
 
  return (
    

    
    <BrowserRouter>
    
    <Routes>
    <Route path="/" exact element={<Homepage />} />

      <Route path="/admin" exact element={<Admin />} />
      <Route path="/success" exact element={<CountDownSpinner />} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
