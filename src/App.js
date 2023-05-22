import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CHome from './Codecomponents/Home';
import NavigationBar from "./components/NavigationBar";
import FNavigationBar from "./Fcomponents/NavigationBar";
import ANavigationBar from "./Acomponents/NavigationBar";
import Welcome from "./components/Welcome";
import Register from "./components/User/Register";
import Login from "./components/User/Login";
import Code from "./codeeditor/Code"
import FLogin from "./Fcomponents/faculty/Login";
import ALogin from "./Acomponents/admin/Login";
import FRegister from "./Fcomponents/faculty/Register";
import FHome from "./Fcomponents/Home";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AHome from "./Acomponents/Home";
import Practice from "./components/User/Student/cards";
import EditStu from "./components/EditStu"; 
import Canalysis from "./components/Canalysis";
import Cplusanalysis from "./components/Cplusanalysis";
import { LoginOutlined } from "@mui/icons-material";
import Codeproblemc from "./Fcomponents/Codeproblemc"
const App = () => {
  window.onbeforeunload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    
    if (e) 
    {
      e.returnValue = "";
    }
    return "";
  };
  const isLoggedIn=window.localStorage.getItem("loggedIn");
  console.log(isLoggedIn, "login status");
  return (
    
    <Router>
      
      <Switch>
      <Route path="/admin/home" exact component={ANavigationBar} />
      <Route path="/faculty/home" exact component={FNavigationBar} />
      <NavigationBar />
      </Switch>
    
        <Row>
          <Col >
            <Switch>
              
              <Route path="/" exact component={Welcome} />
              <Route path="/home" exact component={isLoggedIn ? Home: Login} />    
              <Route path="/admin/home" exact component={isLoggedIn ? AHome: ALogin} />
              <Route path="/faculty/home" exact component={isLoggedIn ? FHome: FLogin} />
              <Route path="/cprg" exact component={isLoggedIn ? Canalysis: Login} />
              <Route path="/cplusprg" exact component={isLoggedIn ? Cplusanalysis: Login} />
              <Route path="/admin/register" exact component={isLoggedIn ? Register: ALogin} />
              <Route path="/register" exact component={Register} />
              <Route path="/faculty/register" exact component={ FRegister} />
              <Route path="/admin/fregister" exact component={isLoggedIn ? FRegister: ALogin} />
              <Route path="/login" exact component={Login} />
              <Route path="/faculty/login" exact component={isLoggedIn ? FLogin: FLogin} />
              <Route path="/faculty/Codeproblemc" exact component={isLoggedIn ? Codeproblemc: FLogin} />
              <Route path="/Practice" exact component={isLoggedIn ? Practice: Login} />
              <Route path="/admin/login" exact component={isLoggedIn ? ALogin: ALogin} />
               <Route path="/editor" exact component={isLoggedIn ? Code: Login} /> 
               <Route path="/question" exact component={isLoggedIn ? CHome: Login} /> 
               <Route path="/admin/editStu/:id" exact component={isLoggedIn ? EditStu: ALogin}></Route>
               <Route path="/:id" exact component={EditStu}/>
              <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="Student Logged Out Successfully." />
                )}
              />
            </Switch>
          </Col>
        </Row>
      <Footer />
    </Router>
  );
};

export default App;
