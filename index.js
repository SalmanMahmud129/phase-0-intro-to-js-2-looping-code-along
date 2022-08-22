// Code your solutions in this file

/*for( let age = 30; age < 40; age ++){
    console.log(`I'm ${age} years old. Happy birthday to me!`)
}
*/


const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }
    return gifts
}

//wrapGifts(gifts)




//rewriting the wrap gifts function as a while loop

function whileWrapGifts(gifts){
    let i = 0 //initializtion step gets moved to before the loop.
    while(i < gifts.length){
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
        i++ //iteration step moves inside the body of the loop. Important to not forget iteration. Leaving it out can result in a condtition that always evaluates to true causing an infinite loop
    }

    return gifts
}

//whileWrapGifts(gifts)





function writeCards(names, events){
    const messages = []
    for(let i = 0; i < names.length; i++){
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${events} gift!`
        //debugger
    }
    return messages
}

//writeCards(["Charlie", "Samip", "Ali"], "birthday")





function countDown(posInt){
    let number = posInt
    while(number >=0){
        console.log(number)
        number--
    }
}

countDown(10)