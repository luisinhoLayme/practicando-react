import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
  // active: {
  //   id: null,
  //   title: '',
  //   body: '',
  //   date: null,
  //   imageUrl: []
  // }
}

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNotes: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push( action.payload )
      state.isSaving = false
    },
    setActiveNote: (state, { payload }) => {
      state.active = payload
      state.messageSaved = ''
    },
    setNotes: (state, { payload }) => {
      state.notes = payload
    },
    setSaving: (state, action) => {
      state.isSaving = true
      state.messageSaved = ''
    },
    updateNote: (state, { payload }) => { // payloas: note
      state.isSaving = false
      state.notes = state.notes.map((note) => {
        if(note.id === payload.id) {
          return payload
        }
        return note
      })

      state.messageSaved = `${ payload.title }, actualizado correctamente.`
    },

    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls = state.active.imageUrls
        ? [...state.active.imageUrls, ...action.payload]
        : [...action.payload]

      state.isSaving = false
    },

    clearNotesLogout: (state) => {
      state.isSaving = false
      state.messageSaved = ''
      state.notes = []
      state.active = null
    },

    deleteNoteById: (state, { payload }) => {
      state.active = null
      state.notes = state.notes.filter(note => note.id !== payload )
    },

  }
})

export const {
  savingNewNotes,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  setPhotosToActiveNote,
  clearNotesLogout
} = journalSlice.actions
