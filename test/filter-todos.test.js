import filterTodo from '../src/filter-todos.js';

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

test('All returns all', assert => {
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

test('completed returns completed', assert => {
    //Arrange
    // Set up your parameters and expectations
    const filter = {
        text: '',
        completed: true,
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
        task: 'Keep It to Game of Thrones',
        completed: true
    }]);
});

test('Not Done returns not completed', assert => {
    //Arrange
    // Set up your parameters and expectations
    const filter = {
        text: '',
        completed: false,
    };

    const filtered = filterTodo(todos, filter);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(filtered, [{
        task: 'Volunteer at Art Galleries',
        completed: false
    }]);
});

test('Combo Filter string and completed', assert => {
    //Arrange
    // Set up your parameters and expectations
    const filter = {
        text: 'cat',
        completed: true,
    };

    const filtered = filterTodo(todos, filter);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(filtered, [{
        task: 'Catch up on Podcasts',
        completed: true
    }]);
});

