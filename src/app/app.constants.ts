
export let CONFIGURATION = {
    devConfig: {
        server: 'wwe2kcompanionapi.test',
        apiUrl: '/api/',
        useHttps: false
    },
    prodConfig: {
        server: 'example.test',
        apiUrl: '/api/',
        useHttps: true
    },
    isDev: true, // Change this to false to run prod API.
    authCacheTime: 60000, // How long the JWT auth token should be cached for.
    authTokenName: 'AUTH_TOKEN',
    siteName: 'WWE 2k Companion',
    siteDefaultLanguage: 'en', // English
    appVersion: '0.0.0'
};
