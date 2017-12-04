import React from 'react';


class DoneItem extends React.Component {
    handleClickToRemove = () => {
        console.log('Task removed');
        this.props.removeDone(this.props.index);
    };

    render() {
        return <li>
            {this.props.item}
            <button className="removeTaskButton btn btn-danger" onClick={this.handleClickToRemove}>Remove</button>
        </li>
    }
}




module.exports = DoneItem;