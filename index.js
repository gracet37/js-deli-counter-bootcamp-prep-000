var katzDeliLine = []
// Creating an empty array. This represents the beginning of the day, where there are no people

// Build take a number function - tailored to name and number & return length of the array
function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name); //new customer at the end of the line
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.` 
}

// Create a loop to run - chose for as business continues to operate and therefore requires the loop to keep running. 
function nowServing(katzDeliLine) {
  for (let i=0; i< katzDeliLine.length; i++);
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
  else {
  return `Currently serving ${katzDeliLine.shift()}.`;
}
}

function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++);
  if (katzDeliLine.length === 0) {
    console.log("The line is currently empty.")
  }
  else {
    var x = [];
    x.push("The line is currently:" + i+1 + ". " + katzDeliLine[i]);
  return x;
}
}
