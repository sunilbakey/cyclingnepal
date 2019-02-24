<?php $page='customize-trip';  include 'header.php'?>
<!-- /.Header -->
<div class="main">
  <a href="#" id="return-to-top" title="return to top"><i class="fas fa-angle-up"></i></a>
<section class="sub-header">
  <div class="container">
    <div class="col-lg-12">
      <div class="title text-center wow fadeInDown ">
        <h1>Customize Your Trip</h1>
      </div>
    </div>
  </div>
</section>
<!--./Sub Header-->
<section class="section-inner section-customize-trip">
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <p>Whether you want to modify a tour package on our website or have an itinerary built from scratch, the local travel consultants at Cycling Nepal can create your ideal trip. Customized tours offer a personalized experience. You decide where to visit, how long to spend and what type of accommodation suits you best.</p>
        <p>Let us know what we can do for you by completing the form below. Please provide as many details as possible.</p>
        <p>We do our best to respond to requests within two business days or less. </p>
        <form action="customize-trip_submit">
          
          <div class="row">
            <div class="col-lg-12">
              <h2>Personal Details</h2>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="full-name"><i class="fa fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Full Name" aria-label="Full Name"  aria-describedby="full-name">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="country"><i class="fas fa-globe-americas"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Country" aria-label="Country"  aria-describedby="country">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="email"><i class="fas fa-envelope"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Email Address" aria-label="email"  aria-describedby="email">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="phone_number"><i class="fas fa-phone"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone_Number"  aria-describedby="Phone_Number">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-lg-12">
              <h2>Trip Details</h2>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="holiday_duration"><i class="fas fa-calendar-alt"></i></span>
                </div>
                <input type="number" class="form-control" placeholder="Holiday Duration (days)" aria-label="holiday_duration"  aria-describedby="holiday_duration" min="1">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="total_people"><i class="fas fa-users"></i></span>
                </div>
                <input type="number" class="form-control" placeholder="Total Number of People" aria-label="total_people"  aria-describedby="total_people" min="1">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="arrival_date"><i class="fas fa-calendar-alt"></i></span>
                </div>
                <input type="text" class="form-control arrival_date" placeholder="Arrival Date" aria-label="arrival_date"  aria-describedby="arrival_date" min="1">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="departure_date"><i class="fas fa-calendar-alt"></i></span>
                </div>
                <input type="text" class="form-control departure_date" placeholder="Departure Date" aria-label="departure_date"  aria-describedby="departure_date" min="1">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="budget"><i class="far fa-money-bill-alt"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Your Budget" aria-label="budget"  aria-describedby="budget" min="1">
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="accommodation">Accomodation</label>
                </div>
                <select class="custom-select" id="accommodation">
                  <option selected>Preferred</option>
                  <option value="budget">Budget/Normal</option>
                  <option value="comfort">Comfort</option>
                  <option value="luxury">Luxury</option>
                  <option value="other">Other(Please Specify in Message)</option>
                </select>
              </div>
              <!-- ./col-md-6 col-sm-6 -->
            </div>

            <div class="col-lg-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-list-ul"></i></span>
                  </div>
                  <textarea class="form-control" aria-label="With textarea" placeholder="Interested Holiday Program"></textarea>
                </div>
            </div>
            

            <div class="col-lg-12">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-pencil-alt"></i></span>
                  </div>
                  <textarea class="form-control" rows="5" aria-label="other_requirement" placeholder="Any Other Request,We always try our best to accommodate any request."></textarea>
                </div>
            </div>
            <div class="col-lg-3">
                  <a href="#" class="btn" value="submit">Submit</a>
            </div>
            <!-- ./row -->
          </div>
        </form>
        
        <!-- ./col-lg-8 -->
      </div>
      <div class="col-lg-4">
        <?php include 'side-bar.php' ?>
      </div>
      <!-- ./rows -->
    </div>
    <!-- ./container -->
  </div>
</section>
</div>
<?php include 'footer.php'?>