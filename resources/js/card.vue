<template>
	<section class="box-child">
        <div class="card-header">
           <h2>{{name}}</h2>
          <i class="fas fa-caret-up hide-show-button"
          @click="toggle"
          :class="{'fas fa-chevron-circle-down': !closed, 'fas fa-chevron-circle-up': closed}"></i>
        </div>
        <div v-show="closed">	
          <slot></slot>	
        </div>
		
	</section>
</template>

<script>
export default{
  props: {
    name: {
      value: String
    }
  },
  data () {
    return {
      closed: true
    }
  },
  methods: {
    toggle () {
      this.closed = !this.closed
    }
  }
}
</script>
