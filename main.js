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
            Url:'https://www.camt.cmu.ac.th/index.php/th/',
            inventory: 100,
            onSale: false,
            details:['50% cotton','30% wool','20% polyester']
        }
    },
    methods:{
        Movetocamt(){
            console.log('loveu')
            window.location.href = 'https://www.camt.cmu.ac.th/index.php/th/'
        }
    }    
})
