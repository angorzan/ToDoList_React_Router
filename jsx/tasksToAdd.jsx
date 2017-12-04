import React from 'react';
import {
    IndexLink

} from 'react-router';
import ToDoListHeader from "./toDoListHeader.jsx";
import ToDoList from "./toDoList.jsx";


class TaksToAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newtask: '',

        }
    }

    handleChange = (e) => {
        this.setState({
            newtask: e.target.value,
        });

    };
    handleClickAdd = () => {
        console.log('Task added');
        console.log('New task: ' + this.state.newtask);
        this.props.route.addTask(this.state.newtask);

    };

    render() {
        console.log('Render input');
        const activeLink = {fontWeight: "bold", color: "green", fontStyle: "italic"};
        return (
            <div>
                <div className="container form-group">
                    <ToDoListHeader/>
                    <label className="col-sm-2 control-label">Name:</label>
                    <input className="form-control" type="text" placeholder="Place your task here"
                           onChange={this.handleChange} value={this.state.newtask}/>

                    <button className="addTaskButton btn btn-primary" onClick={this.handleClickAdd}>Add task</button>
                    <ul>
                        <li><IndexLink to="/todo" activeStyle={activeLink}>To do</IndexLink></li>
                        <li><IndexLink to="/done" activeStyle={activeLink}>Done </IndexLink></li>
                    </ul>
                </div>
                { this.props.children }
            </div>
        )
    }
}


module.exports = TaksToAdd;