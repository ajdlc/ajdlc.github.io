// Data object for Vue.js
let data = {
    views: [
        {
            name: "home",
            show: true
        },
        {
            name: "hero",
            show: true
        },
        {
            name: "mainContent",
            show: true
        },
        {
            name: "about",
            show: true
        }
    ],
    message: "Hello everyone!",
    profilePic: "./assets/img/profile_pic.png",
    showParallaxText: false,
}

// Vue Components

// Appbar
Vue.component("appbar", {
    template: "#appbar",
    data() {
        return data;
    },
    methods: {
        changeView(name) {
            // Loop through and change all the views
            this.views.forEach((view) => {
                if (view.name === name) {
                    view.show = true;
                } else {
                    view.show = false;
                }
            })
        }
    }
});

// Hero Parallax Image
Vue.component("hero", {
    template: "#hero",
    data() {
        return data;
    }
})

// Main Content
Vue.component("main-content", {
    template: "#mainContent",
    data() {
        return data;
    }
})


// Vue app
var vm = new Vue({
    el: '#app',
    data: data,
    vuetify: new Vuetify(),
    methods: {
    },
    mounted() {
        // Mainly used to enable the transistions
        this.showParallaxText = true;
    }
})