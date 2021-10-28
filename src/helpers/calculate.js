export const calculateAverage = (users, avgRequested) => {
    // maps numbers into own array and turns unknown values to 0 for average
    const dataPoints = users.map(user => user[avgRequested]).map(number => {
        if(number === "unknown"){
            return 0;
        }
        return parseInt(number.replace(/,/g,''));
    });

    let average;

    if(dataPoints.length === 0){
        average = NaN;
    }
    // use reduce method to calculate average
    average = dataPoints.reduce((prev, curr) => (prev + curr)) / dataPoints.length;
    
    return average
}