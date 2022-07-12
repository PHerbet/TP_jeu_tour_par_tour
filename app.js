const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
            test:false
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
            if (this.tour === 3) {
                this.tour =0;
                
            }else{
                this.tour++;  
                console.log(`this.tour = ${this.tour}`);
            }

        },

        attackSpecial(){
            this.atk = 20;
            this.pvIa -= this.atk;
            console.log("l'attaque spé enlève 20pv");

            test = Math.trunc(Math.random()*(20-10)+10);
            this.atk= test;
            this.pvPlayer -= this.atk;
            console.log(`l'IA vient de vous enlever ${test}`);
            this.test = !this.test;
            this.tour =0;

            console.log(this.test);
            }
        },
    computed: {

    },
    watch: {
        tour(value){
            if(value === 3){
                this.test = !this.test;

            }
        }
    }
    
    });
    app.mount('#monApp');