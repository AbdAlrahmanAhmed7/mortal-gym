/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Users, 
  CheckCircle2, 
  Star, 
  Timer, 
  Zap, 
  ShieldCheck, 
  Instagram, 
  Facebook, 
  Twitter,
  MapPin,
  Phone,
  Mail,
  Menu,
  X
} from 'lucide-react';

// Pricing Data
const feedbackData = [
  {
    name: "ياسين علي",
    role: "بطل كمال أجسام",
    text: "تجربة خيالية يا جماعة! مورتال مش مجرد جيم، ده مجتمع بجد بيزقك لقدام كل يوم. الأجهزة هنا أنضف وأحدث حاجة شوفتها في المنطقة كلها.",
    rating: 5
  },
  {
    name: "ليلى حسن",
    role: "مدربة يوغا",
    text: "بجد المكان هنا مريح جداً. النظام والشياكة في التعامل والمدربين مستواهم عالي قوي. لفيت على جيمات كتير بس مورتال في حتة تانية خالص.",
    rating: 5
  },
  {
    name: "كريم ممدوح",
    role: "عضو نشط",
    text: "أحسن قراراتي بجد إني اشتركت هنا. الباقات بجد مدروسة ومناسبة لأي حد، والمدربين مش بيسيبوك لحظة، دايماً معاك وبيشجعوك.",
    rating: 4
  }
];

const membershipPlans = [
  {
    name: "الباقة الأساسية",
    price: "199",
    period: "شهر",
    features: [
      "دخول صالة الجيم",
      "استخدام غرف تغيير الملابس",
      "خزانة خاصة",
      "نظام تدريبي أساسي"
    ],
    highlight: false,
    icon: <Zap className="w-6 h-6" />
  },
  {
    name: "الباقة الاحترافية",
    price: "349",
    period: "شهر",
    features: [
      "دخول غير محدود للصالة",
      "حصص جماعية مجانية",
      "متابعة شهرية مع مدرب",
      "خصم 10% على المكملات",
      "دخول حمام السباحة"
    ],
    highlight: true,
    icon: <Star className="w-6 h-6 text-primary" />
  },
  {
    name: "باقة النخبة",
    price: "599",
    period: "شهر",
    features: [
      "مدرب شخصي مخصص",
      "برنامج غذائي متكامل",
      "جلسات تدليك واستشفاء",
      "مواقف سيارات خاصة",
      "دخول ضيف مجاناً (مرتان شهرياً)"
    ],
    highlight: false,
    icon: <ShieldCheck className="w-6 h-6 text-primary" />
  }
];

const onlineCoachingFeatures = [
  {
    title: "خطة تدريب مفصلة",
    desc: "تمارين مصممة خصيصاً لمستواك وللأدوات المتاحة عندك، سواء بتتمرن في البيت أو في الجيم.",
    icon: <Dumbbell className="w-6 h-6" />
  },
  {
    title: "برنامج غذائي مرن",
    desc: "مش بس دايت، ده نظام حياة. بنحسبلك سعراتك وماكروز جسمك وبنعملك منيو متنوع بالأكل اللي بتحبه.",
    icon: <Timer className="w-6 h-6" />
  },
  {
    title: "متابعة أسبوعية",
    desc: "بنراجع تطورك كل أسبوع وبنعدل في الخطط بناءً على نتايجك وصورك وقياساتك عشان نضمن استمرارك.",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "تواصل مباشر 24/7",
    desc: "معاك على الواتساب للرد على أي استفسار بخصوص التكنيك أو الأكل في أي وقت خلال اليوم.",
    icon: <Mail className="w-6 h-6" />
  }
];

const trainers = [
  {
    name: "ملاك",
    specialty: "مدرب كمال أجسام ولياقة",
    image: "/src/assets/images/trainer_male_1_1779013287067.png",
    experience: "10 سنوات خبرة"
  },
  {
    name: "نور",
    specialty: "مدربة يوغا وبيلاتس",
    image: "/src/assets/images/trainer_female_1_1779013301373.png",
    experience: "7 سنوات خبرة"
  },
  {
    name: "طارق",
    specialty: "أخصائي تغذية رياضية",
    image: "https://picsum.photos/seed/trainer3/400/400",
    experience: "8 سنوات خبرة"
  }
];

