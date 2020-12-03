module.exports = {
  name: "ready",
  async execute(client) {
    await client.user.setActivity(`a!help | ALPHA OP`, {
      type: "LISTENING",
    });
    await client.user.setStatus("online");
    console.log(`- Activated -`);
  },
};