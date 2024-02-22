
const errorMiddlewarecheck = async (err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        status: false,
        message: "Something Went Wrong",
        error: err
    })
}

export default errorMiddlewarecheck;