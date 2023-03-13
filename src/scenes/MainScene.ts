import { define } from '@meta/context'
import { Ball } from '@classes/Ball'

@define('MainScene')
export class MainScene extends DisplayScene {
    protected label!: Label
    protected star!: StarShape
    protected ball!: Ball

    constructor() {
        super({
            backgroundColor: 'skyblue',
        })
        const { gridX, gridY } = this

        const label = Label({
            text: `Let's coding phina.js with TypeScript!`,
        })
            .setPosition(gridX.center(), gridY.center(-2))
            .addChildTo(this)

        const star = StarShape({ radius: 80 })
            .setPosition(gridX.center(), gridY.center(2))
            .addChildTo(this)

        star.tweener.by({ rotation: 60 }, 1000).setLoop(true)

        const ball = new Ball()
            .setPosition(gridX.center(), gridY.center(6))
            .addChildTo(this)

        this.label = label
        this.star = star
        this.ball = ball
    }
}
