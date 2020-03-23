import produce from 'immer';

const initialState = {  
  username: "moshe eylon",
  chatbanner: "the best application in the market"
};

export default  produce((state, action) => {
  switch(action.type) {
    case 'SET_USERNAME':
      state.username = action.payload;
      break;
  }
}, initialState);

