import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Posts from "../Blog/Posts/Posts";
//import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        {/* This switch element is used to load one Route at a time */}
        <Switch>
          
          {/* Order matters here because if we use the :id route first, 'new-post' will be interpreted as an id as well when it is not, casuing errors in the app */}
          <Route path="/new-post" component={NewPost} /> 
          <Route path="/posts" component={Posts} />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
