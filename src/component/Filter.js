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
                    <div class="test">
                    <label>
                        <input type="radio" name="status" id="all" value="all"> All
                     </label>
                     <label>
                        <input type="radio" name="status" id="completed" value="true"> Completed
                    </label>
                    <label>
                        <input type="radio" name="status" id="not" value="false"> Not Done
                    </label>
                    </div>
            </form>
            </section>
        `;
    }
}

export default Filter;