# frozen_string_literal: true

require_relative 'lib/newport/version'

Gem::Specification.new do |s|
  s.name = 'newport'
  s.version       = Newport::VERSION
  s.license       = 'MIT'
  s.authors       = ['Richard Fisher']
  s.email         = ['richard@fisher.cymru']
  s.homepage      = 'https://github.com/richard-fisher/newport'
  s.summary       = 'A simple static site blog generator.'
  s.description   = 'Newport is a simple static site blog generator.'

  all_files       = `git ls-files`.split($INPUT_RECORD_SEPARATOR)
  s.files         = all_files.grep(%r{^(exe|lib)/$})
  s.executables   = all_files.grep(%r{^exe/}) { |f| File.basename(f) }
  s.bindir        = 'exe'
  s.require_paths = ['lib']

  s.metadata      = {
    'source_code_uri' => 'https://github.com/richard-fisher/newport',
    'bug_tracker_uri' => 'https://github.com/richard-fisher/newport/issues',
    'changelog_uri' => 'https://github.com/richard-fisher/newport/releases',
    'homepage_uri' => s.homepage
  }

  s.rdoc_options     = ['--charset=UTF-8']
  s.extra_rdoc_files = %w[README.markdown LICENSE]

  s.required_ruby_version     = '>= 2.4.0'
  s.required_rubygems_version = '>= 2.7.0'

  s.add_runtime_dependency('colorator', '~> 1.0')
  s.add_runtime_dependency('kramdown',      '~> 2.3', '>= 2.3.1')
  s.add_runtime_dependency('mercenary',     '>= 0.3.6', '< 0.5')
  s.add_runtime_dependency('rss',           '~> 0.2', '>= 0.2.9')
end
