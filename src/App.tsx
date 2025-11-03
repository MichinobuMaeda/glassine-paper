import { useState, type JSX } from 'react';
import './App.css';
import SvgMenu from './icons/SvgMenu';
import SvgMoreVert from './icons/SvgMoreVert';
import SvgSquare from './icons/SvgSquare';
import SvgGitHub from './icons/SvgGitHub';

function App(): JSX.Element {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className="nav-drawer-layout">
      <div className="content-area">
        <header className="app-bar sticky">
          <button>
            <SvgMenu />
          </button>
          <img src="./favicon.svg" alt="Glassine Paper" />
          <div className="title-area">
            <h1 className="title">Glassine Paper</h1>
            <div className="subtitle">CSS for Material Design 3</div>
          </div>
          <button onClick={() => setMenuVisible(!menuVisible)}>
            <SvgMoreVert />
          </button>
        </header>

        <div className="tabs">
          <a href="../sample">Sample</a>
          <button className="active">Theme</button>
          <a href="#">
            <SvgSquare />
            Tab item
          </a>
        </div>

        {menuVisible && (
          <div className="menu">
            <a href="https://github.com/MichinobuMaeda/glassine-paper">
              <SvgGitHub />
              GitHub
            </a>
          </div>
        )}

        <main>
          <div className="row">Under construction</div>
          <h3>Theme Color Palette</h3>
        </main>
      </div>
    </div>
  );
}

export default App;
