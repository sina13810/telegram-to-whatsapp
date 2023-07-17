const express = require("express");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
    puppeteer: { headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] },
});

client.initialize();

// client.on("loading_screen", (percent, message) => {
//     console.log("LOADING SCREEN", percent, message);
// });

// client.on("qr", (qr) => {
//     // NOTE: This event will not be fired if a session is specified.
//     console.log("QR RECEIVED", qr);
// });

// client.on("authenticated", () => {
//     console.log("AUTHENTICATED");
// });

// client.on("auth_failure", (msg) => {
//     // Fired if session restore was unsuccessful
//     console.error("AUTHENTICATION FAILURE", msg);
// });

client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
});

/*

120363044107098281@g.us
120363027193660718@g.us
120363025222971596@g.us
120363042854133588@g.us
120363044912661779@g.us
120363025881449940@g.us
120363046392404913@g.us
120363043239868663@g.us

*/
client.on("ready", () => {
    console.log("READY");
});

client.on("message", (msg) => {
    console.log(msg.id.remote);
});
