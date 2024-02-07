// TODO: learn more about usages of using export default

/**
 * Note entity presentation
 */
export class Note {
  /**
   * create a new instance of Note
   * @param {string} title - The note's title.
   * @param {string} body - The note's body.
   * @param {number} id - The note's id.
   * @param {Date} date - The note's date.
   * @param {boolean} isPinned - The note's isPinned.
   * @param {boolean} isArchived - The note's isArchived.
   * @param {boolean} isTrashed - The note's isTrashed.
   */
  constructor(
    title,
    body,
    id = Math.ceil(Math.random()*10000),
    date = Date.now(),
    isPinned = false,
    isArchived = false,
    isTrashed = false
  ) {
    this.title = title
    this.body = body
    this.id = id
    this.date = date
    this.isPinned = isPinned
    this.isArchived = isArchived
    this.isTrashed = isTrashed
  }
}
