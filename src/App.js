import './App.css';
import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Homepage } from './pages/Home';
import { EditPage } from './pages/Edit';

function App() {
  return (
    <div className="App container">
      <header className="text-center my-4">
        <h1 className="display-4">Meme Generator</h1>
      </header>
      <div className="content">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/edit/' element={<EditPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
