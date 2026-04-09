'use client';

export default function Home() {
  return (
    <main dir="rtl" className="font-sans">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Sadu Partners Logo"
              className="h-12 w-auto"
            />
            <span className="font-bold text-lg">Sadu Partners</span>
          </div>

          {/* NAV */}
          <nav className="flex gap-6 text-sm">
            <a href="#home">الرئيسية</a>
            <a href="#services">خدماتنا</a>
            <a href="#about">من نحن</a>
            <a href="#contact">تواصل معنا</a>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col items-center justify-center text-center text-white"
        style={{
          background: 'linear-gradient(to left, #0f172a, #334155)',
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          شركة سدو بارتنرز
        </h1>
        <p className="mb-6">
          خدمات محاسبية واستشارات مالية للشركات ورواد الأعمال في المملكة العربية السعودية
        </p>
        <button className="bg-white text-black px-6 py-2 rounded">
          تواصل معنا
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-10">خدماتنا</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">الاستشارات المالية</h3>
            <p>نقدم حلول مالية متكاملة تساعدك على اتخاذ قرارات صحيحة</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">المحاسبة</h3>
            <p>إدارة الحسابات والتقارير المالية باحترافية عالية</p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="font-bold mb-2">الزكاة والضرائب</h3>
            <p>إعداد وتقديم الإقرارات الضريبية وفق الأنظمة السعودية</p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">من نحن</h2>
        <p className="max-w-2xl mx-auto">
          شركة سدو بارتنرز تقدم خدمات مالية ومحاسبية احترافية،
          مع التركيز على الجودة والدقة لمساعدة الشركات على النمو
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>

        <p>📞 0553000556</p>
        <p>📧 info@sadupartners.com</p>
        <p>📍 الرياض، المملكة العربية السعودية</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 Sadu Partners. All rights reserved.</p>
      </footer>

    </main>
  );
}
