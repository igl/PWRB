use Mix.Config

# For development, we disable any cache and enable
# debugging and code reloading.
#
# The watchers configuration can be used to run external
# watchers to your application. For example, we use it
# with Webpack to recompile .js and .css sources.
config :pwrb, Pwrb.Endpoint,
  http: [port: 4000],
  debug_errors: true,
  code_reloader: true,
  cache_static_lookup: false,
  check_origin: false,
  watchers: [
    {"node", ["node_modules/webpack/bin/webpack.js",
              "--config", "webpack.client.js",
              "--watch-stdin",
              "--progress",
              "--colors",
              "--devtool", "source-map"
    ]},
    {"node", ["node_modules/webpack/bin/webpack.js",
              "--config", "webpack.server.js",
              "--watch-stdin",
              "--progress",
              "--colors",
              "--devtool", "source-map"
    ]}
  ]

# Reload react server-bundle when updated
config :pwrb, Pwrb.ReactIo,
  watch_files: [
    Path.join([__DIR__, "../priv/assets/server/index.js"])
  ]

# Watch static and templates for browser reloading.
config :pwrb, Pwrb.Endpoint,
  live_reload: [
    patterns: [
      ~r{priv/assets/static/.*(js|css|png|jpeg|jpg|gif|svg|map)$},
      ~r{priv/gettext/.*(po)$},
      ~r{web/views/.*(ex)$},
      ~r{web/templates/.*(eex)$}
    ]
  ]

# Do not include metadata nor timestamps in development logs
config :logger, :console, format: "[$level] $message\n"

# Set a higher stacktrace during development.
# Do not configure such in production as keeping
# and calculating stacktraces is usually expensive.
config :phoenix, :stacktrace_depth, 20

# Configure your database
config :pwrb, Pwrb.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "pwrb_dev",
  hostname: "localhost",
  pool_size: 10
