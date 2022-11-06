const random = ([ from, to ]) => {
    const range = to - from;
    
    if(range < 0) {
        throw Error(`"from" (${from}) is higher than "to" (${to}) in "random", maybe you forgot to swap the arguments?`)
    }

    const variant = range <= 1 ? Math.random() : Math.floor(Math.random() * range);

    return variant + from;
}

export default random;