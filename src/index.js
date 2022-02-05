/*
 * Restaurant Page - Cafe in my case.
 *
 * Author: Rohit M (@r0hitm)
 */

// Implementation of tab-switch logic
const tabs = Array.from(document.querySelectorAll('span.tab'));
// console.log(tabs);
tabs.forEach(el => el.addEventListener('click', function() {
    console.log('clicked navigation menu item. (tab switch)'); //### DEBUG CODE

    tabs.forEach(el => el.classList.remove('select')); // remove the selection 
    el.classList.add('select'); // and add it to the current one


}));