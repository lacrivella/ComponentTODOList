import Component from './Component.js';
import ToDoItem from './TodoItem.js';

class ToDoList extends Component {
    render() {
        const list = this.renderDOM();
        const todos = this.props.todos;
        todos.forEach(todo => {
            const todoItem = new ToDoItem({ todo });
            const todoItemDOM = todoItem.render();
            list.appendChild(todoItemDOM);

        });

        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <ul id="lists">
            </ul>
        `;
    }
}

export default ToDoList;