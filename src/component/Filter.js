import Component from './Component.js';

class Filter extends Component {
    renderTemplate() {
        return /*html*/ `
            <section class="filter-section">
                <label class="radio-button">
                    <input class="filter" name="filter">
                    <input type="radio" name="radio"> All
                    <input type="radio" name="radio"> Completed
                    <input type="radio" name="radio"> Not Done
                </label>
            </section>
        `;
    }
}

export default Filter;