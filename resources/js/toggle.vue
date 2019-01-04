<template>
  <div class="info">
      <div class="icon">
          <i :class="{[officon]: closed, [onicon]: !closed}"
            :style="{color: coloroff}"></i>
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
    timestamp: {
      value: String
    },
    onicon: {
      value: String
    },
    officon: {
      value: String
    },
    coloron: {
      value: String
    },
    coloroff: {
      value: String
    }
  },
  data () {
    colorRed: {
      color: 'red'
    }
    return {
      closed: true
    }
  
  },
  methods: {
    toggle: function () {
      if (this.closed){
        fanControlRef.set(1)
      } else {
        fanControlRef.set(0)
      }
      this.closed = !this.closed
    }
  }
}
</script>
