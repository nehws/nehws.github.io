# -*- encoding: utf-8 -*-
# stub: jekyll-theme-conference 3.6.1 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-theme-conference".freeze
  s.version = "3.6.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Lorenz Schmid".freeze]
  s.date = "2022-11-20"
  s.email = ["lorenzschmid@users.noreply.github.com".freeze]
  s.homepage = "https://github.com/DigitaleGesellschaft/jekyll-theme-conference/".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.2".freeze
  s.summary = "Jekyll template for a conference website containing program, speaker, talks and room overview.".freeze

  s.installed_by_version = "3.1.2" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, ["~> 4.0"])
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.2.32"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
  else
    s.add_dependency(%q<jekyll>.freeze, ["~> 4.0"])
    s.add_dependency(%q<bundler>.freeze, ["~> 2.2.32"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0"])
  end
end
