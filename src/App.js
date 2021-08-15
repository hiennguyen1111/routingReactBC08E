import './App.css';
// Cau hinh routing
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Header from './components/HomePage/Header';
import UseStateDemo from './pages/Hook/UseStateDemo/UseStateDemo';
import UseEffectDemo from './pages/Hook/UserEffectDemo/UseEffectDemo';
import ReduxHookDemo from './pages/Hook/ReduxHookDemo/ReduxHookDemo';
import AxiosDemo from './pages/AxiosDemo/AxiosDemo';
import AxiosDemoRFC from './pages/AxiosDemo/AxiosDemoRFC';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route exact path="/home" component={Home} render={(propsRoute)=>{
        return <div>
          This is homepage!
          <Home />
        </div>
      }} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/about" component={About} />
      <Route exact path="/usestate" component={UseStateDemo} />
      <Route exact path="/useeffect" component={UseEffectDemo} />
      <Route exact path="/reduxhook" component={ReduxHookDemo} />
      <Route exact path="/ajaxrcc" component={AxiosDemo} />
      <Route exact path="/ajaxrfc" component={AxiosDemoRFC} />
      <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
