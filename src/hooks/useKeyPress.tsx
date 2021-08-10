import {useState, useEffect} from 'react';
type KeyBoardEventNames = 'keydown' | 'keyup';
const eventNames: KeyBoardEventNames[] = ['keydown', 'keyup'];
export const useKeyPress = function (targetKey: string) {
    const [keyPressed, setKeyPressed] = useState<boolean>(false);

    const downHandler = (e: KeyboardEvent): void => {
        if (e.key === targetKey) {
            setKeyPressed(true);
        }
    }

    const upHandler = (e: KeyboardEvent): void => {
        if (e.key === targetKey) {
            setKeyPressed(false);
        }
    };

    useEffect(() => {
        window.addEventListener(eventNames[0], downHandler);
        window.addEventListener(eventNames[1], upHandler);

        return () => {
            window.removeEventListener(eventNames[0], downHandler);
            window.removeEventListener(eventNames[1], upHandler);
        };
    });

    return keyPressed;
};