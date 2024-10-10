function courseAPI() {
    //console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == "development") {
        return "/v1/courses"
    } else {
        return `${process.env.VUE_APP_BACKAPP}/v1/courses`
    }
}
function usersAPI() {
    if (process.env.NODE_ENV == "development") {
        return "/v1/users"
    } else {
        return `${process.env.VUE_APP_BACKAPP}/v1/users`
    }
}
export { courseAPI, usersAPI }