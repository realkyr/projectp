<template>
  <div>
    <div class="row" id="third">
      <div class="d-flex align-items-center justify-content-center col-12 col-md-6">
        <div class="arrow left"> { </div>
        <img :src="require('@/assets/img/About/mochipeach.jpg')" width="40%">
        <div class="arrow right"> } </div>
      </div>
      <div class="col-12 col-md-6">
        <h4>Fruity Bloom Notepad</h4>
        <p>notebook size A5<br>
          120 paper
        </p>

        <div class="striped-selector"></div>

        <h3>120 ฿</h3>
        <button>SHOP</button>
      </div>
    </div>

    <div class="text-center">
      <div class="row d-flex align-items-center">
          <div class="col-1 d-flex align-items-center justify-content-center">
            <a href="#carouselExampleIndicators" role="button" data-slide="prev">
              <div class="carousel-nav-icon">
                Prev
              </div>
            </a>
          </div>
          <div class="album col-10">
            <!--Start carousel-->
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div class="row">
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div class="row">
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                        <div class="col-3"><img :src="require('@/assets/img/About/mochipeach.jpg')"></div>
                      </div>
                  </div>
                </div>
            </div>
            <!--End carousel-->
          </div>
          <div class="col-1 d-flex align-items-center justify-content-center">
            <a href="#carouselExampleIndicators" data-slide="next">
              <div class="carousel-nav-icon">
                  Next
              </div>
            </a>
          </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.album {
  background-color: #D3DDE2;
}

.carousel-item img {
  width: 90%;
  padding: 20px 0;
}

h1, h2, h3,
h4, h5, h6 {
  color: #3994D1;
  font-family: 'YoungSerif';
}

p {
  font-family: 'myriad-pro', sans-serif;
  color: #5AB0E0;
  font-size: 1.5em;
}

.arrow {
  display: inline-block;
  padding: 20px;
}

#third {
  margin: 15% 0 200px 0;
}
</style>
