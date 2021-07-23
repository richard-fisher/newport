# frozen_string_literal: true

module Newport
  class Help
    class << self
      def show
        Newport.logger.info "Newport #{Newport::VERSION}"
        Newport.logger.info 'usage: newport [command] [options]'
        Newport.logger.info 'commands: new, build, help'
      end
    end
  end
end
