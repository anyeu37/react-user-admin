import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h3 className="display-5">Project quan ly thanh vien</h3>
                <p className="lead">voi du lieu json</p>
                <hr className="my-1" />
            </div>
        );
    }
}

export default Header;