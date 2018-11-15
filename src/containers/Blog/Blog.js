import React, { Component } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
//import FullPost from "./FullPost/FullPost";
//import NewPost from "./NewPost/NewPost";
import asyncComponent from '../../hoc/asyncComponent'
const AsyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
});


class Blog extends Component {

    state = {
        auth: true
    }

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
          {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null }
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not found</h1>}></Route>
          {/* <Redirect from="/" to="/posts"/> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
