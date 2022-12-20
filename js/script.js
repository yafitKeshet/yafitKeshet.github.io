///////////////////////////////////////////////////////////
// Sticky navigation
///////////////////////////////////////////////////////////
const mainSectionEl = document.querySelector(".main-page-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(mainSectionEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation
///////////////////////////////////////////////////////////
const allDomains = document.querySelectorAll("div.domain");

allDomains.forEach(function (domain) {
  domain.addEventListener("click", function (e) {
    const href = domain.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    if (href.startsWith("tel")) {
      window.open(href, "_self");
    }
  });
});

///////////////////////////////////////////////////////////
// sub-menu animation
///////////////////////////////////////////////////////////
const btnNavEl = document.querySelector(".domains");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const bodyEL = document.querySelector("main");
bodyEL.addEventListener("click", function (e) {
  headerEl.classList.remove("nav-open");
});

///////////////////////////////////////////////////////////
// submit-message animation
///////////////////////////////////////////////////////////
const allBtnsSubmit = document.querySelectorAll(".btn-submit");

allBtnsSubmit.forEach(function (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    alert("הודעתך נשלחה, \n  נטפל בה בקרוב");
  });
});
