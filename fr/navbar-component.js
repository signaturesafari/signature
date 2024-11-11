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

   
  firstUpdated() {
    // Load the Google Translate script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(script);

    // Initialize the Google Translate widget
    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,es,fr,de,zh-CN,it,ru' },
        'google_translate_element_global'
      );
    };
  }
  constructor() {
    super();
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
   <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
 
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
      <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="ftco-navbar">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img src="images/signature-safari-official-logo.avif" height="90px" width="150px" alt="signature-safari-official-logo"/>
          </a>
          <button class="navbar-toggler" style="color:#f15d30; " type="button" @click="${this.toggleCollapse}" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            MENU
          </button>
          <div class="collapse navbar-collapse" id="ftco-nav">
            <div class="row px-4 d-flex flex-column justify-content-center">
              <ul class="navbar-nav px-3 justify-content-between border-bottom">
                <span class="d-md-flex">
                  <li class="nav-item d-none d-md-flex">
                    <a href="/contact" class="nav-link ">info@signaturesafari.com</a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/" class="nav-link "><img src="/images/united-states.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/fr" class="nav-link "><img src="/images/france.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/it" class="nav-link "><img src="/images/italy.png" style="width:25px; height:325x;"></a>
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
                    <a href="/about-us-signaturesafari" class="nav-link">À propos</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/blog" class="nav-link">Blogue</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/contact" class="nav-link">Contact</a>
                  </li>
                </span>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="/" class="nav-link">Maison</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/about-us-signaturesafari" class="nav-link">À propos</a>
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
                                url('images/kilinp.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                            ">
                          <h5 class="text-center py-2 fw-bold"> 
                          Forfaits safari en Tanzanie
                          </h5>
                          <p class=" text-center"  style="color:white;">
                            <a href="/7-days-flying-beach-to-bush">7 jours de plage volante à
                            Buisson</a>
                          </p>
                          <p class="text-center " style="color:white">
                            <a href="/8-days-midrange-great-migration-safari">Migration de 8 jours
                            Safari en Tanzanie</a>
                          </p>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/tanzania-safari-packages">Voir tous les forfaits</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
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
                          <h5 class="text-center  py-2 fw-bold">
                            Kenya Safari Packages
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/5-days-masaimara-kenya-safari">5 jours Masaï
                            Safari à Mara au Kenya</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/8-days-magical-kenya-luxury-safari">8 jours au Kenya magique
                            Safari de luxe</a>
                          </p>
                          <button type="button" class="btn btn-primary">
                            <a href="/kenya-safari-packages">Voir tous les forfaits</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
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
                          <h5 class="text-center fw-bold py-2" style="color:white">
                             Forfaits safari en Ouganda
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/7-days-uganda-gorilla-and-chimpanzee-trekking-safari">7
                            Jours de safari de randonnée dans les gorilles en Ouganda</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/3-days-signature-safari-queen-elizabeth-national-park">3
                            Jours Parc national Queen Elizabeth</a>
                          </p>
                          <button type="button" class="btn btn-primary ">
                            <a href="/uganda-safari-packages">Voir tous les forfaits</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
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
                          <button type="button" class="btn btn-primary" >
                            <a href="/safari-packages">Voir les destinations</a>
                          </button>
                          <h5 class=" pt-3" style="color:white">CONSEILS POUR LES SAFARI</h5>
                          <p class="text-center" style="color:white">
                            <a href="/tanzania-safari-packing-list">Emballage Safari en Tanzanie
                            Liste</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/about-us-signaturesafari">À propos de la Tanzanie</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="">FAQ Safari</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown mega-menu" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-haspopup="true" aria-expanded="false">Climbing</a>
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
                                url('images/kilibg.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                            ">
                          <h5 class="text-center py-2 fw-bold">
                            Montagne Kilimandjaro et itinéraires
                          </h5>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/kilimanjaro-climbing-routes">Afficher tous les itinéraires</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('images/mount-kenya1.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                           <h5 class="text-center py-2 fw-bold" style="color:white">
                             Adhésion du groupe Kilimandjaro en 2024-2025
                          </h5>
                          <button type="button" class="btn btn-primary">
                            <a href="/best-kilimanjaro-trekking-group-join-with-signature-safari">Voir
                            tous les groupes</a>
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
                                url('images/mount-meru-peak.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class=" text-center pt-3" style="color:white;">
                           Montagne Méru
                          </h5>
                          <button type="button" class="btn mb-2 btn-primary">
                            <a href="/mount-meru-climbing">Voir
                            tous les itinéraires</a>
                          </button>
                        </div>
                        <div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-3 box" style="
                              height: 350px;
                              background-image: linear-gradient(
                                  45deg,
                                  rgba(15, 15, 15, 0.612),
                                  rgba(15, 15, 15, 0.612)
                                ),
                                url('images/paper-bg.jpg');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                              overflow: hidden;
                            ">
                          <h5 class=" pt-3" style="color:white;">CONSEILS SUR LE KILIMANDJARO</h5>
                          <p class="text-center text-white">
                            <a href="/technical-clothing-for-mount-kilimanjaro-trek">Technique
                            Vêtements pour le trekking au mont Kilimandjaro</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/tip-for-kilimanjaro-climber-and-weather">Conseils pour
                            Escalade du Kilimandjaro et météo</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/mt-kilimanjaro-and-meru-with-sar">Recherche sur le Kilimandjaro,
                            Service de Sauvetage et de Sécurité</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-expanded="false">
                  Tanzanie
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/tanzania-high-end-safari">Safari haut de gamme
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/tanzania-luxury-safaris">Safari de luxe
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/tanzania-flying-safaris">Safari volant
                    Forfaits</a></li>   
                    <li><a class="dropdown-item" href="/honeymoon-safari">Safari Lune de Miel
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/family-safaris">Safari en famille
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/tanzania-midrange-safaris">Safari de milieu de gamme
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/tanzania-horse-riding">Safari à cheval
                    Forfaits</a></li>
                    <li><a class="dropdown-item" href="/tanzania-camping-safaris">Safari en camping
                    Forfaits</a></li>                    
                    <li><a class="dropdown-item" href="/tanzania-day-trip-excursions">Tanzanie
                    Excursions</a></li>
                    <li>
                       <a class="dropdown-item" href="/tanzania-national-parks">Parcs nationaux de Tanzanie</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="/zanzibar-holiday-beaches" class="nav-link">Zanzibar</a>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" href="/safari-packages" role="button" aria-expanded="false">
                    Destinations
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/tanzania-safari-packages">Tanzanie</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/kenya-safari-packages">Kenya</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/uganda-safari-packages">Ouganda</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/rwanda-safari-packages">Rwanda</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/botswana-safari-packages">Botswana</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/south-africa-safari-packages">Afrique du Sud</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="/tanzania-cycling-tour" class="nav-link">Vélo</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/blog" class="nav-link ">Blogue</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/signature-safari-trustee-board" class="nav-link ">Conseil de
                  Administrateurs</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/contact" class="nav-link ">Contact</a>
                </li>
              </ul>
            </div>
            <p class="">
              <a href="/tailor-made-safari-and-kilimanjaro" class="btn btn-primary">Faire une demande</a>
            </p>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);










