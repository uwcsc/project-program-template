const mongoose = require("mongoose");
const connector = require("../conn");

/**
 * Adds a new event to the mongoDB database.
 *
 * The specified event must be in the form specified by the common event schema in schema.ts.
 *
 * Consider using {@link addBasicEvent} if a bare-bones event is needed without any optional fields. Additionally,
 * this will ensure that the most recent schema is used.
 *
 * @param event the event object containing all information about the new event.
 * @returns a boolean, true if this method was successful and false otherwise.
 *
 * ! I don't know if this will update a event or create a new event. I will Update accordingly.
 */
export const addEvent = async (event) => {
	const db = await getDb();
	const newEvent = { _id: new ObjectId(), ...event };

	return (await db.collection("events").insertOne(newEvent)).acknowledged;
};

/**
 * Adds a new event object to the mongoDB database.
 *
 * This will create a new event with only the required information. Useful if you don't want to make objects. Will
 * also ensure the most recent schema is used. Participants will be an empty list.
 *
 * Consider using {@link addEvent} if you need to add optional information for the event.
 *
 * @param name the name of the event.
 * @param date the date of the event.
 * @param isPublic whether the event is public or not.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
export const addBasicEvent = async (name, date, isPublic) => {
	const db = await getDb();
	const newEvent = {
		_id: new ObjectId(),
		name: name,
		date: date,
		is_public: isPublic,
		participants: [],
	};

	return (await db.collection("events").insertOne(newEvent)).acknowledged;
};

/**
 * Updates a specific field from a specific event.
 *
 * Note that specifying a event that does not exist will return a `false`. Specifying a field that does
 * not exist will also return a `false`.
 *
 * ! Note! I don't know if mongo returns tokens or if we need strings. Will look into accordingly! Please keep
 * ! using this function if you are, though. The parameter might change.
 *
 * @param eventId the event's `ObjectId`.
 * @param field the field to be updated.
 * @param value the new value for the field.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
export const updateEvent = async (eventId, field, value) => {
	const db = await getDb();
	const query = { _id: eventId };

	const newValues = {
		$set: {
			field: value,
		},
	};

	return (await db.collection("events").updateOne(query, newValues)).acknowledged;
};

/**
 * Deletes a event from the mongoDB database.
 *
 * Note that specifying a event that does not exist will return a `false`.
 *
 * @param eventId the event's `ObjectId`.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
export const deleteEvent = async (eventId) => {
	const db = await getDb();
	const query = { _id: eventId };

	return (await db.collection("events").deleteOne(query)).acknowledged;
};

/**
 * Retrieves a event from the mongoDB database given a event's id.
 *
 * @param eventId the `ObjectId` for the event.
 * @returns the event, or `null` if one cannot be found.
 */
export const getEvent = async (eventId) => {
	const db = await getDb();
	const query = { _id: eventId };

	return await db.collection("events").findOne(query);
};

/**
 * Determines if a event by the given event id exists.
 *
 * Note that this function, internally, calls {@link getEvent}. Avoid calling this
 * function multiple times. To improve efficiency, consider using {@link getEvent}
 * and checking if the result is `null`, instead.
 *
 * @param eventId the ObjectId of this event.
 * @returns a boolean, true if the event exists and false otherwise.
 */
export const hasEvent = async (eventId) => {
	return !((await getEvent(eventId)) == null);
};

/**
 * Given a substring, finds events with a name containing the substring.
 *
 * Technically, the provided `searchString` may be regex. However, noticeable
 * differences will arise (eg. dot characters `.` will not match every character).
 * Note that this search is case-insensitive.
 *
 * @param searchString a string containing a substring to look for in events.
 * @returns a list of `eventSchema` containing potential event matches.
 */
export const findMatchingEvents = async (searchString) => {
	const db = await getDb();
	const query = { name: { $regex: searchString, $options: "i" } };

	return (await db.collection("events").find(query)).toArray();
};
