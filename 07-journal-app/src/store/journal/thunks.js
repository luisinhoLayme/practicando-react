import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { fileUpload, loadNotes } from '../../helpers'
import { addNewEmptyNote, deleteNoteById, savingNewNotes, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updateNote } from "./journalSlice"

export const startNewNote = () => {
  return async (dispatch, getState) => {


    dispatch(savingNewNotes())

    const { uid } = getState().auth

    //uid
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    // crear id
    newNote.id = newDoc.id

    //dsipatch
    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('El UID del usuario no existe');

    const notes = await loadNotes(uid)
    // console.log(notes)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {

    dispatch(setSaving())

    const { uid } = getState().auth
    const { active: note } = getState().journal

    // eliminamos el id de la nota
    const noteToFireStore = { ...note }
    delete noteToFireStore.id // una forma de eliminar algo de un objeto

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    // el merge una union si los campos que mando aqui,  los campos que estan en firebase se mantiene
    await setDoc(docRef, noteToFireStore, { merge: true })
    dispatch(updateNote(note))
  }
}


export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    // await fileUpload(files[0])
    const fileUploadPromises = [] // array of promises
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)
    dispatch(setPhotosToActiveNote(photosUrls))

  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {

    const { uid } = getState().auth
    const { active: note } = getState().journal

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`)
    await deleteDoc(docRef)

    dispatch(deleteNoteById(note.id))
  }
}









