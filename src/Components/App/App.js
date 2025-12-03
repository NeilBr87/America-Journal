import './App.css';
import Countries from '../Countries';
import CountriesDesktop from '../CountriesDesktop/Index';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
      <div className="glow-ring" aria-hidden="true"></div>
      <div className="app-surface">
        <div className="hero-kicker">Travel atlas · New UI</div>
        <h1 className="hero-title">Neil &amp; Steph's Immersive Journals</h1>
        <p className="hero-subtitle">
          Choose a journey to step into rich, day-by-day storytelling, captured with vibrant photography and detailed notes.
          The refreshed layout keeps every page aligned—whether you're scrolling on mobile or exploring on desktop.
        </p>

        {isMobile ? <Countries /> : <CountriesDesktop />}
      </div>
    </div>
  );
}

export default App;
