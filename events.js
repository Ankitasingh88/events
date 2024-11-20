//Exercise - 1

const showContent = event => console.log(event.target.textContent)
document.querySelector(".porcupine").onclick = showContent;


document.querySelector(".panther").onclick = (event) => console.log(event.target.tagName)

//window.onclick = event => console.log(event.target)

//onclick = event => console.log(event.target)

//Exercise - 2

document.querySelector(".penguin").onclick = (event) => console.log(event.target.textContent.toUpperCase())

window.onclick = event => console.log(event.target.textContent.toUpperCase())

//Exercise - 3
 const pelicanlove = () => {
    for(let i=0; i < 3; i++) {
        console.log("I love pelicans!")
    }
 }
 document.querySelector(".pelican").addEventListener("click", pelicanlove)

 const birdlove = animal => console.log(`${animal} is a preety boy`);

 document.querySelector(".parrot").addEventListener("click", event => birdlove(event.target.textContent))
 document.querySelector(".peacock").addEventListener("click", event => birdlove(event.target.textContent))


const notAnteater = () => console.log("I am NOT an anteater")
const notArmadillo = () => console.log("I am NOT an armadillo")

document.querySelector(".pangolin").addEventListener("click", notAnteater);
document.querySelector(".pangolin").addEventListener("click", notArmadillo);

/*let x = document.querySelectorAll(".tab")
console.log(x)
let tabs = Arrays.from(x);

tabs.forEach(item => item.addEventListener("click", () => alert(item.textContent)))*/

// Exercise - 5
const bestAnimal = animal => {
    console.log(animal.toLowerCase() === "panther") ? `${animal} is the jungle assassin` : `${animal} is the best!`
 

    /*if (animal.toLowerCase() === "panther") {
        console.log(`${animal} is the jungle assassin`)
    }else {
        console.log(`${animal} is the best!`);
    }*/
}

let animalTabs = Array.from(document.querySelectorAll(".tab"));

animalTabs.forEach(tab => tab.addEventListener("click", () => bestAnimal(tab.textContent)) )

console.log(animalTabs)

document.querySelector("footer p span").addEventListener("click", () => console.log("span") )
document.querySelector("footer").addEventListener("click", () => console.log("footer"),true )
document.querySelector("footer p").addEventListener("click", () => console.log("paragraph"),true )

document.querySelector(".porcupine").classList.add("hello")

//Exercise - 7

const setActive = (clickedTab) => {
    animalTabs.forEach(tab => tab.classList.remove("active"));
    clickedTab.classList.add("active")
    document.querySelector(".header__page-title").textContent = clickedTab.textContent;
}

animalTabs.forEach(tab => tab.addEventListener("click", () => setActive(tab)))

//Exercise -8

let animalContent = Array.from(document.querySelectorAll(".content"));

const findContent = classToMatch => {
    animalContent.forEach(contentDiv => {
        if (contentDiv.classList.contains(classToMatch)) {
            contentDiv.classList.add("featured")
        } 
    })
}
animalTabs.forEach(tab => tab.addEventListener("mousecentre", () => {
    findContent(tab.textContent.toLowerCase())
} ));

animalTabs.forEach(tab => tab.addEventListener("mouseleave", () => 
    animalContent.forEach(contentDiv => contentDiv.classList.remove("featured"))
))

//Exercise - 10

let searchInput = document.querySelector("#search");
document.querySelector("#search").addEventListener("input", () => console.log(searchInput.value))

const findTab = () => {
    animalTabs.forEach(tab => {
        if (tab.textContent.toLocaleLowerCase().includes(searchInput.value)) {
            tab.classList.add('active')
        }else {
            tab.classList.remove('active')
        }

    })
}

searchInput.addEventListener("change", findTab)

// OBJECT

//let Countries =["Australia" , "Sweden" , "India" , "Spain"]
//countries.push("India");
//console.log(countries)

/*let Australia = {
    name: "Australia", //0: Australia 1: sweden 2: india
    capitalCity: "Canberra",
    language: "English",
    population: 25000000,
    sports: ["Cricket", "Aussie Rules", "Tennis"]
}

console.log(`There are ${Australia.population} people living in ${Australia.name}`)*/

//document.querySelector("h1").textContent = Australia.capitalCity //for html

//OBJECT CONSTRUCTION

function Country(name, capitalCity, language, population, sports) {
    this.name = name,
    this.capitalCity= capitalCity,
    this.language = language,
    this.population = population,
    this.sports = sports,
    this.description = () => console.log(`${this.name}´s capital is ${this.capitalCity}`);
}

let sweden = new Country("Sweden", "Stockholm", "svenska", 11000000, ["Hockey", "Brandboll", "Bandy"]);
let india = new Country("India", "Delhi", "Hindi", 16100000 , ["Cricket", "Hockey", "Kabadi"]);
let australia = new Country("Australia", "Canberra", "Stayan", 130000, ["Cricket", "Football"]);

//console.log(sweden.capitalCity)
//console.log(india.language)

let countries = [sweden, india, australia];

countries.forEach(country => country.description());
console.log(countries)