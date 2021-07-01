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
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green'},
                {id:2235, color:'blue'}
            ],
            sizes:['S','M','L'],
            cart: 0
        }
    },
    methods:{
        Movetocamt(){
            console.log('loveu')
            window.location.href = 'https://www.camt.cmu.ac.th/index.php/th/'
        },
        addToCart(){
          this.cart +=1
        }
    }    
})
