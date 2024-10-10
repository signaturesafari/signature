class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="/css/owl.carousel.min.css">
      <link rel="stylesheet" href="/css/owl.theme.default.min.css">
      <link rel="stylesheet" href="/css/magnific-popup.css">
      <link rel="stylesheet" href="/css/bootstrap-datepicker.css">
      <link rel="stylesheet" href="/css/jquery.timepicker.css">
      <link rel="stylesheet" href="/css/flaticon.css">
      <link rel="stylesheet" href="/css/style.css">
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <script async src="https://kit.fontawesome.com/5fe73a6d63.js" crossorigin="anonymous"></script>
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      <style>
      .block-23 ul {
        padding: 0;
      }
      
      .block-23 ul li,
      .block-23 ul li>a {
        display: table;
        line-height: 1.5;
        margin-bottom: 15px;
      }
      
      .block-23 ul li span {
        color: rgba(0, 0, 0, 0.7);
      }
      
      .block-23 ul li .icon,
      .block-23 ul li .text {
        display: table-cell;
        vertical-align: top;
        color: rgba(0, 0, 0, 0.5) !important;
      }
      
      .block-23 ul li .icon {
        width: 40px;
        font-size: 18px;
        padding-top: 2px;
        color: #f15d30 !important;
      }
      .col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col,
.col-auto,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm,
.col-sm-auto,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md,
.col-md-auto,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg,
.col-lg-auto,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  min-width: 0;
  max-width: 100%;
}

.row-cols-1>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.row-cols-2>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.row-cols-3>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.row-cols-4>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.row-cols-5>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 20%;
  flex: 0 0 20%;
  max-width: 20%;
}

.row-cols-6>* {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.66667%;
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-auto {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

.col-1 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 8.33333%;
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.col-2 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.66667%;
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-3 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.33333%;
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col-5 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 41.66667%;
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}

.col-6 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 58.33333%;
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}

.col-8 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.66667%;
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.col-9 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 75%;
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 83.33333%;
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.col-11 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 91.66667%;
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.col-12 {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
}

.order-first {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1;
}

.order-last {
  -webkit-box-ordinal-group: 14;
  -ms-flex-order: 13;
  order: 13;
}

.order-0 {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
}

.order-1 {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
}

.order-2 {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
}

.order-3 {
  -webkit-box-ordinal-group: 4;
  -ms-flex-order: 3;
  order: 3;
}

.order-4 {
  -webkit-box-ordinal-group: 5;
  -ms-flex-order: 4;
  order: 4;
}

.order-5 {
  -webkit-box-ordinal-group: 6;
  -ms-flex-order: 5;
  order: 5;
}

.order-6 {
  -webkit-box-ordinal-group: 7;
  -ms-flex-order: 6;
  order: 6;
}

.order-7 {
  -webkit-box-ordinal-group: 8;
  -ms-flex-order: 7;
  order: 7;
}

.order-8 {
  -webkit-box-ordinal-group: 9;
  -ms-flex-order: 8;
  order: 8;
}

.order-9 {
  -webkit-box-ordinal-group: 10;
  -ms-flex-order: 9;
  order: 9;
}

.order-10 {
  -webkit-box-ordinal-group: 11;
  -ms-flex-order: 10;
  order: 10;
}

.order-11 {
  -webkit-box-ordinal-group: 12;
  -ms-flex-order: 11;
  order: 11;
}

.order-12 {
  -webkit-box-ordinal-group: 13;
  -ms-flex-order: 12;
  order: 12;
}

.offset-1 {
  margin-left: 8.33333%;
}

.offset-2 {
  margin-left: 16.66667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333%;
}

.offset-5 {
  margin-left: 41.66667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333%;
}

.offset-8 {
  margin-left: 66.66667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333%;
}

