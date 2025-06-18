import { LitElement, html, css } from 'https://cdn.skypack.dev/pin/lit@v2.3.1-xx2m8Ol8q0zpWqDkqruF/mode=imports,min/optimized/lit.js';



class NavbarComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .top-bar {
      background-color: #f8f9fa;
      color: white;
      padding: 5px 0;
      font-size: 14px;
    }
    .top-bar a {
      color: white;
      margin-right: 15px;
      text-decoration: none;
    }
    .top-bar a:hover {
      text-decoration: underline;
    }
    .top-bar .social-icons {
      display: flex;
      justify-content: flex-end;
    }
    .navbar {
      background-color: black;
      padding: 0.5rem 1rem;
    }
    .box h5{
      color:white;
      width:200px;
      text-align:center;
    }
    .scrolled {
      background-color: rgba(255, 255, 255,1) !important;
      color: black !important;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
    .scrolled a{
     color:black;
    }  
    .scrolled .box a{
      color:white;
    } 
    .fixed-top {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1030;
    }
   
   
    .nav-link {
      
      color:white;
      margin-right: 20px;
      font-size: 16px;
    }
    .nav-link.active {
      color: #f15d30;
    }
    .nav-link:hover {
      color: #f15d30;
    }
    .navbar-toggler {
      border-color: rgba(0, 0, 0, 0.1);
    }
    
    .btn-primary {
      background-color: #ff6a2d;
      border: none;
      border-radius: 18px;
      padding: 10px 20px;
    }
    .btn-primary:hover {
      background-color: #e5551d;
      border-color: #e5551d;
    }
    .divider {
      margin: 0 10px;
      border-left: 1px solid #ccc;
      height: 15px;
    }
     .dropdown-menu {
      display: none;
      position: absolute;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.175);
      z-index: 1000;
    }
    .dropdown.show .dropdown-menu {
      display: block;
    }
    .dropdown:hover .dropdown-menu {
      display: block;
      margin-top: 0; /* Optional: Adjust this value to control spacing between the dropdown and the nav item */
    }
    .box{
     display:flex;
     flex-direction: column;
     justify-content: center;
     align-items: space-around;
    }
    .sticky {
      position: sticky;
      top: 15%;
      z-index: 1;
      /* Ensure it's above other content */
      background-color: white;
      /* Adjust as needed */
      padding: 10px 0;
      /* Adjust as needed */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      /* Optional: Add a shadow */
    }
    
    .sticky button {
      border: 1px solid #f15d30;
    }
    
    .sticky button:active {
      background-color: #f15d30;
    }

    .mega-menu1 {
      width: 900px;
      margin-left: -180px;
    }
    
    .mega-menu1 a:hover {
      text-decoration: underline;
      color: rgb(255, 255, 255);
    }
    
    /* Adjust width for mobile devices */
    @media (max-width: 767px) {
      .mega-menu1 {
        max-width: 400px;
        margin-left: 5px;
      }
    
      /* Style for navbar when screen width is less than or equal to 767px */
      .navbar-nav {
        max-height: 80vh;
        /* Adjust max-height as needed */
        overflow-y: auto;
        /* Enable vertical scrolling */
      }
    }
    
    @media (max-width: 991.98px) {
      .dropdown-menu {
        position: static;
        float: none;
        box-shadow: none;
      }
      .dropdown:hover .dropdown-menu {
        display: none; /* Disable hover behavior on mobile */
      }
      .dropdown.show .dropdown-menu {
        display: block;
      }
    }

    body {
      padding-top: 120px; /* Adjust this value based on your navbar's height */
    }
     

    .mega-menu1 {
  width: 900px;
  margin-left: -180px;
  z-index: 1000;
  background-color:white;
}
 

.mega-menu1 a:hover {
  text-decoration: underline;
  color: rgb(255, 255, 255);
}

