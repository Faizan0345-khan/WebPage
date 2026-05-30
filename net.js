// Image sets for each Flutter app
    const appImages = {
        medlectures: [
            "https://placehold.co/300x600/3b82f6/white?text=MedLectures+-+Home",
            "https://placehold.co/300x600/3b82f6/white?text=MedLectures+-+Lecture",
            "https://placehold.co/300x600/3b82f6/white?text=MedLectures+-+Categories",
            "https://placehold.co/300x600/3b82f6/white?text=MedLectures+-+Profile"
        ],
        pinchme: [
            "https://placehold.co/300x600/f97316/white?text=PinchMe+-+Tasks",
            "https://placehold.co/300x600/f97316/white?text=PinchMe+-+Add+Task",
            "https://placehold.co/300x600/f97316/white?text=PinchMe+-+Reminders",
            "https://placehold.co/300x600/f97316/white?text=PinchMe+-+Analytics"
        ]
    };

    const projectsData = {
        medlectures: {
            title: "MedLecturesWalah", icon: "🎓",
            tech: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Realtime"],
            description: "Medical education platform like Udemy for healthcare students.",
            fullDescription: "This app helps medical students access high-quality video lectures anytime, anywhere. Features include: user authentication, lecture categorization, progress tracking, bookmarks, and real-time sync across devices.",
            isFlutter: true, images: appImages.medlectures
        },
        pinchme: {
            title: "PinchMe", icon: "⏰",
            tech: ["Flutter", "Dart", "Supabase", "Riverpod", "Notifications"],
            description: "Smart daily task manager that 'pinches' you with reminders.",
            fullDescription: "PinchMe is a productivity app that helps users stay on top of their daily tasks. Features include: task creation with priorities, recurring reminders, push notifications, progress analytics, and real-time sync.",
            isFlutter: true, images: appImages.pinchme
        },
        supabase: {
            title: "Supabase + PostgreSQL Expertise", icon: "🗄️",
            tech: ["PostgreSQL", "Supabase", "RLS", "Realtime", "Edge Functions"],
            description: "Implemented realtime subscriptions, row level security, relational schemas.",
            fullDescription: "Deep expertise in Supabase and PostgreSQL including: designing normalized database schemas, implementing Row Level Security (RLS) policies, setting up realtime subscriptions.",
            isFlutter: false
        },
        netflix: {
            title: "Netflix Clone", icon: "🎬",
            tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
            description: "Pixel-perfect Netflix-inspired UI with responsive layouts.",
            fullDescription: "A complete frontend replica of Netflix's landing page featuring responsive design, smooth animations using GSAP, dynamic row layouts.",
            github: "https://github.com/Faizan0345-khan/netflix-clone",
            live: "https://faizan0345-khan.github.io/netflix-clone/", isWeb: true
        },
        titch: {
            title: "Titch Button", icon: "🛒",
            tech: ["React", "CSS Modules", "FontAwesome"],
            description: "Modern ecommerce frontend with animated product cards.",
            fullDescription: "An interactive e-commerce frontend built with React. Features include: product cards with animations, shopping cart simulation.",
            github: "https://github.com/Faizan0345-khan/titch-button",
            live: "https://faizan0345-khan.github.io/Titch-World-v1/", isWeb: true
        },
        gamesaga: {
            title: "Game Saga", icon: "🎮",
            tech: ["HTML5", "CSS3", "GSAP"],
            description: "Gaming portal interface featuring immersive hero banners.",
            fullDescription: "A stunning gaming portal website with immersive hero section, game card gallery, smooth scroll animations.",
            github: "https://github.com/Faizan0345-khan/game-saga",
            live: "https://faizan0345-khan.github.io/Game-Saga-Website-Template/", isWeb: true
        },
        shopiflyz: {
            title: "Shopiflyz", icon: "🛍️",
            tech: ["TailwindCSS", "React", "LocalStorage"],
            description: "Ecommerce frontend with filtering, localstorage cart system.",
            fullDescription: "A complete e-commerce frontend with product filtering and sorting, cart system using LocalStorage, wishlist functionality.",
            github: "https://github.com/Faizan0345-khan/shopiflyz",
            live: "https://faizan0345-khan.github.io/Shopiflyz-faizan/", isWeb: true
        }
    };

    let currentCarouselIndex = 0;
    let currentCarouselImages = [];

    function createImageCarousel(images) {
        currentCarouselImages = images;
        currentCarouselIndex = 0;
        return `
            <div class="image-carousel">
                <div class="carousel-container">
                    <button class="carousel-btn prev" onclick="changeImage(-1)"><i class="fas fa-chevron-left"></i></button>
                    <img class="carousel-image" id="carouselImage" src="${images[0]}">
                    <button class="carousel-btn next" onclick="changeImage(1)"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="carousel-dots">${images.map((_, idx) => `<div class="carousel-dot ${idx === 0 ? 'active' : ''}" onclick="goToImage(${idx})"></div>`).join('')}</div>
                <div class="carousel-caption"><i class="fas fa-mobile-alt"></i> ${images.length} screens</div>
            </div>
        `;
    }

    window.changeImage = function(direction) {
        if (!currentCarouselImages.length) return;
        currentCarouselIndex = (currentCarouselIndex + direction + currentCarouselImages.length) % currentCarouselImages.length;
        const img = document.getElementById('carouselImage');
        if (img) img.src = currentCarouselImages[currentCarouselIndex];
        document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            idx === currentCarouselIndex ? dot.classList.add('active') : dot.classList.remove('active');
        });
    }
    window.goToImage = function(index) {
        currentCarouselIndex = index;
        const img = document.getElementById('carouselImage');
        if (img) img.src = currentCarouselImages[currentCarouselIndex];
        document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            idx === currentCarouselIndex ? dot.classList.add('active') : dot.classList.remove('active');
        });
    }

    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    const closeModal = document.querySelector('.modal-close');

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;
        if (project.isFlutter && project.images) {
            modalContent.innerHTML = `<div class="modal-two-column"><div class="modal-left">${createImageCarousel(project.images)}</div><div class="modal-right"><div class="modal-icon">${project.icon}</div><div><span class="modal-title">${project.title}</span><span class="modal-subtitle">Flutter App</span></div><div class="modal-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div><div class="modal-desc"><strong>${project.description}</strong><br><br>${project.fullDescription}</div><div class="modal-links"><button class="btn btn-secondary" disabled style="opacity:0.5; cursor:not-allowed;"><i class="fab fa-github"></i> Private Repo</button></div><div class="app-badge-container"><span class="app-badge-icon"><i class="fas fa-mobile-alt"></i> Cross-Platform</span><span class="app-badge-icon"><i class="fas fa-cloud"></i> Supabase</span><span class="app-badge-icon"><i class="fas fa-bell"></i> Real-time</span></div></div></div>`;
        } else if (project.isWeb) {
            modalContent.innerHTML = `<div class="modal-icon">${project.icon}</div><div class="modal-title">${project.title}</div><div class="modal-subtitle">Frontend Web Project</div><div class="modal-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div><div class="modal-desc"><strong>${project.description}</strong><br><br>${project.fullDescription}</div><div class="modal-links"><a href="${project.github}" target="_blank" class="btn btn-secondary"><i class="fab fa-github"></i> GitHub</a><a href="${project.live}" target="_blank" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a></div>`;
        } else {
            modalContent.innerHTML = `<div class="modal-icon">${project.icon}</div><div class="modal-title">${project.title}</div><div class="modal-subtitle">Backend Expertise</div><div class="modal-tech">${project.tech.map(t => `<span>${t}</span>`).join('')}</div><div class="modal-desc"><strong>${project.description}</strong><br><br>${project.fullDescription}</div>`;
        }
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        currentCarouselImages = [];
    }
    document.querySelectorAll('.project-card[data-project]').forEach(card => {
        card.addEventListener('click', () => openModal(card.getAttribute('data-project')));
    });
    closeModal.addEventListener('click', closeModalFunc);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModalFunc(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'flex') closeModalFunc(); });

    const themeCheckbox = document.getElementById('themeCheckbox');
    if(localStorage.getItem('theme') === 'dark') { document.body.classList.add('dark'); themeCheckbox.checked = true; }
    themeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-content', { opacity:0, y:50, duration:1 });
    gsap.from('.profile-wrapper', { opacity:0, scale:0.8, duration:1 });
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 90%' }, opacity:0, y:40, duration:0.8 });
    });

    document.getElementById('sendMessageBtn')?.addEventListener('click', () => {
        alert('✅ Thanks! Ahmad Faizan will respond within 24 hours.');
    });

    if(window.innerWidth > 768) {
        const ring = document.querySelector('.cursor-ring');
        const dot = document.querySelector('.cursor-dot');
        let mouseX = window.innerWidth/2, mouseY = window.innerHeight/2, ringX=mouseX, ringY=mouseY;
        document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px'; });
        function animate() { ringX += (mouseX - ringX) * 0.14; ringY += (mouseY - ringY) * 0.14; ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px'; requestAnimationFrame(animate); }
        animate();
        document.querySelectorAll('a, button, .project-card, .skill-tag, input, textarea, select').forEach(el => {
            el.addEventListener('mouseenter', () => { ring.classList.add('hover'); dot.classList.add('hover'); });
            el.addEventListener('mouseleave', () => { ring.classList.remove('hover'); dot.classList.remove('hover'); });
        });
    }