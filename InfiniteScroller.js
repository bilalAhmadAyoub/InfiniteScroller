// Global Variable(s)
//set max delay w/ user input (if slow computer, st to higher value)
var maxDelay = 0; //holds the maximum number of seconds that the scroll height can remain stagnant at before
                  //declaring that the page is done loading. Increasing this value is recommended for slower computers
var loadDelayLength = 0; //holds the number of seconds that the scroll height hasn't changed
var scrollCount = 0; //holds the total number of scrolls that have been attempted so far

//get user input specifying how fast their computer is and adjust maxDelay accordingly
const input = prompt("Please input \"slow\" if your computer is slow, \"fast\" if your computer is fast, and \"medium\" if your computer is neither slow nor fast.");
if(input == "slow") maxDelay = 10;
if(input == "fast") maxDelay = 3;
else maxDelay = 7;


while(loadDelayLength <= maxDelay){
  //scroll down to the bottom of the page and increment the scroll count
  var previousHeight = document.body.scrollHeight; 

  window.scrollTo(0, previousHeight);
  scrollCount++;

  //wait one second, if the scroll height changes, there is no delay so loadDelayLength to zero
  //if the scroll height doesn't change, there IS a delay so increment the loadDelayLength
  await delay(1000);
  previousHeight === document.body.scrollHeight ? loadDelayLength++ : loadDelayLength = 0;
}

// Program completion display message(s)
console.log("The bottom of the page has been reached with " + scrollCount + " total scroll(s).");

// Function(s)
function delay(delayTime){
    return new Promise(resolve => setTimeout(resolve, delayTime));
}

