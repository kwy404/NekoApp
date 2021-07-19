require "spec_helper"

RSpec.describe Api::V1::UsersController do

  describe "POST #create" do

    context 'when the user are created' do
      it 'returns status 200' do
        post :create, params: { username: "steve jobs", email: "staging1@nekoapp.com.br", encrypted_password: '123456' }

        expect(response).to have_http_status(:ok)
      end
    end
  end
end
