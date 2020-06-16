namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Piggy = SpriteKind.create()
    export const Piggy2 = SpriteKind.create()
    export const Piggy3 = SpriteKind.create()
    export const Piggy4 = SpriteKind.create()
    export const wolfOne = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.wolfOne, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    tiles.placeOnTile(Wolf_1, tiles.getTileLocation(23, 12))
    tiles.placeOnTile(Player_Main, tiles.getTileLocation(7, 3))
    pause(2000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Piggy2, function (sprite, otherSprite) {
    music.baDing.play()
    Piggy_2.destroy()
    info.changeScoreBy(50)
    Piggy_Score += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Piggy3, function (sprite, otherSprite) {
    music.baDing.play()
    Piggy_3.destroy()
    info.changeScoreBy(50)
    Piggy_Score += -1
})
function Create_Coins () {
    Coin_NO = 50
    Coin_List = []
    for (let index = 0; index < Coin_NO; index++) {
        Coin_List.push(sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . 5 f f f f 5 . . . . . 
. . . . . 5 f 5 5 5 5 . . . . . 
. . . . . 5 f 5 5 5 5 . . . . . 
. . . . . 5 f f f f 5 . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Coin))
    }
    for (let Coin_1 of sprites.allOfKind(SpriteKind.Coin)) {
        Coin_1.setPosition(Math.randomRange(0, 1000), Math.randomRange(0, 1000))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    for (let Coin_1 of sprites.allOfKind(SpriteKind.Coin)) {
        if (Coin_1.overlapsWith(Player_Main)) {
            info.changeScoreBy(10)
            Coin_1.destroy()
            music.baDing.playUntilDone()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Piggy4, function (sprite, otherSprite) {
    music.baDing.play()
    Piggy_4.destroy()
    info.changeScoreBy(50)
    Piggy_Score += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Piggy, function (sprite, otherSprite) {
    music.baDing.play()
    Piggy_1.destroy()
    info.changeScoreBy(50)
    Piggy_Score += -1
})
let Coin_List: Sprite[] = []
let Coin_NO = 0
let Wolf_1: Sprite = null
let Piggy_4: Sprite = null
let Piggy_3: Sprite = null
let Piggy_2: Sprite = null
let Piggy_1: Sprite = null
let Player_Main: Sprite = null
game.splash("Welcome to Run Piggy Run! Try to rescue your brothers and collect the coins! Watch out for the Big Bad Wolf!")
Create_Coins()
tiles.placeOnTile(Player_Main, tiles.getTileLocation(7, 3))
Player_Main = sprites.create(img`
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
`, SpriteKind.Player)
controller.moveSprite(Player_Main, 100, 100)
scene.cameraFollowSprite(Player_Main)
tiles.setTilemap(tiles.createTilemap(
            hex`2f0021000a0a020909090909090909090909090909090909090909090909090909090909090909090909090909090909030a0a0a0a060101010101010101010101010101010101010101010101010101010101010101010101010101010101070a0a0209010101010101010101010101010101010101010101010101010101010101010101010101010101010101010903060101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010706010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101070601010108080808080808010101080808080808080808080808080808080808080101010808080808080801010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d060101090909090909090909090909090909090909090101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d060101010101010101010101010101010101010101010101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d060101080808080808080808080808080808080808080101070d0d0d0d0d0d0d0601010706010101090909090909090101070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c060101090909090909090101010706010101010101010101010101070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c060101010101010101010101010706010101010101010101010101070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c060101010101010101010101010706010101010101010101010101070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c060101010101010101010101010706010101080808080808080101070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601010808080808080801010107060101070d0d0d0d0d0d0d060101090909090909090909090909090909090909090101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d060101010101010101010101010101010101010101010101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d060101080808080808080808080808080808080808080101070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d06010107060101070d0d0d0d0d0d0d0601070c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0601070d0d0d0d0d0d0d0601010706010101090909090909090101010909090909090909090909090909090909090901010109090909090909010101070601010101010101010101010101010101010101010101010101010101010101010101010101010101010101010107060101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010705080101010101010101010101010101010101010101010101010101010101010101010101010101010101010108040a0a060101010101010101010101010101010101010101010101010101010101010101010101010101010101070a0a0a0a050808080808080808080808080808080808080808080808080808080808080808080808080808080808040a0a`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . 
. . . . 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 . . . . 
. . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 . . . . . 2 . . . 2 . . . . . . . . . . . . . . . . . 2 . . . 2 . . . . . 2 . . . . 
. . . . 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath8,sprites.castle.tilePath2,sprites.dungeon.floorLight0,sprites.castle.tileGrass1,sprites.builtin.forestTiles12,sprites.builtin.forestTiles8,sprites.builtin.forestTiles0,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundCenter,sprites.builtin.forestTiles21,sprites.dungeon.buttonPink,sprites.dungeon.buttonOrange,sprites.builtin.field0],
            TileScale.Sixteen
        ))
Piggy_1 = sprites.create(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpriteKind.Piggy)
Piggy_2 = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Piggy2)
Piggy_3 = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Piggy3)
Piggy_4 = sprites.create(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`, SpriteKind.Piggy4)
tiles.placeOnTile(Piggy_1, tiles.getTileLocation(0, 0))
tiles.placeOnTile(Piggy_2, tiles.getTileLocation(46, 0))
tiles.placeOnTile(Piggy_3, tiles.getTileLocation(0, 32))
tiles.placeOnTile(Piggy_4, tiles.getTileLocation(46, 32))
Wolf_1 = sprites.create(img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, SpriteKind.wolfOne)
Wolf_1.follow(Player_Main, 95)
tiles.placeOnTile(Wolf_1, tiles.getTileLocation(23, 12))
let Piggy_Score = 4
info.setLife(3)
game.onUpdateInterval(500, function () {
    if (info.life() == 0) {
        game.over(false)
        game.reset()
    }
})
game.onUpdateInterval(500, function () {
    if (Piggy_Score == 0) {
        game.over(true)
    }
})
forever(function () {
    music.playMelody("A F E F D G E C ", 75)
    music.playMelody("C5 B A F E C D C ", 75)
    music.playMelody("G B A G C5 B A B ", 75)
    music.playMelody("E B C5 A B G E C ", 75)
})
