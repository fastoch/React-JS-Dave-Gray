interface Props {
  title: string
}

const Header = (props: Props) => {
  return (
    <header style={{
      backgroundColor: 'royalblue',
      color: '#dda',
      borderRadius: '10px',
      padding: '0px 10px'
    }}>  
      <h1 style={{ margin: '0' }}>{props.title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: "Default Title"
}

export default Header