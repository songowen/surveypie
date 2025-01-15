import TextInput from "../TextInput";

function Body({type}) {
  let InputComponent = null;
  if (type === "select") {
    // InputComponent = SelectInput;
  }else if (type === "text") {
    InputComponent = TextInput;
  }else if (type === "textarea") {
  }
  console.log('InputComponent',InputComponent)
  return (
    <>
<InputComponent />
    </>
  );
}
export default Body;