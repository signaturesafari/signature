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
     
     // Add the Google Analytics script dynamically
     const gtagScript = document.createElement('script');
     gtagScript.async = true;
     gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16835956925';
 
     const inlineScript = document.createElement('script');
     inlineScript.text = `
       window.dataLayer = window.dataLayer || [];
       function gtag() { dataLayer.push(arguments); }
       gtag('js', new Date());
       gtag('config', 'AW-16835956925');
     `;
 
     document.head.appendChild(gtagScript);
     document.head.appendChild(inlineScript);

     
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
                    <a href="/contact" class="nav-link ">info@signaturesafari.com</a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/" class="nav-link "><img src="/images/united-states.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/fr" class="nav-link "><img src="/images/france.png" style="width:25px; height:25px;"></a>
                  </li>
                  <li class="nav-item d-md-block d-none">
                  <a href="https://www.signaturesafari.com/it" class="nav-link "><img src="/images/italy.png" style="width:25px; height:25px;"></a>
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
                    <a href="/zh/about-us-signaturesafari" class="nav-link">关于</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/zh/blog" class="nav-link">博客</a>
                  </li>
                  <li class="nav-item d-none d-md-flex">
                    <a href="/zh/contact" class="nav-link">接触</a>
                  </li>
                </span>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="/zh/" class="nav-link">家</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/zh/about-us-signaturesafari" class="nav-link">关于</a>
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
                          坦桑尼亚游猎套餐
                          </h5>
                          <p class=" text-center"  style="color:white;">
                            <a href="/zh/7-days-flying-beach-to-bush">7天飞行海滩至布什</a>
                          </p>
                          <p class="text-center " style="color:white">
                            <a href="/zh/8-days-midrange-great-migration-safari">8天迁徙之旅
                            坦桑尼亚野生动物园</a>
                          </p>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/zh/tanzania-safari-packages">查看所有套餐</a>
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
                                肯尼亚游猎套餐
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/zh/5-days-masaimara-kenya-safari">5 日 马赛
                              马拉肯尼亚野生动物园</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/zh/8-days-magical-kenya-luxury-safari">8天奇幻肯尼亚之旅
                            豪华游猎</a>
                          </p>
                          <button type="button" class="btn btn-primary">
                            <a href="/zh/kenya-safari-packages">查看所有套餐</a>
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
                          乌干达游猎套餐
                          </h5>
                          <p class="text-center" style="color:white">
                            <a href="/zh/7-days-uganda-gorilla-and-chimpanzee-trekking-safari">7天乌干达大猩猩徒步之旅</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="/zh/3-days-signature-safari-queen-elizabeth-national-park">3 伊丽莎白女王国家公园</a>
                          </p>
                          <button type="button" class="btn btn-primary ">
                            <a href="/zh/uganda-safari-packages">查看所有套餐</a>
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
                            <a href="/zh/safari-packages">查看目的地</a>
                          </button>
                          <h5 class=" pt-3" style="color:white">游猎小贴士</h5>
                          <p class="text-center" style="color:white">
                            <a href="/zh/tanzania-safari-packing-list">坦桑尼亚狩猎旅行打包清单</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="">关于坦桑尼亚</a>
                          </p>
                          <p class="text-center" style="color:white">
                            <a href="">Safari 常见问题解答</a>
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
                                url('/images/kilibg.avif');
                              background-position: center;
                              background-repeat: no-repeat;
                              background-size: cover;
                            ">
                          <h5 class="text-center py-2 fw-bold">
                          乞力马扎罗山及路线
                          </h5>
                          <button type="button" class="btn btn-primary mb-2">
                            <a href="/zh/kilimanjaro-climbing-routes">查看所有路线</a>
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
                           乞力马扎罗山集团加入2025-2026
                          </h5>
                          <button type="button" class="btn btn-primary">
                            <a href="/zh/best-kilimanjaro-trekking-group-join-with-signature-safari">查看所有群组</a>
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
                          须弥山
                          </h5>
                          <button type="button" class="btn mb-2 btn-primary">
                            <a href="/zh/mount-meru-climbing">查看所有路线</a>
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
                          <h5 class=" pt-3" style="color:white;">乞力马扎罗山小贴士</h5>
                          <p class="text-center text-white">
                            <a href="/zh/technical-clothing-for-mount-kilimanjaro-trek">乞力马扎罗山徒步专业服装</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/zh/tip-for-kilimanjaro-climber-and-weather">乞力马扎罗山攀登技巧及天气</a>
                          </p>
                          <p class="text-center text-white">
                            <a href="/zh/mt-kilimanjaro-and-meru-with-sar">乞力马扎罗山搜救和安全服务</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                <a href="/zh/tanzania-cycling-tour" class="nav-link">骑自行车</a>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" role="button" aria-expanded="false">
                  坦桑尼亚
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/zh/tanzania-high-end-safari">高端游猎套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/tanzania-luxury-safaris">豪华游猎套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/tanzania-flying-safaris">飞行狩猎之旅
                    套餐</a></li>   
                    <li><a class="dropdown-item" href="/zh/honeymoon-safari">蜜月游猎
                    套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/family-safaris">家庭游猎套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/tanzania-midrange-safaris">中档Safari套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/tanzania-horse-riding">骑马游猎
                    套餐</a></li>
                    <li><a class="dropdown-item" href="/zh/tanzania-camping-safaris">露营探险
                    套餐</a></li>                    
                    <li><a class="dropdown-item" href="/zh/tanzania-day-trip-excursions">坦桑尼亚
                    一日游</a></li>
                    <li>
                       <a class="dropdown-item" href="/zh/tanzania-national-parks">坦桑尼亚国家公园</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a href="/zh/zanzibar-holiday-beaches" class="nav-link">桑给巴尔</a>
                </li>
                <li class="nav-item dropdown" @click="${this.toggleDropdown}">
                  <a class="nav-link dropdown-toggle" href="/zh/safari-packages" role="button" aria-expanded="false">
                  目的地
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="/zh/tanzania-safari-packages">坦桑尼亚</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/zh/kenya-safari-packages">肯尼亚</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/zh/uganda-safari-packages">乌干达</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/zh/rwanda-safari-packages">卢旺达</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/zh/botswana-safari-packages">博茨瓦纳</a></li>
                    <li>
                      <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="/zh/south-africa-safari-packages">南非</a>
                    </li>
                  </ul>
                </li>
               
                <li class="nav-item d-md-none d-block">
                  <a href="/zh/blog" class="nav-link ">Blog</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/zh/signature-safari-trustee-board" class="nav-link ">董事会</a>
                </li>
                <li class="nav-item d-md-none d-block">
                  <a href="/zh/contact" class="nav-link ">接触</a>
                </li>
              </ul>
            </div>
            <p class="">
              <a href="/zh/tailor-made-safari-and-kilimanjaro" class="btn btn-primary">提出请求</a>
            </p>
          </div>
        </div>
      </nav>
    `;
}
}

customElements.define('navbar-component', NavbarComponent);










