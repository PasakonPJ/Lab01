// const product = 'Socks'
const app = Vue.createApp({
    data() {
        return{
            // product: 'Boots',
            // Description: 'Is boots for cute people',
            // image: './assets/images/socks_green.jpg',
            product: 'Shoes',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            Url:'https://www.camt.cmu.ac.th/index.php/th/'
        }
    },
    methods:{
        Movetocamt(){
            console.log('loveu')
            window.location.href = 'https://www.camt.cmu.ac.th/index.php/th/'
        }
    }    
})
