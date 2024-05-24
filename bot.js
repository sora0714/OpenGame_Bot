const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7111121997:AAG4ebf1HxGJM95AOH3FyY71xk7IdUayfR0";
const bot = new Telegraf(TOKEN);

const web_link = "https://bastionbattle.itch.io/bastion-td";

function getRandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*(max-min*1))*min;
}
const getCoinSide = () => getRandomInt(0,1)=== 0? 'Meads' : 'Trails';
const coinInlineKeboard = Markup.inlineKeyboard([
  Markup.button.callback('Flip again', 'flip_a_coin'),
]);
console.log(`coinInlineKeyboard: ${JSON.stringify(coinInlineKeboard)}`);
bot.hears('Flip a coin', ctx=>ctx.reply(getCoinSide(), coinInlineKeboard));
bot.action('flip_a_coin', async(ctx) => {await ctx.editMessageText(`-----------`);})
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [[{ text: "OpenGame", web_app: { url: web_link } }]],
    },
  })
);
bot.launch();
