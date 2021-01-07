window.onload = init;

function init() {
  table.showComponent();
  farm.renderFarmArea()

  let editForm = document.getElementById('edit-form')
  let date = document.getElementById("day");
  let addBtn = document.getElementById("add");
  let weighBtn = document.getElementById("weigh");
  let nextBtn = document.getElementById("next-day");
  let deleteBtn = document.getElementById("delete");
  let resetBtn = document.getElementById('reset')
 
  date.innerHTML =  'Day '+ days;
  addBtn.onclick = addPig;
  weighBtn.onclick = weighPig;
  nextBtn.onclick = nextDay;
  deleteBtn.onclick = deletePig;
  resetBtn.onclick = reset
  editForm.onsubmit = edit
}

// button events


function edit(e){
  e.preventDefault()
  let p = {
      id: e.target.id.value,  
      weight: e.target.weight.value,  
      remain: e.target.remain.value,  
      eaten: e.target.eaten.value,  
  }
  if(p.weight == '' || p.remain == '' || p.eaten == ''){
    alert('Must fill in full form')
  } 
  else if(existPig(e.target.id.value)){
    for(let pig of pigList){
      if(pig.id == p.id){
        pig.weight = p.weight
        pig.remain = p.remain
        pig.eaten = p.eaten 
        renderTable2()
        break;
      }
    }
  }
  else{
    alert('Not Possible')
  };
}

function reset() {
    window.location.reload()
}

function weighPig() {
  if (pigList.length == "0") alert("No Pigs.");
  else {
    let id = choosePig(1, pigList.length);
    if (pigList[id - 1].remain != 0 && !inTrough(id)) {
      pigList[id - 1].eat();
    }
  }

}
function nextDay() {
  let date = document.getElementById("day");

  let next = true;
  // check if there's pig eating (if not => next day possible)
  for (let trough of troughList) {
    if (trough.pigID != 0) next = false;
  }
  if (next == true) {
    // change value of all pigs in list

    for (let pig of pigList) {
      pig.remain = getRandomInt(10,50) * 100;;
      pig.weight = parseFloat((pig.weight + pig.eaten * 0.001).toFixed(2));
      pig.eaten = 0;
    }
    days += 1;
    date.innerHTML = 'Day ' +  days;

    renderTable2();
  } else alert("Not Possible. There is pig at Trough.");
}


// add pig to list + add new row to table 2
function addPig() {
  let pig = new Pig();
  pigList.push(pig);
  maxId++;

  let table_2 = document.getElementById("table-2");
  let newRow = table_2.insertRow(table_2.length);
  cell1 = newRow.insertCell(0);
  cell2 = newRow.insertCell(1);
  cell3 = newRow.insertCell(2);
  cell4 = newRow.insertCell(3);
  cell5 = newRow.insertCell(4);

  cell1.innerHTML = pig.id;
  cell2.innerHTML = pig.weight;
  cell3.innerHTML = pig.eaten;
  cell4.innerHTML = pig.remain;
  cell5.innerHTML = pig.cumulative;

  // render pig event
  farm.renderPig(pig)
}


function deletePig() {
  let deleteID = document.getElementById("delete-id").value;
  // check if possible
  if (
    deleteID > maxId ||
    deleteID === "" ||
    deleteID == 0
  ) {
    alert("Not Possible");
  } else {
    let table_2 = document.getElementById("table-2");
    console.log(deleteID);
    pigList.map((pig, index)=>{
      if(pig.id == deleteID){
        pigList.splice(index, 1)
        farm.deletePig(deleteID)
        table_2.deleteRow(index+1)
      }
    })
    
    console.log(pigList);
  }
}
