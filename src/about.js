/*******************************************************
<h2 style="color:#313502;">About Us</h2>
***********************************************************/

/**
 * Contents of the About Us page
 * 
 * Author: Rohit M (@r0hitm)
 */
import { addLogo } from "./home";

 // contents of the page in order from top to bottom
 // contains rest of above paragraph that have some HTML (be careful here!!!!) element as children too 
 const HTMLParagraph = [
     'We are a group of people who are highle enthusiatic about coffee!',
     'Contanct us via:\
     <ul>\
         <li>Phone</li>\
         <li>Email</li>\
     </ul>',
     '<address>xyz industrial area, earth</address>'
 ]
  
 const addContent = (parent) => {
     if (! parent instanceof HTMLElement) {
         console.log('Error in addContent: parent not a DOM object');
         return;
     }

     const heading = document.createElement('h2');
     heading.style.color = '#313502';
 
     HTMLParagraph.forEach(el => {
         const p = document.createElement('p');
         p.innerHTML = el;
         parent.appendChild(p);
     });
 }
 
 export { addContent };