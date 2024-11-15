// Menambahkan event listener untuk menangani pengiriman formulir
document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Mencegah pengiriman formulir secara default (misalnya, agar tidak me-refresh halaman)
    event.preventDefault();
    
    // Menampilkan pesan alert kepada pengguna setelah formulir disubmit
    alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
    
    // Mereset (mengosongkan) semua input dan textarea dalam formulir setelah pengiriman
    this.reset();
});

