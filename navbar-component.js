class NavbarComponent extends HTMLElement {
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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

      <script src="https://kit.fontawesome.com/5fe73a6d63.js" crossorigin="anonymous"></script>

      <nav class="navbar navbar-expand-lg navbar-light ftco_navbar ftco-navbar-light bg-warning bg-opacity-50" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="images/signature-safari-official-logo.png" height="90px" width="150px" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="oi oi-menu"></span> Menu
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <div class="row px-4 d-flex flex-column justify-content-center">
              <ul class="navbar-nav px-3 justify-content-between border-bottom">
                <span class="d-md-flex">
                  <li class="nav-item d-none d-md-flex">
                    <a href="contact.html" class="nav-link text-white">info@signaturesafari.com</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="contact.html" class="nav-link text-white">+255 755 880 881</a>
                  </li>
                  <li class="nav-item">
                    <div class="m-sm-0" id="google_translate_element"></div>
                  </li>
                </span>
                <span class="d-flex">
                  <li class="nav-item d-none d-md-flex">
                    <a href="about-us-signaturesafari.html" class="nav-link text-white">About</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="blog.html" class="nav-link text-white">Blog</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="contact.html" class="nav-link text-white">Contact</a>
                  </li>
                </span>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="index.html" class="nav-link">Home</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="about-us-signaturesafari.html" class="nav-link">About</a>
                </li>
                <li class="nav-item dropdown mega-menu">
                  <a href="safari-packages.html" class="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Safari</a>
                  <div class="dropdown-menu bg-white mega-menu1" aria-labelledby="megaMenuDropdown">
                    <div class="container w-100">
                      <div class="row bg-warning w-100 d-flex justify-content-between align-items-center">
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center w-100 py-3" style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/kilinp.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                        ">
                          <h5 class="text-center text-white py-2 fw-bold">
                            Tanzania Safari Packages
                          </h5>
                          <p class="text-white text-center">
                            <a href="7-days-flying-beach-to-bush.html">7 Days Flying Beach to Bush</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="8-days-midrange-great-migration-safari.html">8 Days Midrange Great Migration Safari in Tanzania</a>
                          </p>
                          <button type="button" class="btn btn-outline-white mb-2 rounded-pill">
                            <a href="tanzania-safari-packages.html">View all Packages</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center" style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/magical-kenya.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
                          <h5 class="text-center text-white py-2 fw-bold">
                            Kenya Safari Packages
                          </h5>
                          <p class="text-white text-center">
                            <a href="">5 Days Masai Mara Great Migration Safari</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="8-days-magical-kenya-luxury-safari.html">8 Days Magical Kenya Luxury Safari</a>
                          </p>
                          <button type="button" class="btn btn-outline-white mb-2 rounded-pill">
                            <a href="kenya-safari-packages.html">View all Packages</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center" style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/uganda-destination.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
                          <h5 class="text-center text-white py-2">
                            Uganda Safari Packages
                          </h5>
                          <p class="text-center text-white">
                            <a href="7-days-uganda-gorilla-and-chimpanzee-trekking-safari.html">7 Days Uganda Gorilla and Chimpanzee Trekking Safari</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="3-days-signature-safari-to-queen-elizabeth-national-park.html">3 Days Signature Safari to Queen Elizabeth National Park</a>
                          </p>
                          <button type="button" class="btn btn-outline-white mb-2 rounded-pill">
                            <a href="uganda-safari-packages.html">View all Packages</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center" style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/mud.avif');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
                          <button type="button" class="btn btn-outline-white mb-2 rounded-pill">
                            <a href="safari-packages.html">View all Destinations</a>
                          </button>
                          <h5 class="text-white pt-3">SAFARI TIPS</h5>
                          <p class="text-center text-white">
                            <a href="safari-tips.html">What to pack for a Safari in Africa</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="safari-tips.html">Essential Tips to Plan Your African Safari</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a href="luxury-lodge-safari.html" class="nav-link">Luxury Lodge Safari</a>
                </li>
                <li class="nav-item">
                  <a href="honeymoon-safari.html" class="nav-link">Honeymoon Safari</a>
                </li>
                <li class="nav-item">
                  <a href="blog.html" class="nav-link">Blog</a>
                </li>
                <li class="nav-item">
                  <a href="contact.html" class="nav-link">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Load Bootstrap JavaScript within the Shadow DOM
    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    script.onload = () => {
      // Initialize Bootstrap features
      const bootstrap = window.bootstrap;
      new bootstrap.Collapse(this.shadowRoot.querySelector('.collapse'), {
        toggle: false
      });
    };
    this.shadowRoot.appendChild(script);
  }
}

customElements.define('navbar-component', NavbarComponent);



