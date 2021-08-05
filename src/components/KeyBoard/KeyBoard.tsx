import React from 'react'

const KeyBoard: React.FC = () => {
    const numbers: number[] = Array.from({ length: 9 }, (v, i) =>  i + 1);
    return (
        <div className="key-board">
            {numbers.map((item, index) => <button key={index} className="btn key-board__btn">{item}</button>)}
            <button className="btn key-board__btn key-board__btn--width">Стереть</button>
            <button className="btn key-board__btn">0</button>
        </div>
    )
}

export default KeyBoard
