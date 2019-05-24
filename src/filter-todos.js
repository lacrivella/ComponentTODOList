function filterTodo(todos, filter) {
    const text = filter.task.toLowerCase();
    const radioButton = filter.completed.toString();
    
    return todos.filter(todo => {

        const task = todo.task.toLowerCase();
        const taskCompleted = todo.completed.toString();

        let completedCompare = taskCompleted.includes(radioButton);
        if(radioButton === 'all') {
            completedCompare = true;
        }

        const hasText = !task || task.includes(text);
        
        return hasText && completedCompare;

    });
}

export default filterTodo;