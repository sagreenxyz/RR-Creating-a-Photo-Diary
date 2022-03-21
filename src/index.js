import { koalas } from './koalas.js';
import { selectKoala } from './selectKoala.js';
import { render } from './render.js';
import { renderKoalaList } from './renderKoalaList.js'
import { renderKoalaCard } from './renderKoalaCard.js';
export let activeKoala = null





// Renders a big image of a selected koala
let renderActiveKoala = koala => {
    let activeKoalaContainer = document.createElement('div')
    let backButton = document.createElement('button')
    let backIcon = document.createElement('i')
    let activeKoalaImage = document.createElement('img')

    backButton.setAttribute('class', 'ui left labeled icon button')

    backIcon.setAttribute('class', 'left arrow icon')

    activeKoalaImage.setAttribute('class', 'ui rounded fluid image')

    activeKoalaImage.setAttribute('src', koala.imageURL)

    backButton.append(
        backIcon,
        'Back'
    )

    backButton.addEventListener('click', () => {
        selectKoala(null)
    })

    activeKoalaContainer.append(
        backButton,
        activeKoalaImage
    )

    return activeKoalaContainer
}

// Render the page after all functions are defined
render()