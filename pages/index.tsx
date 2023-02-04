import GoButton from '../components/go_button'
import Header from '../components/Header'
import Teams from '../components/teams'

export default function index() {
  return (
    <>
      <div className='bg-league_blue_header h-screen'>
        <Header/>
        <Teams/>
        <GoButton/>
      </div>

    </>
  )
}
