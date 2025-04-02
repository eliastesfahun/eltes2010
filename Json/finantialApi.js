fetch("https://www.google.be")
    .then(rawData => rawData.json())
    .then(data => console.log(data))
console.log("when will this be excuted")