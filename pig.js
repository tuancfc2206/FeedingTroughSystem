class Pig {
  constructor() {
    // random stats
    let pigPos = getPigPos()
    this.x = pigPos.x;
    this.y = pigPos.y;
    this.id = maxId;
    this.weight = 20.00;
    this.eaten = 0;
    this.cumulative = 0;
    this.remain = getRandomInt(10,50) * 100;
    this.eatingSpeed = 5;
  }
  setPos(x_, y_){
    this.x = x_
    this.y = y_
  }
  // weigh event => pig eats
  eat() {
    for (let i = 0; i < troughList.length; i++) {
      // check if trough empty
      if (troughList[i].pigID == 0) {
        troughList[i].pigID = this.id;
        troughList[i].amount = getRandomInt(1,10)*100;
        this.eaten += troughList[i].amount;
        this.remain -= troughList[i].amount;
        this.cumulative += troughList[i].amount;
        break;
      }
    }
    console.log("eat");

    renderTable1();
    // wait for pig eats => change table
    setTimeout(() => {
      for (let i = 0; i < troughList.length; i++) {
        if (troughList[i].pigID == this.id) {
          troughList[i].pigID = 0;
          troughList[i].amount = 0;
        }
      }
      renderTable1();
      renderTable2();
    }, this.eatingSpeed * 1000);
  }
}
