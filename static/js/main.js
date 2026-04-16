// main.js — students will add JavaScript here as features are built

// Video Modal functionality
(function() {
    const modal = document.getElementById('video-modal');
    const openBtn = document.getElementById('how-it-works-btn');
    const closeBtn = document.getElementById('modal-close-btn');
    const video = document.getElementById('modal-video');
    const videoUrl = 'https://www.youtube.com/embed/1twsU0Jge2Q?autoplay=1';

    if (!modal || !openBtn) return;

    // Open modal
    openBtn.addEventListener('click', function(e) {
        e.preventDefault();
        video.src = videoUrl;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal function
    function closeModal() {
        video.src = '';
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Click outside modal to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
})();
