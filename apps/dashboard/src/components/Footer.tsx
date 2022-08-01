import Link from 'next/link'
import React from 'react'

import Copyright from './Copyright'

import FooterItems from '../data/footerItems'

const Footer = () => {
  return (
    <footer
      className={`mx-auto my-12 h-full w-full max-w-7xl items-center justify-between px-4 text-sm md:flex`}
    >
      <FooterTags />
      <div className="mr-auto mt-10 md:mt-auto md:mr-0">
        <Copyright />
      </div>
    </footer>
  )
}

const FooterTags = () => {
  return (
    <div className="mt-auto inline-flex flex-col md:flex-row md:space-x-10">
      {FooterItems.map(({ items, title }) => {
        return (
          <div className="w-full list-none" key={title}>
            <p className="mt-4 -mb-2 font-semibold">{title}</p>
            <ul className="text-secondary-white">
              {items.map(({ name, route }) => {
                return (
                  <li className="pt-6" key={name}>
                    <Link href={route} passHref>
                      <a className="item">{name}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Footer
