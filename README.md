Setup:

```
rvm install ruby-2.6.2
gem install bundler
brew install v8@3.15
bundle config build.libv8 --with-system-v8
bundle config build.therubyracer --with-v8-dir=$(brew --prefix v8@3.15)
bundle
```

Run:

```
jekyll serve -w
```