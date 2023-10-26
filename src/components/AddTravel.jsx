'use client'

export default function AddTravel() {
  function handleSubmit(e) {
    e.preventDefault()

    alert(e.target.city.value)
  }

  return (
    <form className="flex space-x-4" onSubmit={e => handleSubmit(e)}>
      <input
        name="city"
        className="h-14 w-full rounded-lg border border-[#bfbfbf] px-4 text-xl font-semibold placeholder:font-semibold"
        type="text"
        placeholder="ex: Amasya"
      />
      <button className="h-14 w-24 rounded-lg border border-[#bfbfbf] bg-white px-4 text-xl font-semibold">
        Add
      </button>
    </form>
  )
}
