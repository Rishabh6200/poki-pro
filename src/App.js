import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ReadMore from './components/ReadMore';
import Empty from './components/Empty';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Empty />}>
            <Route index element={<Home />} />
            <Route path='/readmore/:id' element={<ReadMore />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
