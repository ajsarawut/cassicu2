const API_BASE_URL = 'https://script.google.com/macros/s/AKfycbzpbgJ5s7TimruYk-l0LCGvK8-N7WLkMwM8-l3VepUErqHJb0Zd03rQepKg7ZI0OTrq/exec';

const ApiClient = {
    async get(action, params = {}) {
        const url = new URL(API_BASE_URL);
        url.searchParams.append('action', action);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (error) {
            console.error('API GET Error:', error);
        }
    },

    async post(action, data) {
        try {
            const response = await fetch(API_BASE_URL, {
                method: 'POST',
                body: JSON.stringify({ action, data }),
                headers: { 'Content-Type': 'text/plain;charset=utf-8' } // จำเป็นสำหรับจัดการเรื่อง CORS ของ GAS
            });
            return await response.json();
        } catch (error) {
            console.error('API POST Error:', error);
        }
    }
};