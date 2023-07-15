import { Component } from "react";
class TopBar extends Component{
    render() {
        return(  <div className="post-topbar">
        <div className="user-picy">
          <img src="./images/chandan-pic.png" alt="" />
        </div>
        <div className="post-st">
          <ul>
            <li>
              <a
                className="post_project"
                href="./index.html#"
                title=""
                >Post a Project</a
              >
            </li>
            <li>
              <a
                className="post-jb active"
                href="./index.html#"
                title=""
                >Post a Job</a
              >
            </li>
            <li>
              <a className="test active" href="#" title="">Test</a>
            </li>
          </ul>
        </div>
      </div>

        );
    }
}
export default TopBar;