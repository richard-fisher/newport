# Newport
Newport is a simple Ruby script for building a single file blog/static site.

Example: [https://richard.fisher.cymru](https://richard.fisher.cymru)

## Getting Started
- `gem install newport`
- `newport new <path>`
- `cd <path>`
- `newport build`

## Plugins
Plugins are available in the plugins directory and are pure javascript. Plugins are run after the page loads and can modify the contents.  

### Expander
For example the expander plugin will loop through your posts and show n number of paragraphs for each one and hide the rest, adding a down arrow to click to expand and show the full post.

### Pagination
Set the variable show in pagination.js to the number of posts you want to display per page.  The plugin will automatically add an arrow to click to show more.

### Permalinks
Add a hash to the end of each post that links to the permanent location for that post.

### Dark Mode
Shows a light/dark toggle to toggle between light mode and dark mode.  It uses cookies to remember your selection.  There are some css variables that you can change for light/dark mode in style.css
