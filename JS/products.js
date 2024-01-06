const App = {
    data() {
    return {
        products: [],
        productsDetail: {},
    }
    },
    methods: {

    },
    mounted() {
        //取得token
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");
        if(token){ //如果沒有token的話跳導回登入頁
            //token加一次即可
            axios.defaults.headers.common['Authorization'] = token;
            const url = 'https://ec-course-api.hexschool.io/v2';
            const path = "ahmomoz";
            axios.get(`${url}/api/${path}/admin/products`)
            .then(res=>{
            console.log(res.data);
            this.products = [...res.data.products]
            })
            .catch(error=>{
            console.dir(error);
            })
        }else{
            window.location.href = "login.html";
        }
    }
};
Vue.createApp(App).mount('#app');