/**
 * The default database schema for a user.
 * 
 * Note that the only required fields are the first name, last name, username, and email.
 */
export interface userSchema {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    about?: string,
    from?: string,
    interests?: string[],
}

/**
 * The default schema for an event object.
 * 
 * The only required fields are the number, name, date, and visibility setting.
 * Location is optional—can be updated on a later date.
 * Participants must be provided, but can be an empty list.
 */
export interface eventSchema {
  id: number,
  name: string,
  date: Date,
  is_public: boolean,
  participants: string[] // this will actually be a list of documents, once I figure out the typing lol
  description?: string,
  location?: string,
}

/**
 * A dummy user for testing. Holds only the required fields.
 */
export const dummyUser: userSchema = {
  firstname: "jopsse",
  lastname: "waa",
  username: "the_slayer_xxx",
  email: "why@gmai.us",
}

/**
 * A dummy event for testing. Holds only the required fields.
 */
export const dummyEvent: eventSchema = {
  id: 1,
  name: "cool",
  date: new Date(),
  is_public: true,
  participants: []
}