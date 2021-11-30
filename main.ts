music.setVolume(70)
soundExpression.hello.playUntilDone()
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    serial.writeValue("P1", pins.digitalReadPin(DigitalPin.P1))
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
    }
})
