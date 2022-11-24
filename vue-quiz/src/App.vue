<template>
  <div id="app">

    <HeadersComponent
    :numCorrect="numCorrect"
    :numTotal="numTotal" 
    />

    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox 
          v-if="question.length"
          :currentQuestion="question[index]"
          :next="next"
          :increment="increment"/>  
        </b-col>
      </b-row>
    </b-container>
  </div>  
</template>

<script>
import HeadersComponent from './components/HeaderComponent.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'App',
  components: {
    HeadersComponent,
    QuestionBox
  },
  data(){
    return {
      question : [],
      index : 0,
      numCorrect : 0,
      numTotal : 0
    }
  },
  methods:{
    next(){
      if(this.index  < this.question.length-1){
        this.index++
      }else{
        alert("Exam Finished!")
      }
      console.log(this.question.length)
    },
    increment(isCorrect){
      console.log("Working : ", isCorrect)
      if(isCorrect){
        this.numCorrect++
      }
      this.numTotal++
    }
  },
  mounted : function (){
    fetch('https://opentdb.com/api.php?amount=10&category=27&type=multiple',{
      method : 'get'
    })
.then((response)=>{
  return response.json()
})
.then((jsonData)=>{
  console.log("Json : ",jsonData.results[0].question);
  this.question = jsonData.results
})
 }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
