import axios from 'axios';

const API_URL = "https://api-dev.outletdehoteles.com/api/availability/public";

export async function getHotels(){
    try {
        const response = await axios.get(API_URL);
        return response.data
    } catch (error) {
        console.error("Error fetching hotels", error);
        throw new Error("Unable to fetch hotels.");
    }
}