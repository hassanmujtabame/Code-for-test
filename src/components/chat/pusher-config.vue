<script>
import { mapGetters } from 'vuex';
import Echo from 'laravel-echo';
export default {
    data:()=>({
        pusher:null,
    app_key:'anysecret',
    app_id:'anysecret',
    app_cluster:'mt1',
    app_port:8080,
    wss_port:8443,
    app_url:'laravel8.test',
    app_protocol:'http',
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
                this.pusher =  new window.Pusher(this.app_key, {
                    cluster: this.app_cluster,
                    wsHost: `${this.app_url}`,
                    wsPort:this.wss_port,
                    wssPort:this.wss_port,
                    wsPath:'',
                    disableStats: false,
                    authEndpoint: `${this.app_protocol}://${this.app_url}:${this.app_port}/laravel-websockets/auth`,
                    auth: {
                        headers: {
                            'Authorization' : `Bearer ${this.myToken}`,
                            //'X-CSRF-Token': "{{ csrf_token() }}",
                            'X-App-ID': this.app_id
                        }
                    },
                    enabledTransports: ['ws', 'flash'],
                });
                window.Echo = new Echo({
                    broadcaster: 'pusher',
                    key: this.app_key,
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