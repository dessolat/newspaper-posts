import { Navigate, Route, Routes } from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import Post from './pages/Post/Post';

function App() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Posts />} />
        <Route path=':id' element={<Post />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
