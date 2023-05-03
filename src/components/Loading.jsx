import {useSelector} from 'react-redux';

const Loading = () => {
  const {loading} = useSelector((state) => state.country)

  return (
    <div className='w-full h-[100%] justify-center items-center flex'>
      {loading && <div className="lds-ripple">
          <div></div>
          <div></div>
      </div>} 
      {!loading && (
        <div className="lds-ripple exit">
          <div></div>
          <div></div>
        </div>
      )}
      </div>
  )
}

export default Loading
