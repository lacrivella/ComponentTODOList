import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);
        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div id="app">
                <main>
                    <ul id="lists">
                        <li>Drink Coffee</li>
                    </ul>
                </main>
            </div>
        `;
    }
}

export default App;