
const baseUrl = "/my-really-nice-project";

export const routes = {
  Home: `${baseUrl}/`,
  About: `${baseUrl}/about`,
  Contact: `${baseUrl}/contact`,
  VersionedHome: `${baseUrl}/home/:version`,
  Login: `${baseUrl}/login`,
  SignUp: `${baseUrl}/signup`
};
