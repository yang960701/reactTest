import Hello from './component/Hello';
import './App.css';
import Welcome from './component/Welcome';
import styles from './App.module.css'
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

// RestApi

// Create : Post
// Read : Get
// Update : Put
// Delete : DELETE

function App() {
  return (
    <BrowserRouter>
       <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<DayList />} /> 
          <Route path='/day/:day' element={<Day/>}/>
          <Route path='/create_word' element={<CreateWord/>}/>
          <Route path='/create_day' element={<CreateDay/>}/>
          <Route path="*" element={<EmptyPage />}/>
        </Routes>
        
        {/* <Hello age={10}></Hello>
        <Hello age={20}></Hello>
        <Hello age={30}></Hello>
        <Welcome></Welcome>
        <div className={styles.Box}></div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
