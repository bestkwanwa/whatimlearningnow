import { createStore } from "redux";
function reducer(state = {
  data: [
    {
      id: 0,
      title: "00",
      checked: false,
      edit: false
    }, {
      id: 1,
      title: "11",
      checked: true,
      edit: false
    }, {
      id: 2,
      title: "22",
      checked: true,
      edit: false
    }, {
      id: 3,
      title: "33",
      checked: true,
      edit: false
    }, {
      id: 4,
      title: "44",
      checked: true,
      edit: false
    }, {
      id: 5,
      title: "55",
      checked: true,
      edit: false
    }
  ]
}, action) {
  let nowData = [...state.data];
  switch (action.type) {
    case "ADD":
      return {
        data: [...nowData, {
          id: action.id,
          title: action.title,
          checked: false,
          edit: false,
        }]
      }
    case "SELECT":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          // nowData[index]也不改变原有的值，而是返回新的引用
          nowData[index] = {
            ...item,
            checked: action.checked
          }
        }
      })
      return { data: nowData };
    case "DELETE":
      nowData = nowData.filter(item => item.id !== action.id)
      return { data: nowData };
    case "DELETE_ALL":
      nowData = nowData.filter(item => item.checked === false)
      return { data: nowData };
    case "EDIT":
      nowData.forEach((item, index) => {
        if (item.id === action.id) {
          nowData[index] = {
            ...item,
            title: action.title
          }
        }
      })
      return { data: nowData };
    default:
      break;
  }
  return state;
}
const store = createStore(reducer);
export { store };