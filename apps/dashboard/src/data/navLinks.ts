import { StaticLinks } from '../utils/staticLinks'

interface INavLinks {
  name: string
  path: string
}

export const NavLinks: INavLinks[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Plugins',
    path: '/plugins',
  },
  {
    name: 'Support',
    path: StaticLinks.QUANTY_SERVER_INVITE,
  },
  {
    name: 'Docs',
    path: '/docs',
  },
]
