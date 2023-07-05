export const LOGIN = "/auth/realms/{realm}/protocol/openid-connect/token";
export const LOGIN_SSO =
  "/auth/realms/{realm}/protocol/openid-connect/auth?client_id={clientId}&redirect_uri={redirectUrl}&response_type=code&scope=openid";
export const LOGOUT = "";
export const LOGOUT_SSO =
  "/auth/realms/{realm}/protocol/openid-connect/logout?id_token_hint={idTokenHint}&post_logout_redirect_uri={redirectUrl}";
export const USER_MANAGER = "/auth/realms/{realm}/account/#/security/signingin";
export const USER_INFO =
  "/auth/realms/{realm}/protocol/openid-connect/userinfo";
