const errorResponseBody = {
    success: false,
    message: "Something went wrong, Not able to fetch the Movie ID",
    err: {},
    data: {},
}

const successResponseBody = {
    success: true,
    message: "Something processed the request.",
    err: {},
    data: {},
}

module.exports = {errorResponseBody, successResponseBody}