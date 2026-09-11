```javascript
/* =========================================
   ACBFSABAI WEBSITE SCRIPT
========================================= */


/* =========================================
   CURRENT YEAR
========================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

  menuBtn.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      menuBtn.textContent = "✕";
    } else {
      menuBtn.textContent = "☰";
    }

  });


  /* Close menu when clicking a link */

  document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuBtn.textContent = "☰";

    });

  });

}


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold:0.12
  }
);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================================
   PRODUCT CART
========================================= */

function addToCart(product, price) {

  const toast = document.getElementById("toast");

  const selectedProduct =
    document.getElementById("selectedProduct");

  const facebookMessage =
    document.getElementById("facebookMessage");


  /* Update selected product */

  if (selectedProduct) {

    selectedProduct.textContent =
      product + " — " + price;

  }


  /* Create Facebook message */

  const message =
    "Hello! I am interested in ordering the " +
    product +
    " (" +
    price +
    ").";


  const facebookURL =
    "https://www.facebook.com/ACBFSABAI";


  if (facebookMessage) {

    facebookMessage.href = facebookURL;

  }


  /* Toast */

  if (toast) {

    toast.textContent =
      product + " added to your inquiry";

    toast.classList.add("show");

    setTimeout(() => {

      toast.classList.remove("show");

    }, 2200);

  }


  /* Scroll to contact */

  setTimeout(() => {

    const contact =
      document.getElementById("contact");

    if (contact) {

      contact.scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

    }

  }, 300);

}


/* =========================================
   EVENT CARD HOVER
========================================= */

document.querySelectorAll(".event-card").forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transition =
      "transform .35s ease, box-shadow .35s ease";

  });

});


/* =========================================
   PARALLAX HERO
========================================= */

const heroBg =
  document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

  if (!heroBg) return;

  const scroll =
    window.scrollY;

  if (scroll < window.innerHeight) {

    heroBg.style.transform =
      `scale(1.08) translateY(${scroll * 0.12}px)`;

  }

});


/* =========================================
   STATS ANIMATION
========================================= */

const stats =
  document.querySelectorAll("[data-number]");

const statsObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const element =
          entry.target;

        const target =
          element.dataset.number;

        let current = 0;

        const interval =
          setInterval(() => {

            current++;

            element.textContent =
              current.toString().padStart(2, "0");

            if (current >= Number(target)) {

              clearInterval(interval);

            }

          }, 70);

        statsObserver.unobserve(element);

      });

    },
    {
      threshold:.7
    }
  );


stats.forEach(stat => {

  statsObserver.observe(stat);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
  document.querySelectorAll("main section[id]");

const navLinks =
  document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {

      current =
        section.getAttribute("id");

    }

  });


  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


/* =========================================
   PRODUCT IMAGE ERROR FALLBACK
========================================= */

document.querySelectorAll(".product-image img").forEach(img => {

  img.addEventListener("error", () => {

    img.style.display = "none";

    img.parentElement.style.background =
      "linear-gradient(135deg,#09252a,#42d6c3)";

  });

});


/* =========================================
   SMOOTH BUTTON FEEDBACK
========================================= */

document.querySelectorAll(".btn").forEach(button => {

  button.addEventListener("click", () => {

    button.style.transform =
      "scale(.97)";

    setTimeout(() => {

      button.style.transform = "";

    }, 150);

  });

});
