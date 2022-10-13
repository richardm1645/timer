const intervals = process.argv.slice(2) //Don't need the first 2 elements

let intervalsMS = [];

for (const el of intervals) {
  if (Number(el) >= 0) {
    intervalsMS.push(el * 1000);
  } 
}

for (let i = 0; i < intervals.length; i++) { //Loops how many times an element is added.
  console.log(intervalsMS[i])
  setTimeout( () => {
    process.stdout.write('\x07');
  }, intervalsMS[i])
}
