require "digest"

module Jekyll
  module BustFileCache
    def bust_file_cache(url)
      site = @context.registers[:site]
      file_path = File.join(site.source, url.split("?").first)
      if File.exist?(file_path)
        hash = Digest::MD5.file(file_path).hexdigest[0, 8]
        "#{url}?v=#{hash}"
      else
        url
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::BustFileCache)