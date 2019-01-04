<template>
  <div class="info">
      <div class="icon">
          <i v-if="onicon || officon" :class="{[officon]: closed, [onicon]: !closed}"
            :style="getColor()"></i>
            <img v-else :src="source">	
        </div>
        <span class="sensor-data">
          <span>{{name}}</span>
          <span>{{timestamp}}</span>
        </span>
        <i class="fas fa-toggle-off switch" @click="toggle"
          :class="{'fa-toggle-off': closed, 'fa-toggle-on': !closed}"></i>
    </div>
</template>

<script>
export default{
  props: {
    name: {
      value: String
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
    atuadorpath: {
        value: String
    },
    source: {
        value: String
    }
  },
  data () {
    colorRed: {
      color: 'red'
    }
    return {
      closed: null,
        source: "",
        timestamp: ""
    }
  
  },

  methods: {

    getColor(){
        return 'color:' + (this.closed ? this.coloroff : this.coloron) + ';';
    },

    toggle: function () {   
        var lastupdate = moment()
        //console.log("Last Update: " + lastupdate.fromNow())
        this.timestamp = lastupdate.fromNow()
        
        if (this.closed){
            atuadoresRef.child(this.atuadorpath).set(1)
        } else {
            atuadoresRef.child(this.atuadorpath).set(0)
        }

        this.closed = !this.closed
        this.source = this.closed? this.sourceOff:this.sourceOn

        if (interval == null){
            var interval = setInterval(() => {
                //console.log("Update timestamp: " + lastupdate.fromNow())
                this.timestamp = lastupdate.fromNow()
            }, 60000)
        } else
            clearInterval(interval)
            var interval = setInterval(() => {
                //console.log("Update timestamp: " + lastupdate.fromNow())
                this.timestamp = lastupdate.fromNow()
            }, 60000)
        }
    },
    created() {
        atuadoresRef.child(this.atuadorpath).on('value', snap => {
            this.closed = !snap.val() 
        })     
           
    }
}
</script>
