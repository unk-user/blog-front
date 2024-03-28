import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <article className='px-10'>
        <Outlet />
      </article>
    </>
  );
}

export default App;
