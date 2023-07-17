import { Telegraf } from "telegraf";
import axios from "axios";

const api_token = "";

const bot = new Telegraf(api_token);

bot.use((ctx) => {
    try {
        (async () => {
            if (
                ctx.message.text &&
                ctx.message.audio == undefined &&
                ctx.message.photo == undefined &&
                ctx.message.video == undefined
            ) {
                await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                    context: ctx.message.text,
                });
                await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                    context: ctx.message.text,
                });
                await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                    context: ctx.message.text,
                });
                await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                    context: ctx.message.text,
                });
                console.log("Ok (Context)");
            } else if (ctx.message.photo) {
                console.log(ctx.message);
                if (ctx.message.photo[3]) {
                    const file_id = ctx.message.photo[3].file_id;
                    const photo_link = await ctx.telegram.getFileLink(file_id);
                    await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    console.log("Ok (Photo - Captچion)");
                } else if (ctx.message.photo[2]) {
                    const file_id = ctx.message.photo[2].file_id;
                    const photo_link = await ctx.telegram.getFileLink(file_id);
                    await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    console.log("Ok (Photo - Caption)");
                } else if (ctx.message.photo[1]) {
                    const file_id = ctx.message.photo[1].file_id;
                    const photo_link = await ctx.telegram.getFileLink(file_id);
                    await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    console.log("Ok (Photo - Caption)");
                } else if (ctx.message.photo[0]) {
                    const file_id = ctx.message.photo[0].file_id;
                    const photo_link = await ctx.telegram.getFileLink(file_id);
                    await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                        context: ctx.message.caption,
                        img_ctx: photo_link,
                    });
                    console.log("Ok (Photo - Caption)");
                }
            } else if (ctx.message.video && ctx.message.caption) {
                console.log(ctx.message);
                const file_id = ctx.message.video.file_id;
                const vid_link = await ctx.telegram.getFileLink(file_id);
                const mime_type = await ctx.message.video.mime_type;
                await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    vid_ctx: vid_link,
                    vid_fileID: file_id,
                    mime_type: mime_type,
                });
                await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    vid_ctx: vid_link,
                    vid_fileID: file_id,
                    mime_type: mime_type,
                });
                await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    vid_ctx: vid_link,
                    vid_fileID: file_id,
                    mime_type: mime_type,
                });
                await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    vid_ctx: vid_link,
                    vid_fileID: file_id,
                    mime_type: mime_type,
                });
                console.log("Ok (Video - Caption)");
            } else if (ctx.message.audio && ctx.message.caption) {
                const file_id = ctx.message.audio.file_id;
                const audio_link = await ctx.telegram.getFileLink(file_id);
                await axios.post("http://195.248.242.10:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    audio_ctx: audio_link,
                });
                await axios.post("http://37.220.26.155:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    audio_ctx: audio_link,
                });
                await axios.post("http://109.169.86.202:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    audio_ctx: audio_link,
                });
                await axios.post("http://37.220.26.139:3000/send-content-to-the-user/", {
                    context: ctx.message.caption,
                    audio_ctx: audio_link,
                });
                console.log("Ok (Audio - Caption)");
                // console.log(ctx.message);
            }
        })();
    } catch (err) {
        console.log(err);
    }
});

bot.launch();

process.once("SIGINT", () => {
    bot.stop("SIGINT");
});

process.once("SIGTERM", () => {
    bot.stop("SIGTERM");
});
/*

    
*/
