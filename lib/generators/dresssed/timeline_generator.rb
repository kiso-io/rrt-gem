require "generators/dresssed/page_generator"

module Dresssed
  module Generators
    class TimelineGenerator < PageGenerator
      view_name "timeline"

      def set_layout
        inject_into_class "app/controllers/#{name.underscore}_controller.rb", "#{name.camelize}Controller".constantize, "  layout 'application'\n"
      end
    end
  end
end
