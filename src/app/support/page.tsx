import styles from './support.module.css';

export default function SupportPage() {
  return (
    <main className={styles.supportMain}>
      <header className={styles.header}>
        <h1>Support & <span className="mono-text">Legal</span></h1>
        <p>Segala hal yang perlu Anda ketahui tentang layanan, kebijakan, dan komitmen kami terhadap privasi Anda.</p>
      </header>

      <div className={styles.contentWrapper}>
        <aside className={styles.sideNav}>
          <a href="#faq" className={styles.sideNavLink}>FAQ</a>
          <a href="#shipping" className={styles.sideNavLink}>Shipping Policy</a>
          <a href="#returns" className={styles.sideNavLink}>Returns & Exchanges</a>
          <a href="#privacy" className={styles.sideNavLink}>Privacy Policy</a>
          <a href="#terms" className={styles.sideNavLink}>Terms of Service</a>
        </aside>

        <div className={styles.sections}>
          {/* FAQ */}
          <section id="faq" className={styles.section}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqItem}>
              <h3>Bagaimana cara melacak pesanan saya?</h3>
              <p>Setelah pesanan Anda dikirim, Anda akan menerima email konfirmasi beserta nomor resi pelacakan yang dapat digunakan di website kurir terkait.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Apakah LUXE menyediakan jasa perakitan?</h3>
              <p>Ya, untuk wilayah JABODETABEK, kami menyediakan jasa perakitan gratis untuk setiap pembelian furniture besar.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Material apa yang digunakan untuk produk LUXE?</h3>
              <p>Kami hanya menggunakan material kualitas tertinggi, termasuk kayu walnut solid, marmer Italia, dan kulit full-grain yang bersertifikasi berkelanjutan.</p>
            </div>
          </section>

          {/* Shipping */}
          <section id="shipping" className={styles.section}>
            <h2>Shipping Policy</h2>
            <div className={styles.legalText}>
              <p>Kami menawarkan pengiriman ke seluruh Indonesia dan internasional. Waktu pengiriman standar adalah 3-7 hari kerja untuk domestik dan 10-21 hari untuk internasional.</p>
              <h3>Biaya Pengiriman</h3>
              <p>Biaya pengiriman dihitung berdasarkan berat paket dan lokasi pengiriman. Gratis ongkir tersedia untuk pesanan di atas Rp 15.000.000 khusus wilayah Pulau Jawa.</p>
            </div>
          </section>

          {/* Returns */}
          <section id="returns" className={styles.section}>
            <h2>Returns & Exchanges</h2>
            <div className={styles.legalText}>
              <p>Kepuasan Anda adalah prioritas kami. Jika Anda tidak puas dengan pembelian Anda, Anda dapat melakukan pengembalian dalam waktu 14 hari setelah barang diterima.</p>
              <h3>Syarat Pengembalian</h3>
              <p>Barang harus dalam kondisi asli, belum digunakan, dan masih dalam kemasan aslinya. Biaya pengiriman kembali ditanggung oleh pembeli kecuali jika barang diterima dalam kondisi rusak.</p>
            </div>
          </section>

          {/* Privacy */}
          <section id="privacy" className={styles.section}>
            <h2>Privacy Policy</h2>
            <div className={styles.legalText}>
              <p>LUXE berkomitmen untuk melindungi data pribadi Anda. Kami hanya mengumpulkan informasi yang diperlukan untuk memproses pesanan dan meningkatkan pengalaman belanja Anda.</p>
              <p>Kami tidak akan pernah menjual atau membagikan informasi Anda kepada pihak ketiga untuk tujuan pemasaran tanpa persetujuan eksplisit dari Anda.</p>
            </div>
          </section>

          {/* Terms */}
          <section id="terms" className={styles.section}>
            <h2>Terms of Service</h2>
            <div className={styles.legalText}>
              <p>Dengan menggunakan situs web kami, Anda setuju untuk mematuhi syarat dan ketentuan berikut. Kami berhak memperbarui syarat-syarat ini sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>
              <p>Semua konten di situs ini, termasuk desain, teks, dan gambar, adalah milik intelektual LUXE E-COMMERCE.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
