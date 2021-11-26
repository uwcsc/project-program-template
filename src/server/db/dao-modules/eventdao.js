"use strict";
exports.__esModule = true;
exports.findMatchingEvents = exports.hasEvent = exports.getEvent = exports.deleteEvent = exports.updateEvent = exports.addBasicEvent = exports.addEvent = void 0;
var schema_1 = require("../schema");
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
var addEvent = function (event) {
    return true;
};
exports.addEvent = addEvent;
/**
 * Adds a new event object to the mongoDB database.
 *
 * This will create a new event with only the required information. Useful if you don't want to make objects. Will
 * also ensure the most recent schema is used.
 *
 * Consider using {@link addEvent} if you need to add optional information for the event.
 *
 * @param name the name of the event.
 * @param date the date of the event.
 * @param isPublic whether the event is public or not.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var addBasicEvent = function (name, date, isPublic) {
    return true;
};
exports.addBasicEvent = addBasicEvent;
/**
 * Updates a specific field from a specific event.
 *
 * Note that specifying a event that does not exist will return a `false`. Specifying a field that does
 * not exist will also return a `false`.
 *
 * ! Note! I don't know if mongo returns tokens or if we need strings. Will look into accordingly! Please keep
 * ! using this function if you are, though. The parameter might change.
 *
 * @param eventId the event's id.
 * @param field the field to be updated.
 * @param value the new value for the field.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var updateEvent = function (eventId, field, value) {
    return true;
};
exports.updateEvent = updateEvent;
/**
 * Deletes a event from the mongoDB database.
 *
 * Note that specifying a event that does not exist will return a `false`.
 *
 * ! Note! I don't know if mongo returns tokens or if we need strings. Will look into accordingly! Please keep
 * ! using this function if you are, though. The parameter might change.
 * @param eventId the event's id.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var deleteEvent = function (eventId) {
    return true;
};
exports.deleteEvent = deleteEvent;
/**
 * Retrieves a event from the mongoDB database given a event's id.
 *
 * @param eventId the event's id.
 * @returns the event, or `null` if one cannot be found.
 */
var getEvent = function (eventId) {
    return schema_1.dummyEvent;
};
exports.getEvent = getEvent;
/**
 * Determines if a event by the given event id exists.
 *
 * @param eventId the event's id.
 * @returns a boolean, true if the event exists and false otherwise.
 */
var hasEvent = function (eventId) {
    return true;
};
exports.hasEvent = hasEvent;
/**
 * Given a substring, finds events with a name containing the substring.
 *
 * @param searchString a string containing a substring to look for in events.
 * @returns a list of `eventSchema` containing potential event matches.
 */
var findMatchingEvents = function (searchString) {
    return [];
};
exports.findMatchingEvents = findMatchingEvents;
