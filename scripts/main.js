/* ========================================
   Portfolio Website — main.js
   ======================================== */

(function () {

    // ---------- DOM References ----------
    const navbar = document.getElementById('navbar');
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.getElementById('hamburger');
    const mainContent = document.getElementById('main-content');

    // ---------- Mobile Menu ----------
    let overlay = null;

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', closeMenu);
    }

    function openMenu() {
        navLinks.classList.add('active');
        hamburger.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function () {
        navLinks.classList.contains('active') ? closeMenu() : openMenu();
    });

    createOverlay();

    // ---------- Inject Section Templates ----------
    var sectionMap = {
        hero: window.SEThero,
        about: window.SETabout,
        experience: window.SETexperience,
        skills: window.SETskills,
        projects: window.SETprojects,
        education: window.SETeducation,
        blog: window.SETblog,
        contact: window.SETcontact
    };

    var sectionOrder = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'blog', 'contact'];

    sectionOrder.forEach(function (name) {
        var placeholder = mainContent.querySelector('[data-section="' + name + '"]');
        if (placeholder && sectionMap[name]) {
            placeholder.outerHTML = sectionMap[name];
        }
    });

    // ---------- Re-attach nav link listeners ----------
    (function () {
        var links = document.querySelectorAll('.nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                if (navLinks.classList.contains('active')) {
                    closeMenu();
                }
            });
        }
    })();

    // ---------- Navbar scroll & active link ----------
    (function () {
        var sections = document.querySelectorAll('section[id]');
        var links = document.querySelectorAll('.nav-link');

        function onScroll() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            var currentId = '';
            for (var i = 0; i < sections.length; i++) {
                var top = sections[i].offsetTop - 100;
                if (window.scrollY >= top && window.scrollY < top + sections[i].offsetHeight) {
                    currentId = sections[i].getAttribute('id');
                }
            }

            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove('active');
                if (links[j].getAttribute('href') === '#' + currentId) {
                    links[j].classList.add('active');
                }
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    })();

    // ---------- Reveal on scroll ----------
    (function () {
        var revealEls = document.querySelectorAll('.reveal');

        if (!('IntersectionObserver' in window)) {
            // Fallback: show all immediately
            for (var i = 0; i < revealEls.length; i++) {
                revealEls[i].classList.add('visible');
            }
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        });

        for (var k = 0; k < revealEls.length; k++) {
            observer.observe(revealEls[k]);
        }
    })();

    // ---------- Close mobile menu on Escape ----------
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            closeMenu();
        }
    });

})();
