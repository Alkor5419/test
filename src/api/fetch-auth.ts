type TUser = {
  login: string;
  password: string;
};

export const fetchAuth = async (user: TUser) => {
  const url = `/api/user`;

  const requestOptions = {
    method: "GET",
  };
  try {
    const response = await fetch(url, requestOptions);
    if (
      response.status === 200 &&
      user.login === "steve.jobs@example.com" &&
      user.password === "password"
    ) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
