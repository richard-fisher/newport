# frozen_string_literal: true

module Newport
  class New
    class << self
      def process(args)
        Newport.logger.abort_with 'fatal: please specify path.'.red unless args[1]
        show_help if args[1] == 'help'
        create_blog args[1]
      end

      private

      def show_help
        Newport.logger.info "Newport #{Newport::VERSION}"
        Newport.logger.info 'usage: newport new [path]'
        abort
      end

      def create_blog(path)
        blog_path = File.expand_path(path, Dir.pwd)
        FileUtils.mkdir_p blog_path
        FileUtils.cp_r "#{template}/.", path
        FileUtils.chmod_R 'u+w', path
        File.open(File.expand_path('Gemfile', path), 'w') do |f|
          f.write(gemfile_contents)
        end
        after_install path
      end

      def template
        File.expand_path('../site_template', __dir__)
      end

      def gemfile_contents
        <<~RUBY
          source "https://rubygems.org"

          gem "newport", "~> #{Newport::VERSION}"

          # Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
          # and associated library.
          platforms :mingw, :x64_mingw, :mswin, :jruby do
            gem "tzinfo", "~> 1.2"
            gem "tzinfo-data"
          end
        RUBY
      end

      def after_install(path)
        begin
          require 'bundler'
          bundle_install path
        rescue LoadError
          Newport.logger.info 'Could not load Bundler. Bundle install skipped.'
        end

        Newport.logger.info "New Newport site installed in #{path.cyan}."
      end

      def bundle_install(path)
        Newport.logger.info "Running bundle install in #{path.cyan}..."
        Dir.chdir(path) do
          system('bundle')
        end
      end
    end
  end
end
