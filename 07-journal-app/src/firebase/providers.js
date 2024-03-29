import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {

  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult( result )
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      // user info
      displayName, email, photoURL, uid
    }


  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
  try {
    // console.log({email, password, displayName})
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL } = resp.user

    // actualizar el displayName en Firebase
    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (err) {
    // console.log(err)
    return { ok: false, errorMessage: err.message }
  }
}

export const loginWithEmailPassword = async ({ email, password }) => {
  // console.log({email, password})
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user

    return {
      ok: true,
      uid, photoURL, displayName, email
    }

  } catch (err) {
    console.log(err)
    return { ok: false, errorMessage: err.message }
  }
}


export const logoutFirebase = async() => {
  return await signOut(FirebaseAuth)
}






