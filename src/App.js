
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useFormContext } from "./FormContext";
import Admin from "./pages/Admin";
import Homepage from './pages/Homepage';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
 
 
  return (
    <ChakraProvider>

    
    <BrowserRouter>
    
    <Routes>
    <Route path="/" exact element={<Homepage />} />

      <Route path="/admin" exact element={<Admin />} />
    </Routes>
    </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
