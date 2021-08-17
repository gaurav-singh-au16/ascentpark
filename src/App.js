import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './container/HomePage';
import AddData from './container/AddData';
import UpdateData from './container/UpdateData';

function App() {
  return (
    <BrowserRouter>
        <div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/addData" exact component={AddData}/>
          <Route path="/updateData" exact component={UpdateData}/>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
