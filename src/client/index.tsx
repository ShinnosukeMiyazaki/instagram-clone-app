import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./css/style.css";
import "./css/reset.css";
import Home from "./components/page/Home";
import Login from "./components/page/Login";
import Signup from "./components/page/Signup";
import MyPage from "./components/page/MyPage";
import NotFound from "./components/page/NotFound";

const Index = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/mypage" component={MyPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

render(<Index />, document.getElementById("root"));
