defmodule Pwrb.AppController do
  use Pwrb.Web, :controller

  def index(conn, params) do
    props = %{}
    message = Map.get(params, "message")
    if message, do: props = Map.put(props, :message, message)
    result = Pwrb.ReactIo.json_call!(%{ component: "./priv/assets/server/index.js", props: props })
    render conn, "index.html", html: result["html"], props: props
  end
end
