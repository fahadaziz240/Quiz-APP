import React from 'react'
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';


type Props = {
    questions: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: number;
    totalQuestion: number;
}

export const QuestionCard: React.FC<Props> = ({ questions, answers, callback, userAnswer, questionNum, totalQuestion}) => {
    return (
        <Wrapper>
            <p>
                Question: {questionNum} / {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{ __html: questions}} />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct = {userAnswer?.correctAnswer === answer}
                        userClicked = { userAnswer?.answer === answer }
                    >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
        </Wrapper>
    )
}