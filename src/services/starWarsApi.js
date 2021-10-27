export const fetchStarWarsUsers = async (pageNumber) => {
    try{
        const response = await fetch(`https://swapi.dev/api/people/?page=${pageNumber+1}`);
        const users = await response.json();
        // return array in alphabetical order and count
        return {results: users.results.sort((a,b) => a.name.localeCompare(b.name)), count: users.count };

    }catch(err) {
        console.log(err);
    }
}