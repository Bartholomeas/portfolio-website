module.exports = ({env}) => {
  const isProduction = env('NODE_ENV') === 'production';
  console.log("ENV IS PROD", isProduction)
  return {
    connection: {
      client: isProduction ? "postgres" : 'sqlite',
      connection: isProduction ? {
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", ""),
        user: env("DATABASE_USERNAME", ""),
        password: env("DATABASE_PASSWORD", ""),
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
        },
      } : {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
      },
      // debug: true,
    }
  }
}


