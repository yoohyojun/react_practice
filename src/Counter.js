import React, { useState, useReducer, Component } from 'react';

function reducer(state, action) {

    switch (action.type) {
        case 'INCREMENT' :
            return state+1;
        case 'DECREMENT' :
            return state-1;
        default :
            return state;
    }

}

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);
//
//     const onIncrease = () => {
//         dispatch({type:'INCREMENT'});
//     }
//     const onDecrease = () => {
//         dispatch({type:'DECREMENT'});
//     }
//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

class Counter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter : 0,
            fixed: 1
        }
    }
    
    //보통 클래스 안에 메서드 이름은 handle을 붙여서 많이 작성한다고 함
    handleIncrease = () => {
        console.log('decrease');
        this.setState((state) => ({
            counter: state.counter + 1
        }));
    }

    handleDecrease = () => {
        this.setState((state) => ({
            counter: state.counter - 1
        }));
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <span>고정된 값 {this.state.fixed}</span>
            </div>
        )
    }
}


export default Counter;