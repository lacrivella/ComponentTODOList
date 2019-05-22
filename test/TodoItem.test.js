import ToDoItem from '../src/component/TodoItem.js';

const test = QUnit.test;
QUnit.module('To Do List');

test('testing to do list template', assert => {
    //Arrange
    // Set up your parameters and expectations
    const todo = {
        task: 'Catch up on Podcasts',
        completed: true
    };

    const expected = /*html*/`
        <li>
            <input type="checkbox"checked>
            <label>Catch up on Podcasts</label>
        </li>  
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const todoItem = new ToDoItem({ todo });
    const html = todoItem.renderTemplate();
    //Assert
    assert.htmlEqual(html, expected);
});