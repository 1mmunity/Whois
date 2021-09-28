function NotFound() {
  return(
  <div className="flex flex-col h-screen justify-center bg-gradient-to-br from-green-400 to-cyan-500">
    <div>
      <div className='p-4 bg-white m-auto w-2/3 sm:w-1/3 bg-opacity-50 rounded-lg shadow-lg w-min mb-2'>
        <p className='text-center tracking-wide text-md'><b>404</b>: Searching for something? It isn't here.</p>
      </div>
      <button className='m-auto block cursor-pointer text-blue-500 font-medium hover:brightness-75 duration-150' onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
  </div>
  )
}

export default NotFound