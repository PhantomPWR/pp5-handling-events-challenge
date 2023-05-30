import css from './App.module.css';
import Sidebar from "./components/Sidebar";
import NavBarForm from './components/NavBarForm';
// import Content from './components/Content';
import Content from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;