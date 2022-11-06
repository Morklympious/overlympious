const random = ([ from, to ], { floor = true } = false) => {
    const range = to - from;
    
    if(range < 0) {
        throw Error(`"from" (${from}) is higher than "to" (${to}) in "random", maybe you forgot to swap the arguments?`);
    }

    const variant = range <= 1 ? Math.random() : Math.random() * range;

    return floor ? Math.floor(variant) + from : variant + from;
};

export default random;
