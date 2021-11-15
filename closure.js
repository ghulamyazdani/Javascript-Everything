const makeTimer = () => {
    let elapsed = 0;
    const stopwatch = () => {return elapsed};
    const increase = () => elapsed++;
    setInterval(stopwatch, 1000);
    return stopwatch;
}
let timer = makeTimer();

const consider = (name) => {
    return `I think it could be...${name}`;
}
const exclaim = (statement) => {
    return `${statement.toUpperCase()}!`;
}
const blame = _.compose(consider,exclaim);
blame('you');