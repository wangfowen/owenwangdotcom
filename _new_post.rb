require 'date'
TEMPLATE_FILE = '_template.md'

name = ARGV.shift
date = Date::strptime(ARGV.shift || Time.new.to_s, "%Y-%m-%d")

if (name.nil?)
  puts "need to pass in name as an argument"
  exit
end

def generate_new_post(name, date)
  content = File.read(TEMPLATE_FILE)
  content = content.gsub("TITLE", "\"#{name}\"").gsub("DATE", date.strftime("%Y-%m-%d %H:%M:%S"))

  filename = "_posts/#{date.strftime("%Y-%m-%d")}-#{name.downcase.gsub(" ", "-").gsub("?", "")}.md"
  File.write(filename, content)
end

generate_new_post(name, date)
