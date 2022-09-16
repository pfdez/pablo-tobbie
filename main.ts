let moving = 0
let IR_gauche = TobbieII.Read_LBlock()
let IR_droite = TobbieII.Read_RBlock()
loops.everyInterval(1000, function () {
    if (moving == 0) {
        IR_gauche = TobbieII.Read_LBlock()
        IR_droite = TobbieII.Read_RBlock()
    }
})
loops.everyInterval(500, function () {
    if (IR_droite - TobbieII.Read_RBlock() <= -5 && IR_gauche - TobbieII.Read_LBlock() <= -5) {
        moving = 1
        TobbieII.stopwalk()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        TobbieII.rightward()
        basic.pause(randint(0.5, 2) * 1000)
        TobbieII.stopturn()
    } else if (IR_droite - TobbieII.Read_RBlock() <= -5) {
        moving = 1
        TobbieII.stopwalk()
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        TobbieII.leftward()
        basic.pause(randint(0.5, 2) * 1000)
        TobbieII.stopturn()
    } else if (IR_gauche - TobbieII.Read_LBlock() <= -5) {
        moving = 1
        TobbieII.stopwalk()
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        TobbieII.rightward()
        basic.pause(randint(0.5, 2) * 1000)
        TobbieII.stopturn()
    }
    moving = 0
})
basic.forever(function () {
    if (moving == 0) {
        TobbieII.forward()
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
