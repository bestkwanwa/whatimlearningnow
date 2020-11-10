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
export { useBack }
