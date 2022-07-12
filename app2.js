const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
            test: true,
        };
    },
    methods: {

        attackPlayer(){
            this.atk = 10;
            this.pvIa -= this.atk;
            console.log("l'attaque vient d'enlever 10pv");

            test = Math.floor(Math.random()*(20-10)+10);
            this.atk= test;
            this.pvPlayer -= this.atk;
            console.log(`l'IA vient de vous enlever ${test} pv`)

            // incrementation tour
            if (this.tour === 4) {
                this.tour =0;
                
            }else{
                this.tour++;  
                console.log(`this.tour = ${this.tour}`);
            }

        },

        attackSpecial(){
            if (this.test === true) {
                this.atk = 20;
                this.pvIa -= this.atk;
                console.log("l'attaque spé enlève 20pv");
    
                test = Math.trunc(Math.random()*(20-10)+10);
                this.atk= test;
                this.pvPlayer -= this.atk;
                console.log(`l'IA vient de vous enlever ${test}`);

                
                // on relance le compteur quand on clique
                this.tour =0;
    
                // pour cacher le bouton
                this.test = !this.test;
                // console.log(`this.test = ${this.test}`); 

                // on reactive le bouton
            }
            if(this.test === false && this.tour === 3){
                this.test = !this.test;
                console.log('COUCOU');  
            }
        },
        
    },