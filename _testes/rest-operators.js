let displayColors = function(message, ...colors) {
  console.log(message);

  for(let i in colors){
    console.log(colors[i]);
  }
}

let message = 'List of colors:'

displayColors(message, 'Red');
displayColors(message, 'Red', 'Green');
displayColors(message, 'Red', 'Green', 'Blue');