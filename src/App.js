
import AppBar from './components/header/AppBar'
import { ThemeProvider } from '@material-ui/styles';
import theme from './UI/Theme'
import LogIn from './components/auth/signIn'
import {Route,Switch} from 'react-router-dom'
import Signup from './components/auth/signup'

function App() {
  return (
  
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/register" component={Signup}/>
        <Route exact path="/home" component={AppBar}/>
        </Switch>  
    </ThemeProvider>
  
  );
}

export default App;
