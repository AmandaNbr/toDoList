FROM ruby:3.2.2

ENV BUNDLE_VERSION=2.4.10

WORKDIR /app

COPY . .

RUN gem update --system && \
    gem install bundler -v "$BUNDLE_VERSION" && \
    bundle install --jobs 20 --retry 5

EXPOSE 8080
ENTRYPOINT ["rails", "s", "-b", "0.0.0.0", "-p", "8080"]