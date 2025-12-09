document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Hamburger Menu Toggle Logic (لا تغيير)
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is active (mobile view)
                if (window.innerWidth <= 992) {
                    hamburger.classList.remove('active');
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // 2. Intersection Observer Logic (تم التعديل)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // إذا كان العنصر مرئياً
            if (entry.isIntersecting) {
                // أضف كلاس 'show' لتشغيل حركة الظهور
                entry.target.classList.add('show');
                // نزيل كلاس 'scroll-animate' حتى لا يتم تكرار مراقبته
                // entry.target.classList.remove('scroll-animate'); 
                // نوقف المراقبة بعد الظهور لمرة واحدة
                observer.unobserve(entry.target); 
            } 
        });
    }, {
        // الخيارات: entry.isIntersecting عندما يكون 10% من العنصر مرئياً
        threshold: 0.1 
    });

    // جمع جميع العناصر التي تحتاج لحركة
    const elementsToAnimate = document.querySelectorAll('.scroll-animate');

    // تطبيق المراقبة وإضافة كلاس الإخفاء الأولي لكل عنصر
    elementsToAnimate.forEach((el) => {
        // **هذا الكلاس (hidden-scroll) يضمن إخفاء العنصر في البداية**
        el.classList.add('hidden-scroll'); 
        observer.observe(el);
    });

});