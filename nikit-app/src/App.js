import Mainpage from './Components/MainPage';
import './Style/Main.scss';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
    <Routes>
        <Route path='*' element={<Mainpage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


