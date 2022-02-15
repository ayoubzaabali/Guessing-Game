import { createStore } from "vuex";

export default createStore({
    state: {
        start: 0,
        clicked: [],
        users: [
            { id: 1, name: "circle.png", display: 0, disabled: 0, key: 1 },
            { id: 2, name: "hexagon.png", display: 0, disabled: 0, key: 2 },
            { id: 3, name: "oval.png", display: 0, disabled: 0, key: 3 },
            { id: 4, name: "pentagon.png", display: 0, disabled: 0, key: 4 },
            { id: 5, name: "rhombus.png", display: 0, disabled: 0, key: 5 },
            { id: 6, name: "square.png", display: 0, disabled: 0, key: 6 },
            { id: 7, name: "star.png", display: 0, disabled: 0, key: 7 },
            { id: 8, name: "triangle.png", display: 0, disabled: 0, key: 8 },
            { id: 1, name: "circle.png", display: 0, disabled: 0, key: 9 },
            { id: 2, name: "hexagon.png", display: 0, disabled: 0, key: 10 },
            { id: 3, name: "oval.png", display: 0, disabled: 0, key: 11 },
            { id: 4, name: "pentagon.png", display: 0, disabled: 0, key: 12 },
            { id: 5, name: "rhombus.png", display: 0, disabled: 0, key: 13 },
            { id: 6, name: "square.png", display: 0, disabled: 0, key: 14 },
            { id: 7, name: "star.png", display: 0, disabled: 0, key: 15 },
            { id: 8, name: "triangle.png", display: 0, disabled: 0, key: 16 },
        ],
    },
    mutations: {
        start(state) {
            console.log("started");
            state.users = [
                { id: 1, name: "circle.png", display: 0, disabled: 0, key: 1 },
                { id: 2, name: "hexagon.png", display: 0, disabled: 0, key: 2 },
                { id: 3, name: "oval.png", display: 0, disabled: 0, key: 3 },
                { id: 4, name: "pentagon.png", display: 0, disabled: 0, key: 4 },
                { id: 5, name: "rhombus.png", display: 0, disabled: 0, key: 5 },
                { id: 6, name: "square.png", display: 0, disabled: 0, key: 6 },
                { id: 7, name: "star.png", display: 0, disabled: 0, key: 7 },
                { id: 8, name: "triangle.png", display: 0, disabled: 0, key: 8 },
                { id: 1, name: "circle.png", display: 0, disabled: 0, key: 9 },
                { id: 2, name: "hexagon.png", display: 0, disabled: 0, key: 10 },
                { id: 3, name: "oval.png", display: 0, disabled: 0, key: 11 },
                { id: 4, name: "pentagon.png", display: 0, disabled: 0, key: 12 },
                { id: 5, name: "rhombus.png", display: 0, disabled: 0, key: 13 },
                { id: 6, name: "square.png", display: 0, disabled: 0, key: 14 },
                { id: 7, name: "star.png", display: 0, disabled: 0, key: 15 },
                { id: 8, name: "triangle.png", display: 0, disabled: 0, key: 16 },
            ];
            for (var i = 0; i < state.users.length - 1; i++) {
                var j = i + Math.floor(Math.random() * (state.users.length - i));
                var temp = state.users[j];
                state.users[j] = state.users[i];
                state.users[i] = temp;
            }
            state.start = 1;
        },
        setDisplay(state, key) {
            state.users.map((user) => {
                if (state.clicked.length < 2) {
                    if (state.clicked.length != 2) {
                        if (user.key == key) {
                            if (!user.disabled) {
                                user.display = 1;
                                state.clicked.push(key);
                            }
                        }
                    }
                }
            });
        },
        resetDisplay(state) {
            state.users.map((item) => {
                item.display = 0;
            });
        },
        checkClicked(state) {
            if (state.clicked.length == 2) {
                let id1 = state.users.find(x => x.key == state.clicked[0]).id
                let id2 = state.users.find(x => x.key == state.clicked[1]).id
                if (id1 == id2) {
                    state.users.map((user) => {
                        if (user.id == id1) {
                            user.display = 0;
                            user.disabled = 1;
                        }
                    })
                }

            }
            state.clicked = [];
            this.commit("resetDisplay");
        },
        checkGame(state) {
            let count = 0
            state.users.filter((user) => {
                if (user.disabled == 1) {
                    count++;
                }
            })
            if (count == 16) {
                console.log("congrat");
            } else {
                console.log("not yet");
            }
        }
    },
    actions: {
        setDisplayAct({ commit }, key) {
            this.commit("setDisplay", key);
        },
        async checkAct({ commit }) {
            await setTimeout(() => {
                this.commit("checkClicked");
                this.dispatch("checkGameAct");
            }, 500)
        },
        checkGameAct({ commit }) {
            this.commit("checkGame");
        },
    },
    getters: {
        // getUserId: (state) => (key) => {
        //    let user=state.users;
        //     for(let i=0;i<state.users.length;i++){
        //       if(user.key==key){
        //         return(user);
        //       }
        //     }
        // }

    },
});