const features = [
  {
    title: "أحدث الأجهزة",
    desc: "نمتلك أحدث المعدات الرياضية العالمية لضمان أفضل النتائج.",
    icon: <Dumbbell className="w-8 h-8 text-primary" />
  },
  {
    title: "مدربون محترفون",
    desc: "نخبة من أفضل المدربين المعتمدين لمساعدتك في تحقيق أهدافك.",
    icon: <Users className="w-8 h-8 text-primary" />
  },
  {
    title: "متابعة غذائية",
    desc: "خطط تغذية مخصصة لكل متدرب حسب طبيعة جسمه وهدفه.",
    icon: <Timer className="w-8 h-8 text-primary" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10 h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-6 h-6 text-primary" />
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">مورتال</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-[10px] font-black tracking-widest text-[#888]">
              <a href="#features" className="hover:text-primary transition-colors">المميزات</a>
              <a href="#trainers" className="hover:text-primary transition-colors">المدربون</a>
              <a href="#online-coaching" className="hover:text-primary transition-colors">تدريب أونلاين</a>
              <a href="#feedback" className="hover:text-primary transition-colors">قالوا عنا</a>
              <a href="#footer" className="hover:text-primary transition-colors">عن الجيم</a>
              <a href="#pricing" className="bg-primary text-black px-6 py-2 text-xs font-black tracking-widest hover:bg-white transition-colors">
                اشترك الآن
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black border-b border-white/10 px-4 py-6 flex flex-col gap-4 text-lg"
            >
              <a href="#features" onClick={() => setIsMenuOpen(false)}>المميزات</a>
              <a href="#trainers" onClick={() => setIsMenuOpen(false)}>المدربون</a>
              <a href="#online-coaching" onClick={() => setIsMenuOpen(false)}>تدريب أونلاين</a>
              <a href="#feedback" onClick={() => setIsMenuOpen(false)}>قالوا عنا</a>
              <a href="#footer" onClick={() => setIsMenuOpen(false)}>عن الجيم</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="bg-primary text-black px-6 py-3 rounded-xl font-bold w-full text-center">
                اشترك الآن
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden border-b-8 border-surface">
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/images/gym_hero_banner_1779013270663.png" 
            alt="Gym Background" 
            className="w-full h-full object-cover opacity-30 scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-7xl md:text-[130px] font-black leading-[0.85] mb-8 italic italic tracking-tighter">
              لا توجد <br />
              <span className="text-primary">أعذار.</span>
            </h1>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-12 max-w-sm leading-relaxed border-r-4 border-primary pr-6">
              نحن نوفر لك الأدوات، والمدربين، والبيئة المناسبة. الباقي يعتمد عليك. ابدأ تحولك اليوم.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pricing" className="bg-primary text-black px-12 py-5 font-black text-xs tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 block text-center">
                سجل عضويتك الآن
              </a>
              <a href="#features" className="border border-[#333] px-12 py-5 font-black text-xs tracking-widest hover:bg-[#333] transition-all block text-center">
                استكشف المزايا
              </a>
            </div>
          </motion.div>
        </div>

        {/* Huge background text */}
        <div className="absolute top-1/2 -left-20 -translate-y-1/2 hidden xl:block opacity-[0.03]">
          <span className="text-[25rem] font-black italic select-none leading-none">FITNESS</span>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-20 border-b border-surface pb-8">
            <h2 className="text-4xl md:text-6xl font-black italic">نظام <span className="text-primary">الوحوش</span></h2>
            <span className="text-[10px] font-black tracking-widest text-[#555] uppercase">المزايا التقنية</span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0 border border-surface">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`p-12 border-surface ${i !== 2 ? 'md:border-l' : ''} hover:bg-surface transition-colors group`}
              >
                <div className="mb-8 opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all">
                  {f.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 italic uppercase">{f.title}</h3>
                <p className="text-[#888] leading-relaxed text-sm uppercase tracking-widest">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 bg-black border-b border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 md:order-1"
            >
              <h2 className="text-5xl md:text-8xl font-black italic mb-8 leading-none">
                فريق <span className="text-primary">الخبراء</span>
              </h2>
              <div className="space-y-8">
                <div className="border-r-4 border-primary pr-6">
                  <h4 className="text-xl font-black italic mb-2 tracking-tighter">اعتمادات دولية</h4>
                  <p className="text-[#888] text-xs font-bold uppercase tracking-widest leading-relaxed">
                    جميع مدربينا حاصلون على شهادات معتمدة من كبرى المنظمات الرياضية العالمية (NASM, ACE, ISSA).
                  </p>
                </div>
                <div className="border-r-4 border-primary pr-6">
                  <h4 className="text-xl font-black italic mb-2 tracking-tighter">خبرات متراكمة</h4>
                  <p className="text-[#888] text-xs font-bold uppercase tracking-widest leading-relaxed">
                    نمتلك فريقاً يتمتع بمتوسط خبرة يزيد عن 10 سنوات في تحويل الأجسام والتدريب الرياضي المحترف.
                  </p>
                </div>
                <div className="border-r-4 border-primary pr-6">
                  <h4 className="text-xl font-black italic mb-2 tracking-tighter">تخصصات متنوعة</h4>
                  <p className="text-[#888] text-xs font-bold uppercase tracking-widest leading-relaxed">
                    من كمال الأجسام واليوغا إلى التغذية العلاجية، نوفر لك الدعم الشامل تحت سقف واحد.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="grid grid-cols-2 gap-4 order-1 md:order-2"
            >
              <div className="aspect-[3/4] overflow-hidden border-2 border-surface grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/src/assets/images/trainer_male_1_1779013287067.png" className="w-full h-full object-cover" alt="Elite Coach" />
              </div>
              <div className="aspect-[3/4] overflow-hidden border-2 border-surface grayscale translate-y-8 hover:grayscale-0 transition-all duration-500">
                <img src="/src/assets/images/trainer_female_1_1779013301373.png" className="w-full h-full object-cover" alt="Elite Coach" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Online Coaching Section */}
      <section id="online-coaching" className="py-24 bg-zinc-900 border-b border-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none">
          <Zap size={400} strokeWidth={1} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-5xl md:text-8xl font-black italic mb-8 leading-none">
                تدريب <br />
                <span className="text-primary">أونلاين</span>
              </h2>
              <p className="text-[#888] text-xs font-bold uppercase tracking-[0.2em] leading-loose mb-12 max-w-md">
                مش لازم تكون قريب مننا عشان تتمرن معانا. بنوصلك في أي مكان في العالم وبنقدملك نظام متكامل يوصلك لهدفك بأسرع وقت.
              </p>
              <a href="#pricing" className="bg-primary text-black px-12 py-5 font-black text-xs tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 block w-fit">
                استكشف باقات الأونلاين
              </a>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {onlineCoachingFeatures.map((feat, i) => (
                <div key={i} className="bg-black p-8 border border-white/5 hover:border-primary transition-colors group">
                  <div className="text-primary mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                    {feat.icon}
                  </div>
                  <h4 className="text-lg font-black italic mb-3 tracking-tighter uppercase">{feat.title}</h4>
                  <p className="text-[#555] text-[10px] font-bold uppercase tracking-wider leading-relaxed group-hover:text-[#888] transition-colors">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-black border-y-8 border-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="border-r-4 border-black/10 pr-4">
              <div className="text-6xl font-black italic">1500+</div>
              <div className="font-black uppercase tracking-widest text-[10px]">Active Members</div>
            </div>
            <div className="border-r-4 border-black/10 pr-4">
              <div className="text-6xl font-black italic">25+</div>
              <div className="font-black uppercase tracking-widest text-[10px]">Pro Coaches</div>
            </div>
            <div className="border-r-4 border-black/10 pr-4">
              <div className="text-6xl font-black italic">10</div>
              <div className="font-black uppercase tracking-widest text-[10px]">Years Exp</div>
            </div>
            <div>
              <div className="text-6xl font-black italic">15</div>
              <div className="font-black uppercase tracking-widest text-[10px]">Safe Zones</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black italic">باقات <span className="text-primary">العضوية</span></h2>
            <p className="text-[#888] text-[10px] font-black uppercase tracking-[0.3em]">اشترك الآن واستمتع بالحرية</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-end">
            {membershipPlans.map((plan, i) => (
              <motion.div 
                key={i}
                className={`p-10 flex flex-col border-2 ${plan.highlight ? 'bg-primary text-black border-primary scale-105 z-10' : 'bg-surface border-border'}`}
              >
                <div className="flex justify-between items-start mb-12">
                  <h3 className="text-xs font-black tracking-widest uppercase opacity-70">{plan.name}</h3>
                  {plan.highlight && (
                    <span className="bg-black text-white px-3 py-1 text-[8px] font-black uppercase tracking-tighter">Recommended</span>
                  )}
                </div>

                <div className="mb-12">
                  <div className="text-6xl font-black italic leading-none">{plan.price}<span className="text-xs uppercase italic ml-2">L.E</span></div>
                  <div className="text-[10px] font-bold uppercase tracking-widest opacity-60 mt-2">لكل {plan.period}</div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-1.5 h-1.5 rotate-45 ${plan.highlight ? 'bg-black' : 'bg-primary'}`} />
                      <span className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 font-black text-xs tracking-widest uppercase transition-all ${plan.highlight ? 'bg-black text-white hover:bg-zinc-800' : 'bg-primary text-black hover:bg-white'}`}>
                  Join Mortal Squad
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section id="feedback" className="py-24 bg-zinc-950 border-b border-surface overflow-hidden relative">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] -rotate-90 pointer-events-none">
          <span className="text-[20rem] font-black italic">VOICES</span>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black italic">أصوات <span className="text-primary">الوحوش</span></h2>
            <p className="text-[#888] text-[10px] font-black uppercase tracking-[0.3em]">ماذا يقول أعضاء مورتال سكاود؟</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {feedbackData.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-black p-10 border border-surface hover:border-primary transition-colors group"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={14} 
                      className={idx < item.rating ? "fill-primary text-primary" : "text-[#333]"} 
                    />
                  ))}
                </div>
                <p className="text-sm font-bold uppercase tracking-wider leading-relaxed mb-8 text-gray-300 italic group-hover:text-white transition-colors">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center font-black text-primary border border-border">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-black tracking-widest uppercase">{item.name}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-black border-t-8 border-surface pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Dumbbell className="w-8 h-8 text-primary" />
                <span className="text-3xl font-black tracking-tighter text-white uppercase italic">مورتال</span>
              </div>
              <p className="text-[#888] text-xs font-bold uppercase tracking-[0.2em] leading-loose mb-10 max-w-sm">
                نحن لسنا مجرد صالة رياضية. نحن المجتمع الذي يبني العمالقة. انضم إلينا اليوم.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center border border-border group hover:bg-primary transition-all">
                  <Instagram className="group-hover:text-black" />
                </a>
                <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center border border-border group hover:bg-primary transition-all">
                  <Facebook className="group-hover:text-black" />
                </a>
                <a href="#" className="w-12 h-12 bg-surface flex items-center justify-center border border-border group hover:bg-primary transition-all">
                  <Twitter className="group-hover:text-black" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black tracking-widest text-[#555] mb-8 uppercase">Navigation</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><a href="#features" className="hover:text-primary">Facilities</a></li>
                <li><a href="#trainers" className="hover:text-primary">Elite Coaches</a></li>
                <li><a href="#online-coaching" className="hover:text-primary">Online Coaching</a></li>
                <li><a href="#feedback" className="hover:text-primary">Testimonials</a></li>
                <li><a href="#pricing" className="hover:text-primary">Membership</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black tracking-widest text-[#555] mb-8 uppercase">Reach Out</h4>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li className="flex items-center gap-3">Cairo, Egypt</li>
                <li className="text-primary">+20 123 456 7890</li>
                <li className="underline underline-offset-4">info@mortalgym.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-surface pt-10 flex justify-between text-[8px] font-black tracking-[0.4em] text-[#333] uppercase">
            <p>&copy; 2026 MORTAL GYM. BUILT FOR THE UNSTOPPABLE.</p>
            <p className="flex gap-4"><span>SHIPPING</span> <span>PRIVACY</span> <span>TERMS</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
