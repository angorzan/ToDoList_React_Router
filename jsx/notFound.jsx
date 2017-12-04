import React from 'react';
import {
    Link

} from 'react-router';





class NotFound extends React.Component {
    render() {
        return <div className="container">
            <h1>Unfortunately nothing was found. Back to <Link to="/">adding tasks</Link></h1>
        </div>
    }
}

module.exports = NotFound;