"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.findMatchingUsers = exports.hasUser = exports.getUser = exports.deleteUser = exports.updateUser = exports.addBasicUser = exports.addUser = void 0;
var bson_1 = require("bson");
var conn_1 = require("../conn");
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
var addUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = __assign({ _id: new bson_1.ObjectId(user.username) }, user);
                return [4 /*yield*/, db.collection("users").insertOne(query)];
            case 2: return [2 /*return*/, (_a.sent()).acknowledged];
        }
    });
}); };
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
var addBasicUser = function (firstname, lastname, username, email) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = {
                    _id: new bson_1.ObjectId(username),
                    firstname: firstname,
                    lastname: lastname,
                    username: username,
                    email: email
                };
                return [4 /*yield*/, db.collection("users").insertOne(query)];
            case 2: return [2 /*return*/, (_a.sent()).acknowledged];
        }
    });
}); };
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
var updateUser = function (username, field, value) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query, toUpdate;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = {
                    username: { $eq: username }
                };
                toUpdate = {
                    $set: {
                        field: value
                    }
                };
                return [4 /*yield*/, db.collection("users").updateOne(query, toUpdate)];
            case 2: return [2 /*return*/, (_a.sent()).acknowledged];
        }
    });
}); };
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
var deleteUser = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = {
                    username: { $eq: username }
                };
                return [4 /*yield*/, db.collection("users").deleteOne(query)];
            case 2: return [2 /*return*/, (_a.sent()).acknowledged];
        }
    });
}); };
exports.deleteUser = deleteUser;
/**
 * Retrieves a user from the mongoDB database given a username.
 *
 * @param username the username of the user to find.
 * @returns the user, or `null` if one cannot be found.
 */
var getUser = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = {
                    username: { $eq: username }
                };
                return [4 /*yield*/, db.collection("users").findOne(query)];
            case 2: return [2 /*return*/, (_a.sent())];
        }
    });
}); };
exports.getUser = getUser;
/**
 * Determines if a user by the given username exists.
 *
 * @deprecated
 * Consider checking if `getUser()` is null instead.
 *
 * @param username the username of the user to find.
 * @returns a boolean, true if the user exists and false otherwise.
 */
var hasUser = function (username) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, exports.getUser)(username)];
            case 1: return [2 /*return*/, !((_a.sent()) == null)];
        }
    });
}); };
exports.hasUser = hasUser;
/**
 * Given a substring, finds users with a username/name with the substring.
 *
 * Technically, the provided `searchString` may be regex. However, noticeable
 * differences will arise (eg. dot characters `.` will not match every character).
 * Note that this search is case-insensitive.
 *
 * @param searchString a string containing a substring to look for in users.
 * @returns a list of `userSchema` containing potential user matches.
 */
var findMatchingUsers = function (searchString) { return __awaiter(void 0, void 0, void 0, function () {
    var db, query;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, conn_1.getDb)()];
            case 1:
                db = _a.sent();
                query = { username: { $regex: searchString }, $options: "i" };
                return [4 /*yield*/, db.collection("users").find(query)];
            case 2: return [2 /*return*/, (_a.sent()).toArray()];
        }
    });
}); };
exports.findMatchingUsers = findMatchingUsers;