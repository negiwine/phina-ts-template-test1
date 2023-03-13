import 'phina-patch-es-classes-support'
import phina from 'phina.js'
import '@meta/globalize'

// import assets
import assets from '@assets/index'

// import scenes
import '@scenes/MainScene'
import scenes from '@meta/scenes'

import { width, height, fps } from '@meta/config'

// setup GameApp
phina.main(() => {
    const app = new GameApp({
        assets,
        scenes,
        width,
        height,
        fps,
    })

    app.enableStats()
    app.run()
})
