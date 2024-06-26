import {useState, useContext} from 'react'
import GithubContext from '../../context/github/GithubContext'
import alertContext from '../../context/alert/AlertContext'



function UserSearch() {
    const [text, setText] = useState('') // [state, setState]
    const { users, searchUsers, clearUsers } = useContext(GithubContext)
    const { setAlert } = useContext(alertContext)
    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text === '') {
            setAlert('Please enter something', 'error')
        }
        else {
            //@todo - search users
            searchUsers(text)
            setText('')
        }
        
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-'>
        <div>
        <form onSubmit={handleSubmit}>
        <div className="form-control">
        <div className="relative">
        <input 
            type="text" 
            className="w-full pr-40 bg-gray-200 input input-lg text-black"
            placeholder='Search Users...' 
            value={text}
            onChange={handleChange => setText(handleChange.target.value)}
        />
        <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
            Go
        </button>
        </div>
        </div>
        </form>
        </div>
        {users.length > 0 && (
            <div>
                <button
                onClick={clearUsers}
                className='btn btn-ghost btn-lg'>
                    Clear
                </button>
            </div>
        )}
        
    </div>
  )
}

export default UserSearch