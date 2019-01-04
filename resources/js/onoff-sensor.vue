´<template>
  <div class="info">
        <div class="icon">
            <i v-if="onicon || officon":class="{[officon]: sensorvalue, [onicon]: !sensorvalue}"
            :style="getColor()"></i>
            <img v-else :src="source">	
        </div>
        <span class="sensor-data">
            <span>{{name}}</span> 
            <span>{{timestamp}}</span>
        </span>
        <span v-if="sensorvalue == 1">Closed</span>
        <span v-else>Opened</span>	
    </div>
</template>

<script>

    export default{
    props: {
        name: {
            type: String
        },
        onicon: {
            type: String
        },
        officon: {
            type: String
        },
        coloron: {
            value: String
        },
        coloroff: {
            value: String
        },
        sensorpath: {
            type: String
        },
        source: {
            type: String
        }
        
    },
    data () {
        return {
            sensorvalue: 1,
            timestamp: "",
            interval: null
        } 
    },
    methods: {
        getColor(){
            return 'color:' + (this.sensorvalue ? this.coloroff : this.coloron) + ';';
        }
    },
    created(){
        var sensorRef = sensoresRef.child(this.sensorpath)
        sensorRef.on('value', snap => {
                this.sensorvalue = snap.val() 
                var lastupdate = moment()//console.log("Last Update: " + lastupdate.fromNow())
                this.timestamp = lastupdate.fromNow()  
                if (this.interval != null){ 
                    clearInterval(this.interval)
                }
                this.interval = setInterval(() => {
                        //console.log("Update timestamp: " + lastupdate.fromNow())
                        this.timestamp = lastupdate.fromNow()
                    }, 60000)
                })  
            }
        
    }
</script>