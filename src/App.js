import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Deshboard from './components/Dashboard/Deshboard';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import useBlogs from './hooks/useBlogs';
import ContextApi from './components/ContextApi/ContextApi';
import SemanticTag from './components/SemanticTag/SemanticTag';
import BlockInlineBlockInline from './components/BlockInlinBlockInline/BlockInlineBlockInline';

function App() {
  const [blogs, setBlogs] = useBlogs();

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='reviews' element={<Reviews></Reviews>}></Route>
        <Route path='dashboard' element={<Deshboard></Deshboard>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/blogs/context-api' element={<ContextApi></ContextApi>}></Route>
        <Route path='/blogs/semantic-tag' element={<SemanticTag></SemanticTag>}></Route>
        <Route path='/blogs/block-vs-inline-block-vs-inlice' element={<BlockInlineBlockInline />}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
