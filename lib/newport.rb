# frozen_string_literal: true

$LOAD_PATH.unshift __dir__ # For use/testing when no gem is installed

def require_all(path)
  glob = File.join(__dir__, path, '*.rb')
  Dir[glob].each do |f|
    require f
  end
end

require 'rubygems'
require 'fileutils'
require 'time'
require 'logger'
require 'colorator'
require 'kramdown'
require 'rss'

module Newport
  autoload :VERSION, 'newport/version'
  autoload :Help,    'newport/help'
  autoload :New,     'newport/new'
  autoload :Build,   'newport/build'

  require 'newport/logger'

  class << self
    def logger
      @logger ||= Logger.new($stdout)
      @logger.formatter = proc { |_severity, _datetime, _progname, msg| "#{msg}\n" }
      @logger
    end
  end
end
