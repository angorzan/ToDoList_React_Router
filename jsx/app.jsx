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
import TaksToAdd from "./tasksToAdd.jsx";
import TasksToDo from "./tasksToDo.jsx";
import TasksDone from "./tasksDone.jsx";
import NotFound from "./notFound.jsx";


document.addEventListener('DOMContentLoaded', function () {
    console.log("Domek załadowany!");


    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={TaksToAdd}>
                        <Route path='/todo' component={TasksToDo}/>
                        <Route path='/done' component={TasksDone}/>
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>

            )

        }
    }


    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});