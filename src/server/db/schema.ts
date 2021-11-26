export default interface schema {
  user: {
    name: string,
    email: string,
    hobbies: string[],
  },
  event: {
    name: string,
    location: string,
    date: Date,
    is_public: boolean,
    participants: string[] // this will actually be a list of documents, hopefully
  }
}