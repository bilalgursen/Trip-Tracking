import AddTravel from '@/components/AddTravel'
import { ContextProvider } from '@/components/ContextProvider'
import DetailInfo from '@/components/DetailInfo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <div className="mx-auto flex h-full max-w-screen-md flex-col justify-between px-4">
      <div className="space-y-8">
        <Header />
        <ContextProvider>
          <AddTravel />
          <Timeline />
          <DetailInfo />
        </ContextProvider>
      </div>
      <Footer />
    </div>
  )
}
