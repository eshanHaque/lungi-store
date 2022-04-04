import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='review' element={<CustomerReview></CustomerReview>}></Route>
      </Routes>
    </div>
  );
}

export default App;
