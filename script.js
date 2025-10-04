// 等待頁面載入完成
document.addEventListener('DOMContentLoaded', function() {
    
    // 淡入動畫觀察器
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // 為所有卡片和區塊添加淡入效果
    const animatedElements = document.querySelectorAll(
        '.work-card, .target-card, .feature-row, .section-header'
    );
    animatedElements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
    
    // 平滑滾動到錨點
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // CTA 按鈕點擊效果
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 添加點擊效果
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // 記錄點擊事件
            const buttonText = this.textContent?.trim() || 'Unknown';
            console.log('CTA 按鈕點擊:', buttonText);
        });
    });
    
    // 卡片懸停效果增強
    const cards = document.querySelectorAll('.work-card, .target-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // 視差滾動效果（輕微）
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImages = document.querySelectorAll('.hero-bg img, .cta-bg img');
        
        heroImages.forEach(img => {
            const rate = scrolled * -0.3;
            img.style.transform = `translateY(${rate}px)`;
        });
    }, { passive: true });
    
    // 功能區塊滾動時的動畫效果
    const featureRows = document.querySelectorAll('.feature-row');
    const rowObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease-out';
            }
        });
    }, { threshold: 0.2 });
    
    featureRows.forEach(row => {
        rowObserver.observe(row);
    });
    
    // 滾動到頂部按鈕
    const scrollToTopButton = createScrollToTopButton();
    if (scrollToTopButton) {
        document.body.appendChild(scrollToTopButton);
    }
    
    // 錯誤處理
    window.addEventListener('error', function(e) {
        console.error('JavaScript 錯誤:', e.error);
    });
    
    console.log('🍃 翡翠產業招募網站（重新設計版）已載入完成');
});

// 創建滾動到頂部按鈕
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 55px;
        height: 55px;
        background: linear-gradient(45deg, #f39c12, #e67e22);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        opacity: 0;
        transform: translateY(100px);
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 6px 20px rgba(243, 156, 18, 0.4);
    `;
    
    // 滾動顯示/隱藏按鈕
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'translateY(100px)';
        }
    });
    
    // 點擊回到頂部
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 懸停效果
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(0) scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
    
    return button;
}

// 防抖函數
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// 檢測用戶設備
function detectDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipad|android|blackberry|windows phone/g.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/g.test(userAgent);
    
    document.body.classList.add(isMobile ? 'mobile' : 'desktop');
    if (isTablet) document.body.classList.add('tablet');
    
    return { isMobile, isTablet };
}

// 初始化設備檢測
detectDevice();

// 添加自定義動畫樣式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    .animate-scale {
        animation: fadeInScale 0.6s ease-out;
    }
`;
document.head.appendChild(style);
