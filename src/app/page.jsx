import DetailInfo from '@/components/DetailInfo'
import Header from '@/components/Header'
import Timeline from '@/components/Timeline'

export default function Home() {
  return (
    <div className="grid-cols-main-grid grid h-full gap-1">
      <Header />
      <Timeline />
      <DetailInfo />
    </div>
  )
}
