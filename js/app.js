// console.log('winter is coming') // test log
const charactersArray = []


// card structure

const card = document.createElement('div')
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
