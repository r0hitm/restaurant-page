/**********************************************
<div class="menu-wrapper">
    <section class="menu-item">
        <header>
            <h3 class="menu-title"></h3>
            <h3 class="menu-title price"></h3>
        </header>
        <p></p>
    </section>
</div>
***********************************************/

/**
 * Menu of the KoHi Cafe 😋
 * 
 * Author: Rohit M (@r0hitm)
 */

import { addLogo } from "./home";

/**
 * Create a menu item for the menu page
 * 
 * @param {String} title of the menu item
 * @param {String} desc  its short description
 * @param {Number} price price in usd
 * 
 * @return {HTMLElement} A <section> element that contains the menu item entry to be deployed 
 */
const createMenuItem = (title, desc, price) => {
    const item = document.createElement('section');
    item.classList.add('menu-item');

    const header = document.createElement('header');

    const menu_title = document.createElement('h3');
    menu_title.classList.add('menu-title');
    menu_title.textContent = title;

    const menu_price = document.createElement('h3');
    menu_price.classList.add('menu-title');
    menu_price.classList.add('price');
    menu_price.textContent = price;

    header.appendChild(menu_title);
    header.appendChild(menu_price);

    const p = document.createElement('p');
    p.textContent = desc;

    item.appendChild(header);
    item.appendChild(p);

    return item;
}

const addMenu = (parent) => {
    if (! parent instanceof HTMLDivElement) {
        console.log('Error in addMenu: parent not an Div element');
        return;
    }

    const wrapper = document.createElement('div');
    wrapper.classList.add('menu-wrapper');

    wrapper.appendChild(
        createMenuItem(
            'Espresso',
            'A single shot of espresso coffee (approximately 25ml-30ml). Serve in a small cup or glass.',
            5)
    );
    
    wrapper.appendChild(
        createMenuItem(
            'Double Espresso',
            'A double shot of espresso coffee (approximately 50ml-60ml). Serve in a small cup or glass.',
            10)
    );

    wrapper.appendChild(
        createMenuItem(
            'Ristretto',
            'The first half of a double shot of espresso coffee (approximately 30 ml). Serve in a small cup or glass.',
            8)
    );

    wrapper.appendChild(
        createMenuItem(
            'Latte',
            'A single or double shot of espresso coffee topped up with steamed milk. The milk thickness should be in between that of a flat white and a cappuccino, with about 10mm of foam on top. Serve in a medium sized glass.',
            12)
    );

    wrapper.appendChild(
        createMenuItem(
            'Cappuccino',
            'A single or double shot of espresso coffee topped up with steamed milk. The milk should be thicker than for a flat white, with about 25mm-30mm of foam on top. Can be dusted with chocolate. Serve in a medium sized cup.',
            15)
    );

    wrapper.appendChild(
        createMenuItem(
            'Long Black',
            'A double shot of espresso coffee poured over hot water. Serve immediately in a medium sized glass to maintain the crema.',
            18)
    );

    wrapper.appendChild(
        createMenuItem(
            'Macchiato',
            'A single or double shot of espresso coffee with a dash of steamed milk. Serve in a small to medium sized cup or glass. The amount of milk in the macchiato can vary depending on your location.',
            20)
    );

    parent.appendChild(wrapper);
}

export {addMenu};