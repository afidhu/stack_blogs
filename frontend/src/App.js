import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/pages/home';
import Layout from './component/layout/layout';
import Viewpost from './component/pages/viewpost'
import Notfound from './component/layout/notfound';
import Login from './component/layout/login';
import PostEdit from './component/pages/postEdit';
import Register from './component/layout/register'
import Logout from './component/layout/logout';
import Footer from './component/layout/footer';
import Index from './component/pages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout/>
        <Routes>
          <Route exact path='/' element={<Index/>}  ></Route>
          <Route exact path='/home/' element={<Home/>}  ></Route>
          <Route exact path='home/post/:post_id/' element={<Viewpost/>}  ></Route>
          <Route exact path='editpost/:post_id/' element={<PostEdit/>}  ></Route>
          <Route exact path='login/' element={<Login/>}  ></Route>
          <Route exact path='register/' element={<Register/>}  ></Route>
          <Route exact path='logout/' element={<Logout/>}  ></Route>


          <Route exact path='*' element={<Notfound/>}  ></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
