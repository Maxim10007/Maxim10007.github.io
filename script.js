let buttonPurpose = document.getElementById("button-purpose")
let purpose = document.getElementById("purpose")
let purposeList = document.getElementById("purpose-list")
let isaac = document.querySelector(".isa")
let mag = document.querySelector(".ma")
let kai = document.querySelector(".ka")
let iu = document.querySelector(".iu")
let bl = document.querySelector(".bl")
let vav = document.querySelector(".vav")
let sam = document.querySelector(".sam")
let las = document.querySelector(".las")
let aza = document.querySelector(".aza")
let ed = document.querySelector(".ed")
let los = document.querySelector(".los")
let lil = document.querySelector(".lil")
let al = document.querySelector(".al")
let ap = document.querySelector(".ap")
let foz = document.querySelector(".foz")
let vif = document.querySelector(".vif")
let tinz = document.querySelector(".tinz")




buttonPurpose.addEventListener(
    "click", 
    function() {
        console.log(purpose.value)
        let item = document.createElement("li")
        item.appendChild(document.createTextNode(purpose.value))
        purposeList.appendChild(item)
        

    }
)
isaac.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Исаак")
    }
)
mag.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Магдалина")
    }
)
kai.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Каин")
    }
)
iu.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Иуда")
    }
)
bl.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/%3F%3F%3F")
    }
)
vav.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Ева")
    }
)
sam.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Самсон")
    }
)
las.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Лазарь")
    }
)
aza.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Азазель")
    }
)
ed.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Эдем")
    }
)
los.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Потерянный")
    }
)
lil.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Лилит")
    }
)
al.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Хранитель")
    }
)
ap.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Аполлион")
    }
)
foz.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Забытый")
    }
)
vif.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Вифания")
    }
)
tinz.addEventListener(
    "click", 
    function() {
        window.open("https://bindingofisaac.fandom.com/ru/wiki/Иаков_и_Исав")
    }
)


