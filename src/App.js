import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReviewsComp from './components/ReviewsComp/ReviewsComp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='review' element={<ReviewsComp></ReviewsComp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
