import { koalas } from './koalas.js';
import { render } from './render.js';

// Changes the active koala, then re-renders the page to display that koala
export let selectKoala = koala => {
    activeKoala = koala
    render()
}