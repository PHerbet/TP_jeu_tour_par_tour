const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
            fuite: true,
            game_over: true,
            isActive: true,
            test:false,
            combat:'',
            combatResponse: [],
            width: 0
        };
    },
    
    methods: {
        flee(x) {
            if (x === 1) {
                this.fuite = !this.fuite;
            }
        if (x === 2){
            this.game_over = false;
        }
        },

    heal() {
            if(this.pvPlayer > 0 && this.pvPlayer < 100){
                this.pvPlayer = this.pvPlayer +20;
                this.tour = this.tour +1;
                console.log(this.tour);
            }
            
            if(this.pvPlayer > 100){
                this.pvPlayer=100;
            }
            this.combat = `vous regagnez 20 pv`;
        }
    },

    attackPlayer(){
            if (this.combatResponse.length > 2) {
                this.combatResponse = [];
            }

            this.atk = 10;
            this.pvIa -= this.atk;
            // console.log(`l'attaque vient d'enlever ${this.atk} PV à l'énnemi`);
            this.combat = `l'attaque vient d'enlever ${this.atk} PV à l'énnemi`;
            this.combatResponse.push(this.combat);

            random = Math.floor(Math.random()*(20-10)+10);
            this.atk = random;
            this.pvPlayer -= this.atk;
            // console.log(`l'IA vient de vous enlever ${random} PV`);
            this.combat = `l'IA vient de vous enlever ${random} PV`;
            this.combatResponse.push(this.combat);
            // console.log(this.combatResponse);
            // incrementation tour
            if (this.tour === 3) {
                this.tour = 0;
                
            } else {
                this.tour++;  
                console.log(`tour = ${this.tour}`);
            }
        },

        attackSpecial(){
            this.atk = 20;
            this.pvIa -= this.atk;
            console.log(`l'attaque spé enlève ${this.atk} PV`);

            random = Math.trunc(Math.random()*(20-10)+10);
            this.atk = random;
            this.pvPlayer -= this.atk;
            console.log(`l'IA vient de vous enlever ${random}`);
            this.test = !this.test;
            this.tour = 0;
            // console.log(this.test);
            },
        

    watch: {
        tour(value){
            if(value === 3){
                this.test = !this.test;
            }
        },
    },
});
    app.mount('#monApp');