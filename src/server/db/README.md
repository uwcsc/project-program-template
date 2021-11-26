# db

This package contains all the functions needed for the proper operation of the database, and all database interactions should be performed via functions provided by this package to ensure normalization of database data.

## DB Schemas

The following are the schemas for the database. Note that fields marked with a `?:` are optional.

### User Schema
```json
{
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    about?: string,
    from?: string,
    interests?: string[],
}
```
### Event Schema
```json
{
  id: number,
  name: string,
  date: Date,
  is_public: boolean,
  participants: string[] // this will actually be a list of documents, once I figure out the typing lol
  description?: string,
  location?: string,
}

```

If you `require` the schema file, note that `dummyUser` and `dummyEvent` are provided for easy testing with already-formed objects.

## DB Functions

The following are the functions provided by `dao.js`.

### User DB Functions
`function addUser(user: userSchema) => boolean` 
Adds a new user object to the mongoDB database.
<br />
<br />

`function addBasicUser(firstname: string, lastname: string, username: string, email: string) => boolean`
Adds a new user object to the mongoDB database.

This will create a new user with only the required information. Useful if you don't want to make objects. Will also ensure the most recent schema is used.
<br />
<br />

`function updateUser(username: string, field: string, value: any) => boolean`
Updates a specific field from a specific user.

Note that specifying a user that does not exist will return a `false`. Specifying a field that does not exist will also return a `false`.
<br />
<br />

`function deleteUser(username: string) => boolean`
Deletes a user from the mongoDB database.
 
Note that specifying a user that does not exist will return a `false`.
<br />
<br />

`function getUser(username: string) => userSchema`
Retrieves a user from the mongoDB database given a username.
<br />
<br />

`function hasUser(username: string) => boolean`
Determines if a user by the given username exists.
<br />
<br />

`function findMatchingUsers(searchString: string) => userSchema[]`
Given a substring, finds users with a username/name with the substring.
<br />
<br />

### Event DB Functions

`function addEvent(event: eventSchema) => boolean`
Adds a new event to the mongoDB database.
 
The specified event must be in the form specified by the common event schema in schema.ts.
<br />
<br />

`function addBasicEvent(name: string, date: string, isPublic: boolean) => boolean`
Adds a new event object to the mongoDB database.
 
This will create a new event with only the required information. Useful if you don't want to make objects. Will also ensure the most recent schema is used.
<br />
<br />

`function updateEvent(eventId: number, field: string, value: any) => boolean`
Updates a specific field from a specific event.

Note that specifying a event that does not exist will return a `false`. Specifying a field that does not exist will also return a `false`.
<br />
<br />

`function deleteEvent(eventId: number) => boolean`
Deletes a event from the mongoDB database.

Note that specifying a event that does not exist will return a `false`.
<br />
<br />

`function getEvent(eventId: number) => eventSchema`
Retrieves a event from the mongoDB database given a event's id.
<br />
<br />

`function hasEvent(eventId: string) => boolean`
Determines if a event by the given event id exists.
<br />
<br />

`function findMatchingEvents(searchString: string) => eventSchema[]`
Given a substring, finds events with a name containing the substring.