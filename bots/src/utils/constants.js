module.exports = {
  domen: process.env.PROD === "production" ? "generator" : "localhost",
  port: process.env.BOT_PORT || 8001,
};
