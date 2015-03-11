require "generators/dresssed/page_generator"

module Dresssed
  module Generators
    class Landing2Generator < PageGenerator
      view_name "landing2"

      def set_layout
        inject_into_class "app/controllers/#{name}_controller.rb", "#{name.titleize}Controller".constantize, "  layout 'home'\n"
      end
    end
  end
end
