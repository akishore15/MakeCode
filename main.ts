namespace SpriteKind {
    export const Gem = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`mine`)
})
let Diamond = sprites.create(img`
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
