function myFunction1() {
  // Get the value of the input field with id="numb"
  let colVal = document.getElementById('intCol').value;
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(colVal) || colVal < 1 || colVal > 10) {
    alert('Your Input is empty or greater the 10')
  } else {
    let subBtn = document.getElementById('subBtn');
    subBtn.addEventListener("click", myFunction);
    function myFunction() {
      let colVal = document.getElementById('intCol').value;
      let rowVal = document.getElementById('intRow').value;
      let headInput = document.getElementById('headInput');
      if (colVal <= 10) {
        for (let i = 2; i <= colVal; i++) {
          headInput.innerHTML += `
            <div class="col" >
              <input  type="text" class="form-control" placeholder="${i}Head" required>
            </div>
            `
        }
      }
    }
  }
}


// for Submit button and creating head

let subBtn = document.getElementById('subBtn');
subBtn.addEventListener("click", myFunction);
function myFunction() {
  let colVal = document.getElementById('intCol').value;
  let rowVal = document.getElementById('intRow').value;
  let headInput = document.getElementById('headInput');
  if (colVal <= 10) {
    for (let i = 1; i <= colVal; i++) {
      headInput.innerHTML += `
        <div class="col" >
          <input  type="text"  class="form-control head" placeholder="${i}Head" required>
        </div>
        `
    }

  }
}



// create Button  

let createBtn = document.getElementById('createBtn');
createBtn.addEventListener("click", createFunction);

function createFunction() {
  // abc();
  let colVal = document.getElementById('intCol').value;
  let forTableHead = document.getElementById('forTableHead');
  let forTableRow = document.getElementById('forTableRow');
  let rowVal = document.getElementById('intRow').value;
  let headInput = document.getElementById('headInput').value;
  var a = document.getElementsByClassName('head');
  for (let x = 0; x < colVal; x++) {
    var total =(a[x].value);
    forTableHead.innerHTML += `
          <th scope="col">${total}</th>
    `
  
    
  }
  for (let y = 0; y < rowVal; y++) {
    forTableRow.innerHTML += `
    <tr>
    <td>${y+1} row</td>
  </tr>
    `
  }
}

