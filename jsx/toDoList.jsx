import React from 'react';
import TaksToAdd from "./tasksToAdd.jsx";
import TasksToDo from "./tasksToDo.jsx";
import TasksDone from "./tasksDone.jsx";



class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            tasksTodo: [],
            tasksDone: []
        };
        this.addTask = (task) => {
            console.log('ToDoList received task: ' + task);
            this.state.tasksTodo.push(task);
            this.setState({

                tasksTodo: this.state.tasksTodo,
            })
        };
        this.removeTask = (key) => {
            console.log('ToDoList received task to remove: ' + this.state.tasksTodo.splice(key, 1));
            this.setState({
                tasksTodo: this.state.tasksTodo,
            });
        };
        this.removeDone = (key) => {
            console.log('ToDoList received done task to remove: ' + this.state.tasksDone.splice(key, 1));
            this.setState({
                tasksDone: this.state.tasksDone,
            });
        };


        this.completeTask = (key) => {
            const task = this.state.tasksTodo.splice(key, 1);
            this.state.tasksDone.push(task);
            console.log('ToDoList received task to complete: ' + task);
            this.setState({
                tasksTodo: this.state.tasksTodo,
                tasksDone: this.state.tasksDone
            });
        }
    }

    render() {

        return (
            <div className="form-group">

                <TaksToAdd addTask={this.addTask}/>
                <TasksToDo tasksTodo={this.state.tasksTodo} removeTask={this.removeTask}
                           completeTask={this.completeTask}/>
                <TasksDone tasksDone={this.state.tasksDone} removeDone={this.removeDone}/>
            </div>
        )
    }
}

module.exports = ToDoList;