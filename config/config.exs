# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

config :pwrb,
  static_files: Path.join([__DIR__, "../priv/assets/static"])

# Configures the endpoint
config :pwrb, Pwrb.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "8KjUEdwSxmL/4Cu5lOrP0xMMrxCIguCt5eeyGuqhU04k9a3uVRQgFDtaDRhhSfCZ",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: Pwrb.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

# Disable goon-missing warning
config :porcelain,
  goon_warn_if_missing: false

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
