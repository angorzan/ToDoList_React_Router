import React from 'react';


class ToDoItem extends React.Component {

    handleClickToRemove = () => {
        console.log('Task removed');
        this.props.removeTask(this.props.index);

    };
    handleClickToComplete = () => {
        console.log('Task done');
        this.props.completeTask(this.props.index);
    };

    render() {
        return <li>
            {this.props.item}
            <button className="removeTaskButton btn btn-danger" onClick={this.handleClickToRemove}>Remove</button>
            <button className="addTaskButton btn btn-success" onClick={this.handleClickToComplete}>Done</button>
        </li>
    }
}




module.exports = ToDoItem;