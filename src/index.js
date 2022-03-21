import { koalas } from './koalas.js';
import { selectKoala } from './selectKoala.js';
import { render } from './render.js';
import { renderKoalaList } from './renderKoalaList.js'
import { renderKoalaCard } from './renderKoalaCard.js';
export let activeKoala = null





// Renders the image of a koala card
export let renderKoalaCardImage = koala => {
    let imageContainer = document.createElement('div')
    let koalaImage = document.createElement('img')

    imageContainer.setAttribute('class', 'image')

    koalaImage.setAttribute('src', koala.imageURL)

    imageContainer.append(koalaImage)

    return imageContainer
}

// Renders the content of a koala card (their name and description)
export let renderKoalaCardContent = koala => {
    let koalaContent = document.createElement('div')
    koalaContent.setAttribute('class', 'content')

    let header = document.createElement('div')
    header.setAttribute('class', 'header')
    header.append(koala.name)

    let descriptionParagraph = document.createElement('p')
    descriptionParagraph.append(koala.description)

    let descriptionContainer = document.createElement('div')
    descriptionContainer.setAttribute('class', 'description')
    descriptionContainer.append(descriptionParagraph)

    koalaContent.append(
        header,
        descriptionContainer
    )

    return koalaContent
}

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