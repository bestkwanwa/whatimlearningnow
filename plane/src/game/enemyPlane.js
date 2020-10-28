import { reactive } from 'vue';
import { game } from '../game';

export function useEnemyPlane() {
    const width=308;
    const height=207
    const enemyPlanes = reactive([
        {
            x: 100,
            y: 20,
            width,
            height
        },
        {
            x: 300,
            y: 70,
            width,
            height
        },
        {
            x: 150,
            y: 80,
            width,
            height
        }
    ])

    const speed = 1
    game.ticker.add(() => {
        if(enemyPlanes.length<3){
            enemyPlanes.push({
                x:Math.random()*700,
                y:-207,
                width,
                height
            })
        }
        enemyPlanes.forEach((item, index) => {
            item.y += speed
            if (item.y > 1080+100) {
                enemyPlanes.splice(index, 1)
            }
        })

    })
    return {
        enemyPlanes
    }
}