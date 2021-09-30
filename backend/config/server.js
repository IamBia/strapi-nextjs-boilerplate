module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '90a1cfd5e4f82d5fe36cb0ac1d3ddb7c'),
    },
  },
});
