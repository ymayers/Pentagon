require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { age: @user.age, credit_card_id_id: @user.credit_card_id_id, email: @user.email, first_name: @user.first_name, id_imgURL: @user.id_imgURL, last_name: @user.last_name, mobile_phone: @user.mobile_phone, password_digest: @user.password_digest, profile_imgURL: @user.profile_imgURL } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { age: @user.age, credit_card_id_id: @user.credit_card_id_id, email: @user.email, first_name: @user.first_name, id_imgURL: @user.id_imgURL, last_name: @user.last_name, mobile_phone: @user.mobile_phone, password_digest: @user.password_digest, profile_imgURL: @user.profile_imgURL } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
