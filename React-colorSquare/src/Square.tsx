interface Props {
  colorValue: string;
}

const Square = ({ colorValue }: Props) => {
  return (
    <section 
      className="square" 
      style={{backgroundColor: colorValue}}
    >
      <p>{ colorValue ? colorValue : "Empty value"}</p>
    </section>
  )
}

export default Square