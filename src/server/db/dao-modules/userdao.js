const userDao = require("../models/user");

/**
 * Adds a new user object to the mongoDB database.
 *
 * The specified user must be in the form specified by the common user schema in schema.ts.
 *
 * Consider using {@link addBasicUser} if a bare-bones user is needed without any optional fields. Additionally,
 * this will ensure that the most recent schema is used.
 *
 * @param userObj the user object in the form of {@link user.userSchema userSchema}.
 * @returns a boolean, true if this method was successful and false otherwise.
 *
 * ! I don't know if this will update a user or create a new user. I will Update accordingly.
 */
const addUser = async (userObj) => {
	const newUser = userDao.User({ ...userObj });
	try {
		await newUser.save();

		return true;
	} catch (err) {
		console.error(err);

		return false;
	}
};

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
const addBasicUser = async (firstname, lastname, username, email) => {
	const newUser = new userDao.User({
		firstname: firstname,
		lastname: lastname,
		username: username,
		email: email,
	});

	try {
		await newUser.save();

		return true;
	} catch (err) {
		console.error(err);

		return false;
	}
};

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
const updateUser = async (username, field, value) => {
	try {
		const userToUpdate = await userDao.User.findOne({ username: username }).exec();

		userToUpdate.field = value;
		userToUpdate.save();

		return true;
	} catch (err) {
		console.error(err);

		return false;
	}
};

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
const deleteUser = async (username) => {
	try {
		await userDao.User.deleteOne({ username: username }).exec();

		return true;
	} catch (err) {
		console.error(err);

		return false;
	}
};

/**
 * Retrieves a user from the mongoDB database given a username.
 *
 * @param username the username of the user to find.
 * @returns the user, or `null` if one cannot be found.
 */
const getUser = async (username) => {
	try {
		const desiredUser = await userDao.User.findOne({ username: username }).exec();

		return desiredUser;
	} catch (err) {
		console.error(err);

		return null;
	}
};

/**
 * Determines if a user by the given username exists.
 *
 * Note that this function, internally, calls {@link getUser}. Avoid calling this
 * function multiple times. To improve efficiency, consider using {@link getUser}
 * and checking if the result is `null`, instead.
 *
 * @param username the username of the user to find.
 * @returns a boolean, true if the user exists and false otherwise.
 */
const hasUser = async (username) => {
	return !((await getUser(username)) == null);
};

/**
 * Given a substring, finds users with a username/name with the substring.
 *
 * Technically, the provided `searchString` may be regex. However, noticeable
 * differences will arise (eg. dot characters `.` will not match every character).
 * Note that this search is case-insensitive.
 *
 * @param searchString a string containing a substring to look for in users.
 * @returns a list of documents of type `userSchema` containing potential user matches.
 */
const findMatchingUsers = async (searchString) => {
	try {
		const desiredUsers = await userDao.User.find({
			username: { $regex: searchString, $options: "i" },
		})
			.limit(10)
			.exec();

		return desiredUsers;
	} catch (err) {
		console.error(err);

		return null;
	}
};

exports.addUser = addUser;
exports.addBasicUser = addBasicUser;
exports.updateUser = updateUser;
exports.getUser = getUser;
exports.hasUser = hasUser;
exports.findMatchingUsers = findMatchingUsers;
