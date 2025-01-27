interface Props {
  colorValue: string;
  setColorValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = ({colorValue, setColorValue}: Props) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>  {/* do not refresh the page */}
      <label>Add color name:</label>  {/* will be hidden via CSS */}
      <input 
        autoFocus
        type="text"
        placeholder="Add color name"
        required
        value={colorValue}  // this is how me make the input field a controlled component
        onChange={(e) => setColorValue(e.target.value)}
      >
        
      </input>
    </form>
  )
}

export default Input