const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./index.js', {
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARDER] Shard ${shard.id}/2 is created`));
