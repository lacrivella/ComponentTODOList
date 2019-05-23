import Component from './Component.js';

class Filter extends Component {
    renderTemplate() {
        return /*html*/ `
        <input class="filter" name="filter">
        `;
    }
}

export default Filter;