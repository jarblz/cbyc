class UserMailer < ActionMailer::Base
  def correspondence(name,email,subject,body)
  	mail(to: "jaredables@gmail.com", 
  		 subject: "#{name} would like to correspond about caricatures",
  		 from: "#{email}")
  end
end
