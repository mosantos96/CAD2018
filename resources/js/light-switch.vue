<template>
  <div class="info">
      <div class="icon">
          <i :class="[{'far': closed, 'fa on': !closed}, onicon]"></i>
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
    }
  },
  data () {
    return {
      closed: true
    }
  },
  methods: {
    toggle: function () {
      this.closed = !this.closed
    }
  }
}
</script>
