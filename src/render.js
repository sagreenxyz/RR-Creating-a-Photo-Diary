import { activeKoala } from './index.js';
import { koalas } from './koalas.js';
import { renderKoalaList } from './renderKoalaList.js';
import { renderActiveKoala } from './renderActiveKoala.js';

// Called once when the page loads, and again every time a koala is selected
export let render = () => {
    let oldPage=  document.querySelector('.koala-container')
    let newPage;
    if(activeKoala){
        newPage = renderActiveKoala(activeKoala)
    } else {
        newPage = renderKoalaList(koalas)
    }
    newPage.classList.add('koala-container')
    oldPage.replaceWith(newPage)
}