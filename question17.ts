// seeking the world 
// store the location 

let placestovisit = ["Japan","Rome","Spain","Landon","WashingtonDC"];
// print the array in original order
console.log("Original Order:",placestovisit);

// Print your array in alphabetical order without modifying the actual list.
let sortedalphabeticalorder = [...placestovisit].sort ();
console.log("Alphabetical Order:",sortedalphabeticalorder);

// Show that your array is still in its original order by printing it
console.log("Original Order After Sorting", placestovisit);

// Print your array in reverse alphabetical order without changing the order of the original list.
let reversealphabeticalorder = [...placestovisit].sort ((a, b) => b.localeCompare(a));
console.log("Reverse Alphabetical Order:",reversealphabeticalorder );

// Show that your array is still in its original order by printing it again

console.log("Original Order:",placestovisit);

// Reverse the order of your list. Print the array to show that its order has changed
let reversetheorder = [...placestovisit];
console.log("reverse the order:", placestovisit);

//Reverse the order of your list again. Print the list to show it’s back to its original order 
let reversetheoriginalorder = [...placestovisit];
console.log("reversetheoriginalorder:", placestovisit);

//Sort your array so it’s stored in alphabetical order.
let sortalphabeticalorder = [...sortedalphabeticalorder];
console.log("sortalphabeticalorder:", placestovisit);

// Sort to change your array so it’s stored in reverse alphabetical order
let sortagainreversealphabeticalorder = [...placestovisit]; 
console.log("sortagereversealphabeticalorder:", placestovisit);
