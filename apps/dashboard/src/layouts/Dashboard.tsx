import { motion } from 'framer-motion'
import { useAtom, useSetAtom } from 'jotai'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { MutableRefObject, useEffect, useRef } from 'react'
import { Toaster } from 'react-hot-toast'
import type { ClapSpinner as ClapSpinnerType } from 'react-spinners-kit'
import { useMedia } from 'react-use'

import { DashboardNavbar } from '../components/Dashboard'
import { useGetGuildConfigQuery } from '../graphql/generated/schema'
import { useAuth, useClickOn } from '../hooks'
import { useCurrentGuildId } from '../hooks/useCurrentGuildId'
import { guildConfigAtom } from '../utils/store'
import { dashboardDrawerToggleAtom } from '../utils/store/dashboardSidebarStatus'

const ClapSpinner: typeof ClapSpinnerType = dynamic(() =>
  import('react-spinners-kit').then(mod => mod['ClapSpinner']),
)

const DashboardSidebar = dynamic(
  () => import('../components/Dashboard/Sidebar'),
)

interface LayoutProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: LayoutProps) => {
  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return
  }, [router.isReady])

  useAuth()
  const [sidebarDrawerOpen, toggleSidebarDrawer] = useAtom(
    dashboardDrawerToggleAtom,
  )

  const setGuildConfig = useSetAtom(guildConfigAtom)

  const { loading } = useGetGuildConfigQuery({
    onCompleted: ({ guildConfig }) => setGuildConfig(guildConfig),
    variables: { guildId: router.query.guildId as string },
    skip: !router.query.guildId,
  })

  const dashboardContainerRef = useRef(null)

  const isLarge = useMedia('(min-width: 1024px)')

  useClickOn(dashboardContainerRef, () => {
    if (isLarge) return
    toggleSidebarDrawer(false)
  })

  return (
    <>
      <Head>
        <title>{'Quanty | Discord Bot'}</title>
        <link rel="icon" href="/quanty-64.png" />
        <meta
          name="description"
          content="🤖 Multi-purpose bot to replace them all. Moderation | Economy | Memes | Games | Dashboard."
        />
        <meta property="og:title" content={'Quanty | Discord Bot'} />
        <meta
          property="og:description"
          content="🤖 Multi-purpose bot to replace them all. Moderation | Economy | Memes | Games | Dashboard."
        />
        <meta property="og:url" content="https://quanty.xyz/" />
        <meta property="og:type" content="website" />

        <meta name="theme-color" content="#1C1A25" />
      </Head>
      <div
        className={`relative flex h-screen w-screen overflow-x-hidden bg-primary-darkPurpleBg text-primary-white antialiased`}
      >
        <Toaster />
        <DashboardSidebar />
        <div className={`h-full w-full bg-primary-purple-20 `}>
          <DashboardNavbar />
          <DashboardContainer
            loading={loading}
            ref={dashboardContainerRef}
            sidebarDrawerOpen={sidebarDrawerOpen}
          >
            {children}
          </DashboardContainer>
        </div>
      </div>
    </>
  )
}

interface IDashboardContainerProps {
  loading: boolean
  ref: MutableRefObject<null>
  sidebarDrawerOpen: boolean
  children: React.ReactNode
}

const DashboardContainer = ({
  loading,
  ref,
  sidebarDrawerOpen,
  children,
}: IDashboardContainerProps) => {
  const guildId = useCurrentGuildId()

  useEffect(() => {
    return
  }, [guildId])

  return (
    <>
      {loading ? (
        <div className="flex h-[calc(100%_-_64px)] items-center justify-center">
          <ClapSpinner frontColor={'#ffffff'} backColor={'#ffffff'} />
        </div>
      ) : (
        <div ref={ref} className="h-[calc(100%_-_64px)] overflow-auto">
          <motion.div
            animate={{
              filter: sidebarDrawerOpen ? 'blur(3px)' : 'blur(0px)',
            }}
            className={`min-h-full w-full p-10 lg:!blur-0 ${
              sidebarDrawerOpen
                ? 'pointer-events-none select-none blur-sm lg:pointer-events-auto lg:select-auto'
                : ''
            }`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </>
  )
}

export default DashboardLayout
