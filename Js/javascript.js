 // Navbar scroll effect
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Form submission
      document
        .getElementById("contactForm")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Get form data
          const formData = new FormData(this);
          const name = this.querySelector(
            'input[placeholder="Your Name"]'
          ).value;
          const email = this.querySelector(
            'input[placeholder="Your Email"]'
          ).value;
          const phone = this.querySelector(
            'input[placeholder="Phone Number"]'
          ).value;
          const room = this.querySelector("select").value;
          const message = this.querySelector("textarea").value;

          // Simple validation
          if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
          }

          // Simulate form submission
          alert("Thank you for your message! We will get back to you soon.");
          this.reset();
        });

      // Animate elements on scroll
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      }, observerOptions);

      // Observe all sections
      document.querySelectorAll(".section").forEach((section) => {
        observer.observe(section);
      });

      // Observe room cards
      document.querySelectorAll(".room-card").forEach((card) => {
        observer.observe(card);
      });

      // Observe testimonial cards
      document.querySelectorAll(".testimonial-card").forEach((card) => {
        observer.observe(card);
      });

      // Gallery item hover effects
      document.querySelectorAll(".gallery-item").forEach((item) => {
        item.addEventListener("mouseenter", function () {
          this.style.transform = "scale(1.05)";
        });

        item.addEventListener("mouseleave", function () {
          this.style.transform = "scale(1)";
        });
      });

      // Room card booking buttons
      document.querySelectorAll(".room-card .btn").forEach((button) => {
        button.addEventListener("click", function (e) {
          e.preventDefault();
          const roomType =
            this.closest(".room-card").querySelector("h4").textContent;
          const price =
            this.closest(".room-card").querySelector(".room-price").textContent;

          alert(
            `You selected: ${roomType} at ${price}. Please fill out the contact form below to complete your booking.`
          );

          // Scroll to contact form
          document.querySelector("#contact").scrollIntoView({
            behavior: "smooth",
          });

          // Pre-select room type in contact form
          const roomSelect = document.querySelector("select");
          const roomValue = roomType.toLowerCase().includes("deluxe")
            ? "deluxe"
            : roomType.toLowerCase().includes("executive")
            ? "executive"
            : "presidential";
          roomSelect.value = roomValue;
        });
      });

      // Add loading animation
      window.addEventListener("load", function () {
        document.body.classList.add("loaded");
      });

      // Navbar mobile menu auto-close
      document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
        link.addEventListener("click", function () {
          const navbarToggler = document.querySelector(".navbar-toggler");
          const navbarCollapse = document.querySelector(".navbar-collapse");

          if (navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
          }
        });
      });

      // Add parallax effect to hero section
      window.addEventListener("scroll", function () {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector(".hero");
        const rate = scrolled * -0.5;

        if (hero) {
          hero.style.transform = `translateY(${rate}px)`;
        }
      });

      // Counter animation for statistics (if needed)
      function animateCounter(element, start, end, duration) {
        let startTime = null;

        function animate(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);

          element.textContent = Math.floor(progress * (end - start) + start);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }

        requestAnimationFrame(animate);
      }

      // Initialize AOS-like animations
      function initScrollAnimations() {
        const elements = document.querySelectorAll("[data-animate]");

        elements.forEach((element) => {
          const animationType = element.getAttribute("data-animate");
          observer.observe(element);
        });
      }

      // Call initialization functions
      document.addEventListener("DOMContentLoaded", function () {
        initScrollAnimations();
      });
