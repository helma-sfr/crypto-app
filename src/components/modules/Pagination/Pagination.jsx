import { useState } from "react"


function Pagination() {

  const [page, setPage] = useState(1)

  return (
    <div>
      <button>Previous</button>
      <p>{page}</p>
      <button>Next</button>
    </div>
  )
}

export default Pagination