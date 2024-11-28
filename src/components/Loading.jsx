const Loading = ({hasError}) => {
  return (
    <div>
        {
            hasError
            ? (<h2 style={{textAlign: 'center'}}>We can't find you.</h2>)
            : (<h2 style={{textAlign: 'center'}}>Loading...</h2>)
        }
    </div>
  )
}
export default Loading