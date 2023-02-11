import avatarSquareImage from '../../assets/images/images/IMG-3-square.png'
import mapMarkerIcon from '../../assets/images/icons/map_marker.svg'

const CardElm = () => {
  return (
    <section className='card-elm flex gap-xl'>
      <img className='card-elm__avatar' src={avatarSquareImage} width={190} height={190} />
      <div className='flex flex-column justify-center'>
        <h3>Mathew Smith</h3>
        <p className='p3 text-alternate '>Product Designer & Design research</p>
        <p className='p3 text-grey flex align-center gap-xs'>
          <img src={mapMarkerIcon} /> New york
        </p>
      </div>
    </section>
  )
}

export default CardElm