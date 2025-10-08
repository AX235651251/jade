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
    
    // 已移除自訂 Line 懸浮按鈕，保留第三方聊天工具（如 Tawk.to）的按鈕
    
    // 錯誤處理
    window.addEventListener('error', function(e) {
        console.error('JavaScript 錯誤:', e.error);
    });
    
    console.log('🍃 翡翠產業招募網站（重新設計版）已載入完成');
});

// 已移除 createLineFloatingButton()，避免建立第二個懸浮按鈕，保留 Tawk.to 預設按鈕

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
