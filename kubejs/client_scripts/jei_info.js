onEvent('jei.information', event => {
    event.add('occultism:iesnium_ore',['Throwing Netherrack Block 1x in §5Spiritfire§r will turn it into Netherrack with Iesnium in it'])
    event.add('productivebees:sand_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    event.add('productivebees:snow_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
    event.add('productivebees:gravel_nest', 'In this Skyblock, this nest will attract bees in any overworld biome.')
})
onEvent('item.tooltip', event => {
    event.add('allthemodium:teleport_pad',[
        Text.of('Place the pad down in the specified Dimension'), 
        Text.of('Sneak Right Click with both hands empty to teleport'),
        Text.of('§aOverworld TO §mMining Dimension§4 DISABLED').red(),
        Text.of('§cThe Nether TO The Other').red()])
})