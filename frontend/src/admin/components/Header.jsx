import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import ProfileDropdown from '../../components/ProfileDropdown'

const Header = () => {
  const { user, isAuthenticated } = useContext(AuthContext)
  const isLoggedIn = isAuthenticated && Boolean(user?.id || user?._id);
  const username = `${user?.firstName ?? ''} ${user?.lastName ?? ''}`.trim();
  return (
    <div className='w-[83.5%] bg-white h-12 flex items-center justify-between px-4 border-b border-zinc-200'>
      <div>
        Breadcum
      </div>
      <div className=''>
        {isLoggedIn && (
          <div className="hidden md:flex items-center justify-center gap-4">
            <div>
              <h1 className="text-sm font-semibold text-neutral-700">{username}</h1>
              <Link to={'/profile'}>
                <p className="text-xs text-neutral-400">
                  {Array.isArray(user.bio) && user.bio.length > 0
                    ? user.bio.join(", ")
                    : "Complete your profile"}
                </p>
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Header