/* Adjust width for mobile devices */
@media (max-width: 767px) {
  .mega-menu1 {
    max-width: 100%;
    
  }


  /* Style for navbar when screen width is less than or equal to 767px */
  .navbar-nav {
    max-height: 80vh;
    /* Adjust max-height as needed */
    overflow-y: auto;
    /* Enable vertical scrolling */
  }
}
 
}
  `;

  constructor() {
    super();
    // Add the Google Tag Manager script dynamically
    const gtmScript = document.createElement('script');
    gtmScript.textContent = `
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-WQTGVBG7'); // Replace 'GTM-WQTGVBG7' with your GTM ID
`;
    document.head.appendChild(gtmScript);
// Add GTM noscript fallback
const gtmNoscript = document.createElement('noscript');
gtmNoscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQTGVBG7"
            height="0" width="0" style="display:none;visibility:hidden;"></iframe>
`; // Replace 'GTM-WQTGVBG7' with your GTM ID
document.body.appendChild(gtmNoscript);

    this.isCollapsed = true;  // State to track the collapse state
  }

  firstUpdated() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    super.disconnectedCallback();
  }

  handleScroll() {
    const navbar = this.shadowRoot.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  toggleCollapse() {
    const collapseElement = this.shadowRoot.querySelector('#ftco-nav');
    this.isCollapsed = !this.isCollapsed;
    if (this.isCollapsed) {
      collapseElement.classList.remove('show');
    } else {
      collapseElement.classList.add('show');
    }
  }

  toggleDropdown(event) {
    const dropdown = event.currentTarget;
    dropdown.classList.toggle('show');
  }

  render() {
    return html`
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet" />
   <link rel="stylesheet" href="/css/bootstrap-datepicker.css" />
 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="/images/signature-safari-official-logo.avif" height="90px" width="150px" alt="signature-safari-official-logo"/>
          </a>
          <button class="navbar-toggler" style="color:#f15d30; " type="button" @click="${this.toggleCollapse}" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            MENU
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <div class="row px-4 d-flex flex-column justify-content-center">
              <ul class="navbar-nav px-3 justify-content-between border-bottom">
                <span class="d-md-flex">
                  <li class="nav-item d-none d-md-flex">
                    <a href="/it/contact.html" class="nav-link ">info@signaturesafari.com</a>
                  </li>
                  <li class="nav-item">
                  <a href="https://www.signaturesafari.com/" class="nav-link "><img src="images/united-states.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item">
                  <a href="https://www.signaturesafari.com/fr" class="nav-link "><img src="images/france.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item">
                  <a href="https://www.signaturesafari.com/it" class="nav-link "><img src="images/italy.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item dropdown my-3 d-md-none d-sm-block" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle btn-primary w-50" role="button" aria-expanded="false">
                    Languages
                  </a>
                  <ul class="dropdown-menu">
                  <li class="ps-4"> <a class="text-dark" href="https://www.signaturesafari.com/" class="nav-link "><img src="images/united-states.png" style="width:25px; height:25px;"> ENGLISH </a></li>
                    <li class="ps-4"> <a class="text-dark" href="https://www.signaturesafari.com/fr" class="nav-link "><img src="images/france.png" style="width:25px; height:25px;"> FRANCE </a></li>
                    <li class="ps-4"><a class="text-dark" href="https://www.signaturesafari.com/it" class="nav-link "><img src="images/italy.png" style="width:25px; height:25px;"> ITALY</a></li>   
                  </ul>
                </li>
                </span>
                <span class="d-flex">
                  <li class="nav-item d-none d-md-flex">
                    <a href="/it/about-us-signaturesafari.html" class="nav-link">Informazioni</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/it/blog.html" class="nav-link">Blog</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/it/contact.html" class="nav-link">Contatto</a>
                  </li>
                </span>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="/it/" class="nav-link">Casa</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/it/about-us-signaturesafari.html" class="nav-link">Informazioni</a>
                </li>
                <li class="nav-item dropdown mega-menu" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Safari</a>
                  <div class="dropdown-menu  mega-menu1" style="backgrond-color:white;" aria-labelledby="megaMenuDropdown">
                    <div class="container w-100">
                      <div class="row bg-warning w-100 d-flex justify-content-between align-items-center">
                        <div
                          class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box"
                          style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/kilinp.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                            ">
                          <h5 class="text-center py-2 fw-bold"> 
                            Pacchetti Safari in Tanzania
                          </h5>
                          <p class=" text-center"  style="color:white;">
                            <a href="/it/7-days-flying-beach-to-bush.html">7 giorni di volo in spiaggia a
                              Bush</a>
                          </p>
                          <p class="text-center " style="color:white">
                            <a href="/it/8-days-midrange-great-migration-safari.html">Migrazione di 8 giorni
                              Safari in Tanzania</a>
                          </p>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/it/tanzania-safari-packages.html">Visualizza tutti i pacchetti</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/magical-kenya.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class="text-center  py-2 fw-bold">
                            Pacchetti Safari in Kenya
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/it/5-days-masaimara-kenya-safari.html">5 giorni Masai
                              Mara Kenia Safari</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/it/8-days-magical-kenya-luxury-safari.html">8 giorni nel magico Kenya
                              Safari di lusso</a>
                          </p>
                          <button type="button" class="btn btn-primary">
                            <a href="/it/kenya-safari-packages.html">Visualizza tutti i pacchetti</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/uganda-destination.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class="text-center fw-bold py-2" style="color:white">
                            Pacchetti Safari in Uganda
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/it/7-days-uganda-gorilla-and-chimpanzee-trekking-safari.html">7
                              Giorni di safari con trekking tra gorilla in Uganda</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/it/3-days-signature-safari-queen-elizabeth-national-park.html">3
                              Giorni Parco Nazionale Queen Elizabeth</a>
                          </p>
                          <button type="button" class="btn btn-primary ">
                            <a href="/it/uganda-safari-packages.html">Visualizza tutti i pacchetti</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/mud.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <button type="button" class="btn btn-primary" >
                            <a href="/it/safari-packages.html">Visualizza destinazioni</a>
                          </button>
                          <h5 class=" pt-3" style="color:white">CONSIGLI PER IL SAFARI</h5>
                          <p class="text-center" style="color:white">
                            <a href="/it/tanzania-safari-packing-list.html">Imballaggio per il safari in Tanzania
                              Elenco</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="">Informazioni sulla Tanzania</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="">Domande frequenti su Safari</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown mega-menu" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Arrampicata</a>
                  <div class="dropdown-menu bg-white mega-menu1" aria-labelledby="megaMenuDropdown">
                    <div class="container w-100">
                      <div class="row bg-warning w-100 d-flex justify-content-between align-items-center">
                        <div
                          class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box"
                          style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/kilibg.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                            ">
                          <h5 class="text-center py-2 fw-bold">
                           Montagna Kilimanjaro e percorsi
                          </h5>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/it/kilimanjaro-climbing-routes.html">Visualizza tutti i percorsi</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/mount-kenya1.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                           <h5 class="text-center py-2 fw-bold" style="color:white">
                            Adesione al Gruppo del Kilimangiaro nel periodo 2025-2026
                          </h5>
                          <button type="button" class="btn btn-primary">
                            <a href="/it/best-kilimanjaro-trekking-group-join-with-signature-safari.html">Visualizzazione
                              tutti i gruppi</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box"
                          style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/mount-meru-peak.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class=" text-center pt-3" style="color:white;">
                            Montagna Meru
                          </h5>
                          <button type="button" class="btn mb-2 btn-primary">
                            <a href="/it/mount-meru-climbing.html">Visualizzazione
                              tutti i percorsi</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('/images/paper-bg.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class=" pt-3" style="color:white;">CONSIGLI PER IL KILIMANGIARO</h5>
                          <p class="text-center text-white">
                            <a href="/it/technical-clothing-for-mount-kilimanjaro-trek.html">Tecnico
                              Abbigliamento per il Trekking sul Kilimanjaro</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/it/tip-for-kilimanjaro-climber-and-weather.html">Suggerimenti per
                              Arrampicata e meteo sul Kilimangiaro</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/it/mt-kilimanjaro-and-meru-with-sar.html">Ricerca sul Kilimangiaro,
                              Servizio di salvataggio e sicurezza</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-expanded="false">
                    Tanzania
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/it/tanzania-high-end-safari.html">High End Safari
                       Packages</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-luxury-safaris.html">Safari di lusso
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-flying-safaris.html">Safari volante
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/honeymoon-safari.html">Safari in luna di miele
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/family-safaris.html">Safari in famiglia
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-midrange-safaris.html">Safari di fascia media
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-horse-riding.html">Safari a cavallo
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-camping-safaris.html">Safari in campeggio
                       Pacchetti</a></li>
                    <li><a class="dropdown-item" href="/it/tanzania-day-trip-excursions.html">Tanzania
                        Gite giornaliere</a></li>
                    <li>
                       <a class="dropdown-item" href="/it/tanzania-national-parks.html">Parchi nazionali della Tanzania</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="/it/zanzibar-holiday-beaches.html" class="nav-link">Zanzibar</a>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" href="/it/safari-packages.html" role="button" aria-expanded="false">
                    Destinazioni
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/it/tanzania-safari-packages.html">Tanzania</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/it/kenya-safari-packages.html">Kenia</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/it/uganda-safari-packages.html">Uganda</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/it/rwanda-safari-packages.html">Rwanda</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/it/botswana-safari-packages.html">Botswana</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/it/south-africa-safari-packages.html">South Africa</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="/it/tanzania-cycling-tour.html" class="nav-link">Ciclismo</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/it/blog.html" class="nav-link ">Blog</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/it/signature-safari-trustee-board.html" class="nav-link ">Consiglio di
                    Amministratori</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/it/contact.html" class="nav-link ">Contatto</a>
                </li>
              </ul>
            </div>
            <p class="">
              <a href="/it/tailor-made-safari-and-kilimanjaro.html" class="btn btn-primary">Fai una richiesta</a>
            </p>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);










