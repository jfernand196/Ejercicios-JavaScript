// EJERCICIO 1
// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of 
// strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array:
// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

// For example, if this array were passed as an argument:
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

// The elements in the returned array should be in the same order as in the initial array passed to your function, 
// albeit with the 'geese' removed.
// Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

function gooseFilter(arr){
    let output = []
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
    
    for(let i of arr){
        if(geese.includes(i) != true){
            output.push(i) 
        }
    }
    return output
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])); // ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"])); // ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])); // []