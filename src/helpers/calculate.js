const usersMass = (users) => {
    const massArr = users.map(user => (parseInt(user.mass.replace(/,/g,''))));
    return massArr;
}

const usersHeight = users => {
    const heightArr = users.map(user => (parseInt(user.height.replace(/,/g,''))));
    return heightArr;
}

export const calculateAverage = (users, avgRequested) => {
    const filteredUsers = users.filter(user => user[avgRequested] !== "unknown");
    let average;

    if(filteredUsers.length === 0){
        average = NaN
    }
    // use reduce method to calculate average
    if(avgRequested === 'mass' && filteredUsers.length > 0){
        average = usersMass(filteredUsers).reduce((prev, curr) => (prev + curr)) / filteredUsers.length;
    } else if(avgRequested === 'height' && filteredUsers.length > 0){
        average = usersHeight(filteredUsers).reduce((prev, curr) => (prev + curr)) / filteredUsers.length;
    }
    
    return average
}