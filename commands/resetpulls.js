import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import Pull from "../models/Pull.js";
import Balance from "../models/Balance.js";

const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

export const data = new SlashCommandBuilder().setName("resetpulls").setDescription("Use a reset token to reset your pulls");
export const aliases = ["reset"];

export async function execute(interactionOrMessage, client) {
  const isInteraction = typeof interactionOrMessage.isCommand === "function" || typeof interactionOrMessage.isChatInputCommand === "function";
  const user = isInteraction ? interactionOrMessage.user : interactionOrMessage.author;
  const channel = isInteraction ? interactionOrMessage.channel : interactionOrMessage.channel;
  const userId = user.id;

  // ensure balance exists
  let bal = await Balance.findOne({ userId });
  if (!bal) {
    bal = new Balance({ userId, amount: 500, resetTokens: 0 });
    await bal.save();
  }

  if (bal.resetTokens <= 0) {
    const reply = "You don't have any reset tokens.\nYou can get them from events or the shop.";
    if (isInteraction) return interactionOrMessage.reply({ content: reply, ephemeral: true });
    return channel.send(reply);
  }

  // decrement token
  bal.resetTokens -= 1;
  await bal.save();

  // reset user's pulls for current window
  const currentWindow = Math.floor(Date.now() / WINDOW_MS);
  let pullDoc = await Pull.findOne({ userId, window: currentWindow });
  if (!pullDoc) {
    pullDoc = new Pull({ userId, window: currentWindow, used: 0 });
  } else {
    pullDoc.used = 0;
    await pullDoc.save();
  }

  const embed = new EmbedBuilder()
    .setTitle("Pulls Reset")
    .setDescription(`Your pulls have been reset. You have **${bal.resetTokens}** reset tokens left.`)
    .setColor(0x2ecc71);

  if (isInteraction) return interactionOrMessage.reply({ embeds: [embed] });
  return channel.send({ embeds: [embed] });
}
