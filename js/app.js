// console.log('winter is coming') // test log

const charactersArray = [
    {
        name: 'Rhaenyra Targaryen',
        bio: 'kisjudhfkjshd',
        alive: true
    }, 
    {
        name: 'Alicent Hightower',
        bio: 'kisjudhfkjshd',
        alive: true
    }, 
    {
        name: 'King Viserys',
        bio: 'kisjudhfkjshd',
        alive: true
    }, 
    {
        name: 'Daemon Targaryen',
        bio: 'kisjudhfkjshd',
        alive: true
    }, 
    {
        name: 'Laenor Velaryon',
        bio: 'kisjudhfkjshd',
        alive: true
    }, 
    {
        name: 'Laena Velaryon',
        bio: 'kisjudhfkjshd',
        alive: true
    }
]

// card structure

const card = document.createElement('li')
card.className = 'card'
const characterName = document.createElement('h2')
characterName.className = 'character-name'
// innertext will be characters called by search field
const characterImage = document.createElement('img')
characterImage.className = 'character-image'
const buttonContainer = document.createElement('div')
buttonContainer.className = 'button-container'
const bioButton = document.createElement('button')
bioButton.className = 'button'
bioButton.innerText = 'Bio'
const statusButton = document.createElement('button')
statusButton.className = 'button'
statusButton.innerText = 'Status'

const cards = document.getElementById('cards-container')

const drawCard = (el) => {
    cards.appendChild(card)
    card.appendChild(characterName)
    characterName.innerText = el.name
    card.appendChild(buttonContainer)
    buttonContainer.appendChild(bioButton)
    buttonContainer.appendChild(statusButton)
}
charactersArray.map(el => { 
    console.log(el)
    return drawCard(el)
    // cards.appendChild(card)
    // card.appendChild(characterName)
    // characterName.innerText = el.name
    // card.appendChild(buttonContainer)
    // buttonContainer.appendChild(bioButton)
    // buttonContainer.appendChild(statusButton)
})


