const app = Vue.createApp({
    data() {
        return {
            pvPlayer : 50,
            pvIa : 100,
            tour : 0,
            atk : 0,
        };
    },
    methods: {
heal() {
            if(this.pvPlayer > 0 && this.pvPlayer < 100){
                this.pvPlayer = this.pvPlayer +20;
                this.tour = this.tour +1;
            }
            
            if(this.pvPlayer > 100){
                this.pvPlayer=100;
            }
            console.log("+20 de pv pour le Player");
        }
    },
    computed:{
        

    }
    });
    app.mount('#monApp');