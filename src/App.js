import { Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './blogsDetails';
import Home from './home';
import Navbar from './navbar';
import NewBlog from './newBlog';
import NotFound from './notFound';

function App() {

  

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/newblog' element={<NewBlog/>}></Route>
        <Route path='/blogsdetails/:id' element={<BlogDetails/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>

       </Routes>
      </div>
      
    </div>
  );
}

export default App;


