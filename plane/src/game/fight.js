import { onMounted, onUnmounted } from 'vue';
import { game } from '../game';
import { collisionDetect } from '../utils';
export function useFight({ plane, enemyPlanes, bullets, gameOver }) {

    const handleTicker = () => {
    

        // 我方飞机与敌方飞机碰撞
        enemyPlanes.forEach((enemyPlane) => {
            if (collisionDetect(enemyPlane, plane)) {
                console.log('done');
                gameOver && gameOver()
            }
        });

        // 我方子弹与敌方飞机碰撞
        bullets.forEach((bullet, bulletIndex) => {
            enemyPlanes.forEach((enemyPlane, enemyPlaneIndex) => {
                if (collisionDetect(bullet, enemyPlane)) {
                    bullets.splice(bulletIndex, 1)
                    enemyPlanes.splice(enemyPlaneIndex, 1)
                }
            })
        })
    }

    onMounted(()=>{
        game.ticker.add(handleTicker)
    })

    onUnmounted(()=>{
        game.ticker.remove(handleTicker)
    })

}