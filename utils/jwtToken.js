// Create and send token and save in the cookie.
const sendToken = (user, statusCode, res) => {
  console.log(user, "user");
  // Create Jwt token
  const token = user.getJwtToken();

  // Options for cookie
  // const options = {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true,
  // };

  const timeLimit = 31536000000; // one year
  const options = {
    expires: new Date(Date.now() + timeLimit),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};

module.exports = sendToken;
