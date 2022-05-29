// document.getElementById("count-el").innerText = 5

// let count = 0

// console.log(count)

// let my_age = 26

// console.log(my_age)

// let male = 'Benedore '
// let female = 'Blessed'

// let love = male + female

// console.log(love)

// function increment(){

//     document.getElementById("count-el").innerText = 
// }

// let raceComplete = 0

// function incrementRace(){
//     raceComplete = raceComplete + 1
// }

// incrementRace()
// incrementRace()
// incrementRace()

// console.log(raceComplete)

previous = document.getElementById("save_el")
let count_el = document.getElementById('count-el')
let count = 0

function increment(){
    count = count + 1
    count_el.textContent = count
    // document.getElementById("count-el").innerText=count
}

function save(){
    let countStr = count + ' - '
    previous.textContent += countStr

    count_el.textContent = 0
    count = 0

  

}