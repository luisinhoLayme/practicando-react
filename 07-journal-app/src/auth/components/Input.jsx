import { clsx } from 'clsx'
import PropTypes from 'prop-types'

export const Input = ({ type, placeholder, classname, name, value, onChange, formSubmitted, helpText }) => {

  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx('input', {'input-error': !!helpText && formSubmitted })}
        name={name}
        value={value}
        onChange={onChange}
      />
      {formSubmitted && <div className="text-[13px] text-[#ff6f6f]">{helpText}</div>}
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  formSubmitted: PropTypes.bool.isRequired,
  helpText: PropTypes.string
}
