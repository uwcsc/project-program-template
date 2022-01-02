import { mongoose } from "mongoose";
import { userSchema } from "./user";

/**
 * The default schema for an event object.
 *
 * The only required fields are the name and visibility setting.
 * Location is optional—can be updated on a later date.
 * Participants must be provided, but can be an empty list.
 */
export const eventSchema = mongoose.Schema({
	name: {
		type: String,
		required: "A name must be specified!",
		trim: true,
	},
	is_public: {
		type: Boolean,
		required: "Visibility settings must be specified!",
		default: true,
	},
	date: Date,
	participants: [userSchema],
	description: {
		type: String,
		trim: true,
	},
	location: {
		type: String,
		trim: true,
	},
});

// for debug, will not be stored on db, prints out event details for debug
eventSchema.virtual("details").get(function () {
	return `${this.name} : public? ${this.is_public} -- ${description || "no description provided"}`;
});

export const Event = mongoose.model("Event", eventSchema);

/**
 * A dummy event for testing. Holds only the required fields.
 */
export const dummyEvent = {
	name: "cool",
	date: new Date(),
	is_public: true,
	participants: [],
};
