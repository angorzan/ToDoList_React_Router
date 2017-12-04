import React from 'react';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import TaksToAdd from "./tasksToAdd.jsx";
import TasksToDo from "./tasksToDo.jsx";
import TasksDone from "./tasksDone.jsx";
import NotFound from "./notFound.jsx";


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
            <Router history={hashHistory}>
                <Route path='/' component={TaksToAdd} addTask={this.addTask}>
                    <Route path='/todo' component={TasksToDo} tasksTodo={this.state.tasksTodo}
                           removeTask={this.removeTask} completeTask={this.completeTask}/>
                    <Route path='/done' component={TasksDone} tasksDone={this.state.tasksDone}
                           removeDone={this.removeDone}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

module.exports = ToDoList;