const test = QUnit.test;
QUnit.module('Filtering');

const todos = [
    {
        task: 'Catch up on Podcasts',
        completed: true
    },
    {
        task: 'Volunteer at Art Galleries',
        completed: false
    },
    {
        task: 'Keep It to Game of Thrones',
        completed: true
    }
];

function filterTodo(todos, filter) {
    const text = filter.text.toLowerCase();
    return todos.filter(todo => {

        const task = todo.task.toLowerCase();

        const hasText = task.includes(text);
        
        return hasText;

    });
}



test('testing string filters;', assert => {
    //Arrange
    // Set up your parameters and expectations
    const filter = {
        text: 'Catch',
        completed: '',
    };

    const filtered = filterTodo(todos, filter);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(filtered, [{
        task: 'Catch up on Podcasts',
        completed: true,
    }]);
});


test('No strings return all', assert => {
    //Arrange
    // Set up your parameters and expectations
    const filter = {
        text: '',
        completed: '',
    };

    const filtered = filterTodo(todos, filter);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(filtered, [{
        task: 'Catch up on Podcasts',
        completed: true
    },
    {
        task: 'Volunteer at Art Galleries',
        completed: false
    },
    {
        task: 'Keep It to Game of Thrones',
        completed: true
    }]);
});