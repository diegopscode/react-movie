import Axios from 'axios';

const $api = Axios.create({
    baseURL: 'http://www.theimdbapi.org/api/find',
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

const Search = (query) => {
    return $api.get('person?name='+query);
}

const Actors = [
    'Jim Carry',
    'Jackie Chan',
    'Keanu Reeves',
    'Dwayne Johnson'
]

export default $api;
export {
    Search,
    Actors
};