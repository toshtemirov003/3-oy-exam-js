// -----------------------3-masala-----

var numbers = [1,2,0,-1,-2,3,4]

function number(array){
    var count = 0
    for(num of array){
        if(num > 0){
            count += num
        }
    }
    return count;
}

console.log(number(numbers));