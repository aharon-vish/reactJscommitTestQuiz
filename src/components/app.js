import React from 'react';
import { Component } from 'react';
import Question from './Question';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {index: 0 , prevBtnDisabled:false, nextBtnDisabled:false,grade:0};
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
        this.showGrade = this.showGrade.bind(this);
        this.answerSelect = this.answerSelect.bind(this);
    }

    buttonClickHandler(action) {
        let index = this.state.index ;
        let prevBtnDisabled = this.state.prevBtnDisabled;
        let nextBtnDisabled = this.state.nextBtnDisabled;
        switch (action) {
            case 'prev' :
                if(index ===  0){
                    this.setState({prevBtnDisabled : true});
                    this.setState({nextBtnDisabled : false});
                    return ;
                }
                this.setState({index : --index });
                break;
            case 'next' :
                if(index > questions.length - 2){
                    this.setState({nextBtnDisabled : true});
                    this.setState({prevBtnDisabled : false});
                    return ;
                }
                this.setState({nextBtnDisabled : index > questions.length - 2 , prevBtnDisabled: index > 0 });
                this.setState({index : ++index });
                break;
        }
    }
    showGrade(){
     alert(this.state.grade);
    }

    answerSelect(answer,e){
        questions[this.state.index].userAnswer = answer.toString();
        e.currentTarget.classList.add('selected');
        if(questions[this.state.index].answer === answer){
            this.setState({grade : ++this.state.grade});
        }

    }
    render() {
        return (
            <div>
                <Question questions={questions[this.state.index]} answerSelect={this.answerSelect}/>
                <button  disabled={this.state.prevBtnDisabled} onClick={this.buttonClickHandler.bind(this,'prev')}>prev</button>
                <button  disabled={this.state.nextBtnDisabled} onClick={this.buttonClickHandler.bind(this,'next')}>next</button>
                <button   onClick={this.showGrade}>show Grade</button>
            </div>
        );
    }
}

const questions = [{questionHeader: '1 + 1 ?', A: '1', B: '2', C: '3', D: '4',answer:'B' , uniqueId:1 ,userAnswer:''},
                   {questionHeader: '4 + 1 ?', A: '1', B: '2', C: '3', D: '5',answer:'D',uniqueId:2,userAnswer:''},
                   {questionHeader: '4 + 6 ?', A: '1', B: '10', C: '3', D: '4',answer:'B',uniqueId:3,userAnswer:''}];