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
                      <h2 class="ftco-heading-2 text-white">À Propos</h2>
                      <a class="navbar-brand bg-white mb-5 px-2 py-2" href="https://www.signaturesafari.com/fr/">
                          <img src="/images/signature-safari-official-logo.avif" height="100px" width="150px" />
                      </a>
                      <p class="text-white">Signature Safari est un tour opérateur durable et local en Tanzanie, offrant un service personnalisé et complet à un prix abordable...</p>
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
                      <h2 class="ftco-heading-2 text-white">Liens Importants</h2>
                      <ul class="text-white">
                          <li><a href="https://www.signaturesafari.com/fr/best-kilimanjaro-trekking-group-join-with-signature-safari" class="py-2 d-block text-white">Groupe de Montée au Kilimandjaro</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/technical-clothing-for-mount-kilimanjaro-trek" class="py-2 d-block text-white">Vêtements Techniques pour le Mont Kilimandjaro</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/tanzania-safari-packing-list" class="py-2 d-block text-white">Liste d'Emballage pour Safari en Tanzanie</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/technical-clothing-for-mount-kilimanjaro-trek" class="py-2 d-block text-white">Vêtements Techniques pour le Mont Kilimandjaro</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/tanzania-safari-packing-list" class="py-2 d-block text-white">Liste d'Emballage pour Safari en Tanzanie</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/sustainable-tourism-in-tanzania-with-signature-safari" class="py-2 d-block text-white">Tourisme Durable en Tanzanie</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/mt-kilimanjaro-and-meru-with-sar" class="py-2 d-block text-white">Service de Recherche, de Secours et de Sécurité au Kilimandjaro</a></li>
                          <li><a href="https://www.signaturesafari.com/fr/signature-safari-trustee-board" class="py-2 d-block text-white">Conseil des Administrateurs</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-md pt-5 border-left">
                  <div class="ftco-footer-widget pt-md-5 mb-4">
                      <h2 class="ftco-heading-2 text-white">Restez en contact 24/7</h2>
                      <div class="block-23 mb-3">
                          <ul class="text-white">
                              <li><span class="icon fa fa-map-marker"></span><p class="text-white">Arusha, Tanzanie</p></li>
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
                  <h2 class="fw-bold text-white">Abonnez-vous à notre Newsletter</h2>
                  <p class="text-white">Restez informé de nos dernières nouvelles et offres.</p>
              </div>
              <div class="row align-items-center justify-content-center">
              <div class="col-6 ">
              <input type="text" class="form-control" placeholder="Prénom" aria-label="First name">
            </div>
            <div class="col-6">
              <input type="text" class="form-control" placeholder="nom de famille" aria-label="Last name">
            </div>
            <div class="col-12  d-flex align-items-center justify-content-center mt-4">
            <button class="btn text-white" style="background-color:#f15d30; max-width:100%;">S'abonner</button>
            </div>
              </div>
          </form>
          <div class="row mt-3">
              <div class="col-md-12 col-sm-6 text-center">
                  <h2 class="fw-bold text-white">Nous sommes heureux d'être recommandés par</h2>
                  <p class="text-white text-center">La plus grande plateforme de réservation de safaris en Afrique <span class="bolding text-primary"><a class="text-primary" href="https://www.safarigo.com/">www.safarigo.com</a></span><br>
                  <span class="bolding text-primary"><a class="text-primary" href="#">www.safaribookings.com</a></span></p>
              </div>
          </div>
          <div class="row mt-5">
              <div class="col-md-12 text-center">
                  <p class="text-white">&copy; 2024 Signature Safari, Tous droits réservés.</p>
              </div>
          </div>
      </div>
      </footer>
      
      <!-- Bannière de Consentement aux Cookies -->
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
          <p style="margin: 0; font-size: 14px; line-height: 1.5;">Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.</p>
          <button id="acceptCookies" style="
              background-color: #4CAF50;
              color: white;
              border: none;
              padding: 10px 20px;
              margin-left: 10px;
              font-size: 14px;
              cursor: pointer;
              border-radius: 5px;
              transition: background-color 0.3s;">D'accord</button>
          <a class="ps-4" href="/privacy-policy" style="color: #00bcd4; margin-left: 15px; font-size: 14px; text-decoration: none;">En savoir plus</a>
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

