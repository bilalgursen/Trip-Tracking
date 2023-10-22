import { BiChevronRight, BiPlus } from 'react-icons/bi'

export default function Home() {
  return (
    <div className="flex gap-4 flex-col justify-center">
      <div className="flex text-xl justify-between overflow-x-auto">
        <div className="py-4 px-8 bg-white rounded shadow-md flex font-medium text-black items-center justify-center">
          Amasya
        </div>
        <span className="text-4xl flex items-center animate-pulse">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <BiChevronRight key={i} />
            ))}
        </span>
        <div className="py-4 px-8 bg-white rounded shadow-md flex font-medium text-black items-center justify-center">
          İstanbul
        </div>
        <span className="text-4xl flex items-center animate-pulse">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <BiChevronRight key={i} />
            ))}
        </span>
        <div className="text-4xl py-4 px-8 bg-white rounded shadow-md flex justify-center items-center text-[#453976]">
          <BiPlus />
        </div>
      </div>
      <div className="p-12 bg-white rounded shadow-md">
        <div className="text-3xl font-normal text-black">
          <span className="text-[#453976]">İstanbul</span> İçin Hava Durumu
        </div>
        <div className="w-full flex flex-col space-y-4 2xl:space-y-0 2xl:flex-row space-x-0 2xl:space-x-4 rounded bg-[#423670] text-white p-8 mt-8">
          <div className="w-64">
            <img
              className="flex-none h-32"
              src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
            />
            <div className="text-xl font-medium">Parçalı Bulutlu</div>
          </div>
          <div className="w-full flex flex-col space-y-4 2xl:space-y-0 justify-between">
            <div className="flex text-xl font-medium justify-between w-full">
              <div>
                <div>İstanbul</div>
                <div>Türkiye</div>
              </div>
              <div>
                <div>23°C</div>
                <div>Sıcaklık</div>
              </div>
              <div>
                <div>51%</div>
                <div>Nem</div>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <div>
                <div>Yağmur</div>
                <div>51%</div>
              </div>
              <div>
                <div>Hissedilen</div>
                <div>28°C</div>
              </div>
              <div>
                <div>Rüzgar</div>
                <div>54km</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-3xl font-normal text-black my-8">
          İlgili Oteller
        </div>
        <div className="gap-4 grid grid-cols-2 2xl:grid-cols-5">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div className="rounded overflow-hidden">
                <img
                  className="h-24 w-full object-cover transition-all bg-[#423670] hover:scale-105"
                  src={`https://picsum.photos/500?random=${Math.random()}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
