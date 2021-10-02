class SayHello
  def self.from_class
    "Hello, from class method"
  end

  def instance
    "Hello, instance method"
  end
end
class Za
  class << self
    def stuff
      puts "zabb…"
    end
  end
end
