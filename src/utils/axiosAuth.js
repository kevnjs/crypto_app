import axios from "axios";

export const axiosAuth = () => {
    return axios.create({
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': '6a32e0f64dmsh64036ef9eb6609ep1fffdajsnf1184cf950d3'
        }
    })
}