basic.showIcon(IconNames.Angry)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 0) {
        pins.digitalWritePin(DigitalPin.P14, 1)
        servos.P2.setAngle(20)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        servos.P2.setAngle(130)
    }
})
