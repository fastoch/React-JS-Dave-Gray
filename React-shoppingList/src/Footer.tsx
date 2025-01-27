interface Props {
  length: number;
}

const Footer = (props: Props) => {
  const today = new Date();

  return (
    <footer>
      <p>
        Your list contains {props.length} {props.length === 1 ? "item" : "items"} 
      </p>
      <p>
        Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer