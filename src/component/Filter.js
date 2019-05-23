import Component from './Component.js';

class Filter extends Component {
    render() {
        const dom = this.renderDOM();
        // const text = dom.querySelector('#text');
        // const all = dom.querySelector('#all');
        // const completed = dom.querySelector('#completed');
        // const none = dom.querySelector('#none');
        const inputs = dom.querySelectorAll('input');

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                //there is a good chance this is all wrong. lines 6-9 and 15-20
                // this.props.onFilter({
                    // text: text.value,
                    // all: all.value,
                    // completed: completed.value,
                    // none: none.value
                // });
                console.log(input.value);
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div class="filter-section">
                <input id="text" name="filter">
                <label class="radio-button">
                    <input type="radio" name="radio" id="all" value="all"> All
                    <input type="radio" name="radio" id="completed" value="true"> Completed
                    <input type="radio" name="radio" id="none" value="false"> Not Done
                </label>
            </div>
        `;
    }
}

export default Filter;