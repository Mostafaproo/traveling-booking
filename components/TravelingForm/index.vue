<template>
  <div class="form-content">
    <div class="form-content__booking-search">
      <div class="form-content__booking-title">
        <h2>Search for travel agency Wherever Your Are</h2>
      </div>
      <div class="form-content__booking-form">
        <div class="form-content__pick-up">
          <div class="row">
            <div class="col-md-6">
              <label for="from">From:</label>
              <input
                id="from"
                v-model="formData.from"
                class="select-input-form"
                type="date"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="to">To:</label>
              <input
                id="to"
                v-model="formData.to"
                class="select-input-form"
                type="date"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="tripDate">Trip Date:</label>
              <input
                id="tripDate"
                v-model="formData.tripDate"
                class="select-input-form"
                type="date"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="ticketClass">Ticket Class:</label>
              <select
                id="ticketClass"
                v-model="formData.ticketClass"
                class="select-input-form"
                required
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="tripType">Trip Type:</label>
              <select
                id="tripType"
                v-model="formData.tripType"
                class="select-input-form"
                required
              >
                <option value="One-way">One-way</option>
                <option value="Round-trip">Round-trip</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="passengers">Passengers:</label>
              <input
                id="passengers"
                v-model="formData.passengers"
                type="number"
                class="select-input-form"
                required
              />
            </div>
          </div>
        </div>
        <div class="form-content__action text-center">
          <button type="submit" class="submit" @click="searchTravelingHandler">
            Search
          </button>
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
    searchTravelingHandler() {
      // Handle form submission
      console.log('Form submitted with data:', this.formData)
    },
  },
}
</script>

<style lang="scss">
/* -------------------------- main content ----------------------*/
.form-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #fff;
  z-index: 22;

  &__booking-search {
    background-color: rgba(20, 24, 28, 0.6);
    max-width: 900px;
    margin: auto;
  }
  &__booking-title {
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
    h2 {
      font-size: 18pt;
      text-transform: capitalize;

      @media (max-width: 768px) {
        font-size: 12pt;
        font-weight: bold;
      }
    }
  }
  &__booking-form {
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  &__pick-up {
    position: relative;
    margin-bottom: 15px;
    label {
      display: block;
    }
    .select-input-form {
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
      option {
        background-color: #14181c;
        margin-top: 5px;
        position: absolute;
        top: 15px;
        &:hover {
          background-color: #9f2064;
        }
      }
    }
    .from-control-icon {
      position: absolute;
      right: 0;
      color: rgba(255, 255, 255, 0.6);
      background-color: transparent;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
    input::-webkit-calendar-picker-indicator {
      color: rgba(255, 255, 255, 0.6) !important;
    }
  }

  &__action {
    padding: 20px;
    border-top: solid 1px rgba(255, 255, 255, 0.35);
    line-height: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .submit {
      padding: 3px 50px;
      font-size: 18pt;
      color: #fff;
      border: none;
      outline: none;
      background-color: #9f2064;
      border-radius: 3px;
      -webkit-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
      &:hover {
        background-color: #fff;
        color: #9f2064;
      }
    }

    @media (max-width: 768px) {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      padding: 0;
    }
  }
}
</style>
