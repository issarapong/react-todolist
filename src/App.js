import './App.scss';
import { FaHome } from 'react-icons/fa';

function App() {
  return (
    <div className='container'>
     {/* Header */}
     <header className='header'>
     <span>
  <FaHome />
</span>
      <h3>TODOLIST</h3>
      </header>



     {/* Sidebar*/}
     <aside className='sidebar'>Sidebar</aside>




     {/* content */}
     <main className='content'>Content</main>

    </div>
  );
}

export default App;
