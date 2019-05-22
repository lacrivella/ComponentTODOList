import Component from './Component.js';

class ToDoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const todo = this.props.todo;
        const removeButton = listItem.querySelector('button');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        return listItem;
    }
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
                <button id="remove">&#9721;</button>
            </li>  
        `;
    }
}

export default ToDoItem;