import { REST } from "@discordjs/rest";

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN!);
export default rest;