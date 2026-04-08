'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const whatsappNumber = '966553000556';
const email = 'info@sadupartners.com';
const phone = '0553000556';
const addressAr = 'الرياض، حي النخيل، شارع الملك فهد';
const addressEn = 'King Fahd Road, Al Nakheel District, Riyadh, Saudi Arabia';

const content = {
  ar: {
    dir: 'rtl',
    company: 'شركة سدو بارتنرز',
    subtitle: 'محاسبون ومراجعون قانونيون',
    nav: ['الرئيسية', 'من نحن', 'الخدمات', 'لماذا نحن', 'تواصل معنا'],
    badge: 'خدمات محاسبية واستشارية في الرياض',
    heroTitle1: 'شريكك المهني في',
    heroTitle2: 'المحاسبة والمراجعة القانونية',
    heroText:
      'تقدم شركة سدو بارتنرز محاسبون ومراجعون قانونيون خدمات محاسبية ومراجعة قانونية واستشارات مالية للشركات ورواد الأعمال في المملكة العربية السعودية، مع تركيز على الجودة والامتثال والدقة المهنية.',
    cta1: 'اطلب استشارة',
    cta2: 'استعرض الخدمات',
    location: 'الموقع',
    specialization: 'التخصص',
    mission: 'الرسالة',
    missionText: 'تقديم خدمات احترافية مبنية على المعرفة والالتزام وفهم متطلبات السوق السعودي.',
    aboutLabel: 'من نحن',
    aboutTitle: 'خبرة مهنية تدعم أعمالكم بثقة',
    aboutText1:
      'نحن شركة مهنية متخصصة في المحاسبة والمراجعة القانونية والاستشارات المالية، نعمل على مساندة المنشآت في بناء أنظمة مالية موثوقة ورفع جودة القرار وتحقيق الامتثال.',
    aboutText2:
      'من مقرنا في الرياض نخدم قطاعات متعددة بحلول عملية مصممة لتلبية احتياجات السوق المحلي، مع التزام بالسرية والمهنية والجودة.',
    whyTitle: 'ما الذي يميزنا؟',
    highlights: [
      'فريق متخصص في المحاسبة والمراجعة القانونية',
      'فهم عميق للأنظمة واللوائح السعودية',
      'حلول عملية للشركات ورواد الأعمال',
      'دقة، سرية، وجودة في كل خدمة',
    ],
    servicesLabel: 'خدماتنا',
    servicesTitle: 'حلول متكاملة تلائم احتياجات المنشآت',
    servicesText:
      'نقدم باقة متنوعة من الخدمات المهنية المصممة لتعزيز الاستقرار المالي والامتثال ورفع كفاءة الأعمال.',
    services: [
      { title: 'المراجعة والتدقيق', description: 'مراجعة القوائم المالية والتقارير وفق المعايير والأنظمة المعتمدة داخل المملكة.' },
      { title: 'الخدمات المحاسبية', description: 'إعداد السجلات والدفاتر والتقارير المالية الدورية بدقة وكفاءة تشغيلية.' },
      { title: 'الزكاة والضرائب', description: 'خدمات الامتثال الزكوي والضريبي وضريبة القيمة المضافة وتمثيل المنشآت أمام الجهات ذات العلاقة.' },
      { title: 'الاستشارات المالية والإدارية', description: 'حلول مالية وإدارية تساعد في رفع الكفاءة وتحسين الأداء ودعم اتخاذ القرار.' },
      { title: 'الحوكمة والضوابط الداخلية', description: 'وضع السياسات والإجراءات وبناء أنظمة رقابية تدعم الاستدامة والامتثال.' },
      { title: 'الفحص النافي للجهالة', description: 'فحوصات مالية ومحاسبية لدعم المستثمرين وتقييم الفرص وتقليل المخاطر.' },
    ],
    whyCards: [
      ['01', 'فهم محلي قوي', 'معرفة عملية بمتطلبات البيئة النظامية والمالية في المملكة العربية السعودية.'],
      ['02', 'منهجية دقيقة', 'اعتماد معايير واضحة لضمان جودة المخرجات وسلامة الإجراءات والتقارير.'],
      ['03', 'شراكة مبنية على الثقة', 'تواصل مهني وسرية عالية وحرص على تقديم قيمة حقيقية لكل عميل.'],
    ],
    contactLabel: 'تواصل معنا',
    contactTitle: 'جاهزون لخدمتكم',
    contactText: 'يسعدنا استقبال استفساراتكم وتقديم الدعم المهني المناسب لاحتياجات منشأتكم.',
    city: 'المدينة',
    country: 'الدولة',
    cityValue: 'الرياض',
    countryValue: 'المملكة العربية السعودية',
    phoneLabel: 'الجوال',
    emailLabel: 'البريد الإلكتروني',
    addressLabel: 'العنوان',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formPhone: 'رقم الجوال',
    formMessage: 'اكتب رسالتك',
    formButton: 'إرسال الطلب',
    whatsapp: 'واتساب',
    footer: 'جميع الحقوق محفوظة.',
    langSwitch: 'EN',
    specialtyText: 'محاسبة ومراجعة قانونية',
    footerPlace: 'الرياض • المملكة العربية السعودية',
  },
  en: {
    dir: 'ltr',
    company: 'Sadu Partners',
    subtitle: 'Certified Public Accountants & Auditors',
    nav: ['Home', 'About', 'Services', 'Why Us', 'Contact'],
    badge: 'Accounting & advisory services in Riyadh',
    heroTitle1: 'Your trusted partner in',
    heroTitle2: 'Accounting and statutory audit',
    heroText:
      'Sadu Partners Certified Public Accountants & Auditors provides accounting, statutory audit, and financial advisory services for companies and entrepreneurs across Saudi Arabia, with a strong focus on quality, compliance, and professional accuracy.',
    cta1: 'Request Consultation',
    cta2: 'Explore Services',
    location: 'Location',
    specialization: 'Specialization',
    mission: 'Mission',
    missionText: 'Delivering professional services built on knowledge, integrity, and a clear understanding of the Saudi market.',
    aboutLabel: 'About Us',
    aboutTitle: 'Professional expertise that supports your business with confidence',
    aboutText1:
      'We are a professional firm specialized in accounting, statutory audit, and financial advisory services, helping businesses build reliable financial systems, strengthen decision-making, and achieve compliance.',
    aboutText2:
      'From our office in Riyadh, we serve multiple sectors with practical solutions tailored to local market requirements, while maintaining confidentiality, professionalism, and quality.',
    whyTitle: 'What sets us apart?',
    highlights: [
      'Specialized accounting and audit team',
      'Strong understanding of Saudi regulations',
      'Practical solutions for companies and entrepreneurs',
      'Accuracy, confidentiality, and quality',
    ],
    servicesLabel: 'Our Services',
    servicesTitle: 'Integrated solutions tailored to business needs',
    servicesText:
      'We provide a broad range of professional services designed to strengthen financial stability, compliance, and operational efficiency.',
    services: [
      { title: 'Audit & Assurance', description: 'Reviewing financial statements and reports in line with applicable standards and regulations in Saudi Arabia.' },
      { title: 'Accounting Services', description: 'Maintaining accounting records, bookkeeping, and preparing periodic financial reports with accuracy and efficiency.' },
      { title: 'Zakat & Tax', description: 'Supporting VAT, zakat, and tax compliance requirements and representing clients before relevant authorities.' },
      { title: 'Financial & Management Advisory', description: 'Practical advisory solutions that improve performance, efficiency, and strategic decision-making.' },
      { title: 'Governance & Internal Controls', description: 'Developing policies, procedures, and control frameworks that support sustainability and compliance.' },
      { title: 'Due Diligence', description: 'Financial and accounting due diligence to support investors, evaluate opportunities, and reduce risk.' },
    ],
    whyCards: [
      ['01', 'Strong local understanding', 'Practical knowledge of the Saudi regulatory and financial environment.'],
      ['02', 'Precise methodology', 'Clear professional standards that ensure quality outputs and sound procedures.'],
      ['03', 'Trust-based partnership', 'Professional communication, high confidentiality, and real value for every client.'],
    ],
    contactLabel: 'Contact Us',
    contactTitle: 'We are ready to support you',
    contactText: 'We are pleased to receive your inquiries and provide the right professional support for your business needs.',
    city: 'City',
    country: 'Country',
    cityValue: 'Riyadh',
    countryValue: 'Saudi Arabia',
    phoneLabel: 'Mobile',
    emailLabel: 'Email',
    addressLabel: 'Address',
    formName: 'Name',
    formEmail: 'Email',
    formPhone: 'Mobile Number',
    formMessage: 'Write your message',
    formButton: 'Send Request',
    whatsapp: 'WhatsApp',
    footer: 'All rights reserved.',
    langSwitch: 'AR',
    specialtyText: 'Accounting & Statutory Audit',
    footerPlace: 'Riyadh • Saudi Arabia',
  },
} as const;

