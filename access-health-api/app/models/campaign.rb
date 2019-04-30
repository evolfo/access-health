class Campaign < ApplicationRecord
  before_save :set_end

  has_many :donations, dependent: :nullify
  belongs_to :user
  has_one_attached :photo

  def owner
    self.user.first_name + ' ' + self.user.last_name
  end

  def current_amount
   donations.map { |donation| donation.amount }.sum
  end

  def amount_left_to_fund
  	goal - current_amount
  end

  def percent_complete
  	((current_amount.to_f / goal.to_f) * 100).to_i
  end

  def set_end
    self.campaign_end = (DateTime.now + 30).noon
  end

  def ends
    self.campaign_end.to_formatted_s(:long_ordinal)
  end
end
