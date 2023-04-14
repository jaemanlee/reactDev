

const initalState = {
    type : '',
    area : [],
    category : [],
    cate : [],
    diff : []
  };

const counter = (state = initalState, action) => {
    switch (action.type) {
      case 'search':
        return {
          ...state,
          area: action.area
       
        };
  
      default:
        return state;
    }
  };
   
  export default counter;