/* Templatemo Script JS */

(function() {
	'use strict';

	// Toggle navigation menu on mobile
	function setupMobileNav() {
		const toggler = document.querySelector('.navbar-toggler');
		const nav = document.getElementById('tm-nav');
		
		if (!toggler || !nav) return;

		toggler.addEventListener('click', function() {
			nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
		});

		// Close menu when a link is clicked
		const navLinks = nav.querySelectorAll('.tm-nav-link');
		navLinks.forEach(link => {
			link.addEventListener('click', function() {
				if (window.innerWidth <= 768) {
					nav.style.display = 'none';
				}
			});
		});
	}

	// Handle search form
	function setupSearch() {
		const searchForm = document.querySelector('.tm-search-form');
		if (!searchForm) return;

		searchForm.addEventListener('submit', function(e) {
			const query = searchForm.querySelector('.tm-search-input').value.trim();
			if (!query) {
				e.preventDefault();
				alert('Por favor, ingresa un término de búsqueda');
			}
		});
	}

	// Smooth scroll behavior for navigation
	function setupSmoothScroll() {
		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach(link => {
			link.addEventListener('click', function(e) {
				const href = this.getAttribute('href');
				if (href !== '#') {
					e.preventDefault();
					const target = document.querySelector(href);
					if (target) {
						target.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}
				}
			});
		});
	}

	// Add active class to current navigation item
	function setupActiveNav() {
		const currentUrl = window.location.pathname;
		const navItems = document.querySelectorAll('.tm-nav-item');
		
		navItems.forEach(item => {
			const link = item.querySelector('.tm-nav-link');
			if (link) {
				const href = link.getAttribute('href');
				if (currentUrl.includes(href) || 
					(currentUrl.endsWith('/') && href === 'index.html')) {
					item.classList.add('active');
				} else {
					item.classList.remove('active');
				}
			}
		});
	}

	// Responsive behavior for window resize
	function handleResize() {
		const nav = document.getElementById('tm-nav');
		if (!nav) return;

		if (window.innerWidth > 768) {
			nav.style.display = 'block';
		} else {
			nav.style.display = 'none';
		}
	}

	// Initialize all functions when DOM is ready
	function init() {
		setupMobileNav();
		setupSearch();
		setupSmoothScroll();
		setupActiveNav();
		window.addEventListener('resize', handleResize);
	}

	// Run on DOM ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
