import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { BsBookmarkStar, BsChatDots, BsJournalCheck, BsPatchPlus, BsPersonLinesFill, BsSpeedometer, BsUiRadiosGrid, BsYelp } from 'react-icons/bs'
import { useAuth } from '../../contexts/AuthContext'

export default function AdminSidebar() {
    const [current , setCurrent] = useState<string>('');
    const params = useLocation()
    const { user, profile } = useAuth();

    useEffect(()=>{
        setCurrent(params.pathname)
    }, [params.pathname])

    const displayName = profile?.full_name || user?.email?.split('@')[0] || 'User';
    const userAvatar = profile?.avatar_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=c71f37&color=fff`;
    
  return (
    <div className="col-xl-2 col-lg-3 col-md-12">
        <div className="user-dashboard-inner h-100 border-end border-2 py-5 p-3 d-lg-block d-none">
            <div className="dashboard_users mb-4">
                <div className="square--80 circle mx-auto mb-1"><img src={userAvatar} className="img-fluid circle" alt="User Image"/></div>
                <div className="user-nameTitle text-center">
                    <h4 className="lh-base fw-semibold text-light mb-0">Welcome Back</h4>
                    <h6 className="text-light fw-medium opacity-75 mb-0">{displayName}</h6>
                </div>
            </div>
            <div className="dashboard_Menu">
                <ul>
                    <li><Link to="/dashboard" className={`${['/dashboard', '/dashboard-user'].includes(current) ? 'active' : ''}`}><BsSpeedometer className="me-2"/>Dashboard Area</Link></li>
                    <li><Link to="/dashboard/profile" className={`${['/dashboard/profile', '/dashboard-my-profile'].includes(current) ? 'active' : ''}`}><BsPersonLinesFill className="me-2"/>My Profile</Link></li>
                    <li><Link to="/dashboard/bookings" className={`${['/dashboard/bookings', '/dashboard-my-bookings'].includes(current) ? 'active' : ''}`}><BsJournalCheck className="me-2"/>My Bookings</Link></li>
                    <li><Link to="/dashboard/listings" className={`${['/dashboard/listings', '/dashboard-my-listings'].includes(current) ? 'active' : ''}`}><BsUiRadiosGrid className="me-2"/>My Listings</Link></li>
                    <li><Link to="/dashboard/bookmarks" className={`${['/dashboard/bookmarks', '/dashboard-bookmarks'].includes(current) ? 'active' : ''}`}><BsBookmarkStar className="me-2"/>Bookmarkes</Link></li>
                    <li><Link to="/dashboard/messages" className={`${['/dashboard/messages', '/dashboard-messages'].includes(current) ? 'active' : ''}`}><BsChatDots className="me-2"/>Messages<span className="notti_coun style-1">3</span></Link></li>
                    <li><Link to="/dashboard/reviews" className={`${['/dashboard/reviews', '/dashboard-reviews'].includes(current) ? 'active' : ''}`}><BsYelp className="me-2"/>Reviews</Link></li>
                    <li><Link to="/dashboard/add-listing" className={`${['/dashboard/add-listing', '/dashboard-add-listing'].includes(current) ? 'active' : ''}`}><BsPatchPlus className="me-2"/>Add Listing</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
