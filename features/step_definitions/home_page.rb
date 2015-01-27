When /^I go to the home page$/ do
	visit("/")
end

Then /^I should see (.+)$/ do |text|
	puts text
	puts page.has_content?(text)
	assert page.has_content?(text)
end