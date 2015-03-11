require "generators/dresssed/page_generator"

module Dresssed
  module Generators
    class Landing3Generator < PageGenerator
      view_name "landing3"

      def set_layout
        inject_into_class "app/controllers/#{name}_controller.rb", "#{name.titleize}Controller".constantize, "  layout '_minimal'\n"
      end
    end
  end
end
