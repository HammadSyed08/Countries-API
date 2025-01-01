import './CountriesListShimmer.css'

export default function CountriesListShimmer() {

  // const array = new Array(10).fill('')
  // console.log(array);
  
   return (
    <div className='countries_container'>
      {
        Array.from({length: 12}).map((el, i) => {
          return <div key={i} className="country shimmer_card">
            <div className="card-title"></div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        } )
      }
    </div>
  )
}
