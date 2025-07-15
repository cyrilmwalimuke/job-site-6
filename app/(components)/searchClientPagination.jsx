import React from 'react'

export default function SearchClientPagination() {
  return (
    <div>
         {data.length>0 && !loading && (<div className="flex gap-2 items-center justify-center mt-6">
 <button
  onClick={() => setPage(prev => Math.max(prev - 1, 1))}
   disabled={page === 1}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
 >
    Prev
  </button>

        {getPaginationPages(page, totalPages).map((p, index) =>
          p === '...' ? (
            <span key={index} className="px-2">...</span>
          ) : (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 rounded ${
                p === page ? 'bg-black text-white' : 'bg-gray-200 text-black'
           }`}            >
              {p}
            </button>
         )
       )}

 <button
   onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
     disabled={page === totalPages}
    className="px-3 py-1 bg-black text-white rounded disabled:opacity-50"
  >
    Next
  </button>
 </div>
 )}
      
    </div>
  )
}

