interface SearchProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchItem = (props: SearchProps) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="searchItem">Search</label>
      <input 
        type="text" 
        id="search" 
        role="searchbox"
        placeholder="Search Items"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem