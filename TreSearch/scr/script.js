document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('copy', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('cut', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.userSelect = 'none';
});