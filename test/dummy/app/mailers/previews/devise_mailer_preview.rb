require "devise_invitable"

class DeviseMailerPreview < ActionMailer::Preview

  def confirmation_instructions
    Devise::Mailer.confirmation_instructions(User.first, "faketoken")
  end

  def reset_password_instructions
    Devise::Mailer.reset_password_instructions(User.first, "faketoken")
  end

  def invitation_instructions
    Devise::Mailer.invitation_instructions(User.first, "faketoken")
  end

  def unlock_instructions
    Devise::Mailer.unlock_instructions(User.first, "faketoken")
  end

end
