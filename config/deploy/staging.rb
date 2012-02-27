set :application, "ups2"
set :repository,  "git@github.com:matthisamoto/ups2.git"
set :port, 48375
set :default_environment, {
  'PATH' => "/home/matt/.rvm/rubies/ruby-1.9.2-p180/bin:/home/ups2/.rvm/gems/ruby-1.9.2-p180/bin:$PATH",
  'RUBY_VERSION' => 'ruby 1.9.2',
  'GEM_HOME'     => '/home/ups2/.rvm/gems/ruby-1.9.2-p180/',
  'GEM_PATH'     => '/home/ups2/.rvm/gems/ruby-1.9.2-p180/',
  'BUNDLE_PATH'  => '/home/ups2/.rvm/gems/ruby-1.9.2-p180/'
}

set :scm, :git
set :branch, 'master'
set :user, 'ups2'

set :use_sudo, false
set :deploy_to, "/home/ups2/sites/ups2"
set :deploy_via, :copy
set :copy_remote_dir, "/home/ups2/sites/ups2/tmp"
set :copy_exclude, [".git"]

role :web, 'staging.ultimateproblemsolver.com'                          # Your HTTP server, Apache/etc
role :app, 'staging.ultimateproblemsolver.com'                          # This may be the same as your `Web` server
role :db,  'staging.ultimateproblemsolver.com', :primary => true        # This is where Rails migrations will run