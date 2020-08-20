import React from "react";
import {Link} from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <ul>
          <li>
            <Link to='/archives' className="btn btn-danger">archives</Link>
          </li>
          <li>
            <Link to='/settings' className="btn btn-success">settings</Link>
          </li>
          <li>
            <Link to='/featured' className="btn btn-primary">featured</Link>
          </li>
          {/* <li>
            <NavLink to='/featured' className="btn btn-primary" activeClassName='btn-info'>featured
            </NavLink>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default Layout