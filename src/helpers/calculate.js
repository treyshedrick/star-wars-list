const usersMass = (users) => {
    const massArr = users.map(user => (parseInt(user.mass)));
    return massArr;
}

const usersHeight = users => {
    const heightArr = users.map(user => (parseInt(user.height)));
    return heightArr;
}

export const calculateAverage = (users, avgRequested) => {
    let average;
    // use reduce method to calculate average
    if(avgRequested === 'mass'){
        average = usersMass(users).reduce((prev, curr) => (prev + curr)) / users.length;
    } else {
        average = usersHeight(users).reduce((prev, curr) => (prev + curr)) / users.length;
    }
    
    return average
}