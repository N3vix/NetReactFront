export const BACKEND_BASE_URL = `http://${process.env.REACT_APP_API_ADDRESS}`;
export const BACKEND_AUTH_URL = `http://${process.env.REACT_APP_AUTH_API_ADDRESS}`;
export const BACKEND_SERVERS_URL = `http://${process.env.REACT_APP_SERVERS_API_ADDRESS}`;
export const BACKEND_CHANNELS_URL = `http://${process.env.REACT_APP_CHANNELS_API_ADDRESS}`;
export const BACKEND_MESSAGES_URL = `http://${process.env.REACT_APP_MESSAGES_API_ADDRESS}`;
export const USER_TOKEN_KEY = 'accessToken';
export const USER_ID_KEY = 'userId';

export const USER_TOKEN = () => localStorage.getItem(USER_TOKEN_KEY);
export const USER_ID = () => localStorage.getItem(USER_ID_KEY);

export const FETCH_GET = (url, urlSuffix) => {
    return fetch(url + urlSuffix, {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + USER_TOKEN()
        }
    });
};

export const FETCH_POST = (url, urlSuffix, body) => {
    return fetch(url + urlSuffix, {
        method: "POST",
        headers: {
            "Authorization": "Bearer " + USER_TOKEN(),
            'Content-Type': 'application/json'
        },
        body: body
    });
};

export const FETCH_POST_FORM = (url, urlSuffix, body) => {
    return fetch(url + urlSuffix, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + USER_TOKEN(),
        },
        body: body
    });
};