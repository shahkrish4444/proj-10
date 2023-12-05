const initial ={
  details:[
  ]
}
const Reducer = (state=initial ,action)=>{
  if (action.type === "deleteData") {
      console.log(action.payload)
      return {
        ...state,
        details: state.details.filter((item, index) => index !== action.payload),
      };
    }
  if(action.type == "addData"){
      const newStudent = {
          name: action.payload.name,
          email: action.payload.email,
        };
      return{
          ...state,
      details: [...state.details, newStudent],
      }
  }
  if(action.type == "updateData"){
      const updatedDetails = [...state.details];
      updatedDetails[action.payload.index] = action.payload.data;
      return{
          ...state,
          details: updatedDetails,
      }
  }

  return state
}
export default Reducer