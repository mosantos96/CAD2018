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
        <div class="slidecontainer">
            <input type="range" min="0" max="100" value=sliderValue v-model="sliderValue" @input="getValue()"  @mouseup="saveValue()"class="slider" id="mySlider">
        </div>
        <span>{{pwm}}%</span>
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
    return {
      closed: true,
        source: "",
        timestamp: "",
        slider: null,
        sliderValue: 50,
        pwm: null
        
    }
  
  },

    methods: {
        getValue(){
            this.pwm = this.sliderValue
        },

        saveValue() {
            atuadoresRef.child(this.atuadorpath).set(parseInt(this.sliderValue))
        },

        getColor(){
            if (this.pwm == 0) {
                return this.coloroff
            } else {
                return this.coloron
            }
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
            } 
            clearInterval(interval)
            var interval = setInterval(() => {
                //console.log("Update timestamp: " + lastupdate.fromNow())
                this.timestamp = lastupdate.fromNow()
            }, 60000)
        }
        
    },
    created() {
        atuadoresRef.child(this.atuadorpath).on('value', snap => {
            this.sliderValue = snap.val() 
            this.pwm = snap.val()
        })     
           
    }
}
</script>
