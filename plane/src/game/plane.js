import { reactive } from 'vue';

export function usePlane({attack}) {
    const planeInfo = reactive({
        x: 150,
        y: 500,
        width:258,
        height:364 
    })

    const speed = 20
    window.addEventListener('keydown', e => {
        switch (e.code) {
            case 'ArrowUp':
                planeInfo.y -= speed
                break;
            case 'ArrowDown':
                planeInfo.y += speed
                break;
            case 'ArrowLeft':
                planeInfo.x -= speed
                break;
            case 'ArrowRight':
                planeInfo.x += speed
                break;
            default:
                break;
        }
    })

    window.addEventListener('keyup',e=>{
        if(e.code==='Space'){
            attack&&attack({
                x:planeInfo.x+100,
                y:planeInfo.y
            })
        }
    })

    return {
        planeInfo
    }
}

