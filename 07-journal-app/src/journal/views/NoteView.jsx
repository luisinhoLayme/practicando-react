import { MdOutlineUpload, MdSave } from "react-icons/md"
import { ImageGalery } from "../components"
import { useForm } from "../../hooks"
import { useSelector, useDispatch } from "react-redux"
import { useMemo, useState, useEffect } from "react"
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles, updateNote } from "../../store/journal"
import { toast } from "sonner"

export const NoteView = () => {

  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)

  const { body, title, date, onIputChange, formState } = useForm(note)

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  // actualiza la nota cuando se escribe en el formulario
  useEffect(() => {
    dispatch(setActiveNote(formState))
  }, [formState])


  useEffect(() => {
    if (messageSaved.length > 0) {
      toast.success('Nota Actualizada', {description: messageSaved, duration: 2000})
    }
  }, [messageSaved])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }

  const onInputChange = ({ target }) => {
    if (target.files === 0) return;
    console.log('upload files')
    dispatch( startUploadingFiles( target.files ) )
  }

  const onDelete = () => {
    dispatch( startDeletingNote() )
  }

  return (
    <section className="grid gap-2">
      <header className="grid grid-cols-[1fr_max-content_max-content] justify-center items-center">
        <p className="text-2xl md:text-3xl font-[300]">{dateString}</p>
        <label className="text-primary text-2xl mr-2 cursor-pointer">

          <MdOutlineUpload />
          <input
            className="hidden"
            type="file"
            multiple
            onChange={ onInputChange }
          />
        </label>
        <button
          disabled={isSaving}
          className="text-primary hover:bg-[#E4F1F6] bg-[#F1F9FC] transition-colors p-2 rounded-md grid gap-1 grid-cols-[max-content_max-content] justify-center items-center"
          onClick={onSaveNote}
        >
          <MdSave />Guardar
        </button>
      </header>
      <div className="grid gap-2">
        <input
          type="text"
          placeholder="Recorrer la ciudad"
          className="input"
          name="title"
          value={title}
          onChange={onIputChange}
        />
        <textarea
          max="30"
          style={{ maxHeight: '150px', minHeight: '150px' }}
          placeholder="Que sucedio hoy?"
          className="input"
          name="body"
          value={body}
          onChange={onIputChange}
        ></textarea>
      </div>
      <button
        onClick={ onDelete }
      >
        Borrar
      </button>
      <ImageGalery images={ note.imageUrls } />
    </section>
  )
}
