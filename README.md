# Newport
Newport is a simple Ruby script for building a single file blog/static site.

## Getting Started
- Install Ruby
- Install the bundler gem
- Clone or download this repository
- Run `bundle`
- Modify the layouts and add some posts
- Run `bundle exec ruby build.rb`

## Plugins
Plugins are available in the plugins directory and are pure javascript. Plugins are run after the page loads and can modify the contents.  

### Expander
For example the expander plugin will loop through your posts and show n number of paragraphs for each one and hide the rest, adding a down arrow to click to expand and show the full post.
