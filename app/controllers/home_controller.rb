class HomeController < ApplicationController
	
	def home

	end

	def email
		UserMailer.correspondence(params[:name],
			                      params[:email],
			                      params[:subject],
			                      params[:message]).deliver
		UserMailer.admin(params[:name],
			             params[:email],
			             params[:subject],
			             params[:message]).deliver
	end
end
