defmodule Pwrb.ReactIo do
  use StdJsonIo, otp_app: :pwrb, script: "./node_modules/.bin/react-stdio"
end
