import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TableContainer from './components/TableContainer';
import ModalView from './components/ModalView';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <TableContainer />
      <ModalView />
    </div>
  );
}

export default App;
