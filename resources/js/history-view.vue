<template>
    <div class="dropdown">
        <button class="dropbtn" v-on:click="buttonPressed">{{buttonName}}</button>
        <div class="dropdown-content" id="dropdownList">
            <a id="dropdownElement1" v-on:click="elementPressed(index=1)">Sensores/BME280/Temperature</a>
            <a id="dropdownElement2" v-on:click="elementPressed(index=2)">Sensores/BME280/Pressure</a>
            <a id="dropdownElement3" v-on:click="elementPressed(index=3)">Sensores/BME280/Humidity</a>
            <a id="dropdownElement4" v-on:click="elementPressed(index=4)">Sensores/DoorSensor/DoorSensor</a>
            <a id="dropdownElement5" v-on:click="elementPressed(index=5)">Sensores/OpenWeather/Temperature</a>
            <a id="dropdownElement6" v-on:click="elementPressed(index=6)">Atuadores/Fan</a>
            <a id="dropdownElement7" v-on:click="elementPressed(index=7)">Atuadores/Lamp</a>
            <a id="dropdownElement8" v-on:click="elementPressed(index=8)">Atuadores/Watering</a>
        </div>

        <h1 class="history-title">History</h1>

        <table style="width:100%">
            <tr>
                <th>Data</th>
                <th>Hora</th> 
                <th>Valor</th>
            </tr>
            <tr v-for="item in data">
                <td>{{item.day}}</td>
                <td>{{item.hour}}</td> 
                <td>{{item.value}}</td>
            </tr>
        </table>

    </div>


</template>

<script>
    export default{

        props: {
        },

        data () {
            return {
                value: null,
                buttonName: "Device",
                selectedDevice: "",
                url: "",
                data: {},
            }
        },
        
        methods: {
            buttonPressed: function(index) {
                document.querySelector("#dropdownList").classList.toggle("show")
            },

    

            elementPressed: function(index) {
                this.selectedDevice = document.querySelector("#dropdownElement"+index).textContent
                document.querySelector("#dropdownList").classList.toggle("show")
                this.url = 'https://cad2018-91c62.firebaseio.com/Historico/'+this.selectedDevice+'.json'
                
                axios.get(this.url)
		        .then(response => {
                    let receivedJson = response.data
			        console.log(response.data)
                    for (var x in response.data){
                        console.log('Im here '+(response.data[x].day))
                    }
                    this.data= response.data
                    
		        })
		        .catch(function(error){
			        console.log(error)
		        })

            }
        },
        created() {
        }
    }
</script>
