import Component from './Component.js';

class ToDoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const onRemove = this.props.onRemove;
        const onDone = this.props.onDone;
        const todo = this.props.todo;
        const removeButton = listItem.querySelector('button');
        const checkbox = listItem.querySelector('input[name=checkbox]');

        removeButton.addEventListener('click', () => {
            onRemove(todo);
        });

        checkbox.addEventListener('change', () => {
            onDone(todo);
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
                <input type="checkbox" name="checkbox" ${checked}>
                <label>${todo.task}</label>
                <button id="remove">&#9721;</button>
            </li>  
        `;
    }
}

export default ToDoItem;