const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
            test:false,
            combat:'',
            combatResponse: [],
            width: 0
        };
    },
    
    methods: {
        attackPlayer(){

            if (this.combatResponse.length > 2) {
                this.combatResponse = [];
            }

            this.atk = 10;
            this.pvIa -= this.atk;
            // console.log(`l'attaque vient d'enlever ${this.atk} PV à l'énemie`);
            this.combat = `l'attaque vient d'enlever ${this.atk} PV à l'énemie`;
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
                // console.log(`tour = ${this.tour}`);
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
            }
        },
    computed: {

    },
    watch: {
        tour(value){
            if(value === 3){
                this.test = !this.test;

            }
        },

    }
    
    });
    app.mount('#monApp');