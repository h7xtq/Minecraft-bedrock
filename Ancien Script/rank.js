import { world } from '@minecraft/server'

function getAllStrings(list, prefix) {
  return list
    .filter(_ => _.startsWith(prefix))
    .map(_ => _.substring(prefix.length));
}

world.beforeEvents.chatSend.subscribe((eventData) => {
  const { sender: player, message: msg } = eventData
  const tags = player.getTags()
  let ranks = getAllStrings(tags, "rank:")
  let C1 = getAllStrings(tags, "pseudo:")
  let C2 = getAllStrings(tags, "msg:")
  ranks = ranks.length ? ranks : [`§aMembre`]
  world.sendMessage(`§f[${ranks.join(`§f]§f[`)}§f][${C1}${player.name}§r] > ${C2}${msg}`)
  eventData.cancel = true
})
