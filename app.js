const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 100,
            pvIa : 100,
            tour : 0,
            atk : 0,
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
        },
        
    },
    computed: {

    },

    watch: {
        pvIa(value){
            if (value <= 0) {
                console.log('tu as gagné')
            }
        },
        pvPlayer(value){
            if (value <= 0) {
                console.log('tu as perdu')
            }
        }

    }
    });
    app.mount('#monApp');