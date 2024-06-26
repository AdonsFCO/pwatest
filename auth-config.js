// auth-config.js
export const config = {
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: 'openid profile email',
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI || `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
  postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI || `${process.env.AUTH0_BASE_URL}/`,
  session: {
    cookieSecret: process.env.AUTH0_SECRET,
    cookieLifetime: 60 * 60 * 8, // 8 hours
    storeAccessToken: true,
  },
};
