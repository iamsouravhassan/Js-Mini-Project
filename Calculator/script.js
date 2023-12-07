let inputBox = document.querySelector('.input-box');;
let ac = document.querySelector('.Ac');
let percent = document.querySelector('.Percent');
let plusMinus = document.querySelector('.plus-minus');
let division = document.querySelector('.Division');
let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');
let multiplication = document.querySelector('.multiplication');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');
let minus = document.querySelector('.minus');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let plus = document.querySelector('.plus');
let zero = document.querySelector('.zero');
let dot = document.querySelector('.dot');
let assign = document.querySelector('.assign');
inputBox.value = "";





plusMinus.addEventListener('click',()=>{
    C = inputBox.value;
    let F = C*(9/5)+32;
    inputBox.value = F;
})
division.addEventListener('click',()=>{
    inputBox.value+='/'
}
)
seven.addEventListener('click',()=>{
    inputBox.value+='7'
}
)
eight.addEventListener('click',()=>{
 inputBox.value+='8'
}
)
nine.addEventListener('click',()=>{
    inputBox.value+='9'
}
)
multiplication.addEventListener('click',()=>{
    inputBox.value+='+'
}
)
four.addEventListener('click',()=>{
    inputBox.value+='4'
}
)
five.addEventListener('click',()=>{
    inputBox.value+='5'
}
)
six.addEventListener('click',()=>{
    inputBox.value+='6'
}
)
minus.addEventListener('click',()=>{
    inputBox.value+='-'
}
)
one.addEventListener('click',()=>{
    inputBox.value+='1'
}
)
two.addEventListener('click',()=>{
    inputBox.value+='2'
}
)
three.addEventListener('click',()=>{
 inputBox.value+='3'
}
)
plus.addEventListener('click',()=>{
    inputBox.value+='+'
}
)
zero.addEventListener('click',()=>{
    inputBox.value+='0'
}
)
dot.addEventListener('click',()=>{
 inputBox.value+='.'
}
)

ac.addEventListener('click',()=>{
    inputBox.value=''
}
)

percent.addEventListener('click',()=>{
 inputBox.value +="%";
 let D = inputBox.value;
 let F = D.includes("P")
 console.log(F);
})


assign.addEventListener('click',()=>{
      
    inputBox.value = eval(inputBox.value);
    
    })








