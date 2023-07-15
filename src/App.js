import './App.css';
import Create from './Components/Create';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Read from './Components/Read';
import Update from './Components/Update';
import Detail from './Components/Detail';


function App() {
  return (

    <div className="App ">
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<div className=' my-5' >
          <h1 className='text-center my-3'>User Details</h1>
          <Read />
        </div>} />
        <Route path='/update' element={<Update />} />
        {/* <Route path='/detail/:data' element={<Detail />} /> */}


      </Routes>
    </div>

  );
}

export default App;
