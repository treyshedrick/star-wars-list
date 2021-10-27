export const fetchStarWarsUsers = async () => {
    try{
        const response = await fetch('https://swapi.dev/api/people/');
        const users = await response.json();
        return users.results;

    }catch(err) {
        console.log(err);
    }
}