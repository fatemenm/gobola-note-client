import { Note } from "./entity/note.js"

const notes = {}
const eventTarget = new EventTarget()

/**
 *
 * @param {Note[]} initNotes
 */
export function init(initNotes) {
  for (const note of initNotes) {
    notes[note.id] = note
  }
}

/**
 *
 * @param {Note[]} initNotes
 * @param {Note[]} notes
 */
export function startApp(initNotes) {
  init(initNotes)
  eventTarget.dispatchEvent(createEvent("appStarted", { notes }))
}

export function addNote(note) {
  notes[note.id] = note
  eventTarget.dispatchEvent(createEvent("noteAdded", { note }))
}

function createEvent(eventType, payload) {
  const e = new Event(eventType)
  e.payload = payload
  return e
}

/**
 *
 * @param {string} eventType
 * @param {function(Event)} callback
 */
export function on(eventType, callback) {
  eventTarget.addEventListener(eventType, callback)
}
