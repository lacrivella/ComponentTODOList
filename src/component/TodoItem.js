import Component from './Component.js';

class ToDoItem extends Component {
    renderTemplate() {
        const todo = this.props.todo;
        let checked = '';
    
        if(todo.completed) {
            checked = 'checked';
        }
        return /*html*/`
            <li>
                <input type="checkbox"${checked}>
                <label>${todo.task}</label>
            </li>  
        `;
    }
}

export default ToDoItem;