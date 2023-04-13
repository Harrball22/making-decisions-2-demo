let backpack = []
let belt = []
let equippedItems = []
let saddleBag = []

backpack.push("sword", "shield", "food")

let firstItem = backpack.shift()

belt.push(firstItem)

let furCoat = "Fur Coat"

backpack.unshift(furCoat)

equippedItems.push(backpack.splice(0, 1)[0])

backpack.push("flint", "blanket", "knife", "toothbrush")

saddleBag.push(...backpack.splice(2, 3))

let backpackCount = backpack.length














// console.log(backpack, backpackCount, belt, equippedItems, saddleBag)
// console.log(saddleBag[1])

backpack.push("nintendo switch", "torch")

console.log("----Backpack----")
for(let i = 0; i < backpack.length; i++){
    if(i >= 3){
        let overflow = backpack.splice(3)
        saddleBag.push(...overflow)
        break
    }
    console.log(backpack[i])
}

let firstThree = saddleBag.slice(0, 3)
let lastThree = saddleBag.slice(saddleBag.length - 3)
console.log("First Three" + firstThree)
console.log("Last Three" + lastThree)


console.log("----Saddle Bag----")
for(let i = 0; i < saddleBag.length; i++){
    console.log(saddleBag[i])
}


// New unrealated code 

console.log(" - - - - - - - - - - - ")

let guessMe = 54
let count = 0

while (guessMe < 50000){
    //console.log("---------------------")
    if (guessMe % 4 === 0 || guessMe % 5 === 0){
        guessMe += 25
    } else if (guessMe % 3 === 0){
        guessMe -= 27
    } else {
        guessMe += 3
    }
    guessMe += 22
    count++;
}

console.log(`final number is ${guessMe}` + "\n" + `the loop ran ${count} times`)