.offset-11 {
  margin-left: 91.66667%;
}
      </style>
      <footer class="ftco-footer" style="
        background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.459),
            rgba(5, 5, 5, 0.459)
          ),
          url(/images/animalbg.avif);
          backgound-position:center;
          background-size:cover;
          background-repeat: no-repeat;">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md pt-5">
              <div class="ftco-footer-widget pt-md-5 mb-4">
                <h2 class="ftco-heading-2 text-white">About</h2>
                <a class="navbar-brand bg-white mb-5 px-2 py-2" href="/">
                  <img src="/images/signature-safari-official-logo.avif" height="100px" width="150px" />
                </a>
                <p class="text-white">Signature Safari is a sustainable and locally-owned tour operator in Tanzania, offering a personalized and comprehensive service at an affordable value...</p>
                <ul class="ftco-footer-social list-unstyled float-md-left float-lft text-white">
                  <li><a href="https://www.linkedin.com/in/signature-safari-78184311b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9TO8MfqdQ%2ByGTR9dJT5DeQ%3D%3D" class="d-flex align-items-center justify-content-center" style="background-color: #0077B5;"><span class="icon fa fa-linkedin"></span></a></li>
                  <li><a href="https://www.youtube.com/@signaturesafari" class="d-flex align-items-center justify-content-center" style="background-color: red;"><span class="icon fa fa-youtube"></span></a></li>
                  <li><a href="https://www.facebook.com/signaturesafaritz" class="d-flex align-items-center justify-content-center" style="background-color: #1877F2;"><span class="icon fa fa-facebook"></span></a></li>
                  <li><a href="https://www.instagram.com/signature_safari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="d-flex align-items-center justify-content-center" style="background:linear-gradient( #f9ce34, #ee2a7b, #6228d7);"><span class="icon fa fa-instagram"></span></a></li>
                  <li><a href="https://x.com/signaturestz" class="d-flex align-items-center justify-content-center" style="background-color: #000000;"><span class="icon fa fa-twitter"></span></i></a></li>
                </ul>
              </div>
            </div>
            <div class="col-md pt-5 border-left">
              <div class="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                <h2 class="ftco-heading-2 text-white">Important Link</h2>
                <ul class=" text-white">
                  <li><a href="/it/best-kilimanjaro-trekking-group-join-with-signature-safari.html" class="py-2 d-block text-white">Kilimanjaro Joining Group</a></li>
                  <li><a href="/it/technical-clothing-for-mount-kilimanjaro-trek.html" class="py-2 d-block text-white">Technical Clothing for Mount Kilimanjaro</a></li>
                  <li><a href="/it/tanzania-safari-packing-list" class="py-2 d-block text-white.html">Tanzania Safari Packing List</a></li>
                  <li><a href="/it/technical-clothing-for-mount-kilimanjaro-trek.html" class="py-2 d-block text-white">Technical Clothing for Mt Kilimanjaro Clothing</a></li>
                  <li><a href="/it/tanzania-safari-packing-list.html" class="py-2 d-block text-white">Tanzania Safari Packaging List</a></li>
                  <li><a href="/it/sustainable-tourism-in-tanzania-with-signature-safari.html" class="py-2 d-block text-white">Sustainable Tourism in Tanzania</a></li>
                  <li><a href="/it/mt-kilimanjaro-and-meru-with-sar.html" class="py-2 d-block text-white">Kilimanjaro Search, Rescue and Safety Service</a></li>
                  <li><a href="/it/signature-safari-trustee-board.html" class="py-2 d-block text-white">Board of Trustees</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md pt-5 border-left">
              <div class="ftco-footer-widget pt-md-5 mb-4">
                <h2 class="ftco-heading-2 text-white">Stay in touch 24/7</h2>
                <div class="block-23 mb-3">
                  <ul class="text-white">
                    <li><span class="icon fa fa-map-marker"></span><p class="text-white">Arusha, Tanzania</p></li>
                    <li><a href="#"><span class="icon fa fa-whatsapp"></span><p class="text-white">+255 755 880 881</p></a></li>
                    <li><a href="#"><span class="icon fa fa-whatsapp"></span><p class="text-white">+255 783 880 881</p></a></li>
                    <li><a href="#"><span class="icon fa fa-paper-plane"></span><p class="text-white">info@signaturesafari.com</p></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div class="text-center mb-4 d-block">
              <h2 class="fw-bold text-white">Subscribe to our Newsletter</h2>
              <p class="text-white">Stay updated with our latest news and offers.</p>
            </div>
            <div class="row align-items-center">
              <div class="col">
                <input type="text" class="form-control" placeholder="First name" aria-label="First name">
              </div>
              <div class="col">
                <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
              </div>
              <div type="submit" class="btn text-white w-100 col-3" style="background-color:#f15d30;">Subscribe</div>
            </div>
          </form>
          <div class="row mt-3">
            <div class="col-md-12 col-sm-6 text-center">
              <h2 class="fw-bold text-white">We're happy to be trusted by</h2>
              <p class="text-white text-center">The biggest African Safari Booking platform <span class="bolding text-primary"><a class="text-primary" href="https://www.safarigo.com/">www.safarigo.com</a></span><br>
              <span class="bolding text-primary"><a class="text-primary" href="#">www.safaribookings.com</a></span></p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p class="text-white">&copy; 2024 Signature Safari, All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
      <!-- Cookie Consent Banner -->
      <div class="cookie-banner" id="cookie-banner" style="
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #323232;
        color: #ffffff;
        text-align: center;
        padding: 15px;
        font-family: Arial, sans-serif;
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.3);
        z-index: 1000;">
        <p style="margin: 0; font-size: 14px; line-height: 1.5;">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
        <button id="acceptCookies" style="
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          margin-left: 10px;
          font-size: 14px;
          cursor: pointer;
          border-radius: 5px;
          transition: background-color 0.3s;">Got it</button>
        <a class="ps-4" href="/privacy-policy" style="color: #00bcd4; margin-left: 15px; font-size: 14px; text-decoration: none;">Learn More</a>
      </div>

    
    `;
    // Add JavaScript functionality
    this.shadowRoot.getElementById('acceptCookies').addEventListener('click', () => {
      // Set a cookie to indicate that the user has accepted cookies
      document.cookie = "cookies_accepted=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT";

      // Hide the cookie banner
      this.shadowRoot.getElementById('cookie-banner').style.display = 'none';
    });

    // Check if the cookie is already set
    if (document.cookie.split(';').some((item) => item.trim().startsWith('cookies_accepted='))) {
      this.shadowRoot.getElementById('cookie-banner').style.display = 'none';
    }
  }
}

customElements.define("footer-component", FooterComponent);

