import { width, height } from '@meta/config'

export class Ball extends DisplayElement {
    ball!: Sprite

    constructor() {
        super({
            width: 48,
            height: 48,
        })
        this.setInteractive(true)

        const ball = Sprite('ball').setScale(3).addChildTo(this)

        this.ball = ball
    }

    update(): void {
        if (0 >= this.left || this.right >= width) {
            this.physical.velocity.x *= -1
        }
        if (0 >= this.top || this.bottom >= height) {
            this.physical.velocity.y *= -1
        }
    }

    onpointstart(): void {
        this.physical.velocity = Vector2(
            Math.randfloat(-1, 1),
            Math.randfloat(-1, 1)
        )
            .normalize()
            .mul(6)
    }
}
