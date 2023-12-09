
// Html Element Select

let userInput = document.querySelector('.user-input');
let addBtn = document.querySelector('.add-btn');
let main = document.querySelector('.main');

 // User Input Array Call
const inputData = [];

// Add button functionality

function add(){
  let userValue = userInput.value;
  inputData.push(userValue);
  userInput.value ="";

  displayItem();
}


// display itme


function displayItem(){
    let newHtml = '<div class = "input-div">'
    inputData.forEach((value,index)=>{
        if(value !==""){
            newHtml += `<div><span class="item">${value}</span>
            <button style="delete"  onclick = "inputData.splice(${index},1); displayItem();">Delete</button></div>`
        }
       })
     newHtml +='</div>'
      main.innerHTML = newHtml;

}



addBtn.addEventListener('click',add)