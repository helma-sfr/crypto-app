import classes from "./Pagination.module.css"


function Pagination({page, setPage}) {

  

  const prevHandler = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  const nextHandler = () => {
    if (page < 10) {
      setPage(page + 1)
    }
  }

  return (
    <div className={classes.pagination}>
      <button onClick={prevHandler} className={page === 1 ? classes.disabled : null}>Previous</button>
      <p className={page === 1 ? classes.selected : null}>1</p>
      <p className={page === 2 ? classes.selected : null}>2</p>
      {page > 2 && page < 9 && (
        <>
        <span>...</span>
        <p className={classes.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page === 9 ? classes.selected : null}>9</p>
      <p className={page === 10 ? classes.selected : null}>10</p>
      <button onClick={nextHandler} className={page === 10 ? classes.disabled : null}>Next</button>
    </div>
  )
}

export default Pagination