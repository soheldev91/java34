function Multiply(m1 , m2) {
    const multi = m1 * m2;
    return multi;

    
}

const results = Multiply(3 , 4);
console.log(results);
if (resultm < 100 ) {
    console.log('True');
}
else {
    console.log('False');
}











// const numbers =[ 45 , 23 , 5 , 85 , 14 ]


// function smallestNumber (arrayDatas){
//     let min =arrayDatas[0]
//     for (i =0; i<arrayDatas.length; i++){
//         const element =arrayDatas[i];
//         if(element <min){
//             min = element;
//         }
//     }
//     return min

// }

// const result = smallestNumber (numbers);
// console.log(result);

// const player =["neymar" , "massi" , "ronaldo" , "sala" , "sadio" , "neymar" , "massi" ,"neymar" , "ronaldo" ,];

// function removeDuplicate(names){
//     let unique =[];

    // for(i =0; i<names.length; i++){
    //     const element =names[i]
    //     if (unique.indexOf(element) == -1){
    //         unique.push(element)
    //     }

    // }
    // return unique

//     for (const item of names){
//         console.log(item);
//         if (unique.indexOf(item) == -1){
//             unique.push(item)
//         }
//     }
//     return unique


// }
// const output = removeDuplicate(player)
// console.log(output);

const letters ="hello how are you";


function reverseLetter(text){
    let reverse ="";
    for(const letter of text){
        console.log(letter);
        reverse = letter + reverse
    }
}


const result = reverseLetter(letters);
// console.log(result);

// function addTowNumber(one,two){
//     const total =one + two;
//     return total
// }

// const resulti =addTowNumber(12+14, 1);
// console.log(resulti);

for (i =1; i<=50; i++){
    if (i % 3 == 0 &&  i % 5 == 0){
        console.log("foobar");
    }
    else if(i % 3 == 0){
        console.log("foo");
    }
    else if (i % 5 == 0){
        console.log("bar");
    }
    else {
        console.log(i);
    }
}
