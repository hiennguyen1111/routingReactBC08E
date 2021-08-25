import "./App.css";
// Cau hinh routing
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Header from "./components/HomePage/Header";
import UseStateDemo from "./pages/Hook/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/Hook/UserEffectDemo/UseEffectDemo";
import ReduxHookDemo from "./pages/Hook/ReduxHookDemo/ReduxHookDemo";
import AxiosDemo from "./pages/AxiosDemo/AxiosDemo";
import AxiosDemoRFC from "./pages/AxiosDemo/AxiosDemoRFC";
import ApiMiddleWare from "./pages/AxiosDemo/ApiMiddleWare";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import HOC from "./pages/HOC/HOC";
import { HomeTemplate } from "./templates/HomeTemplate";
import { UserTemplate } from "./templates/UserTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import AntDemo from "./pages/AntDemo/AntDemo";

// Thu vien giup chuyen huong trang( history) o cac file khong phai component
import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history} >
      {/* <Header /> */}
      <Switch>
        {/* <Route
          exact
          path="/home"
          component={Home}
          render={(propsRoute) => {
            return (
              <div>
                This is homepage!
                <Home />
              </div>
            );
          }}
        /> */}

        {/* <Route
          exact
          path="/about"
          component={About}
          render={(propsRoute) => {
            return (
              <div>
                This is aboutpage!
                <About />
              </div>
            );
          }}
        /> */}

        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />

        <UserTemplate path="/login" component={Login} />
        <UserTemplate path="/register" component={Register} />
        
        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UseEffectDemo} />
        <HomeTemplate exact path="/reduxhook" component={ReduxHookDemo} />
        <HomeTemplate exact path="/ajaxrcc" component={AxiosDemo} />
        <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate exact path="/apimiddleware" component={ApiMiddleWare} />
        <HomeTemplate exact path="/detail/:id" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <HomeTemplate exact path="/hoc" component={HOC} />

        <AdminTemplate path="/admin/antd" component={AntDemo} />

        <HomeTemplate exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
