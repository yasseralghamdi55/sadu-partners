'use client';

import { useMemo, useState } from 'react';

export default function Home() {
  const logo = '/logo.png';

  const company = {
    whatsappNumber: '966557230245',
    email: 'info@sadupartners.com',
    phone: '0557230245',
    addressAr: 'الرياض، حي النخيل، شارع الملك فهد',
    addressEn: 'King Fahd Road, Al Nakheel District, Riyadh, Saudi Arabia',
  };

  const content = {
    ar: {
      dir: 'rtl',
      langSwitch: 'EN',
      company: 'شركة سدو بارتنرز',
      subtitle: 'محاسبون ومراجعون قانونيون',
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'الخدمات',
        whyUs: 'لماذا نحن',
        contact: 'تواصل معنا',
      },
      heroBadge: 'خدمات محاسبية ومراجعة قانونية في الرياض',
      heroTitle: 'خبرة مهنية تبني الثقة وتدعم نمو الأعمال',
      heroText:
        'تقدم شركة سدو بارتنرز محاسبون ومراجعون قانونيون خدمات محاسبية ومراجعة قانونية واستشارات مالية للشركات ورواد الأعمال في المملكة العربية السعودية، مع تركيز على الجودة والامتثال والدقة المهنية.',
      primaryCta: 'اطلب استشارة',
      secondaryCta: 'استعرض الخدمات',
      stats: [
        ['الموقع', 'الرياض'],
        ['التخصص', 'محاسبة ومراجعة قانونية'],
        ['التركيز', 'الجودة والامتثال'],
      ],
      aboutLabel: 'من نحن',
      aboutTitle: 'شريك مهني يعتمد عليه في المحاسبة والمراجعة',
      aboutText1:
        'نحن شركة مهنية متخصصة في المحاسبة والمراجعة القانونية والاستشارات المالية، نعمل على مساندة المنشآت في بناء أنظمة مالية موثوقة ورفع جودة القرار وتحقيق الامتثال.',
      aboutText2:
        'من مقرنا في الرياض نخدم قطاعات متعددة بحلول عملية مصممة لتلبية احتياجات السوق المحلي، مع التزام بالسرية والمهنية والجودة.',
      highlightTitle: 'ما الذي يميزنا؟',
      highlights: [
        'فريق متخصص في المحاسبة والمراجعة القانونية',
        'فهم عميق للأنظمة واللوائح السعودية',
        'حلول عملية للشركات ورواد الأعمال',
        'دقة، سرية، وجودة في كل خدمة',
      ],
      servicesLabel: 'الخدمات',
      servicesTitle: 'خدمات مهنية متكاملة تلائم احتياجات المنشآت',
      servicesText:
        'نقدم باقة متنوعة من الخدمات المهنية المصممة لتعزيز الاستقرار المالي والامتثال ورفع كفاءة الأعمال.',
      services: [
        {
          title: 'المراجعة والتدقيق',
          description: 'مراجعة القوائم المالية والتقارير وفق المعايير والأنظمة المعتمدة داخل المملكة.',
        },
        {
          title: 'الخدمات المحاسبية',
          description: 'إعداد السجلات والدفاتر والتقارير المالية الدورية بدقة وكفاءة تشغيلية.',
        },
        {
          title: 'الزكاة والضرائب',
          description: 'خدمات الامتثال الزكوي والضريبي وضريبة القيمة المضافة وتمثيل المنشآت أمام الجهات ذات العلاقة.',
        },
        {
          title: 'الاستشارات المالية والإدارية',
          description: 'حلول مالية وإدارية تساعد في رفع الكفاءة وتحسين الأداء ودعم اتخاذ القرار.',
        },
        {
          title: 'الحوكمة والضوابط الداخلية',
          description: 'وضع السياسات والإجراءات وبناء أنظمة رقابية تدعم الاستدامة والامتثال.',
        },
        {
          title: 'الفحص النافي للجهالة',
          description: 'فحوصات مالية ومحاسبية لدعم المستثمرين وتقييم الفرص وتقليل المخاطر.',
        },
      ],
      whyUsLabel: 'لماذا نحن',
      whyUsTitle: 'منهجية واضحة وقيمة عملية لكل عميل',
      whyCards: [
        {
          number: '01',
          title: 'فهم محلي قوي',
          description: 'معرفة عملية بمتطلبات البيئة النظامية والمالية في المملكة العربية السعودية.',
        },
        {
          number: '02',
          title: 'منهجية دقيقة',
          description: 'اعتماد معايير واضحة لضمان جودة المخرجات وسلامة الإجراءات والتقارير.',
        },
        {
          number: '03',
          title: 'شراكة مبنية على الثقة',
          description: 'تواصل مهني وسرية عالية وحرص على تقديم قيمة حقيقية لكل عميل.',
        },
      ],
      contactLabel: 'تواصل معنا',
      contactTitle: 'جاهزون لخدمتكم',
      contactText: 'يسعدنا استقبال استفساراتكم وتقديم الدعم المهني المناسب لاحتياجات منشأتكم.',
      city: 'المدينة',
      cityValue: 'الرياض',
      country: 'الدولة',
      countryValue: 'المملكة العربية السعودية',
      address: 'العنوان',
      phoneLabel: 'الجوال',
      emailLabel: 'البريد الإلكتروني',
      whatsapp: 'واتساب',
      formName: 'الاسم',
      formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الجوال',
      formMessage: 'اكتب رسالتك',
      formButton: 'إرسال الطلب',
      footerText: 'جميع الحقوق محفوظة.',
    },
    en: {
      dir: 'ltr',
      langSwitch: 'AR',
      company: 'Sadu Partners',
      subtitle: 'Certified Public Accountants & Auditors',
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        whyUs: 'Why Us',
        contact: 'Contact',
      },
      heroBadge: 'Accounting and statutory audit services in Riyadh',
      heroTitle: 'Professional expertise that strengthens trust and supports business growth',
      heroText:
        'Sadu Partners Certified Public Accountants & Auditors provides accounting, statutory audit, and financial advisory services for companies and entrepreneurs across Saudi Arabia, with a strong focus on quality, compliance, and professional accuracy.',
      primaryCta: 'Request Consultation',
      secondaryCta: 'Explore Services',
      stats: [
        ['Location', 'Riyadh'],
        ['Specialization', 'Accounting & Statutory Audit'],
        ['Focus', 'Quality & Compliance'],
      ],
      aboutLabel: 'About Us',
      aboutTitle: 'A reliable professional partner in accounting and audit',
      aboutText1:
        'We are a professional firm specialized in accounting, statutory audit, and financial advisory services, helping businesses build reliable financial systems, strengthen decision-making, and achieve compliance.',
      aboutText2:
        'From our office in Riyadh, we serve multiple sectors with practical solutions tailored to local market requirements, while maintaining confidentiality, professionalism, and quality.',
      highlightTitle: 'What sets us apart?',
      highlights: [
        'Specialized accounting and audit team',
        'Strong understanding of Saudi regulations',
        'Practical solutions for companies and entrepreneurs',
        'Accuracy, confidentiality, and quality',
      ],
      servicesLabel: 'Services',
      servicesTitle: 'Integrated professional services tailored to business needs',
      servicesText:
        'We provide a broad range of professional services designed to strengthen financial stability, compliance, and operational efficiency.',
      services: [
        {
          title: 'Audit & Assurance',
          description: 'Reviewing financial statements and reports in line with applicable standards and regulations in Saudi Arabia.',
        },
        {
          title: 'Accounting Services',
          description: 'Maintaining accounting records, bookkeeping, and preparing periodic financial reports with accuracy and efficiency.',
        },
        {
          title: 'Zakat & Tax',
          description: 'Supporting VAT, zakat, and tax compliance requirements and representing clients before relevant authorities.',
        },
        {
          title: 'Financial & Management Advisory',
          description: 'Practical advisory solutions that improve performance, efficiency, and strategic decision-making.',
        },
        {
          title: 'Governance & Internal Controls',
          description: 'Developing policies, procedures, and control frameworks that support sustainability and compliance.',
        },
        {
          title: 'Due Diligence',
          description: 'Financial and accounting due diligence to support investors, evaluate opportunities, and reduce risk.',
        },
      ],
      whyUsLabel: 'Why Us',
      whyUsTitle: 'Clear methodology and practical value for every client',
      whyCards: [
        {
          number: '01',
          title: 'Strong local understanding',
          description: 'Practical knowledge of the Saudi regulatory and financial environment.',
        },
        {
          number: '02',
          title: 'Precise methodology',
          description: 'Clear professional standards that ensure quality outputs and sound procedures.',
        },
        {
          number: '03',
          title: 'Trust-based partnership',
          description: 'Professional communication, high confidentiality, and real value for every client.',
        },
      ],
      contactLabel: 'Contact Us',
      contactTitle: 'We are ready to support you',
      contactText: 'We are pleased to receive your inquiries and provide the right professional support for your business needs.',
      city: 'City',
      cityValue: 'Riyadh',
      country: 'Country',
      countryValue: 'Saudi Arabia',
      address: 'Address',
      phoneLabel: 'Mobile',
      emailLabel: 'Email',
      whatsapp: 'WhatsApp',
      formName: 'Name',
      formEmail: 'Email',
      formPhone: 'Mobile Number',
      formMessage: 'Write your message',
      formButton: 'Send Request',
      footerText: 'All rights reserved.',
    },
  };

  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const t = content[lang];
  const isArabic = lang === 'ar';

  const whatsappUrl = useMemo(() => {
    const text = encodeURIComponent(
      isArabic
        ? 'مرحبًا، أرغب في الاستفسار عن خدمات شركة سدو بارتنرز.'
        : 'Hello, I would like to inquire about Sadu Partners services.'
    );
    return `https://wa.me/${company.whatsappNumber}?text=${text}`;
  }, [isArabic]);

  return (
    <div dir={t.dir} className="min-h-screen bg-white text-slate-900">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-4">
            <img
              src={logo}
              alt="Sadu Partners Logo"
              className="h-14 w-auto object-contain"
            />
            <div>
              <div className="text-lg font-bold tracking-tight">{t.company}</div>
              <div className="text-sm text-slate-500">{t.subtitle}</div>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">{t.nav.home}</a>
            <a href="#about" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">{t.nav.about}</a>
            <a href="#services" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">{t.nav.services}</a>
            <a href="#why-us" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">{t.nav.whyUs}</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 transition hover:text-slate-950">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(isArabic ? 'en' : 'ar')}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {t.langSwitch}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 md:inline-flex"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </div>

      <section id="home" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.12),transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div className="relative z-10">
            <div className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              {t.heroBadge}
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-300 transition hover:-translate-y-0.5">
                {t.primaryCta}
              </a>
              <a href="#services" className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                {t.secondaryCta}
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] md:p-8">
              <div className="rounded-[1.5rem] bg-slate-950 p-6 text-white">
                <div className="text-sm text-white/70">{t.company}</div>
                <div className="mt-2 text-2xl font-bold">{t.subtitle}</div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {t.stats.map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-xs text-white/70">{label}</div>
                      <div className="mt-2 text-sm font-bold leading-6">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm text-slate-500">{t.phoneLabel}</div>
                  <a href={`tel:${company.phone}`} className="mt-2 block text-lg font-bold text-slate-900">{company.phone}</a>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="text-sm text-slate-500">{t.emailLabel}</div>
                  <a href={`mailto:${company.email}`} className="mt-2 block break-all text-lg font-bold text-slate-900">{company.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{t.aboutLabel}</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t.aboutTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{t.aboutText1}</p>
            <p className="mt-4 text-lg leading-8 text-slate-600">{t.aboutText2}</p>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)] md:p-10">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">{t.highlightTitle}</div>
            <div className="mt-6 grid gap-4">
              {t.highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-white/90">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{t.servicesLabel}</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t.servicesTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t.servicesText}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((service) => (
              <div key={service.title} className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="inline-flex rounded-2xl bg-slate-950 px-3 py-2 text-xs font-bold text-white">{service.title}</div>
                <p className="mt-5 leading-8 text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">{t.whyUsLabel}</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{t.whyUsTitle}</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.whyCards.map((item) => (
              <div key={item.number} className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <div className="text-4xl font-extrabold tracking-tight text-slate-950">{item.number}</div>
                <div className="mt-4 text-xl font-bold text-slate-950">{item.title}</div>
                <p className="mt-4 leading-8 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-white/60">{t.contactLabel}</div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{t.contactTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-white/75">{t.contactText}</p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-white/60">{t.address}</div>
                <div className="mt-2 text-lg font-bold">{isArabic ? company.addressAr : company.addressEn}</div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/60">{t.city}</div>
                  <div className="mt-2 text-lg font-bold">{t.cityValue}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/60">{t.country}</div>
                  <div className="mt-2 text-lg font-bold">{t.countryValue}</div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/60">{t.phoneLabel}</div>
                  <a href={`tel:${company.phone}`} className="mt-2 block text-lg font-bold">{company.phone}</a>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="text-sm text-white/60">{t.emailLabel}</div>
                  <a href={`mailto:${company.email}`} className="mt-2 block break-all text-lg font-bold">{company.email}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
            <div className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45" placeholder={t.formName} />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45" placeholder={t.formEmail} />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45" placeholder={t.formPhone} />
              <textarea className="min-h-[160px] rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-white/45" placeholder={t.formMessage} />
              <button className="rounded-2xl bg-white px-5 py-3 font-bold text-slate-950 transition hover:-translate-y-0.5">{t.formButton}</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 {t.company}. {t.footerText}</div>
          <div>{isArabic ? 'الرياض • المملكة العربية السعودية' : 'Riyadh • Saudi Arabia'}</div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 rounded-full bg-emerald-500 px-5 py-3 text-sm font-bold text-white shadow-[0_20px_40px_rgba(16,185,129,0.35)] transition hover:-translate-y-1"
      >
        {t.whatsapp}
      </a>
    </div>
  );
}
