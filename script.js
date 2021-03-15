/* If you're feeling fancy you can add interactivity
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");


//document.querySelector('').style.backgroundImage = "url(" + imagefilename +")"
//document.querySelector('').style.backgroundSize = "100%" or "cover"

// click on cards, and if they match, they stay flipped , if not they flip back down
// 10 different divs containing different images (5 pairs)
// target divs to display or not
//worked on this with House Cass Khorally, Juan, Jerry, Rodas, Milan, Tamika on glitch
/******
Pseudo Code
***/
//Timer?

//Click on 2 cards, if match, stay up

//if not matching, flip back down

const cards = document.querySelectorAll('.card')
// event listener for every box that's clicked
cards.forEach(card => card.addEventListener('click', color))

//Think of this as memory (example: i am going to click 1 and see if it is equal to 1 if not it is reset)
let firstClicked = 0

/******
Flips Card and changes color
******/
// create an array of colors, then use math.floor(math.random())so that each section is assigned a random color
function color(item){
  //returns the HTML Element that was clicked

  //item.currentTarget -> what was clicked



  //If nothing was checked before clicking this set the current
  //target as 'last target'

  if(firstClicked === 0){
      //this is holding the firs thing you click on like a box in memory
      firstClicked = item.currentTarget
      //makes memory into what was  just clicked
      //When you see item.currentTarget think of the first thing you clicked on
      document.querySelector('#prompt').innerText = firstClicked.innerText
      // this above line lets you know what you clicked on..
  }
  //Otherwise compare the two inner text values
  else {
      if(firstClicked.innerText === item.currentTarget.innerText ){
        //flip both up
        item.currentTarget.style.background = "blue"
        firstClicked.style.background = "blue"
      }
      firstClicked=0
      document.querySelector('#prompt').innerText = ""
  }


}



//Toggle Method

//
//If OOP
//Card Object class/object function


//const card1 = Math.floor(Math.random()*5)
// const card2 = Math.floor(Math.random()*5)
// const card3 = Math.floor(Math.random()*5)
// const card4 = Math.floor(Math.random()*5)
// const cardArray = [
//   'blue.jpg',
//   'red.jpg',
//   'yellow.jpg',
//   'orange.jpg',
//   'green.png',
// ]
// document.querySelector('#card1').style.background = cardArray[card1]

// document.querySelector('#card2').style.background = cardArray[card2]

// document.querySelector('#card3').style.background = cardArray[card3]

// document.querySelector('#card4').style.background = cardArray[card4]
