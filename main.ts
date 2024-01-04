namespace SpriteKind {
    export const Gem = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.setLife(3)
    info.startCountdown(60)
    scene.setBackgroundImage(assets.image`mine`)
    music.play(music.createSong(assets.song`music1`), music.PlaybackMode.LoopingInBackground)
    controller.moveSprite(Diamond)
})
let Diamond: Sprite = null
Diamond = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f . . . . . . . . . . 
    . . . . f 9 f . . . . . . . . . 
    . . . f 9 9 9 f . . . . . . . . 
    . . f 9 9 9 9 9 f . . . . . . . 
    . . . f 9 9 9 f . . . . . . . . 
    . . . . f 9 f . . . . . . . . . 
    . . . . . f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Gem)
