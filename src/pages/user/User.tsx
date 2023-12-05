import './user.scss'
import Single from '../../components/single/Single'
import { singleUser } from '../../data'
const User = () => {
  //Fetch data and sent to Single Component

  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User