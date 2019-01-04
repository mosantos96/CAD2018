<template>
    <div>
        <button class="add-button">{{name}}</button>
    </div>
    
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
        } 
    },
    methods: {
    }
        
    }
</script>