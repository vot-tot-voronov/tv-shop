export const numbers: number[] = Array.from({ length: 11 }, (v, i) => {
    if (i === 10) return 0;
    return i + 1;
});
export const addNumber = (index: number, setNumber: Function): void => {
    setNumber((prevState: number[]) => {
        const replaceElem = prevState.indexOf(-1);
        if (replaceElem !== -1) {
            return [...prevState.slice(0, replaceElem), index + 1, ...prevState.slice(replaceElem + 1)];
        } else {
            return prevState;
        }
    })
};
export const deleteNumber = (setNumber: Function): void => {
    setNumber((prevState: number[]) => {
        const replaceElem = prevState.indexOf(-1);
        if (replaceElem !== -1 && replaceElem !== 0) {
            return [...prevState.slice(0, replaceElem - 1), -1, ...prevState.slice(replaceElem)];
        } else if (replaceElem === -1) {
            return [...prevState.slice(0, prevState.length - 1), -1];
        } else {
            return prevState;
        }
    })
}