# frozen_string_literal: true

module Newport
  class Build
    class << self
      def process(args)
        show_help if args[1] == 'help'
        build_blog
      end

      private

      def show_help
        Newport.logger.info "Newport #{Newport::VERSION}"
        Newport.logger.info 'usage: newport build'
        abort
      end

      def build_blog
        html = content_from_layouts
        html = add_javascript html
        html = add_plugins html
        html = add_posts(html, build_posts)
        html = replcae_tags html
        write_html html
      end

      def config
        @config ||= YAML.load_file('config.yml')
      end

      def content_from_layouts
        head       = File.read('layouts/head.html')
        style      = File.read('layouts/style.css')
        head       = head.gsub('<!-- style -->', "<style>#{style}</style>")
        nav        = File.read('layouts/nav.html')
        main       = File.read('layouts/main.html')
        footer     = File.read('layouts/footer.html')
        main.gsub('<!-- head -->', head).gsub('<!-- nav -->', nav).gsub('<!-- footer -->', footer)
      end

      def add_javascript(html)
        jss = []
        Dir.glob('javascript/*.js') { |filename| jss << File.open(filename).read }
        html.gsub('<!-- javascript -->', "<script>#{jss.join}</script>")
      end

      def add_plugins(html)
        plugins = []
        config['plugins'].each do |p|
          plugin = File.open("plugins/#{p}.js").read
          plugins << plugin
        end
        html.gsub('<!-- plugins -->', "<script>#{plugins.join}</script>")
      end

      def build_posts
        files = []
        posts = []

        Dir.glob('posts/*.md') { |filename| files << filename.split('/').last }

        files.reverse.each do |filename|
          post = '<article>' + Kramdown::Document.new(File.open("posts/#{filename}").read).to_html + '</article>'
          posts << post
        end
        posts
      end

      def add_posts(html, posts)
        html.gsub('<!-- posts -->', posts.join)
      end

      def replcae_tags(html)
        html = html.gsub('<!-- email -->', config['email'])
        html.gsub('<!-- title -->', config['title'])
      end

      def write_html(html)
        FileUtils.mkdir_p 'production/images'
        File.open('production/index.html', 'w') do |f|
          f.write html
        end
      end
    end
  end
end
