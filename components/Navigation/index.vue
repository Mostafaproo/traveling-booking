<template>
  <div>
    <div class="wrapper">
      <nav class="navbar">
        <!-- <img class="logo" src="logo.png" /> -->
        <h1>logo</h1>
        <ul>
          <li><a class="active" href="#">Home</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </nav>
      <div class="content-slider">
        <p class="caption text-center pt-4 h3">All Discounts just For You</p>
        <h1 class="slider-title text-center">Find Best Rental Car</h1>
        <div class="rental-search">
          <div class="rental-title">
            <h2>Search for Cheap Rental Cars Wherever Your Are</h2>
            <i class="fa fa-globe"></i>
          </div>
          <div class="rental-form">
            <div class="pick-up">
                <div class="row">
               <div class="col-md-6">
                <label for="from">From:</label>
                <input id="from"  class="select-input-form" v-model="formData.from" type="date" required />
               </div>

              <div class="col-md-6">
                <label for="to">To:</label>
                <input id="to"  class="select-input-form" v-model="formData.to" type="date" required />

              </div>

              <div class="col-md-6">
                <label for="tripDate">Trip Date:</label>
                <input id="tripDate"  class="select-input-form" v-model="formData.tripDate" type="date" required />
              </div>
              <div class="col-md-6">
                <label for="ticketClass">Ticket Class:</label>
                <select id="ticketClass" class="select-input-form" v-model="formData.ticketClass" required>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First">First</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="tripType">Trip Type:</label>
                <select id="tripType" class="select-input-form" v-model="formData.tripType" required>
                  <option value="One-way">One-way</option>
                  <option value="Round-trip">Round-trip</option>
                </select>
              </div>
              <div class="col-md-6">

                <label for="passengers">Passengers:</label>
                <input type="number" class="select-input-form" id="passengers" v-model="formData.passengers" required>
              </div>
              </div>


            </div>
            <div class="advanced-option">
              <a href="#" aria-label="advanced option">Advanced Option</a>
              <button class="finde-car" @click="submitForm">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      formData: {
        from: '',
        to: '',
        tripDate: '',
        ticketClass: 'Economy',
        tripType: 'One-way',
        passengers: 1,
      },
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log('Form submitted with data:', this.formData)
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  background: url('@/assets/images/banner/bg.avif') no-repeat;
  background-size: cover;
  height: 100vh;
}
.navbar {
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
}
.navbar .logo {
  width: 140px;
  height: auto;
  padding: 20px 100px;
}
.navbar ul {
  float: right;
  margin-right: 20px;
}
.navbar ul li {
  list-style: none;
  margin: 0 8px;
  display: inline-block;
  line-height: 80px;
}
.navbar ul li a {
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  color: white;
  padding: 6px 13px;
  text-decoration: none;
  transition: 0.4s;
}
.navbar ul li a.active,
.navbar ul li a:hover {
  background: red;
  border-radius: 2px;
}
.wrapper .center {
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);
  font-family: sans-serif;
  user-select: none;
}
.center h1 {
  color: white;
  font-size: 70px;
  width: 900px;
  font-weight: bold;
  text-align: center;
}
.center h2 {
  color: white;
  font-size: 70px;
  font-weight: bold;
  margin-top: 10px;
  width: 885px;
  text-align: center;
}
.center .buttons {
  margin: 35px 280px;
}
.buttons button {
  height: 50px;
  width: 150px;
  font-size: 18px;
  font-weight: 600;
  color: #ffb3b3;
  background: red;
  outline: none;
  cursor: pointer;
  border: 1px solid #cc0000;
  border-radius: 25px;
  transition: 0.4s;
}
.buttons .btn2 {
  margin-left: 25px;
}
.buttons button:hover {
  background: #cc0000;
}

/* -------------------------- main content ----------------------*/
.content-slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
  color: #fff;
  z-index: 22;
}

.caption {
  font-size: 24px;
  font-weight: normal;
}

.slider-title {
  font-size: 72px;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 1;
}

@media (max-width: 768px) {
  .slider-title {
    font-size: 22pt;
  }
}
.rental-search {
  background-color: rgba(20, 24, 28, 0.6);
  max-width: 900px;
  margin: auto;
}
.rental-search .rental-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #14181c;
  color: #fff;
  padding: 5px 20px;
  position: relative;
}
.rental-search .rental-title h2 {
  font-size: 18pt;
  text-transform: capitalize;
}
@media (max-width: 768px) {
  .rental-search .rental-title h2 {
    font-size: 12pt;
    font-weight: bold;
  }
  .rental-search .rental-title i {
    font-size: 15pt !important;
  }
}
.rental-search .rental-title i {
  font-size: 22pt;
}
.rental-search .rental-form {
  padding: 20px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.rental-search .pick-up {
  position: relative;
  margin-bottom: 15px;
}
.rental-search .pick-up label {
  display: block;
}
.rental-search .pick-up .select-input-form {
  width: 100%;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  height: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 0 15px;
  border-radius: 3px;
}
.rental-search .pick-up .select-input-form option {
  background-color: #14181c;
  margin-top: 5px;
  position: absolute;
  top: 15px;
}
.rental-search .pick-up .select-input-form option:hover {
  background-color: #9f2064;
}
.rental-search .pick-up .from-control-icon {
  position: absolute;
  right: 0;
  color: rgba(255, 255, 255, 0.6);
  background-color: transparent;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.rental-search .pick-up input::-webkit-calendar-picker-indicator {
  color: rgba(255, 255, 255, 0.6) !important;
}
.rental-search .advanced-option {
  padding: 20px;
  border-top: solid 1px rgba(255, 255, 255, 0.35);
  line-height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.rental-search .advanced-option a {
  text-decoration: underline;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.rental-search .advanced-option a:hover {
  color: #9f2064;
}
.rental-search .advanced-option .finde-car {
  padding: 3px 50px;
  font-size: 18pt;
  color: #fff;
  border: none;
  outline: none;
  background-color: #9f2064;
  border-radius: 3px;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}
.rental-search .advanced-option .finde-car:hover {
  background-color: #fff;
  color: #9f2064;
}
@media (max-width: 768px) {
  .rental-search .advanced-option {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    padding: 0;
  }
}
</style>
