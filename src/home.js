/**
 * Contents inside the home tab on the page
 * 
 * Author: Rohit M (@r0hitm)
 */
import Logo from './logo.png';

// contents of the page in order from top to bottom
// contains rest of above paragraph that have some HTML (be careful here!!!!) element as children too 
const HTMLParagraph = [
    'We are KoHi Cafe. We serve the beverages that\'ll keep you going through your ever increasing pile of work',
    'Come today and experience for yourself the zen of working',
    'Book a reservation for your team <a href="#">Here!</a>',
    'Timings:<time>Mon-Fri 7:00 am to 9:00 pm</time><br><time> Sat-Sun 8:00 am to 3:00 pm</time>',
    'Cafe Locations:\
    <address>xyz streat, abc, 000, Earth</address>\
    <address>xyz streat, abc, 000, Earth</address>\
    <address>xyz streat, abc, 000, Earth</address>\
    <address>xyz streat, abc, 000, Earth</address>\
    <address>xyz streat, abc, 000, Earth</address>\
    We are working on to bring KoHi to more places 👏'
]

/**
 * Add logo (image) to the parent element
 */
const addLogo = (parent) => {
    if (! parent instanceof HTMLElement) {
        console.log('Error in addLogo: parent not a DOM object');
        return;
    }

    // get the logo and add it to the parent
    const img = new Image();
    img.src = Logo;
    img.alt = 'KoHi Cafe Logo';
    img.style.aspectRatio = '1';
    img.style.width = '8rem';

    parent.appendChild(img);
}

const addContent = (parent) => {
    if (! parent instanceof HTMLElement) {
        console.log('Error in addContent: parent not a DOM object');
        return;
    }

    HTMLParagraph.forEach(el => {
        const p = document.createElement('p');
        p.innerHTML = el;
        parent.appendChild(p);
    });
}

export { addLogo, addContent };