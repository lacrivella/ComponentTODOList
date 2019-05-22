import Component from './Component.js';

class ToDoList extends Component {
    render() {
        const list = this.renderDOM();
        return list;
    }
    renderTemplate() {
        const todos = this.props.todos;
        return /*html*/ `
            <ul id="lists">
                <li>${todos.length}</li>
            </ul>
        `;
    }
}

export default ToDoList;