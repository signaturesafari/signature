class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
  <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel="stylesheet" href="css/animate.css">

  <link rel="stylesheet" href="css/owl.carousel.min.css">
  <link rel="stylesheet" href="css/owl.theme.default.min.css">
  <link rel="stylesheet" href="css/magnific-popup.css">

  <link rel="stylesheet" href="css/bootstrap-datepicker.css">
  <link rel="stylesheet" href="css/jquery.timepicker.css">


  <link rel="stylesheet" href="css/flaticon.css">
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">

  <script src="https://kit.fontawesome.com/5fe73a6d63.js" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  

      <footer class="ftco-footer" style="
        background-image: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.459),
            rgba(5, 5, 5, 0.459)
          ),
          url(images/animalbg.jpg);
          backgound-position:center;
          background-size:cover;
          background-repeat: no-repeat;">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md pt-5">
              <div class="ftco-footer-widget pt-md-5 mb-4">
                <h2 class="ftco-heading-2 text-white">About</h2>
                <a class="navbar-brand bg-white mb-5 px-2 py-2" href="index.html">
                  <img src="images/signature-safari-official-logo.png" height="100px" width="150px" />
                </a>
                <p class="text-white">Signature Safari is a sustainable and locally-owned tour operator in Tanzania, offering a personalized and comprehensive service at an affordable value. With a focus solely on Tanzania destinations, customers can trust Signature Safari's expertise to provide a world-class safari experience tailored to their unique needs and interests.</p>
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
                <ul class="list-unstyled text-white">
                  <li><a href="best_kilimanjaro_trekking_group_join_with_signature_safari_2023_2024_2025.html" class="py-2 d-block text-white">Kilimanjaro Joining Group</a></li>
                  <li><a href="technical-clothing-for-mount-kilimanjaro-trek.html" class="py-2 d-block text-white">Technical Clothing for Mount Kilimanjaro</a></li>
                  <li><a href="tanzania-safari-packing-list.html" class="py-2 d-block text-white">Tanzania Safari Packing List</a></li>
                  <li><a href="technical-clothing-for-mount-kilimanjaro-trek.html" class="py-2 d-block text-white">Technical Clothing for Mt Kilimanjaro Clothing</a></li>
                  <li><a href="tanzania-safari-packing-list.html" class="py-2 d-block text-white">Tanzania Safari Packaging List</a></li>
                  <li><a href="sustainable-tourism-in-tanzania-with-signature-safari.html" class="py-2 d-block text-white">Sustainable Tourism in Tanzania</a></li>
                  <li><a href="mt-kilimanjaro-and-meru-with-sar.html" class="py-2 d-block text-white">Kilimanjaro Search, Rescue and Safety Service</a></li>
                  <li><a href="signature-safari-trustee-board.html" class="py-2 d-block text-white">Board of Trustees</a></li>
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
                  <div class="text-center mb-4">
                    <h2 class="fw-bold text-white">Subscribe to our Newsletter</h2>
                    <p class="text-white">Stay updated with our latest news and offers.</p>
                  </div>
                  <form>
                    <div class="mb-3">
                      <label for="name" class="form-label text-white">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Enter your name" required>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label text-white">Email address</label>
                      <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
                    </div>
                    <button type="submit" class="btn text-white w-100" style="background-color:#f15d30;">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-6 text-center">
              <h2 class="fw-bold text-white">We're happy to be trusted by</h2>
              <p class="text-white>The biggest African Safari Booking platform <span class="bolding text-primary"><a class="text-primary" href="#">www.safarigo.com</a></span></p>
            </div>
            <div class="col-md-6 col-sm-6 text-center">
              <h2 class="fw-bold text-white">We're happy to be trusted by</h2>
              <p class="text-white>The biggest African Safari Booking platform <span class="bolding text-primary"><a class="text-primary" href="#">www.safaribookings.com</a></span></p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <p class="text-white">&copy; 2024 Signature Safari, All Right Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
      
    `;
  }
}

customElements.define('footer-component', FooterComponent);
