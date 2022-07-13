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
        }
    },
    computed: {

    },
    watch: {
        isActive(){
        }
    }
    });
    app.mount('#monApp');