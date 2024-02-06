import * as NoteRepo from "../repository/note.js"
import {Note} from "../entity/note.js"

export const EVENT_NOTE_CREATED = "noteCreated"

const eventTarget = new EventTarget()

/**
 * create a note
 * @param {Note} note
 */
export function createNote(note) {
  NoteRepo.saveNote(note)
  eventTarget.dispatchEvent(createEvent(EVENT_NOTE_CREATED), { note })
}

/**
 * add event listener
 * @param {string} event the target event
 * @param {function} func the event handler
 */
export function on(event, func) {
  eventTarget.addEventListener(event, func)
}
/**
 * 
 * @param {string} eventType the target event type
 * @param {object} payload the payload
 * @returns Event
 */
function createEvent(eventType, payload) {
  const e = new Event(eventType)
  e.payload = payload
  return e
}
