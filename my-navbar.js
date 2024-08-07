import { LitElement, html, css } from 'lit';
import 'lit-element-bootstrap';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

class MyNavbar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .navbar {
      background-color: #343a40;
    }
    .nav-link {
      color: white !important;
    }
  `;

  render() {
    return html`
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">Signature Safari</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about-us-signaturesafari.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Safari
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="tanzania-safari-packages.html">Tanzania</a></li>
                  <li><a class="dropdown-item" href="kenya-safari-packages.html">Kenya</a></li>
                  <li><a class="dropdown-item" href="uganda-safari-packages.html">Uganda</a></li>
                  <li><a class="dropdown-item" href="rwanda-safari-packages.html">Rwanda</a></li>
                  <li><a class="dropdown-item" href="botswana-safari-packages.html">Botswana</a></li>
                  <li><a class="dropdown-item" href="south-africa-safari-packages.html">South Africa</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="tanzania-cycling-tour.html">Cycling</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="zanzibar-holiday-beaches.html">Zanzibar</a></li>
            </ul>
            <span class="navbar-text d-none d-md-flex">
              <a href="contact.html" class="nav-link text-white">info@signaturesafari.com</a>
              <a href="contact.html" class="nav-link text-white">+255 755 880 881</a>
            </span>
            <div class="m-sm-0" id="google_translate_element"></div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('my-navbar', MyNavbar);





