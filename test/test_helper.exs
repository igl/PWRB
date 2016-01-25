ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Pwrb.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Pwrb.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Pwrb.Repo)

