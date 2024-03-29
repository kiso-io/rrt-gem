require_relative "helpers"

## Test cases
## ----------

task :erb do
  create_app
  install_theme
  generate_views
  start_server

  curl "/"
  curl "/pricing"
  curl "/contacts"
  curl "/contacts/new"
  curl "/assets/rrt.css"
  curl "/assets/rrt.js"
end

task :customize => :erb do
  sh 'bin/rails generate rrt:customize -f'
  rm 'app/assets/stylesheets/rrt.css'
  sh 'bundle install'
  restart_server

  curl "/assets/rrt.css"
end

task :haml do
  create_app
  add_gem 'haml-rails'
  install_theme
  generate_views

  abort "Not using HAML views when haml-rails is installed" unless File.file?("app/views/layouts/_base.html.haml") && File.file?("app/views/contacts/new.html.haml")

  start_server

  curl "/"
  curl "/pricing"
  curl "/contacts"
  curl "/contacts/new"
end

task :without_default_files do
  create_app
  # Remove default files
  rm 'app/helpers/application_helper.rb'
  rm 'app/assets/javascripts/application.js'
  rm 'app/assets/stylesheets/application.css'
  install_theme
  generate_views
  start_server

  curl "/assets/rrt.css"
  curl "/assets/rrt.js"

  # With application.js.coffee
  sh 'bin/rails destroy rrt:install -f'
  sh "touch app/assets/javascripts/application.js.coffee"
  sh 'bin/rails generate rrt:install -f'

  curl "/assets/rrt.js"
end

task :default => [:erb, :customize, :haml, :without_default_files]
