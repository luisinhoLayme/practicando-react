import { MdTurnedInNot } from 'react-icons/md'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch()
  const onClickNote = () => {
    dispatch( setActiveNote({id, title, body, date, imageUrls}) )
  }

  return (
    <button
      className="grid gap-3 grid-cols-[max-content_1fr] items-center border-[1px] rounded-sm min-w-[198px] hover:bg-slate-100"
      type="button"
      onClick={ onClickNote }
    >
      <MdTurnedInNot />
      <div>
        <h2 className="text-center">{ title }</h2>
        <p className="text-sm text-left">{ body }</p>
      </div>
    </button>
  )
}

SideBarItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  date: PropTypes.number,
  imageUrls: PropTypes.array
}
