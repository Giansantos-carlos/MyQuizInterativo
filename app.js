const correctAnswers =  ['B','D','C','B','A','C','A','C','D','A']
const form = document.querySelector('.quiz-form')
const questions = document.querySelectorAll('.my-5')
const finalScoreContaneir =  document.querySelector('.final-score-contanier')

let score = 0
const getUsersAnswers = () => correctAnswers.map((_, index) => 
 form[`inputQuestion${index + 1}`].value)

 const calculateUserScore = usersAnswers => {
    usersAnswers.forEach((usersAnswer, index)=> {
        const isUserAnswerCorrect = usersAnswer === correctAnswers[index]
        let colorAnswerCorrect = questions[index + 1].style.color
        if(isUserAnswerCorrect){
            score += 10
            questions[index + 1].style.color = "#00FF00"
            return
        }
        questions[index + 1].style.color = "#FF0000"
    })
}
const showFinalScore = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
    finalScoreContaneir.classList.remove('d-none')
} 


const animateFinalScore = () => {

    let counter = 0
    const timer = setInterval(() => {
        if(counter === score){
            clearInterval(timer)
        }

        finalScoreContaneir.querySelector('span').textContent = `${counter++}%`
    }, 10)
}

const resetUserScore = () => {
    score = 0
}

form.addEventListener('submit', event  => {
    event.preventDefault()
    const usersAnswers = getUsersAnswers()
    
    resetUserScore()
    calculateUserScore(usersAnswers)
    showFinalScore()
    animateFinalScore()
})
