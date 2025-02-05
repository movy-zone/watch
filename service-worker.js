// Install & Activate Events for Immediate Updates
self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    self.clients.claim();
});

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");