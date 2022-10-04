import { suffleArray } from "./utilities";

export const fetchQuestion = async(amount: number, difficulty:Difficulty ) =>{
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
    const data  = await(await fetch(endPoint)).json();
    return data.results.map((question:Question)=> (
        {
        ...question,
        answers: suffleArray([...question.incorrect_answers , question.correct_answer])
        }
));
}
export enum Difficulty {
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'medium'
} 

export type Question = {
    category:string;
    correct_answer:string;
    difficulty:string;
    incorrect_answers:string[];
    question:string;
    type:string;

}

export type QuestionState =  Question & {answers :string[]};
