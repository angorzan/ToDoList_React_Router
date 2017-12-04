import React from 'react';
import ToDoItem from './toDoItem.jsx'
import ToDoList from "./toDoList.jsx";

class TasksToDo extends React.Component {
    render() {
        const tasksTodo = [];
        console.log('Tasks to do: ' + tasksTodo);
        const listOfToDo = tasksTodo.map((item, i) => {
            return (
                <ToDoItem item={item} key={i} index={i} />
            )
        });
        return (
            <div>

                <div className="container tasks_to_do">
                    <h1>To Do Tasks</h1>
                    <div className="form-group">
                        <ul>
                            {listOfToDo}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

module.exports = TasksToDo;