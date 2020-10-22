var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var newarray = [element, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var newarray = [...array, element]
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()

}

function removeElementFromBeginningOfArray(array) {
  return array.slice(0)

}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()

}

function removeElementFromEndOfArray(array) {
  var newarray = array.slice(-1)
  return newarray
}
