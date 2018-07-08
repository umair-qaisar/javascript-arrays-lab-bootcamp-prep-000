// Add your functions and code here

var kittens = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
}

function appendKitten(name){
  var new_kittens = [...kittens]
  new_kittens.push(name);
  return new_kittens
}

function ap