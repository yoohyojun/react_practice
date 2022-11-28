import React, { useState, useRef } from 'react'

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (e) => {
        // 리액트에서 객체를 업데이트하게 될 때에는 기존 객체를 직접 수정하면 안되고
        // 새로운 객체를 만들어서 새 객체에 변화를 주어야 한다.
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        console.log(`value : ${value} & name : ${name}`);
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} {nickname && `(${nickname})`}
            </div>
        </div>
    );
}

export default InputSample;