import React from 'react'

type Props ={
    questions:string;
    answers :string[];
    callback:any;
    userAnswer:any;
    questionNum:number;
    totalQuestion: number;

}
    
const QuestionCard: React.FC<Props>  = ({questions, answers,callback,userAnswer, questionNum, totalQuestion}) => {
    return (
    <div>
      <p>Question : {questionNum} / {totalQuestion}</p>
      <p dangerouslySetInnerHTML={{__html:questions}}/>
      <div>
        {answers.map(answers => (
            <div>
                <button disabled={userAnswer} value= {answers} onClick={callback}>
                    <span dangerouslySetInnerHTML={{__html:answers}} />
                </button>
            </div>
        )
        )}
      </div>
    </div>
  )
}

export default QuestionCard
