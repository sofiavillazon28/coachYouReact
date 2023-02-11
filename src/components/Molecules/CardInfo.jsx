import increaseLevelIcon from '../../assets/images/icons/increase_level.svg'
import clockIcon from '../../assets/images/icons/clock.svg'
import cashIcon from '../../assets/images/icons/cash.svg'
import userIcon from '../../assets/images/icons/user.svg'

const CardInfo = () => {
  return (
    <section className='card-info'>
      <h5 className=' mb-24'>Community statistics</h5>
      <div className='grid gap-md g-elements-x2'>
        <p className='flex align-center gap-xs p5 text-grey'>
          <img src={increaseLevelIcon} width={20} height={20} /> 5 year exp.
        </p>
        <p className='flex align-center gap-xs p5 text-grey'>
          <img src={clockIcon} width={20} height={20} /> 150h disponibles
        </p>
        <p className='flex align-center gap-xs p5 text-grey'>
          <img src={cashIcon} width={20} height={20} /> $30 por hora
        </p>
        <p className='flex align-center gap-xs p5 text-grey'>
          <img src={userIcon} width={20} height={20} /> 57 sesiones
        </p>
      </div>
      <button className="button text-white w-full mt-24" disabled>
        Solicitar cita vía Calendly
      </button>
    </section>
  )
}

export default CardInfo