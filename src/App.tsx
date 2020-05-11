import React, { useState } from 'react';
import './App.css';
import {TodoList, TaskType} from './TodoList';

export type FilterValueType = 'all' | 'completed' | 'active';

function App() {

    let [tasks1, setTasks1] = useState< Array<TaskType> >([
        { id: 1, title: 'HTML&CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true},
        { id: 3, title: 'ReactJS', isDone: false},
        { id: 4, title: 'Rest API', isDone: false},
        { id: 5, title: 'GraphQL', isDone: false},
    ])
    let [tasks2, setTasks2] = useState<Array<TaskType>>([
        { id: 1, title: 'Hello world', isDone: true},
        { id: 2, title: 'I am Happy', isDone: false},
        { id: 3, title: 'Yo', isDone: false},
    ])

    let [filter, setFilter] = useState<FilterValueType>('all');

    function changeFilter(value: FilterValueType) {
        setFilter(value);
    }

    let tasksForTodoList1 = tasks1;
    if ( filter === 'completed') {
        tasksForTodoList1 = tasks1.filter(t => t.isDone === true)}
    if ( filter === 'active') {
            tasksForTodoList1 = tasks1.filter(t => t.isDone === false);

    }

    function removeTask(id: number) {
        tasks1 = tasks1.filter(t => t.id !== id);
        //filter пропусти те таски, id которых не равна переданной
        // if (t.id !== id) { return true } else { return false }
        setTasks1(tasks1);
    }

    return (
        <div className="App">
            <TodoList title='What to learn'
                      tasks={tasksForTodoList1}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
            <TodoList title='Songs'
                      tasks={tasks2}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
