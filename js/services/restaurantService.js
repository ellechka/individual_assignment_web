import { httpGet } from "./apiService";


export async function getRestaurants() {
    return await httpGet("/restaurants");
}

export async function getRestaurantById(id) {
    return await httpGet(`/restaurants/${id}`);
}

export async function getDailyMenuByRestaurantId(id) {
    return await httpGet(`/restaurants/daily/${id}/fi`)
}

export async function getWeeklyMenuRestaurantById(id) {
    return await httpGet(`/restaurants/weekly/${id}/fi`)
}

