import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/`
            <header id="header">TO DO LIST</header>
        `;
    }
}

export default Header;