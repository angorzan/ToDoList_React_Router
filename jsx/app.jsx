import React from 'react';
import ReactDOM from 'react-dom';
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';
import ToDoList from "./toDoList.jsx";


document.addEventListener('DOMContentLoaded', function () {
    console.log("Domek załadowany!");


    class App extends React.Component {
        render() {
            return (
                <ToDoList />
            )

        }
    }


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});