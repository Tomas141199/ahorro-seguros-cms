module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-24.railway.app"),
      port: env.int("DATABASE_PORT", 7236),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "xdMLIptpdwLemVF9V6nW"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
