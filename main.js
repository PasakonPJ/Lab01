// const product = 'Socks'
const app = Vue.createApp({
    data() {
        return{
        
            product: 'Shoes',
            inStock: true,
            Url:'https://www.camt.cmu.ac.th/index.php/th/',
            image:'./assets/images/socks_green.jpg',
            inventory: 100,
            onSale: false,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green',image: './assets/images/socks_green.jpg'},
                {id:2235, color:'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes:['S','M','L'],
            cart: 0
        }
    },
    methods:{
        addToCart(){
          this.cart +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        },
        Checkstatus(){
            this.inStock =!this.inStock
        }
    }    
})
