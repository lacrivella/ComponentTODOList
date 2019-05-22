import Component from './Component.js';

class AddTodo extends Component {
    render() {
        const form = this.renderDOM();
        const onAdd = this.props.onAdd;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formData = new FormData(form);

            const newToDo = {
                task: formData.get('task'),
                completed: formData.get('completed')
            };

            onAdd(newToDo);

            form.reset();
            document.activeElement.blur();  
        });

        return form;

    }
    renderTemplate() {
        return /*html*/ `
            <form>
            <label><input name="task"></label>
            <button>&#10753;</button>
            </form>
        `;
    }
}

export default AddTodo;