<template>
  <div class="info">
        <div class="icon">
        
            <i v-if="icon" :class="icon"
            :style="{color: color}"></i>
            <img v-else :src="source">	
        </div>
        <span class="sensor-data">
            <span>{{name}}</span> 
            <span>{{timestamp}}</span>
        </span>
        <span>{{sensorvalue}}{{units}}</span>	
    </div>
</template>
<script>

export default{
  props: {
    name: {
      value: String
    },
    icon: {
        value: String
    },
    sensorpath: {
        value: String
    },
    units: {
        value: String
    },
    source: {
        type: String
    },
    color: {
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