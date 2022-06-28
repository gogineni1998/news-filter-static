import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <div className={`text-center shadow-lg p-4 mb-4 bg-info`}>
                <h1 className='p-5 text-light'>NEWS FEED</h1>
                <input className='p-2'
                    onChange={(e) => this.props.changeColor(e)}
                />
                <div className="alert alert-success my-3 ">
                    <strong>Number of Results Found : </strong> {this.props.count}
                </div>
            </div>
        )
    }

}
export default Header;