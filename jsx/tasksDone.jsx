import React from 'react';
import DoneItem from './doneItem.jsx'
import ToDoList from "./toDoList.jsx";


class TasksDone extends React.Component {


    render() {
        const tasksDone = [];
        console.log('Tasks done: ' + tasksDone);
        const listOfDone = tasksDone.map((item, i) => {
            return (
                <DoneItem item={item} key={i} index={i} />
            )
        });
        return (
            <div>
                <div className="container tasks_done">
                    <h1>Done Tasks</h1>
                    <div className="form-group">
                        <ul>
                            {listOfDone}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}






module.exports = TasksDone;