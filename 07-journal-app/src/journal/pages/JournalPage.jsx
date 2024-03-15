import { MdAddCircleOutline, MdOutlinePostAdd } from 'react-icons/md'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import { startNewNote } from '../../store/journal'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNote() )
  }

  return (
    <JournalLayout>
      {
        !active
        ? <NothingSelectedView />
        : <NoteView />
      }

      <button
        className={
          clsx(
            'text-error hover:text-[#D26F6F] transition-colors fixed top-[92%] right-[5%]',
            {'text-[#CFCFCF]': isSaving}
          )}
        disabled={ isSaving }
        onClick={ onClickNewNote }
      >
        <MdAddCircleOutline
          className="text-3xl "
        />

      </button>
    </JournalLayout>
  )
}
