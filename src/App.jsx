import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <article className='px-12 relative'>
        <Outlet />
      </article>
    </>
  );
}

export default App;
