import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        const form = dom.querySelector('form');
        form.addEventListener('input', () => {
            const radioInputs = form.elements['status'].value;
            const textInputs = form.elements['text-filter'].value;

            this.props.onFilter({
                task: textInputs,
                completed: radioInputs
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section>
            <form class="filter-section">
                <input id="text" name="text-filter">
                <label class="radio-button">
                    <input type="radio" name="status" id="all" value="all"> All
                    <input type="radio" name="status" id="completed" value="true"> Completed
                    <input type="radio" name="status" id="none" value="false"> Not Done
                </label>
            </form>
            </section>
        `;
    }
}

export default Filter;