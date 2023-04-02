<script>
import { mapGetters } from 'vuex';
import Echo from 'laravel-echo';
export default {
    data:()=>({
        pusher:null,
        connected:false,
        logs:[]
    }),
    computed:{
        ...mapGetters({
            myToken:'auth/token'
        })
    },
    watch:{
        myToken:{
            deep:true,
            immediate:true,
            handler(){
                if(this.connected){
                    this.disconnect()
                    this.connect()
                }
                
            }
        }
    },
    methods:{
        myconnect(){
            console.mylog('myconnect')
           /* window.Echo = new window.Echo({
                    broadcaster: 'pusher',
                    key: process.env.MIX_PUSHER_APP_KEY,
                    cluster: process.env.MIX_PUSHER_APP_CLUSTER,
                    forceTLS: true
                });*/
        },
        connect() {
            if(!this.myToken){
                console.mylog('no token');
                 return;
            } 
            //const token = this.$store.getters['auth/token'];
            let wshost=null;//'laravel8.test'  //process.env.VUE_APP_WS_HOST
            let wsport=null;//8443//process.env.VUE_APP_WS_PORT
            let auth_endpoint =null;//'https://laravel8.test:8443/laravel-websockets/auth'  //process.env.VUE_APP_AUTH_ENDPOINT
                this.pusher =  new window.Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
                    cluster:process.env.VUE_APP_PUSHER_APP_CLUSTER,
                    wsHost: wshost??'test1.riadiat.sa',
                    wsPort:wsport??443,
                    wssPort:wsport??443,
                    wsPath:'',
                    disableStats: false,
                    authEndpoint: auth_endpoint??'https://test1.riadiat.sa/laravel-websockets/auth',
                    auth: {
                        headers: {
                            'Authorization' : `Bearer ${this.myToken}`,
                            //'X-CSRF-Token': "{{ csrf_token() }}",
                            'X-App-ID': process.env.VUE_APP_PUSHER_APP_ID
                        }
                    },
                    enabledTransports: ['ws', 'flash'],
                });
                window.Echo = new Echo({
                    broadcaster: 'pusher',
                    key: process.env.VUE_APP_PUSHER_APP_KEY,
                    client: this.pusher 
                });
                this.pusher.connection.bind('state_change', (/*states*/) => {
                   // $('div#status').text("Channels current state is " + states.current);
                });

                this.pusher.connection.bind('connected', () => {
                    this.connected = true;
                });

                this.pusher.connection.bind('disconnected', () => {
                    this.connected = false;
                    this.logs = [];
                });

                this.pusher.connection.bind('error', event => {
                    if (event.error.data.code === 4100) {
                       // $('div#status').text("Maximum connection limit exceeded!");
                        this.connected = false;
                        this.logs = [];
                        throw new Error("Over capacity");
                    }
                });

                //this.subscribeToAllChannels();

                //this.subscribeToStatistics();
            },

            disconnect() {
                this.pusher.disconnect();
            },
            subscribeToAllChannels() {
                [
                    'disconnection',
                    'connection',
                    'vacated',
                    'occupied',
                    'subscribed',
                    'client-message',
                    'api-message',
                ].forEach(channelName => this.subscribeToChannel(channelName))
            },
            subscribeToChannel(channel) {
                this.pusher.subscribe(channel)
                    .bind('log-message', (data) => {
                        console.mylog('log-message',data)
                        this.logs.push(data);
                    });
            },
    },
    beforeDestroy(){
        if(this.connected){
                    this.disconnect()
        }
    }
}
</script>