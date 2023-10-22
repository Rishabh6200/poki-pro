import axios from "axios";

export const httpComman = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers: {
        'Content-Type': 'application/json'
    }
})
