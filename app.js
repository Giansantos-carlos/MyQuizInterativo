const correctAnswers =  ['B','D','C','B','A','C','A','C','D','A']
const form = document.querySelector('.quiz-form')
const questions = document.querySelectorAll('.my-5')
const FinalScoreContaneir =  document.querySelector('.final-score-contanier')
let counter = 0
let score = 0
const getUsersAnswers = () => {
    let usersAnswers = []
    correctAnswers.forEach((correctAnswer, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        usersAnswers.push(userAnswer)
    })     
    return usersAnswers
}
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
    FinalScoreContaneir.classList.remove('d-none')
} 
const animateFinalScore = () => {
    const timer = setInterval(() => {
        if(counter === score){
            clearInterval(timer)
        }
        FinalScoreContaneir.querySelector('span').textContent = `${counter++}%`
    }, 10)
}
form.addEventListener('submit', event  => {
    event.preventDefault()
    const usersAnswers = getUsersAnswers()   
    calculateUserScore(usersAnswers)
    showFinalScore()
    animateFinalScore()
})
