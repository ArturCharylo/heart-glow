import { useState } from 'react';
import HeartNeon from './components/heartNeon';
import './styles/App.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className={`app-wrapper ${showContent ? 'ignited' : ''}`}>
      {/* Background container for the animated flames glow */}
      <div className="bg-flames"></div>
      
      <HeartNeon onActivated={() => setShowContent(true)} />

      <main className={`main-content ${showContent ? 'visible' : ''}`}>
        <header>
          <h1 className="pulsating-text">PIĘKNY SYF</h1>
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