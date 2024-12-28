import { world } from '@minecraft/server'

world.beforeEvents.playerInteractWithEntity.subscribe((eventData) => {
    const { player, target } = eventData
    if (player.hasTag(`safe`)) {
        eventData.cancel = true
    }
})
world.beforeEvents.playerInteractWithBlock.subscribe(event => {
    const {block,player} = event
    if (player.hasTag(`safe`)) {
        event.cancel = true
    }
})
world.beforeEvents.playerPlaceBlock.subscribe(event => {
    const { player, block } = event
    if (player.hasTag(`safe`)) {
        event.cancel = true
    }
})
world.beforeEvents.playerBreakBlock.subscribe(event => {
    const { player, block } = event
    if (player.hasTag(`safe`)) {
        event.cancel = true
    }
})
