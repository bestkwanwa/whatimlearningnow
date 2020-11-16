import getUser from './login';
import works from './works';
import lecturers from './lecturers';
import work from './work';

// conncet的callback只能返回一个对象
export default {
    getUser,
    works,
    lecturers,
    work
}