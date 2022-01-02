import mongoose from "mongoose";

/**
 * The default database schema for a user.
 *
 * Note that the only required fields are the first name, last name, username, and email.
 */
export const userSchema = mongoose.Schema({
	firstname: {
		type: String,
		required: "A first name is required!",
	},
	lastname: {
		type: String,
		required: "A last name is required!",
	},
	username: {
		type: String,
		required: "A username must be provided!",
	},
	email: {
		type: String,
		required: "An email must be provided!",
	},
	about: String,
	from: String,
	interests: [String],
});

// for debug, will not be stored on db, prints out event details for debug
userSchema.virtual("details").get(function () {
	return `${this.username} - ${this.firstname} ${this.lastname}`;
});

export const User = mongoose.model("User", userSchema);
