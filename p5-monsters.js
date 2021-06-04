//const MonsterGame = require("./p5-monster.js");
 module.exports = class Monster {
     constructor({
         monsterName = "Unknown",
         minimumLife = 0,
         currentLife = 100,

     })
     {
         this.monsterName = monsterName;
         this.minimumLife = minimumLife;
         this.currentLife = currentLife;
         this.isAlive = (currentLife >= minimumLife) ? true: false;
         
     }
    updateLife(lifeChangeAmount){
        this.currentLife = (this.currentLife +lifeChangeAmount) > 0 ? this.currentLife + lifeChangeAmount : 0;
        //console.log(this.currentLife)
        this.isAlive = currentLife > minimumLife ? true : false;
    }
    randomLifeDrain(minimumLifeDrain){
        if(minimumLifeDrain < maximumLifeDrain){
            let life = getRandomInteger(minimumLifeDrain, maximumLifeDrain)
            this.updateLife(life);
            console.log(`${this.monsterName} random power drain of ${life}`);
        }
    }
    getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}