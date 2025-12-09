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

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    hamburger.classList.remove('active');
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // 2. Intersection Observer Logic (scroll-animate)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                entry.target.classList.remove('hidden-scroll'); // إزالة الإخفاء
                observer.unobserve(entry.target); 
            } 
        });
    }, {
        threshold: 0.1 
    });

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');

    elementsToAnimate.forEach((el) => {
        el.classList.add('hidden-scroll'); 
        observer.observe(el);
    });

    // ===========================================
    // 3. Image Lightbox (Modal) Logic (جديد)
    // ===========================================
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close-modal");
    
    // **A. فتح الصورة**
    // نبحث عن جميع العناصر التي تحتوي على صور (سواء كانت <img> مباشرة أو ضمن سلايدر)
    // ونستخدم أقرب حاوية لها كهدف للنقر
    const clickableImages = document.querySelectorAll(
        '.epoxy-gallery-card img, ' +  
        '.service-card img, ' +      /* **تمت الإضافة هنا (لصفحة الخدمات بعد إلغاء السلايدر)** */
        '.project-card img, ' +       
        '.slide img'
    );

    clickableImages.forEach(img => {
        img.addEventListener('click', function() {
            // **FIX: التأكد من أن النقر تم على الصورة نفسها (لتجنب النقر على الحاوية)**
            if (this.tagName === 'IMG') {
                modal.classList.add('active');
                modalImg.src = this.src;
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // **B. إغلاق الصورة**
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // إعادة التمرير
    };
    
    // 1. الإغلاق بالزر (X)
    closeBtn.addEventListener('click', closeModal);

    // 2. الإغلاق بالنقر على الخلفية
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // 3. الإغلاق بزر Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && modal.classList.contains('active')) {
            closeModal();
        }
    });
});