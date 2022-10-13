const intervals = process.argv.slice(2) //Don't need the first 2 elements

let intervalsMS = [];

for (const el of intervals) {
  if (Number(el) && el >= 0) {
    intervalsMS.push(el * 1000); 
  } 
}

for (let i = 0; i < intervalsMS.length; i++) { //Loops how many times an element is added.
  console.log(`interval ${i + 1}: ${intervalsMS[i]}`)
  setTimeout( () => {
    process.stdout.write('\x07');
  }, intervalsMS[i])
}

//Note: For some reason, the intervals must be more than 1 second (1000ms) apart.