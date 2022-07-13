const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
            fuite: true,
            game_over: true,
            atta : true,
            isActive: true,
            test:false,
            combat:'',
            combatResponse: [],
            width: 0
        };
    },
    
    methods: {

        attackPlayer(){
            //gestion des messages de combat
            if (this.combatResponse.length > 2) {
                this.combatResponse = [];
            }
            //gestion des messages de combat
            //////////////////// PV perdu //////////////
            this.atk = 10;
            this.pvIa -= this.atk;
            //////////////////// PV perdu //////////////
            this.combat = `l'attaque vient d'enlever ${this.atk} PV à l'énnemi`;
            this.combatResponse.push(this.combat);
            //gestion des messages de combat

            // ataque IA
            random = Math.floor(Math.random()*(20-10)+10);
            this.atk = random;
            this.pvPlayer -= this.atk;
            this.combat = `l'IA vient de vous enlever ${random} PV`;
            this.combatResponse.push(this.combat);
             // ataque IA

            // incrementation tour 
            if (this.tour === 3) {
                this.tour = 0;    
            } else {
                this.tour++;  
                console.log(`tour = ${this.tour}`);
            }
            // incrementation tour 
        },

        attackSpecial(){
            if (this.combatResponse.length > 2) {
                this.combatResponse = [];
            }
            //gestion des messages de combat

            //////////////////// PV perdu //////////////
            this.atk = 20;
            this.pvIa -= this.atk;
            //////////////////// PV perdu //////////////
            //gestion des messages de combat
            this.combat = `l'attaque spéciale d'enlever ${this.atk} PV à l'énnemi`;
            this.combatResponse.push(this.combat);
            //gestion des messages de combat

        
            console.log(`l'attaque spé enlève ${this.atk} PV`);

            // gestion de l'IA
            random = Math.trunc(Math.random()*(20-10)+10);
            this.atk = random;
            this.pvPlayer -= this.atk;

            //gestion des messages de combat
            this.combat = `l'IA vient de vous enlever ${random}`;
            this.combatResponse.push(this.combat);
            //gestion des messages de combat



            this.test = !this.test;
            this.tour = 0;
            
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
           

            //gestion des messages de combat
            this.combat = `vous avez maintenant ${this.pvPlayer}pv`;
            this.combatResponse.push(this.combat);
            //gestion des messages de combat

            // gestion de l'IA
            random = Math.trunc(Math.random()*(20-10)+10);
            this.atk = random;
            this.pvPlayer -= this.atk;
            
            //gestion des messages de combat
            this.combat = `l'IA vient de vous enlever ${random}`;
            this.combatResponse.push(this.combat);
           //gestion des messages de combat
        },
        flee(x) {
            if (x === 1) {
                this.fuite = !this.fuite;
            }
        if (x === 2){
            this.game_over = false;
        }
        }
    },
    computed:{
        
        },
    
    watch: {
        tour(value){
            if(value === 3){
                this.test = !this.test;
            }
        },
        pvIa(value){
            if (value <= 0 && this.pvPlayer > 0) {
                alert('tu as gagné');
                this.pvIa = 0;
            }
        },
        pvPlayer(value){
            if (value <= 0) {
                alert('tu as perdu');
                this.pvPlayer = 0;
            }
        },
    },
});
    app.mount('#monApp');