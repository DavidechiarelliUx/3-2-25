const ButtonComponents = (props) => {
   return (
      <button style={{backgroundColor:props.bgColor, padding:props.padding}}>{props.description}</button>
   )
}

export default ButtonComponents;