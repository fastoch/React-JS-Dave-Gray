const Footer = () => {
  const today = new Date();
  
  return (
    <footer>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        Copyright &copy; {today.getFullYear()}
      </p>
    </footer>
  )
}

export default Footer