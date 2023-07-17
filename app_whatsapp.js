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

client.on("ready", () => {
    console.log("READY");
});

const app = express();

// Builting Middlewares :
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/send-content-to-the-user", async (req, res) => {
    const img_ctx = req.body.img_ctx;
    const context = req.body.context;
    const vid_ctx = req.body.vid_ctx;
    const audio_ctx = req.body.audio_ctx;
    const vid_fileID = req.body.vid_fileID;
    const mime_type = req.body.mime_type;

    var groupID = [
        "120363044661065483@g.us",
        "120363025732800262@g.us",
        "120363028136302532@g.us",
        "120363044620928881@g.us",
        "120363047197441839@g.us",
        "120363042122075310@g.us",
        "120363043685355772@g.us",
        "120363027261547665@g.us",
        "120363027677481592@g.us",
        "120363045572867890@g.us",
        "120363027125766449@g.us",
        "120363026993771407@g.us",
        "120363027809115204@g.us",
        "120363026880066278@g.us",
        "120363045254557491@g.us",
        "120363026181951710@g.us",
        "120363045243542523@g.us",
        "120363041094987455@g.us",
        "120363044383338657@g.us",
        "120363044187302450@g.us",
        "120363045281657584@g.us",
        "120363044725775768@g.us",
        "120363028121503808@g.us",
        "120363043458721854@g.us",
        "120363024993982344@g.us",
    ];

    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    var numbers2 = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
        72, 73, 74, 75, 76, 77, 78, 79, 80,
    ];

    // --------------------------------------
    // --------------------------------------
    // --------------------------------------
    // --------------------------------------

    if (context) {
        if (img_ctx == undefined && vid_ctx == undefined && audio_ctx == undefined) {
            res.send({
                success: "True",
                status: 1,
            });
            /* for await (id of groupID[0]) {
                client.sendMessage(id, context);
                await sleep(5000);
            }
            */
            var x = 1;
            for await (let id of groupID) {
                client.sendMessage(id, context);
                if (x % 5 == 0) {
                    for await (let i of numbers) {
                        console.log(`Waiting ${i} seconds...`);
                        await sleep(1000);
                    }
                    console.log("Done -------------------------------");
                } else {
                    await sleep(13000);
                }
                x++;
            }

            console.log("Context OK");
        } else if (img_ctx) {
            res.send({
                success: "True",
                status: 1,
            });
            const media = await MessageMedia.fromUrl(img_ctx);
            // groupID.forEach((id) => {
            //     client.sendMessage(id, media, { caption: context });
            // });

            var y = 1;
            for await (let id of groupID) {
                client.sendMessage(id, media, { caption: context });
                if (y % 3 == 0) {
                    for await (let i of numbers) {
                        console.log(`Waiting ${i} seconds...`);
                        await sleep(1000);
                    }
                    console.log("Done -------------------------------");
                } else {
                    await sleep(18000);
                }
                y++;
            }
            console.log("Image Context OK");
        } else if (vid_ctx) {
            /* res.send({
                success: "True",
                status: 1,
            });
            // const media = await MessageMedia.fromUrl(vid_ctx, { unsafeMime: true });
            const media = new MessageMedia(mime_type);
            groupID.forEach((id) => {
                client.sendMessage(id, media, { caption: context });
            });
            console.log("Video Context OK"); */
        } else if (audio_ctx) {
            res.send({
                success: "True",
                status: 1,
            });
            const media = await MessageMedia.fromUrl(audio_ctx);
            // console.log(media);
            // groupID.forEach((id) => {
            //     client.sendMessage(id, context);
            //     client.sendMessage(id, media);
            // });

            var z = 1;
            for await (let id of groupID) {
                client.sendMessage(id, context);
                client.sendMessage(id, media);
                if (z % 1 == 0) {
                    for await (let i of numbers) {
                        console.log(`Waiting ${i} seconds...`);
                        await sleep(1000);
                    }
                    console.log("Done -------------------------------");
                } else {
                    await sleep(20000);
                }
                z++;
            }
            console.log("Audio Context Ok");
        }
    } else if (img_ctx) {
        res.send({
            success: "True",
            status: 1,
        });
        const media = await MessageMedia.fromUrl(img_ctx);
        // groupID.forEach((id) => {
        //     client.sendMessage(id, media);
        // });

        var u = 1;
        for await (let id of groupID) {
            client.sendMessage(id, media);
            if (u % 3 == 0) {
                for await (let i of numbers) {
                    console.log(`Waiting ${i} seconds...`);
                    await sleep(1000);
                }
                console.log("Done -------------------------------");
            } else {
                await sleep(18000);
            }
            u++;
        }
        console.log("Image Context OK");
    } else {
        res.send({
            error: "There is an error(context)",
            status: 0,
        });
    }
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const port = 3000;

app.listen(port, () => {
    console.log("The server is running on port", port);
});
console.log("k");

/*

120363027326024959@g.us
120363047425922447@g.us
120363027431614309@g.us
120363044467639818@g.us
120363043874490752@g.us
120363041712155162@g.us
120363028168240857@g.us
120363044897353162@g.us
120363043126483593@g.us
120363026990537722@g.us
*/
