import { useState } from 'react';
import HeartNeon from './components/heartNeon';
import './styles/App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isIgnited, setIsIgnited] = useState(false);

  return (
    <div className={`app-wrapper ${isIgnited ? 'bg-ignited' : ''}`}>
      <HeartNeon
        onActivated={() => setShowContent(true)}
        onIgnite={() => setIsIgnited(true)}
      />

      <main className={`main-content ${showContent ? 'visible' : ''}`}>
        <header>
          <h1>PIĘKNY SYF</h1>
          <nav>
            <ul>
              <li>Gallery</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <section className="hero-text">
          <p>This is where your story begins after the spark.</p>
        </section>
      </main>
    </div>
  );
}

export default App;