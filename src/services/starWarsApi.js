export const fetchStarWarsUsers = async () => {
    try{
        const response = await fetch('https://swapi.dev/api/people/');
        const users = await response.json();
        // return array in alphabetical order
        return users.results.sort((a,b) => a.name.localeCompare(b.name));

    }catch(err) {
        console.log(err);
    }
}