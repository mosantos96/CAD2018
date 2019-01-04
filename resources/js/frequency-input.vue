<template>
  <div class="info">
        <div class="icon">
            <i :class="icon"></i>	
        </div>
        <span class="data">
            <span>{{name}}</span>
        </span>
        <span>{{sensorvalue,units}}</span>	
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
        sensorvalue: {
            value: Number,
            default: 2000 
        }
    },
    data () {
        return {
        } 
    },
    methods: {
    }
        
    }
</script>