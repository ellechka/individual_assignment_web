import { API_CONFIG } from "../config/api";

export async function httpGet(endpoint) {
    const response = await fetch(
        `${API_CONFIG.BASE_URL}${endpoint}`,
        {
            method: "GET",
            signal: AbortSignal.timeout(API_CONFIG.TIME_OUT)
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP GET request failed: ${response.status} ${response.statusText}`);
    }
}