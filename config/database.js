module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-131.railway.app"),
      port: env.int("DATABASE_PORT", 7465),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "UyzbOkrTPqqs8t5qFcIE"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
