import { useHistory } from 'react-router-dom';
function useBack() {
    const history = useHistory()
    // console.log('history',history);
    return () => {
        if (history.length > 1) {
            history.goBack()
        } else {
            history.push('/')
        }
    }
}

// 获取屏幕高度
function useInnerHeight(){
    return window.innerHeight
}
export { useBack,useInnerHeight }
