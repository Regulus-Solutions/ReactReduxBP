import './App.css';
import { useDispatch } from 'react-redux';
import ReactRouter from './ReactRouter';
import Header from './genericComponents/Header';

function App() {
  const dispatch = useDispatch()
 
  return (
    <div className="App">
      <Header/>
      <ReactRouter/>
    </div>
  );
}

export default App;
