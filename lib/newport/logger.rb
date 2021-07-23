# frozen_string_literal: true

class Logger
  def abort_with(msg)
    error(msg)
    abort
  end
end
