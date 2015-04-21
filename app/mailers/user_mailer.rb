class UserMailer < ActionMailer::Base
  def correspondence(name,email,subject,body)
  	mail(to: "#{email}", 
  		 subject: "#{name}, thanks for you interest in Caricatures by Chris!",
  		 from: "caricaturesbychris@gmail.com")
  end
  def admin(name,email,subject,body)
  	@user_name = name
  	@user_email = email
  	@user_subject = subject
  	@user_message = message
  	mail(to: "jaredables@gmail.com", 
  		 subject: "#{subject}",
  		 from: "charicaturesbychris@gmail.com")
  end
end
