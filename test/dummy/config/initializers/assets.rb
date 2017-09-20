require 'pathname'

# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '2.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )

Dir.glob("#{Rails.root}/app/assets/stylesheets/styles/**/*.scss").each do |path|
  fullpath = Pathname.new(path)
  relpath = fullpath.relative_path_from(Pathname.new("#{Rails.root}/app/assets/stylesheets/")).to_s.gsub(/.scss/, '')
  Rails.application.config.assets.precompile += [ relpath ]
end

Rails.application.config.assets.precompile += %w( themify-icons.css font-awesome.css ionicons.css icons-material-design.css bootstrap_docs.css preview.css flash/ZeroClipboard.swf)
