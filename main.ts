let Temp = 0
basic.forever(function () {
    Temp = input.temperature() * 1.8 + 32
    if (Temp >= 104 && input.lightLevel() >= 130) {
        basic.showNumber(Temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.Heart)
    } else if (Temp < 104 && Temp <= 86 || (input.lightLevel() >= 130 || input.lightLevel() >= 80)) {
        basic.showNumber(Temp)
        basic.showNumber(input.lightLevel())
        basic.showIcon(IconNames.TShirt)
    } else {
        basic.showIcon(IconNames.House)
    }
})
