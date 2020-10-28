import { reactive } from 'vue';
import { game } from '../game';
export function useBullet() {
    const bullets = reactive([])
    const width=61
    const height=99
    const addBullet = (info) => {
        bullets.push({...info,width,height})
    }

    const speed = 10
    game.ticker.add(() => {
        bullets.forEach((item, index) => {
            item.y -= speed
            if (item.y < -100) {
                bullets.splice(index, 1)
            }
        })
    })
    return {
        addBullet,
        bullets
    }
}


