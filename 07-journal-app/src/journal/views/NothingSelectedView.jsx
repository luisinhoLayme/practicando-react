import { CiStar } from "react-icons/ci"

export const NothingSelectedView = () => {
  return (
    <section
      className="bg-primary text-white min-h-full grid place-content-center place-items-center rounded-md"
    >
      <CiStar className="text-7xl" />
      <p className="sm:text-xl md:text-2xl">Selecciona o crea una entrada</p>
    </section>
  )
}
