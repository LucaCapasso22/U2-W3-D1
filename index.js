class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  compare(user) {
    if (this.age > user.age) {
      return `${this.firstName} è piu vecchio di ${user.firstName}`
    } else if (this.age < user.age) {
      return `${this.firstName} è piu giovane di ${user.firstName}`
    } else {
      return `${this.firstName} e ${user.firstName} hanno la stessa etò`
    }
  }
}

const giorgio = new User('Giorgio', 'Rossi', 24, 'Cercola')
console.log(giorgio)

const andrea = new User('Andrea', 'Verdi', 25, 'Pomezia')
console.log(andrea)

const luca = new User('Luca', 'Capasso', 24, 'Napoli')
console.log(luca)

const Nonno = new User('Nonno', 'Nanni', 50, 'Cercola')

console.log(giorgio.compare(luca))
console.log(andrea.compare(luca))
console.log(luca.compare(Nonno))

const pets = []

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
  hasSameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true
    }
  }
}

function addPetToList(pet) {
  const petListElement = document.getElementById('petList')
  const li = document.createElement('li')
  li.textContent = `${pet.petName} (${pet.species}, ${pet.breed}) - Proprietario: ${pet.ownerName}`
  petListElement.appendChild(li)
}

const Name = document.getElementById('name')
const owner = document.getElementById('proprietario')
const species = document.getElementById('specie')
const breed = document.getElementById('razza')

const myButton = document.querySelector('button')
console.log(myButton)

const aggiungiLi = function () {
  const myUl = document.querySelector('ul')
  myUl.innerText = ''

  pets.forEach((el) => {
    let list = document.createElement('li')
    list.innerText = `${el.petName} ${el.ownerName} ${el.species} ${el.breed} `
    myUl.appendChild(list)
  })
}

const myForm = document.querySelector('form')
myForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const newAnimal = new Pet(Name.value, owner.value, species.value, breed.value)
  console.log(newAnimal)

  pets.push(newAnimal)
  Name.value = ''
  owner.value = ''
  species.value = ''
  breed.value = ''

  console.log(pets)
  aggiungiLi()
})
