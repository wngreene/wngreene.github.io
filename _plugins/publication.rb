# Taken from 
# https://github.com/spillai/csail-website-spillai/blob/master/_plugins/publication.rb

require 'yaml'

class Publication < Liquid::Block
  include Liquid::StandardFilters
  
  def initialize(tagName, markup, tokens)
    super
  end

  def remove_paragraph(text)
    remove(remove(text, '<p>'), '</p>')
  end

  def render(context)
    @yaml = YAML::load(super)

    site = context.registers[:site]
    md = site.find_converter_instance(Jekyll::Converters::Markdown)
    
    @imgsrc = @yaml.fetch('imgsrc','')
    @title = @yaml.fetch('title','')
    @authors = @yaml.fetch('authors','')
    @conf = @yaml.fetch('conf','')
    @links = @yaml.fetch('links','')

    @imgsrc = @imgsrc
    @icon = @icon
    @title = remove_paragraph(md.convert(@title)).gsub("\n","")
    @authors = remove_paragraph(md.convert(@authors)).gsub("\n","")
    @conf = remove_paragraph(md.convert(@conf)).gsub("\n","")
    @links = remove_paragraph(md.convert(@links)).gsub("\n","")
    
    if @title_type == 'project' then
      @title = "<h2>#{@title}</h2><br>"
    else
      @title = "<strong>#{@title}</strong><br>"
    end
    
    out = "<table width=\"100%\" border=\"0\" cellpadding=\"5\">", 
    "<tr><td align=\"center\" valign=\"center\" width=\"1\" height=\"1\">",
    "<img src=\"#{@imgsrc}\" style=\"float:left\" width=\"110px\"/></td>",
    "<td align=\"left\" valign=\"center\" height=\"1\">",
    "#{@title}",
    "#{@authors}<br>",
    "#{@conf}<br>",
    "#{@links}",
    "</td></tr>"
    
    return out.join("")
    
  end

  Liquid::Template.register_tag('publication', self)
end
