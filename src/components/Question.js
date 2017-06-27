import React from 'react';
import { Component } from 'react';
import _ from 'lodash';
export default class Question extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    renderQuestion() {
        return (<ul>
            {Object.keys(this.props.questions).map(function (key) {
                if (key !== 'answer' && key !== 'uniqueId'&& key !== 'userAnswer') {
                    return <li
                        key={this.props.questions.uniqueId + this.props.questions[key]}
                        className={this.props.questions.userAnswer === key ? 'selected' : ''}
                        onClick={this.props.answerSelect.bind(this,[key])} >
                        {[key]}: {this.props.questions[key]}
                    </li>
                }
            }.bind(this))
            }
        </ul>);
    }
    render() {
        return (<div> {this.renderQuestion()}</div>)
    }
}