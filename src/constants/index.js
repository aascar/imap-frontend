/**
 * Created by Araja Jyothi Babu on 27-Oct-16.
 */

export const USER_GROUP_ENUM = {
    "INSTALL_USERS": "install_users",
    "INACTIVE_USERS": "inactive_users",
    "UNHAPPY_USERS": "unhappy_users",
    "UNINSTALL_USERS": "uninstall_users",
    "ACTIVE_USERS": "active_users",
    "HAPPY_USERS": "happy_users",
    "ALL_USERS": "all_users",
    "CUSTOM_GROUP_USERS": "custom_group_users"
};

/**
 * Need to move them form here to Overview Page
 * @type {string}
 */
export const ACTIVE_USERS = "active_users";
export const INACTIVE_USERS = "inactive_users";
export const INSTALL_USERS = "install_users";
export const UNINSTALL_USERS = "uninstall_users";
export const UNHAPPY_USERS = "unhappy_users";
export const HAPPY_USERS = "happy_users";
export const ALL_USERS = "all_users";
export const CUSTOM_GROUP_USERS = "custom_group_users";

/**
 *
 * @type {{USABILITY: string, STABILITY: string, PERFORMANCE: string}}
 */
export const USP_APIS = {
    USABILITY: "/SUP/usability",
    STABILITY: "/SUP/stability",
    PERFORMANCE: "/SUP/performance",
    FUNCTIONALITY: "/SUP/functionality"
};

/**
 *
 * @type {{ALL_SESSIONS: string, FATAL_SESSIONS: string, UNINSTALL_SESSIONS: string, FIRST_SESSIONS: string, LAST_SESSIONS: string}}
 */
export const SESSION_GROUP_ENUM = {
    ALL_SESSIONS: "all_sessions",
    FATAL_SESSIONS: "fatal_sessions",
    UNINSTALL_SESSIONS: "uninstall_sessions",
    FIRST_SESSIONS: "first_sessions",
    LAST_SESSIONS: "last_sessions"
};

export const ALL_SESSIONS = "all_sessions";
export const FATAL_SESSIONS = "fatal_sessions";
export const UNINSTALL_SESSIONS = "uninstall_sessions";
export const FIRST_SESSIONS = "first_sessions";
export const LAST_SESSIONS = "last_sessions";


/**
 *
 * @type {{ASC: number, DESC: number}}
 */
export const SortUtils = {
    ASC : +1,
    DESC: -1
};

/**
 *
 * @type {{acquisition_sources: Array, custom_keys: null, app_versions: Array, devices: Array, os_versions: Array, locations: Array, languages: Array}}
 */
export const USER_GROUP_FILTERS = {
    app_versions: [],
    devices: [],
    os_versions: [],
    locations: [],
    languages: [],
    acquisition_sources: [],
    custom_keys: null
};

export const APP_PLATFORMS = {
    ANDROID: "android",
    IOS: "ios"
};

export const CONDITIONAL_OPERATORS = {
    GT: "GT",
    GTE: "GTE",
    LT: "LT",
    LTE: "LTE",
    EQ: "EQ",
    NEQ: "NEQ"
};
