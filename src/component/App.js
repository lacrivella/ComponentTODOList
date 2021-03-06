import Component from './Component.js';
import Header from './Header.js';
// import Filter from './Filter.js';
import TodoList from './TodoList.js';
import todos from '../../data/todo.js';
import AddTodo from './AddTodo.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const addToDo = new AddTodo({
            onAdd: (newToDo) => {
                todos.push(newToDo);
                todoList.update({ todos });
            }
        });
        const addToDoDOM = addToDo.render();
        main.appendChild(addToDoDOM);

        const todoList = new TodoList ({ 
            todos,
            onRemove: (todoToRemove) => {
                const index = todos.indexOf(todoToRemove);
                todos.splice(index, 1);

                todoList.update({ todos });
            }
        
        });

        const todolistDOM = todoList.render();
        main.appendChild(todolistDOM);

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;