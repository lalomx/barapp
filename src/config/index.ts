const config = {
  db: {
    uri: 'postgres://bardb:bardb_pass@127.0.0.1:5432/bardb'
  },
  prod: {
    uri: 'postgres://bardb:bardb_pass@database:5432/bardb'
  },
  passport: {
    jwtSecret: "b@Rs3rV1s3S",
    jwtSession: {
        session: false
    }
  }
}

export default config;