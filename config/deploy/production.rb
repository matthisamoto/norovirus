set :application, "ups2"
set :repository,  "git@github.com:matthisamoto/norovirus.git"
set :port, 48375
set :default_environment, {
  'PATH' => "/home/matt/.rvm/rubies/ruby-1.9.2-p180/bin:/home/deploy/.rvm/gems/ruby-1.9.2-p180/bin:$PATH",
  'RUBY_VERSION' => 'ruby 1.9.2',
  'GEM_HOME'     => '/home/deploy/.rvm/gems/ruby-1.9.2-p180/',
  'GEM_PATH'     => '/home/deploy/.rvm/gems/ruby-1.9.2-p180/',
  'BUNDLE_PATH'  => '/home/deploy/.rvm/gems/ruby-1.9.2-p180/'
}

set :scm, :git
set :branch, 'master'
set :user, 'ups2'

set :use_sudo, false
set :deploy_to, "/home/deploy/sites/norovirus"
set :deploy_via, :copy
set :copy_remote_dir, "/home/deploy/sites/norovirus/tmp"
set :copy_exclude, [".git"]

role :web, '174.143.146.148'                          # Your HTTP server, Apache/etc
role :app, '174.143.146.148'                          # This may be the same as your `Web` server
role :db,  '174.143.146.148', :primary => true        # This is where Rails migrations will run