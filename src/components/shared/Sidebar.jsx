import classNames from 'classnames'
import React from 'react'
import { FcBarChart } from 'react-icons/fc'
import { HiOutlineLogout } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS
} from '../../lib/constants/Navigation'

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base text-white'
const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 p-3 bg-neutral-900 text-white">
      <div className="flex items-center gap-3 px-2 py-5">
        <FcBarChart fontSize={24} />
        <span className="text-neutral-100 text-lg">Open Shop</span>
      </div>
      <div className="flex-1 flex flex-col py-8 gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames('text-red-500 cursor-pointer', linkClass)}>
          <HiOutlineLogout />
          <span className="text-xl">Logout </span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation()

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? 'bg-neutral-700 text-white'
          : 'text-neutral-400',
        linkClass
      )}
    >
      {item.icon}
      <span className="text-xl">{item.label} </span>
    </Link>
  )
}
