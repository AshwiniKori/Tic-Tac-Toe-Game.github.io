import logo from './logo.svg';
import './App.css';
import Board from './Components/Board';
import Square from './Components/Square';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="game">

      <Board />
      {/* <Square /> */}
      
    </div>
  );
}

export default App;
