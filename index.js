console.log('hello')

var romanToInt = function(s){
    const myMap = {
        'I' : 1, 'V' : 5, 'X' : 10, 'L' : 50,  'C' : 100, 'D' : 500, 'M' : 1000
}
let total = 0;
    for(let i = 0; i < s.length; i++){
       let curr = s[i];
       let next = s[i+1];
       if(myMap[curr] < myMap[next]) 
       {
        total -= myMap[curr];
       }
       else {
        total += myMap[curr];
       }
    }
    return total;
};

let total = 0;

total += 1;
console.log(total)