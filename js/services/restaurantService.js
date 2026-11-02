import { API_CONFIG } from "../config/api.js";

export async function getRestaurants() {
    const response = await fetch(`${API_CONFIG.BASE_URL}/restaurants`, { timeout: API_CONFIG.TIME_OUT });

    if (!response.ok) {
        throw new Error(`Failed to fetch restaurants: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

export async function getRestaurantById(id) {
    const response = await fetch(`${API_CONFIG.BASE_URL}/restaurants/:${id}`, { timeout: API_CONFIG.TIME_OUT });
    if (!response.ok) {
        throw new Error(`Failed to fetch restaurant with ID ${id}: ${response.status} ${response.statusText}`);
    }
}

