import React, { useState, useEffect } from 'react'
import { addNumber, deleteNumber, numbers } from './utils';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useData } from '../DataContext/DataContext';

const KeyBoard: React.FC = () => {
    const [phNumber, setPhNumber] = useState<number[]>([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
    const {setValues} = useData();
    useEffect(() => {
        setValues(phNumber)
    }, [phNumber, setValues]);

    const [active, setActive] = useState<number>(4);

    const upPress = useKeyPress("ArrowUp");
    const downPress = useKeyPress("ArrowDown");
    const leftPress = useKeyPress("ArrowLeft");
    const rightPress = useKeyPress("ArrowRight");

    const enterPress = useKeyPress("Enter");
    const backSpacePress = useKeyPress("Backspace");

    const zeroPress = useKeyPress("0");
    const onePress = useKeyPress("1");
    const twoPress = useKeyPress("2");
    const threePress = useKeyPress("3");
    const fourPress = useKeyPress("4");
    const fivePress = useKeyPress("5");
    const sixPress = useKeyPress("6");
    const sevenPress = useKeyPress("7");
    const eightPress = useKeyPress("8");
    const ninePress = useKeyPress("9");

    useEffect(() => {
        if (upPress) {
            setActive(prevState => {
                if (prevState === 9) {
                    return 7;
                }
                if (prevState === 10) {
                    return 8;
                }
                if (prevState <= 8 && prevState >= 3) {
                    return prevState - 3;
                }
                if (prevState === 0 || prevState === 1) {
                    return 9;
                }
                if (prevState === 2) {
                    return 10;
                } else {
                    return 4;
                }
            })
        }
    }, [upPress]);
    useEffect(() => {
        if (downPress) {
            setActive(prevState => {
                if (prevState === 8) {
                    return 10;
                }
                if (prevState <= 5 && prevState !== -1) {
                    return prevState + 3
                }
                if (prevState === 6 || prevState === 7) {
                    return 9
                }
                if (prevState === 9) {
                    return 0;
                }
                if (prevState === 10) {
                    return 2;
                } else {
                    return 4;
                }
            });
        }
    }, [downPress]);
    useEffect(() => {
        if (leftPress) {
            setActive(prevState => {
                if (prevState === -1) {
                    return 4;
                }
                if (prevState > 0) {
                    return prevState - 1;
                } else {
                    return 10;
                }
            });
        }
    }, [leftPress]);
    useEffect(() => {
        if (rightPress) {
            setActive(prevState => {
                if (prevState === -1) {
                    return 4;
                }
                if (prevState < 10) {
                    return prevState + 1;
                } else {
                    return 0;
                }
            });
        }
    }, [rightPress]);

    useEffect(() => {
        if (enterPress && active !== -1 && active !== 9 && active !== 10) addNumber(active, setPhNumber);
        if (enterPress && active === 9) deleteNumber(setPhNumber);
        if (enterPress && active === 10) addNumber(-1, setPhNumber);
    }, [enterPress, active]);
    useEffect(() => {
        if (backSpacePress) {
            deleteNumber(setPhNumber);
            setActive(9);
        }
    }, [backSpacePress]);

    useEffect(() => {
        if (zeroPress) {
            addNumber(-1, setPhNumber);
            setActive(10);
        }
    }, [zeroPress]);
    useEffect(() => {
        if (onePress) {
            addNumber(0, setPhNumber);
            setActive(0);
        }
    }, [onePress]);
    useEffect(() => {
        if (twoPress) {
            addNumber(1, setPhNumber);
            setActive(1);
        }
    }, [twoPress]);
    useEffect(() => {
        if (threePress) {
            addNumber(2, setPhNumber);
            setActive(2);
        }
    }, [threePress]);
    useEffect(() => {
        if (fourPress) {
            addNumber(3, setPhNumber);
            setActive(3);
        }
    }, [fourPress]);
    useEffect(() => {
        if (fivePress) {
            addNumber(4, setPhNumber);
            setActive(4);
        }
    }, [fivePress]);
    useEffect(() => {
        if (sixPress) {
            addNumber(5, setPhNumber);
            setActive(5);
        }
    }, [sixPress]);
    useEffect(() => {
        if (sevenPress) {
            addNumber(6, setPhNumber);
            setActive(6);
        }
    }, [sevenPress]);
    useEffect(() => {
        if (eightPress) {
            addNumber(7, setPhNumber);
            setActive(7);
        }
    }, [eightPress]);
    useEffect(() => {
        if (ninePress) {
            addNumber(8, setPhNumber);
            setActive(8);
        }
    }, [ninePress]);

    return (
        <div className="key-board">
            {numbers.map((item, index) => {
                if (index === 9) {
                    return (
                        <button
                            key={index}
                            tabIndex={-1}
                            onMouseOver={() => setActive(index)}
                            onMouseLeave={() => setActive(-1)}
                            onClick={() => deleteNumber(setPhNumber)} 
                            className={`btn key-board__btn key-board__btn--width ${(active === index) ? 'key-board__btn--active' : ''}`}
                        >Стереть</button>
                    );
                } else if (index === 10) {
                    return (
                        <button
                            tabIndex={-1}
                            onMouseOver={() => setActive(index)}
                            onMouseLeave={() => setActive(-1)}
                            onClick={() => addNumber(-1, setPhNumber)}
                            key={index}
                            className={`btn key-board__btn ${(active === index) ? 'key-board__btn--active' : ''}`}
                        >0</button>
                    );
                } else {
                    return (
                        <button
                            tabIndex={-1}
                            onMouseOver={() => setActive(index)}
                            onMouseLeave={() => setActive(-1)}
                            onClick={() => addNumber(index, setPhNumber)}
                            key={index}
                            className={`btn key-board__btn ${(active === index) ? 'key-board__btn--active' : ''}`}
                        >{item}</button>
                    );
                }
            })}
        </div>
    )
}

export default KeyBoard
