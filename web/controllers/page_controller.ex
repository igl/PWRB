defmodule Pwrb.PageController do
  use Pwrb.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
