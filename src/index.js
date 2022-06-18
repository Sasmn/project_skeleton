import _, { result } from 'lodash';
import './style.css';

const domElements = (() => {
    const header = () => {
        const headerTitle = document.createElement('header');
        headerTitle.textContent = 'to do';

        return headerTitle;
    };

    const main = () => {
        const main = document.createElement('main');
        main.textContent = 'to dos';

        return main;
    };

    const sidebar = () => {
        const sidebar = document.createElement('aside');
        sidebar.textContent = 'SIDEBAR';

        return sidebar;
    };

    const todos = (() => {})();

    return {
        header,
        main,
        sidebar,
        todos,
    };
})();

function component() {
    const element = document.createElement('div');
    element.classList.add('component');

    element.appendChild(domElements.header());
    element.appendChild(domElements.main());
    element.appendChild(domElements.sidebar());

    return element;
}

document.body.appendChild(component());
