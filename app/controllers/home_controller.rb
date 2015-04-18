class HomeController < ApplicationController
	
	def home

	end

	def email
		puts "did an email"
		puts "name #{params[:name]}"
		UserMailer.correspondence(params[:name],
			                      params[:email],
			                      params[:subject],
			                      params[:message]).deliver
	end
end
