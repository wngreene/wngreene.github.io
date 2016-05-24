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
    # p 'YAML: ', @yaml

    site = context.registers[:site]
    md = site.getConverterImpl(Jekyll::Converters::Markdown)
    
    @icon = @yaml.fetch('icon','')
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
      @title = "<p><strong>#{@title}</strong><br>"
    end
    
    # p 'TITLE:', @title 
    # p 'CONF: ', @conf
    # p 'LINKS', @links
    # p 'AUTHORS: ', @authors
    # p 'AUTHORS: ', @authors == "" ? "" : "test"

    out = "<div class=\"publication\">", "<div>", @icon == '' ? "<img alt=\"project-thumb\" src=\"#{@imgsrc}\" style=\"float:right\"/></div><div>" : "<i class=\"#{@icon}\" style=\"float:left\" width=\"110px\" ></i>" , @title == "" ? "" : "#{@title}", @authors == "" ? "" : "#{@authors}<br>", @conf == '' ? '' : "#{@conf}<br>", @links == '' ? '' : "#{@links}<br>" ,  "</p>" , "</div></div>"
    
    return out.join("")
    
  end

  Liquid::Template.register_tag('publication', self)
end
