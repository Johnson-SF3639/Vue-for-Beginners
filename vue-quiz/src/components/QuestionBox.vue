<template>
    <div class="question-box-container">
        <b-jumbotron class="mt-5">
            <template slot="lead">
                {{ currentQuestion.question }}
            </template>
            <hr class="my-4"/>

            <b-list-group>
                <b-list-group-item 
                v-for="(answer, index) in shuffleAnswers" 
                :key="index" 
                @click="selectAnswer(index)"
                :class="answerClass(index)">
                    {{answer}}
                </b-list-group-item>
            </b-list-group>

            <b-button @click="submitAnswer" :disabled="selectedIndex === null && answered" variant="primary">Submit</b-button>
            <b-button @click="next" variant="success">Next</b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash';
export default{
    props:{
        currentQuestion : Object,
        next : Function,
        increment : Function,
    },
    data(){
        return{
            selectedIndex : null,
            correctIndex : null,
            shuffleAnswers : [],
            answered : false
        }
    },
    computed:{
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer)
            return answers
        }
    },
    watch:{
        currentQuestion:{
            immediate: true,
            handler(){
                this.selectedIndex = null
                this.shuffleAnswer()
                this.answered = false
            }
        }
    },
    methods:{
        selectAnswer(index){
            this.selectedIndex = index
        },
        shuffleAnswer(){
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer]
            this.shuffleAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffleAnswers.indexOf(this.currentQuestion.correct_answer)
            console.log("Answer List : ",this.shuffleAnswers);
            console.log("Answer : ",this.currentQuestion.correct_answer);
        },
        submitAnswer(){
            
            console.log("check :",this.correctIndex);
            console.log("Select check :",this.selectedIndex);
            let isCorrect = false
            if(this.selectedIndex == this.correctIndex){
                isCorrect = true
            }
            
            this.answered = true
            this.increment(isCorrect)
        },
        answerClass(index){
            let answerClass = ''
            if(!this.answered && this.selectedIndex === index){
                answerClass='selected'
            }
            else if(this.answered && this.correctIndex === index){
                answerClass='correct'
            }
            else if(this.answered && this.selectedIndex === index && this.correctIndex !== index){
                answerClass='incorrect'
            }
            return answerClass
        }
    }
}
</script>     

<style scoped>
.list-group{
    margin-bottom: 15px;
}
.list-group-item:hover{
    background-color: #eee;
    cursor: pointer;
}
.btn{
    margin: 0 5px;
}
.selected{
    background-color: lightblue;
}
.correct{
    background-color: lightgreen;
}
.incorrect{
    background-color:   red;
}
</style>
