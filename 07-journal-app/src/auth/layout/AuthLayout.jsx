import PropTypes from 'prop-types'

export const AuthLayout = ({ children, title }) => {
  return (
    <section
      className="grid place-content-center bg-primary min-h-screen"
    >
      <div className="animate-pulse-one min-w-[275px] bg-white p-3 rounded-md md:w-96">
        <p className="text-center font-bold">{title}</p>
        {children}
      </div>
    </section>
  )
}

AuthLayout.propTypes = {
  children: PropTypes.object,
  title: PropTypes.string
}

