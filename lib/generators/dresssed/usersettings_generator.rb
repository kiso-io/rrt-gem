require "generators/dresssed/page_generator"

module Dresssed
  module Generators
    class UsersettingsGenerator < PageGenerator
      view_name "user_settings"

      def set_layout
        inject_into_class "app/controllers/#{name}_controller.rb", "#{name.titleize}Controller".constantize, "  layout 'application'\n"
      end
    end
  end
end
