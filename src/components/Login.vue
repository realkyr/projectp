<template>
  <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="user_card modal-dialog">
      <div class="d-flex justify-content-center">
        <div class="brand_logo_container">
          <img
            :src="require('@/assets/img/Shop/user-icon.png')"
            class="brand_logo"
            alt="Logo"
          />
        </div>
      </div>
      <div class="modal-content d-flex justify-content-center form_container">
        <h5 class="modal-title" id="title">Sign Up</h5>
        <form>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fas fa-user"></i>
              </span>
            </div>
            <input type="text" name class="form-control input_user" value placeholder="username" />
          </div>
          <div class="input-group mb-3">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="far fa-paper-plane"></i>
              </span>
            </div>
            <input type="text" name class="form-control input_user" value placeholder="E-mail" />
          </div>
          <div class="input-group mb-2">
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fas fa-key"></i>
              </span>
            </div>
            <input
              type="password"
              name
              class="form-control input_pass"
              value
              placeholder="password"
            />
          </div>
          <div class="d-flex justify-content-center mt-3 login_container">
            <button type="button" name="button" class="btn login_btn">Login</button>
          </div>

          <div class="form-group">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="customControlInline" />
              <label class="custom-control-label" for="customControlInline">Remember me</label>
            </div>
          </div>
        </form>
      </div>

      <div class="mt-4">
        <div class="d-flex justify-content-center links">
          Don't have an account?
          <a href="#" class="ml-2">Sign Up</a>
        </div>
        <div class="d-flex justify-content-center links">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/Fonts/font.css'
export default {}
</script>

<style scoped>
/* Coded with love by Mutiullah Samim */
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #60a3bc !important;
}

.modal.fade .modal-dialog {
  transform: translate(50%, -25%);
}

.modal.show .modal-dialog {
  transform: translate(50%,-50%);
}

#title {
  font-family: 'YoungSerif';
  color: #3994D1;
  text-align: center;
  margin-bottom: 20px;
}

.user_card {
  height: 450px;
  width: 400px;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
  top: 50%; right: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 18px;
}

.modal-content {
  border: 0;
  background: none;
}

@media screen and (max-width: 500px) {
  .user_card {
    right: 48%;
  }
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 90px;
}
.login_btn {
  width: 100%;
  background: #3994D1 !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}

.input-group-text {
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #3994D1 !important;
}
</style>
