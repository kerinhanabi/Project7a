const app = Vue.createApp({
    data() {
        return{
            links: [
                {text: 'Home', url: 'index.html'},
                {text: 'About', url: 'about.html'},
                {text: 'Contact', url: 'contact.html'},
            ],
            title: 'Hello, Vue',
            paragraph1: 'Welcome to the Vue World.'
        }
    }
})
app.mount('#main-app');
