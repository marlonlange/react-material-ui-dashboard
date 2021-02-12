import React, {Component} from 'react'
import NavBar from './components/NavBar'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useDarkMode: false,
    }
  }

  switchDarkMode() {
    this.setState({
      useDarkMode: !this.state.useDarkMode,
    });
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        type: this.state.useDarkMode ? 'dark' : 'light'
      }
    })

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div>
            <NavBar onClick={() => this.switchDarkMode()}/>
          </div>
        </CssBaseline>
      </ThemeProvider>
    );
  }
}

export default App;
