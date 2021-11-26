"use strict";
exports.__esModule = true;
exports.findMatchingUsers = exports.hasUser = exports.getUser = exports.deleteUser = exports.updateUser = exports.addBasicUser = exports.addUser = void 0;
var schema_1 = require("../schema");
/**
 * Adds a new user object to the mongoDB database.
 *
 * The specified user must be in the form specified by the common user schema in schema.ts.
 *
 * Consider using {@link addBasicUser} if a bare-bones user is needed without any optional fields. Additionally,
 * this will ensure that the most recent schema is used.
 *
 * @param user the user object containing all information about the new user.
 * @returns a boolean, true if this method was successful and false otherwise.
 *
 * ! I don't know if this will update a user or create a new user. I will Update accordingly.
 */
var addUser = function (user) {
    return true;
};
exports.addUser = addUser;
/**
 * Adds a new user object to the mongoDB database.
 *
 * This will create a new user with only the required information. Useful if you don't want to make objects. Will
 * also ensure the most recent schema is used.
 *
 * Consider using {@link addUser} if you need to add optional information for the user.
 *
 * @param firstname the first name of the new user.
 * @param lastname the last name of the new user.
 * @param username the username of the new user.
 * @param email the email of the new user.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var addBasicUser = function (firstname, lastname, username, email) {
    return true;
};
exports.addBasicUser = addBasicUser;
/**
 * Updates a specific field from a specific user.
 *
 * Note that specifying a user that does not exist will return a `false`. Specifying a field that does
 * not exist will also return a `false`.
 *
 * ! Note! I don't know if mongo returns tokens or if we need strings. Will look into accordingly! Please keep
 * ! using this function if you are, though. The parameter might change.
 *
 * @param username the user's username.
 * @param field the field to be updated.
 * @param value the new value for the field.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var updateUser = function (username, field, value) {
    return true;
};
exports.updateUser = updateUser;
/**
 * Deletes a user from the mongoDB database.
 *
 * Note that specifying a user that does not exist will return a `false`.
 *
 * ! Note! I don't know if mongo returns tokens or if we need strings. Will look into accordingly! Please keep
 * ! using this function if you are, though. The parameter might change.
 * @param username the username of the user to find.
 * @returns a boolean, true if this method was successful and false otherwise.
 */
var deleteUser = function (username) {
    return true;
};
exports.deleteUser = deleteUser;
/**
 * Retrieves a user from the mongoDB database given a username.
 *
 * @param username the username of the user to find.
 * @returns the user, or `null` if one cannot be found.
 */
var getUser = function (username) {
    return schema_1.dummyUser;
};
exports.getUser = getUser;
/**
 * Determines if a user by the given username exists.
 *
 * @param username the username of the user to find.
 * @returns a boolean, true if the user exists and false otherwise.
 */
var hasUser = function (username) {
    return true;
};
exports.hasUser = hasUser;
/**
 * Given a substring, finds users with a username/name with the substring.
 *
 * @param searchString a string containing a substring to look for in users.
 * @returns a list of `userSchema` containing potential user matches.
 */
var findMatchingUsers = function (searchString) {
    return [];
};
exports.findMatchingUsers = findMatchingUsers;
