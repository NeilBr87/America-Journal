import './App.css';
import Countries from '../Countries';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function App() {

      const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
      {isMobile && 
      <Countries />}

      {!isMobile && <div style={{marginTop: "20vh"}}>
          <h2>Sorry! This project is all about mobile-first development.</h2>
          <h4>Please feel free to review this content on a mobile device or by using browser tools.</h4>
          <h4>Expected ETA for desktop version of this: June 2025.</h4>
          <img id="desktopImg" src="https://deckerdevs.com/hubfs/mobile-first-mobile-last-meme.jpg"></img>
        </div>}
    </div>
  );
}

export default App;
