ForecastIO.configure do |configuration|
  configuration.api_key = Rails.application.secrets.key_forecast
end