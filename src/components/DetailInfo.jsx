export default function DetailInfo() {
  return (
    <div className="col-span-full flex flex-col items-stretch justify-center gap-4 self-start p-6 lg:col-span-1">
      <div className="rounded bg-white p-12 shadow-md">
        <div className="text-3xl font-normal text-black">
          <span className="text-[#453976]">İstanbul</span> İçin Hava Durumu
        </div>
        <div className="mt-8 flex w-full flex-col space-x-0 space-y-4 rounded bg-gradient-to-t from-orange-700 to-orange-500 p-8 text-white 2xl:flex-row 2xl:space-x-4 2xl:space-y-0">
          <div className="w-64">
            <img
              className="h-32 flex-none"
              src="https://www.amcharts.com/wp-content/themes/amcharts4/css/img/icons/weather/animated/cloudy-day-1.svg"
            />
            <div className="text-xl font-medium">Parçalı Bulutlu</div>
          </div>
          <div className="flex w-full flex-col justify-between space-y-4 2xl:space-y-0">
            <div className="flex w-full justify-between text-xl font-medium">
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
            <div className="flex w-full justify-between">
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
        <div className="my-8 text-3xl font-normal text-black">
          İlgili Oteller
        </div>
        <div className="grid grid-cols-2 gap-4 2xl:grid-cols-5">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div className="overflow-hidden rounded">
                <img
                  className="h-24 w-full bg-[#423670] object-cover transition-all hover:scale-105"
                  src={`https://picsum.photos/500?random=${Math.random()}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
