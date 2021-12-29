"use strict";
//TODO: make separate interface for schemas + _id
exports.__esModule = true;
exports.dummyEvent = exports.dummyUser = void 0;
/**
 * A dummy user for testing. Holds only the required fields.
 */
exports.dummyUser = {
    firstname: "jopsse",
    lastname: "waa",
    username: "the_slayer_xxx",
    email: "why@gmai.us"
};
/**
 * A dummy event for testing. Holds only the required fields.
 */
exports.dummyEvent = {
    name: "cool",
    date: new Date(),
    is_public: true,
    participants: []
};