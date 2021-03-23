input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    _var = 0
})
input.onButtonPressed(Button.A, function () {
    _var += 1
})
input.onGesture(Gesture.Shake, function () {
    _var = 0
})
input.onButtonPressed(Button.B, function () {
    _var += -1
})
let _var = 0
_var = 0
basic.forever(function () {
    basic.showNumber(_var)
    basic.pause(100)
})
