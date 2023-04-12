

const initalState = {
    style : 'none',
    value : '',
    imgPath : ''
  };

const counter = (state = initalState, action) => {
    switch (action.type) {
      case 'login':
        return {
          ...state,
          style: action.style,
          value : action.value,
          imgPath : action.path
        };
  
      default:
        return state;
    }
  };
   
  export default counter;