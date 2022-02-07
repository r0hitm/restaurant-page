/*
 * Restaurant Page - Cafe in my case.
 *
 * Author: Rohit M (@r0hitm)
 */
import { addContent as addHomePageContent} from './home.js';
import { addContent as addAboutUs } from './about.js';
import { addMenu } from './menu.js';

import '../src/style.css';

const page = document.getElementById('content');

/**
 * Clears the page
 */

const clearPage = () => {
    page.textContent = '';
}

// Implementation of tab-switch logic
const tabs = Array.from(document.querySelectorAll('span.tab'));
// console.log(tabs);
tabs.forEach(el => el.addEventListener('click', function() {
    console.log('clicked navigation menu item. (tab switch)'); //### DEBUG CODE

    tabs.forEach(el => el.classList.remove('select')); // remove the selection 
    el.classList.add('select'); // and add it to the current one

    clearPage();
    // console.log(el.textContent);
    switch (el.textContent) {
        case 'Home':
            addHomePageContent(page);
            break;
        case 'Menu':
            addMenu(page);
            break;
        case 'About':
            addAboutUs(page);
            break;
        default:
            console.log('An erro occured in index.js, invalid tab value');
    }
}));

// initialize the page with home page
addHomePageContent(page);