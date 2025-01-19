const {createApp} = Vue;
const app = createApp({
    data() {
        return {
            message: "hello works"
        }
    }
});
app.mount('#app');

console.log('!!! hey');