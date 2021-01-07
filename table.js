const table = {};

// for feeding pig  
const troughList = [
  { trough: "A", amount: 0, pigID: 0 },
  { trough: "B", amount: 0, pigID: 0 },
  { trough: "C", amount: 0, pigID: 0 },
  { trough: "D", amount: 0, pigID: 0 },
  { trough: "E", amount: 0, pigID: 0 },
];
var days = 1
// store pigs added
var pigList = [];
var maxId = 1; 


table.showComponent = () => {
  renderTable1();
  renderTable2()
};

// render table 1
function renderTable1() {
  table_1 = document.getElementById("table-1");
  for (let i = 0; i < 5; i++) {
    table_1.rows[1].cells[i + 1].innerHTML = troughList[i].amount;
    table_1.rows[2].cells[i + 1].innerHTML = troughList[i].pigID;
  }
}
// render table 2
function renderTable2() {
  let table_2 = document.getElementById("table-2");
  console.log("Length " +pigList.length);
  for (let i = 1; i <= pigList.length; i++) {
    table_2.rows[i].cells[0].innerHTML = pigList[i - 1].id;
    table_2.rows[i].cells[1].innerHTML = pigList[i - 1].weight;
    table_2.rows[i].cells[2].innerHTML = pigList[i - 1].eaten;
    table_2.rows[i].cells[3].innerHTML = pigList[i - 1].remain;
    table_2.rows[i].cells[4].innerHTML = pigList[i - 1].cumulative;
  }
}
