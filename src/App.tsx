import React,{useState} from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { fetchQuestion, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question:string;
  answer:string;
  correct:boolean;
  correctAnswer:string;
}

function App() {
  const [Loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer ] = useState<AnswerObject[]>([]);
  const [score , setScore] = useState(0);
  const [gameOver , setGameOver] = useState(true);
 
  console.log(questions);
  
  const startQuiz = async() => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuestion(TOTAL_QUESTIONS, Difficulty.MEDIUM);
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  };
  const nextQuestion = async() => {};
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
    if(!gameOver){
      const answer = e.currentTarget.value;   }
  };
  return (
    <div className="App">
     <h1>Quiz</h1>
     { gameOver || userAnswer.length === TOTAL_QUESTIONS ?   (
     <button className='start' onClick={startQuiz} >Start Quiz</button>) : null}
      {!gameOver ? ( <p className='score'>Score:</p> ) :null }
      {!gameOver ? (<p>Loading</p> ): null }
     {!Loading && !gameOver ? (
      <QuestionCard 
       questionNum = {number + 1}
      totalQuestion = {TOTAL_QUESTIONS}
      questions = {questions[number].question}
      answers = {questions[number].answers}
      userAnswer = {userAnswer ? userAnswer[number] : undefined}
      callback = {checkAnswer} 
     /> ) :null }
     {!gameOver && !Loading && userAnswer.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ?
     ( <button className='next' onClick={nextQuestion}>Next</button> ) :null }
    </div>
  );
}

export default App;
