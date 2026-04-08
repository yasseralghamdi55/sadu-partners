'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Sadu Partners</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#" className="hover:text-blue-600">الرئيسية</a>
            <a href="#" className="hover:text-blue-600">خدماتنا</a>
            <a href="#" className="hover:text-blue-600">من نحن</a>
            <a href="#" className="hover:text-blue-600">تواصل معنا</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          شركة سدو بارتنرز
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          خدمات محاسبية واستشارات مالية للشركات ورواد الأعمال في المملكة العربية السعودية
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          تواصل معنا
        </button>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-center mb-10">خدماتنا</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">الاستشارات المالية</h4>
            <p className="text-sm text-gray-600">
              نقدم حلول مالية متكاملة تساعدك على اتخاذ قرارات صحيحة
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">المحاسبة</h4>
            <p className="text-sm text-gray-600">
              إدارة الحسابات والتقارير المالية باحترافية عالية
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">الزكاة والضرائب</h4>
            <p className="text-sm text-gray-600">
              إعداد وتقديم الإقرارات الضريبية وفق الأنظمة السعودية
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">من نحن</h3>
        <p className="max-w-3xl mx-auto text-gray-600">
          شركة سدو بارتنرز تقدم خدمات مالية ومحاسبية احترافية، مع التركيز على الجودة والدقة لمساعدة الشركات على النمو.
        </p>
      </section>

      {/* Contact */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
        <p className="text-gray-600 mb-2">📞 0553000556</p>
        <p className="text-gray-600 mb-2">✉️ info@sadupartners.com</p>
        <p className="text-gray-600">📍 الرياض، المملكة العربية السعودية</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 Sadu Partners. All rights reserved.</p>
      </footer>

    </main>
  );
}
