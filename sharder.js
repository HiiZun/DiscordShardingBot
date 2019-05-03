const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./index.js', {
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/2`));