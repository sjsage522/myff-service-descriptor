import { writable } from 'svelte/store';

export const servicesConfig = writable({});

function getEnvironmentFile() {
    const env = import.meta.env.VITE_ENVIRONMENT;
    return `/assets/data/service-${env}.json`;
}

export async function loadServicesConfig() {
    try {
        const filePath = getEnvironmentFile();
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to fetch ${filePath}: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        servicesConfig.set(data);
    } catch (error) {
        console.error('Error loading services configuration:', error);
    }
}