export default function HomePage() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = content[lang];
  const isArabic = lang === 'ar';

  const whatsappLink = useMemo(() => {
    const text = isArabic
      ? 'مرحبًا، أرغب في الاستفسار عن خدمات شركة سدو بارتنرز.'
      : 'Hello, I would like to inquire about Sadu Partners services.';
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  }, [isArabic]);

  return (
    <main dir={t.dir} className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Sadu Partners Logo" width={180} height={70} className="h-14 w-auto rounded-xl object-contain" priority />
            <div>
              <h1 className="text-lg font-bold text-slate-900">{t.company}</h1>
              <p className="text-sm text-slate-600">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
              <a href="#home" className="hover:text-violet-700">{t.nav[0]}</a>
              <a href="#about" className="hover:text-violet-700">{t.nav[1]}</a>
              <a href="#services" className="hover:text-violet-700">{t.nav[2]}</a>
              <a href="#why-us" className="hover:text-violet-700">{t.nav[3]}</a>
              <a href="#contact" className="hover:text-violet-700">{t.nav[4]}</a>
            </nav>
            <button
              onClick={() => setLang(isArabic ? 'en' : 'ar')}
              className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:border-violet-300 hover:text-violet-700"
            >
              {t.langSwitch}
            </button>
          </div>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-cyan-50" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex rounded-full border border-violet-200 bg-white px-4 py-2 text-sm font-medium text-violet-700 shadow-sm">
              {t.badge}
            </span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {t.heroTitle1}
              <span className="block text-violet-700">{t.heroTitle2}</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-violet-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-200 hover:-translate-y-0.5">
                {t.cta1}
              </a>
              <a href="#services" className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-violet-300 hover:text-violet-700">
                {t.cta2}
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/70 bg-white p-8 shadow-2xl shadow-slate-200">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-medium text-slate-500">{t.location}</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">{t.cityValue}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-sm font-medium text-slate-500">{t.specialization}</div>
                  <div className="mt-2 text-lg font-bold text-slate-900">{t.specialtyText}</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5 sm:col-span-2">
                  <div className="text-sm font-medium text-slate-500">{t.mission}</div>
                  <div className="mt-2 text-base leading-7 text-slate-700">{t.missionText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
          <div>
            <p className="text-sm font-bold tracking-widest text-violet-700">{t.aboutLabel}</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900">{t.aboutTitle}</h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t.aboutText1}</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.aboutText2}</p>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <h4 className="text-xl font-bold">{t.whyTitle}</h4>
            <div className="mt-6 grid gap-4">
              {t.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold tracking-widest text-violet-700">{t.servicesLabel}</p>
            <h3 className="mt-3 text-3xl font-bold text-slate-900">{t.servicesTitle}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.servicesText}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service) => (
              <div key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h4 className="text-xl font-bold text-slate-900">{service.title}</h4>
                <p className="mt-4 leading-8 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-r from-violet-700 to-cyan-600 p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-8 md:grid-cols-3">
            {t.whyCards.map(([num, title, desc]) => (
              <div key={num}>
                <div className="text-4xl font-extrabold">{num}</div>
                <h4 className="mt-4 text-xl font-bold">{title}</h4>
                <p className="mt-3 leading-8 text-white/90">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1fr_0.9fr] md:items-start">
          <div>
            <p className="text-sm font-bold tracking-widest text-cyan-300">{t.contactLabel}</p>
            <h3 className="mt-3 text-3xl font-bold">{t.contactTitle}</h3>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.contactText}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">{t.city}</div>
                <div className="mt-2 text-lg font-bold">{t.cityValue}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">{t.country}</div>
                <div className="mt-2 text-lg font-bold">{t.countryValue}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:col-span-2">
                <div className="text-sm text-slate-400">{t.addressLabel}</div>
                <div className="mt-2 text-lg font-bold">{isArabic ? addressAr : addressEn}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">{t.phoneLabel}</div>
                <a href={`tel:${phone}`} className="mt-2 block text-lg font-bold hover:text-cyan-300">{phone}</a>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-slate-400">{t.emailLabel}</div>
                <a href={`mailto:${email}`} className="mt-2 block break-all text-lg font-bold hover:text-cyan-300">{email}</a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="rounded-2xl bg-green-500 px-5 py-3 font-bold text-white shadow-lg hover:-translate-y-0.5">
                {t.whatsapp}
              </a>
              <a href={`mailto:${email}`} className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white hover:bg-white/10">
                {t.emailLabel}
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-400" placeholder={t.formName} />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-400" placeholder={t.formEmail} />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-400" placeholder={t.formPhone} />
              <textarea className="min-h-[140px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 outline-none placeholder:text-slate-400" placeholder={t.formMessage} />
              <button className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-900">{t.formButton}</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {t.company}. {t.footer}</p>
          <p>{t.footerPlace}</p>
        </div>
      </footer>

      <a href={whatsappLink} target="_blank" rel="noreferrer" className="fixed bottom-6 left-6 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-2xl hover:-translate-y-1">
        {t.whatsapp}
      </a>
    </main>
  );
}
