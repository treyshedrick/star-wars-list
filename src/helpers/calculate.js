const usersMass = (users) => {
    const massArr = users.map(user => (parseInt(user.mass.replace(/,/g,''))));
    return massArr;
}

const usersHeight = users => {
    const heightArr = users.map(user => (parseInt(user.height.replace(/,/g,''))));
    return heightArr;
}

export const calculateAverage = (users, avgRequested) => {
    let average;
    // use reduce method to calculate average
    if(avgRequested === 'mass'){
        average = usersMass(users).reduce((prev, curr) => (prev + curr)) / users.length;
    } else if(avgRequested === 'height'){
        average = usersHeight(users).reduce((prev, curr) => (prev + curr)) / users.length;
    }
    
    return average
}