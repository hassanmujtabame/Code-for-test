<script>
export default {
 name:'credit-card',
    data:()=>({
        groupCard:'credit-card-image',
            card_number:'',
            card_holder:'',
            card_cvv:'',
            expiry_date:'',
    }),
    watch:{
        card_number(){
            this.sendNumberCard()
        },
        card_holder(){
            this.sendHolderCard()
        },
        card_cvv(){
            this.sendCVVCard()
        },
        expiry_date(){
            this.sendExpiryCard()
        },
    },
    methods: {
        sendChangeFaceCard(face){
            this.fireEvent(`${this.groupCard}-show-face`,face)
        },
        sendEventCard(name,data){
            this.fireEvent(`${this.groupCard}-${name}`,data)
        },
        sendNumberCard(){
            this.sendEventCard('card-number',this.card_number)
        },
        sendHolderCard(){
            this.sendEventCard('card-holder',this.card_holder)
        },
        sendCVVCard(){
            this.sendEventCard('cvv',this.card_cvv)
        },
        sendExpiryCard(){
            this.sendEventCard('expiry-date',this.expiry_date)
        },
        payment() {
            this.$emit('payment', this.itemForm)
        },
    }
}
</script>

<style>

</style>