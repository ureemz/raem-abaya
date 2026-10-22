/* ==========================================================================
   RAËM — السكربت المشترك
   كل البيانات القابلة للتعديل (رقم واتساب، إنستغرام، الأسعار، أسماء المنتجات)
   موجودة في هذا الملف في مكان واحد لسهولة التعديل.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) إعدادات المتجر — عدّلي هذه القيم فقط
   -------------------------------------------------------------------------- */
const RAEM_CONFIG = {
  brand: "RAËM",

  /* رقم واتساب بالصيغة الدولية بدون + وبدون الصفر البادئ — مثال: 966542308267
     (للأرقام السعودية: 05XXXXXXXX  ←  966 5XXXXXXXX) */
  whatsappNumber: "966542308267",
  /* النسخة المعروضة للعميل */
  whatsappDisplay: "+966 54 230 8267",

  /* اسم حساب إنستغرام بدون @ */
  instagram: "raem.abayas",

  /* البريد الإلكتروني */
  email: "hello@raem.sa",

  /* رمز العملة */
  currency: "ر.س",

  /* نص رسالة واتساب الافتتاحية */
  waGreeting:
    "مرحبًا، أرغب في الاستفسار عن عبايات RAËM."
};

/* --------------------------------------------------------------------------
   2) بيانات المجموعة — مصدر الحقيقة الوحيد
   عدّلي الأسماء والأسعار والصور والتفاصيل من هنا فقط.
   - image  : مسار محلي داخل assets/img/products/ (سريع ويعمل دون إنترنت)
   - source : رابط الـ Pin الأصلي على Pinterest (للمتتبّع فقط — لا يُعرض)
   -------------------------------------------------------------------------- */

/* درجات الألوان — تُستخدم في بطاقات الألوان بالصفحة الرئيسية
   وفي ترتيب شرائح تصفية اللون. أضيفي لونًا جديدًا هنا فقط. */
const RAEM_COLORS = [
  {
    key: "black",
    name: "الأسود",
    tagline: "القطعة الأساسية",
    swatch: "#101614",
    image: "assets/img/products/lace-collar-black.jpg",
    alt: "عباية سوداء طويلة بدانتاز على الأكمام والطوق"
  },
  {
    key: "mocca",
    name: "الموكا",
    tagline: "دفء هادئ",
    swatch: "#6B4A34",
    image: "assets/img/products/ferace-mocha.jpg",
    alt: "عباية بدرجة الموكا الدافئة بقصّة مفتوحة انسيابية"
  },
  {
    key: "taupe",
    name: "التاوب",
    tagline: "حياد راقٍ",
    swatch: "#9A8B7E",
    image: "assets/img/products/open-taupe.jpg",
    alt: "عباية بلون التاوب المحايد على خلفية فاتحة"
  },
  {
    key: "ivory",
    name: "العاجي",
    tagline: "نقاء نهاري",
    swatch: "#E8E4DA",
    image: "assets/img/products/ivory-classic.jpg",
    alt: "عباية عاجية فاتحة بقصّة بسيطة أمام خلفية فاتحة"
  },
  {
    key: "grey",
    name: "الرمادي",
    tagline: "هدوء معاصر",
    swatch: "#6E7370",
    image: "assets/img/products/open-grey.jpg",
    alt: "عباية رمادية مفتوحة بانسدال واسع"
  }
];

/* أنواع التصميم — ترتيب شرائح تصفية التصميم.
   يُعرض فقط ما هو موجود فعلًا في PRODUCTS. */
const RAEM_DESIGNS = ["دانتاز", "كشخة", "مطرّزة", "مخمل", "مفتوحة", "كلاسيكية"];

const PRODUCTS = [
  /* ---------- القطع التي اخترتها من روابط Pinterest ---------- */
  {
    id: "salma",
    name: "عباية سلمى",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 549,
    featured: true,
    tag: "دانتاز مميّز",
    image: "assets/img/products/lace-collar-black.jpg",
    alt: "عباية سوداء طويلة بدانتاز على الأكمام والطوق مع حقيبة يد فاتحة",
    desc: "عباية سوداء طويلة بدانتاز ناعم على الأكمام والطوق، تُكمل بإطلالة هادئة وحقيبة يد فاتحة صغيرة.",
    details: [
      ["الخامة", "شيفون مبطّن بدانتاز"],
      ["الدانتاز", "على الأكمام والطوق"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ],
    source: "https://www.pinterest.com/pin/987062443350679469/"
  },
  {
    id: "maha",
    name: "عباية مها",
    color: "أسود",
    colorKey: "black",
    design: "مخمل",
    price: 690,
    featured: true,
    tag: "سهرة مخمل",
    image: "assets/img/products/velvet-lace-black.jpg",
    alt: "عباية مخمل سوداء طويلة بدانتاز على الأكمام والحواف",
    desc: "مخمل أسود فاخر ينسدل بثقل راقٍ، مع دانتاز على الأكمام والحواف يضيف حضورًا مسائيًا.",
    details: [
      ["الخامة", "مخمل فاخر"],
      ["الدانتاز", "على الأكمام والحواف"],
      ["المقاسات", "S — M — L"],
      ["المناسبات", "سهرات ومناسبات مسائية"]
    ],
    source: "https://www.pinterest.com/pin/1029705902321704786/"
  },
  {
    id: "noura",
    name: "عباية نورة",
    color: "موكا",
    colorKey: "mocca",
    design: "مفتوحة",
    price: 520,
    featured: false,
    tag: "",
    image: "assets/img/products/ferace-mocha.jpg",
    alt: "عباية بدرجة الموكا الدافئة بقصّة مفتوحة انسيابية",
    desc: "قصّة فيراس (فراخ) مفتوحة وانسيابية بدرجة الموكا الدافئة، خفيفة الوزن وسهلة الارتداء.",
    details: [
      ["الخامة", "كريب ناعم بانسدال واسع"],
      ["التصميم", "مفتوحة من الأمام"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ],
    source: "https://www.pinterest.com/pin/1105563408530036041/"
  },
  {
    id: "reem",
    name: "عباية ريم",
    color: "أسود",
    colorKey: "black",
    design: "كلاسيكية",
    price: 590,
    featured: false,
    tag: "أكمام وردية",
    image: "assets/img/products/rose-sleeves-black.jpg",
    alt: "عباية سوداء طويلة بأكمام وردية فاتحة مع طقم رأس مطابق",
    desc: "عباية سوداء طويلة تتباين معها أكمام وردية فاتحة، مع طقم رأس مطابق يكمّل الإطلالة.",
    details: [
      ["الخامة", "بوبلين ثقيل بانسدال ناعم"],
      ["التفصيل", "أكمام بلون الورد الفاتح"],
      ["المقاسات", "S — M — L — XL"],
      ["الإطلالة", "مع طقم رأس مطابق"]
    ],
    source: "https://www.pinterest.com/pin/677439968977890172/"
  },
  {
    id: "dana",
    name: "عباية دانة",
    color: "رمادي",
    colorKey: "grey",
    design: "مفتوحة",
    price: 560,
    featured: true,
    tag: "طبقتان",
    image: "assets/img/products/open-grey-blue.jpg",
    alt: "عباية رمادية مفتوحة بطبقة داخلية زرقاء فاتحة",
    desc: "طبقتان بملمس مينيمال: طبقة خارجية رمادية تنفتح على طبقة داخلية زرقاء فاتحة بانسدال واسع.",
    details: [
      ["الخامة", "كريب خفيف بانسدال ناعم"],
      ["الطبقات", "خارجية رمادية + داخلية زرقاء فاتحة"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ],
    source: "https://www.pinterest.com/pin/802485227377355952/"
  },
  {
    id: "shahd",
    name: "عباية شهد",
    color: "أسود",
    colorKey: "black",
    design: "مطرّزة",
    price: 620,
    featured: true,
    tag: "تطريز وردي",
    image: "assets/img/products/embroidered-floral-black.jpg",
    alt: "عباية سوداء بتطريز وردي زهري على التصميم",
    desc: "تطريز وردي زهري موزّع على عباية سوداء، تُنسّق مع الشيلة لإطلالة مسائية متقنة.",
    details: [
      ["الخامة", "كريب مبطّن بتطريز"],
      ["التطريز", "زهري وردي"],
      ["المقاسات", "S — M — L — XL"],
      ["الإطلالة", "تنسّق مع الشيلة"]
    ],
    source: "https://www.pinterest.com/pin/961588957933551633/"
  },
  {
    id: "layan",
    name: "عباية ليان",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 520,
    featured: false,
    tag: "أساور مزيّنة",
    image: "assets/img/products/floral-cuffs-black.jpg",
    alt: "عباية سوداء بدانتاز زهري وردي وأبيض على الأساور",
    desc: "أساور بدانتاز زهري بزهور وردية وأبيض دقيقة على عباية سوداء، تفصيل صغير يلفت النظر.",
    details: [
      ["الخامة", "شيفون مبطّن"],
      ["الدانتاز", "زهري وردي وأبيض على الأساور"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ],
    source: "https://www.pinterest.com/pin/582934745565466877/"
  },
  {
    id: "najma",
    name: "عباية نجمة",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 450,
    featured: false,
    tag: "مقاس واحد",
    image: "assets/img/products/najma-lace-black.jpg",
    alt: "عباية سوداء بشريط دانتاز سادة على كم طويل واسع",
    desc: "شريط دانتاز سادة على كم طويل واسع، تصميم عملي يناسب الربيع والخريف.",
    details: [
      ["الخامة", "كريب مطفي"],
      ["الدانتاز", "سادة على الأكمام والحواف"],
      ["المقاسات", "مقاس واحد واسع"],
      ["الموسم", "الربيع والخريف"]
    ],
    source: "https://www.pinterest.com/pin/1057079343809238591/"
  },
  {
    id: "ghaim",
    name: "عباية غيم",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 650,
    featured: true,
    tag: "دانتاز أبيض",
    image: "assets/img/products/white-lace-black.jpg",
    alt: "عباية سوداء بدانتاز أبيض على الأكمام والأمام",
    desc: "دانتاز أبيض واضح على الأكمام وواجهة العباية، تباين هادئ يبرز القوام.",
    details: [
      ["الخامة", "شيفون مبطّن"],
      ["الدانتاز", "أبيض على الأكمام والأمام"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ],
    source: "https://www.pinterest.com/pin/1108518895818916276/"
  },
  {
    id: "kisra",
    name: "عباية كسرى",
    color: "أسود",
    colorKey: "black",
    design: "كشخة",
    price: 570,
    featured: true,
    tag: "خليجي",
    image: "assets/img/products/kashkha-blackberry.jpg",
    alt: "عباية كشخة بلاك بيري بكسرات وشك على عباية سوداء",
    desc: "كشخة خليجية بقماش بلاك بيري مع كسرات وشك، تصميم خليجي أصيل للشيلة اليومية.",
    details: [
      ["الخامة", "بلاك بيري (قماش كشخة)"],
      ["التفصيل", "كسرات وشك"],
      ["الإطلالة", "مع الشيلة"],
      ["المقاسات", "S — M — L — XL"]
    ],
    source: "https://www.pinterest.com/pin/1052505375414539739/"
  },

  /* ---------- قطع إضافية من نفس النوع ---------- */
  {
    id: "arwa",
    name: "عباية أروى",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 520,
    featured: false,
    tag: "",
    image: "assets/img/products/lace-wide-sleeve-black.jpg",
    alt: "عباية سوداء بدانتاز وأكمام واسعة",
    desc: "دانتاز على أكمام واسعة وقصّة منسدلة، قطعة يومية بمظهر راقٍ.",
    details: [
      ["الخامة", "شيفون مبطّن"],
      ["الدانتاز", "على الأكمام الواسعة"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ]
  },
  {
    id: "ghazal",
    name: "عباية غزل",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 490,
    featured: false,
    tag: "",
    image: "assets/img/products/lace-black-02.jpg",
    alt: "عباية سوداء بدانتاز على الأكمام والحواف",
    desc: "دانتاز ناعم على الأكمام والحواف بانسدال متوازن، مناسبة للإطلالة اليومية.",
    details: [
      ["الخامة", "كريب مبطّن خفيف"],
      ["الدانتاز", "على الأكمام والحواف"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ]
  },
  {
    id: "bayan",
    name: "عباية بيان",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 560,
    featured: false,
    tag: "",
    image: "assets/img/products/lace-black-03.jpg",
    alt: "عباية سوداء بدانتاز بقصّة واسعة",
    desc: "دانتاز موزّع على قطعة واسعة الانسدال، حضور هادئ يصلح للسهرة.",
    details: [
      ["الخامة", "شيفون مطفي"],
      ["الدانتاز", "على أطراف القماش"],
      ["المقاسات", "S — M — L"],
      ["المناسبات", "سهرات وزيارات"]
    ]
  },
  {
    id: "raghad",
    name: "عباية رغد",
    color: "أسود",
    colorKey: "black",
    design: "دانتاز",
    price: 500,
    featured: false,
    tag: "",
    image: "assets/img/products/lace-black-04.jpg",
    alt: "عباية سوداء بدانتاز أبيض أمام خلفية فاتحة",
    desc: "دانتاز أبيض ناعم على عباية سوداء، تباين هادئ يعمل في الإطلالة النهارية.",
    details: [
      ["الخامة", "شيفون خفيف"],
      ["الدانتاز", "أبيض ناعم"],
      ["المقاسات", "S — M — L — XL"],
      ["الاستخدام", "نهاري ويومي"]
    ]
  },
  {
    id: "saha",
    name: "عباية سهى",
    color: "موكا",
    colorKey: "mocca",
    design: "دانتاز",
    price: 540,
    featured: false,
    tag: "",
    image: "assets/img/products/lace-mocha.jpg",
    alt: "عباية بيج موكا بدانتاز خفيف",
    desc: "درجة موكا دافئة مع دانتاز خفيف على الحواف، إطلالة هادئة ومريحة.",
    details: [
      ["الخامة", "كريب ناعم"],
      ["الدانتاز", "خفيف على الحواف"],
      ["المقاسات", "S — M — L — XL"],
      ["اللون", "موكا دافئ"]
    ]
  },
  {
    id: "hessa",
    name: "عباية حصة",
    color: "موكا",
    colorKey: "mocca",
    design: "كشخة",
    price: 590,
    featured: false,
    tag: "",
    image: "assets/img/products/kashkha-mocha.jpg",
    alt: "عباية كشخة بدرجة الموكا البنية",
    desc: "كشخة بدرجة بنية دافئة وتطريز موزّع، قطعة خليجية بروح عصرية.",
    details: [
      ["الخامة", "قماش كشخة مطفي"],
      ["التفصيل", "تطريز موزّع"],
      ["المقاسات", "S — M — L — XL"],
      ["الإطلالة", "مع الشيلة"]
    ]
  },
  {
    id: "dalal",
    name: "عباية دلال",
    color: "أسود",
    colorKey: "black",
    design: "كشخة",
    price: 570,
    featured: false,
    tag: "",
    image: "assets/img/products/kashkha-black-01.jpg",
    alt: "عباية كشخة سوداء بلمسات وردية",
    desc: "كشخة سوداء بلمسات وردية خفيفة، توازن بين الرسمية والحيوية.",
    details: [
      ["الخامة", "قماش كشخة"],
      ["التفصيل", "لمسات وردية"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ]
  },
  {
    id: "ghada",
    name: "عباية غادة",
    color: "أسود",
    colorKey: "black",
    design: "كشخة",
    price: 560,
    featured: false,
    tag: "",
    image: "assets/img/products/kashkha-black-02.jpg",
    alt: "عباية كشخة سوداء بتطريز وردي",
    desc: "كشخة سوداء بتطريز وردي على الأكمام، إطلالة خليجية راقية.",
    details: [
      ["الخامة", "قماش كشخة بتطريز"],
      ["التطريز", "وردي على الأكمام"],
      ["المقاسات", "S — M — L — XL"],
      ["الإطلالة", "مع الشيلة"]
    ]
  },
  {
    id: "afnan",
    name: "عباية أفنان",
    color: "رمادي",
    colorKey: "grey",
    design: "مفتوحة",
    price: 510,
    featured: false,
    tag: "",
    image: "assets/img/products/open-grey.jpg",
    alt: "عباية رمادية مفتوحة بانسدال واسع",
    desc: "عباية مفتوحة بدرجة رمادية هادئة وانسدال واسع، خطوط بسيطة لا تُكلّف.",
    details: [
      ["الخامة", "كريب خفيف"],
      ["التصميم", "مفتوحة من الأمام"],
      ["المقاسات", "S — M — L — XL"],
      ["اللون", "رمادي هادئ"]
    ]
  },
  {
    id: "rawan",
    name: "عباية روان",
    color: "أسود",
    colorKey: "black",
    design: "مخمل",
    price: 680,
    featured: false,
    tag: "",
    image: "assets/img/products/velvet-black-01.jpg",
    alt: "عباية مخمل سوداء بقصّة منسدلة",
    desc: "مخمل أسود بانسدال ثقيل وحيوي، قطعة مسائية بلمسة فاخرة.",
    details: [
      ["الخامة", "مخمل فاخر"],
      ["المقاسات", "S — M — L"],
      ["الطول", "طويل حتى الكاحل"],
      ["المناسبات", "سهرات ومناسبات"]
    ]
  },
  {
    id: "shadhi",
    name: "عباية شذى",
    color: "أسود",
    colorKey: "black",
    design: "مخمل",
    price: 660,
    featured: false,
    tag: "",
    image: "assets/img/products/velvet-black-02.jpg",
    alt: "عباية مخمل سوداء بقصّة انسيابية",
    desc: "مخمل أسود بقصّة انسيابية أوسع، توازن بين الفخامة والراحة.",
    details: [
      ["الخامة", "مخمل بانسدال انسيابي"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"],
      ["الاستخدام", "مناسبات وسهرات"]
    ]
  },
  {
    id: "amal",
    name: "عباية أمل",
    color: "أسود",
    colorKey: "black",
    design: "مطرّزة",
    price: 620,
    featured: false,
    tag: "",
    image: "assets/img/products/embroidered-black-02.jpg",
    alt: "عباية سوداء بتطريز هادئ على التصميم",
    desc: "تطريز هادئ موزّع على عباية سوداء، تفاصيل خفيفة تظهر مع الحركة.",
    details: [
      ["الخامة", "كريب مبطّن بتطريز"],
      ["التطريز", "هادئ وموزّع"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ]
  },
  {
    id: "maram",
    name: "عباية مرام",
    color: "تاوب",
    colorKey: "taupe",
    design: "مفتوحة",
    price: 520,
    featured: false,
    tag: "",
    image: "assets/img/products/open-taupe.jpg",
    alt: "عباية بلون التاوب المحايد مفتوحة من الأمام",
    desc: "درجة تاوب محايدة بقصّة مفتوحة، سهلة التنسيق مع أي إطلالة.",
    details: [
      ["الخامة", "كريب ناعم"],
      ["التصميم", "مفتوحة من الأمام"],
      ["المقاسات", "S — M — L — XL"],
      ["اللون", "تاوب محايد"]
    ]
  },
  {
    id: "farah",
    name: "عباية فرح",
    color: "عاجي",
    colorKey: "ivory",
    design: "كلاسيكية",
    price: 480,
    featured: false,
    tag: "",
    image: "assets/img/products/ivory-classic.jpg",
    alt: "عباية عاجية فاتحة بقصّة بسيطة أمام خلفية فاتحة",
    desc: "درجة عاجية صافية بقصّة كلاسيكية بسيطة، قطعة نهارية مريحة.",
    details: [
      ["الخامة", "قطن ناعم"],
      ["التصميم", "كلاسيكي بسيط"],
      ["المقاسات", "S — M — L — XL"],
      ["الطول", "طويل حتى الكاحل"]
    ]
  }
];

/* --------------------------------------------------------------------------
   3) أدوات مساعدة
   -------------------------------------------------------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/** رقم واتساب بصيغة wa.me */
function waNumber() {
  return String(RAEM_CONFIG.whatsappNumber).replace(/\D/g, "");
}

/** رابط واتساب بنص جاهز */
function waLink(text) {
  return `https://wa.me/${waNumber()}?text=${encodeURIComponent(text || RAEM_CONFIG.waGreeting)}`;
}

/** نص طلب منتج عبر واتساب */
function orderMessage(product) {
  return [
    `مرحبًا ${RAEM_CONFIG.brand}، أرغب بطلب:`,
    "",
    `• ${product.name}`,
    `• اللون: ${product.color}`,
    `• التصنيف: ${product.design}`,
    `• السعر: ${product.price} ${RAEM_CONFIG.currency}`,
    "",
    "هل يمكن تأكيد التوفر ومدة الشحن؟"
  ].join("\n");
}

function money(n) {
  return `${n} <span class="cur">${RAEM_CONFIG.currency}</span>`;
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

/* --------------------------------------------------------------------------
   4) روابط واتساب الثابتة (Header / Footer / زر عائم)
   -------------------------------------------------------------------------- */
function applyWhatsAppLinks() {
  $$("[data-wa]").forEach((el) => {
    const custom = el.dataset.waText || "";
    el.setAttribute("href", waLink(custom));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  const float = $("#waFloat");
  if (float) {
    float.setAttribute("href", waLink(RAEM_CONFIG.waGreeting));
    float.setAttribute("target", "_blank");
    float.setAttribute("rel", "noopener");
    const num = $(".wa-number", float);
    if (num) num.textContent = RAEM_CONFIG.whatsappDisplay;
  }

  const ig = $("[data-instagram]");
  if (ig) {
    ig.setAttribute("href", `https://instagram.com/${RAEM_CONFIG.instagram}`);
    ig.setAttribute("target", "_blank");
    ig.setAttribute("rel", "noopener");
  }

  const mail = $("[data-email]");
  if (mail) {
    mail.setAttribute("href", `mailto:${RAEM_CONFIG.email}`);
  }
}

/* --------------------------------------------------------------------------
   5) بناء بطاقات المنتجات
   -------------------------------------------------------------------------- */

/* أسماء الألوان human-readable حسب المفتاح */
function colorLabel(key) {
  const c = RAEM_COLORS.find((x) => x.key === key);
  if (c) return c.name;
  const p = PRODUCTS.find((x) => x.colorKey === key);
  return p ? p.color : key;
}

/* مفاتيح الألوان الموجودة فعليًا في المجموعة — بالترتيب المعرّف في RAEM_COLORS */
function activeColorKeys() {
  const present = new Set(PRODUCTS.map((p) => p.colorKey));
  const ordered = RAEM_COLORS.map((c) => c.key).filter((k) => present.has(k));
  PRODUCTS.forEach((p) => {
    if (!ordered.includes(p.colorKey)) ordered.push(p.colorKey);
  });
  return ordered;
}

/* أنواع التصميم الموجودة فعليًا — بالترتيب المعرّف في RAEM_DESIGNS */
function activeDesigns() {
  const present = new Set(PRODUCTS.map((p) => p.design));
  const ordered = RAEM_DESIGNS.filter((d) => present.has(d));
  PRODUCTS.forEach((p) => {
    if (!ordered.includes(p.design)) ordered.push(p.design);
  });
  return ordered;
}

function chipHTML(attr, value, label, active) {
  return `<button class="chip${active ? " is-active" : ""}" type="button" ${attr}="${escapeHtml(value)}">${escapeHtml(label)}</button>`;
}

/* شرائح التصفية — تُبنى من البيانات تلقائيًا حتى لا تتعارض مع المجموعة */
function buildFilterChips() {
  const colorGroup = $("[data-filter-group='color']");
  if (colorGroup) {
    const label = colorGroup.querySelector(".filter-label");
    const labelHTML = label ? label.outerHTML : "";
    const chips = activeColorKeys()
      .map((k) => chipHTML("data-filter-color", k, colorLabel(k), false))
      .join("");
    colorGroup.innerHTML = labelHTML + chipHTML("data-filter-color", "all", "الكل", true) + chips;
  }

  const designGroup = $("[data-filter-group='design']");
  if (designGroup) {
    const label = designGroup.querySelector(".filter-label");
    const labelHTML = label ? label.outerHTML : "";
    const chips = activeDesigns()
      .map((d) => chipHTML("data-filter-design", d, d, false))
      .join("");
    designGroup.innerHTML = labelHTML + chipHTML("data-filter-design", "all", "الكل", true) + chips;
  }
}

/* بطاقات الألوان في الصفحة الرئيسية — تُبنى من RAEM_COLORS */
function renderColorCards() {
  const container = $("[data-colors]");
  if (!container) return;
  container.innerHTML = RAEM_COLORS.map(
    (c, i) => `
    <a class="color-card reveal" data-delay="${i + 1}" href="collection.html?color=${encodeURIComponent(c.key)}">
      <img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.alt)}" loading="lazy" decoding="async" width="700" height="933">
      <div class="color-card-body">
        <div>
          <h3>${escapeHtml(c.name)}</h3>
          <span>${escapeHtml(c.tagline)}</span>
        </div>
        <span class="swatch-dot" style="background:${escapeHtml(c.swatch)}" aria-hidden="true"></span>
      </div>
    </a>`
  ).join("");
}

function productCardHTML(p) {
  const tag = p.tag ? `<span class="product-tag">${escapeHtml(p.tag)}</span>` : "";
  return `
    <article class="product-card" data-id="${escapeHtml(p.id)}">
      <div class="product-media">
        ${tag}
        <img src="${p.image}" alt="${escapeHtml(p.alt)}" loading="lazy" decoding="async" width="900" height="1200">
        <button class="product-add" type="button" data-add="${escapeHtml(p.id)}" aria-label="أضيفي ${escapeHtml(p.name)} إلى حقيبة التسوق">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </button>
      </div>
      <div class="product-body">
        <h3 class="product-name">${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.desc)}</p>
        <p class="product-meta">
          <span>${escapeHtml(p.color)}</span>
          <span class="dot" aria-hidden="true"></span>
          <span>${escapeHtml(p.design)}</span>
        </p>
        <div class="product-foot">
          <span class="product-price">${money(p.price)}</span>
          <div class="product-actions">
            <button class="btn btn--sm btn--dark" type="button" data-details="${escapeHtml(p.id)}">عرض التفاصيل</button>
            <a class="btn btn--sm btn--gold" href="${escapeHtml(waLink(orderMessage(p)))}" target="_blank" rel="noopener">اطلبي عبر واتساب</a>
          </div>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const containers = $$("[data-products]");
  containers.forEach((container) => {
    const limit = parseInt(container.dataset.limit || "0", 10);
    const featuredOnly = container.dataset.featured === "true";
    let list = PRODUCTS.slice();
    if (featuredOnly) list = list.filter((p) => p.featured);
    if (limit > 0) list = list.slice(0, limit);
    container.innerHTML = list.map(productCardHTML).join("");
  });
}

/* --------------------------------------------------------------------------
   6) الحقيبة التجريبية (واجهة فقط — بلا خادم ولا دفع)
   -------------------------------------------------------------------------- */
const Cart = {
  items: [],

  add(id) {
    const product = PRODUCTS.find((p) => p.id === id);
    if (!product) return;
    const existing = this.items.find((i) => i.id === id);
    if (existing) existing.qty += 1;
    else this.items.push({ id, qty: 1 });
    this.render();
  },

  remove(id) {
    this.items = this.items.filter((i) => i.id !== id);
    this.render();
  },

  get count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  get total() {
    return this.items.reduce((sum, i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return sum + (p ? p.price * i.qty : 0);
    }, 0);
  },

  message() {
    const lines = this.items.map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return "";
      return [
        `• ${p.name} × ${i.qty}`,
        `   اللون: ${p.color} — التصنيف: ${p.design}`,
        `   السعر: ${p.price * i.qty} ${RAEM_CONFIG.currency}`
      ].join("\n");
    });
    return [
      `مرحبًا ${RAEM_CONFIG.brand}، أرغب بطلب:`,
      "",
      ...lines,
      "",
      `الإجمالي التقديري: ${this.total} ${RAEM_CONFIG.currency}`,
      "هل يمكن تأكيد التوفر وطريقة الدفع؟"
    ].join("\n");
  },

  render() {
    const body = $("#cartItems");
    const countEl = $("[data-cart-count]");
    const totalEl = $("#cartTotal");
    const orderBtn = $("#cartOrderBtn");

    if (countEl) {
      countEl.textContent = this.count;
      countEl.classList.toggle("is-visible", this.count > 0);
    }

    if (!body) return;

    if (this.items.length === 0) {
      body.innerHTML = `
        <div class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
          <p>حقيبة التسوق فارغة.</p>
          <a class="btn btn--sm btn--dark" href="collection.html">تصفّحي المجموعة</a>
        </div>`;
    } else {
      body.innerHTML = this.items
        .map((i) => {
          const p = PRODUCTS.find((x) => x.id === i.id);
          if (!p) return "";
          return `
            <div class="cart-line">
              <img src="${p.image}" alt="${escapeHtml(p.alt)}" loading="lazy" width="132" height="176">
              <div>
                <p class="cl-name">${escapeHtml(p.name)}</p>
                <p class="cl-price">${p.price} ${RAEM_CONFIG.currency} × ${i.qty}</p>
              </div>
              <button class="cl-remove" type="button" data-remove="${escapeHtml(p.id)}">إزالة</button>
            </div>`;
        })
        .join("");
    }

    if (totalEl) totalEl.innerHTML = `${this.total} <span class="cur">${RAEM_CONFIG.currency}</span>`;
    if (orderBtn) {
      orderBtn.setAttribute("href", waLink(this.message()));
      orderBtn.setAttribute("target", "_blank");
      orderBtn.setAttribute("rel", "noopener");
      orderBtn.classList.toggle("btn--dark", this.items.length > 0);
      orderBtn.classList.toggle("btn--gold", this.items.length === 0);
    }
  }
};

/* --------------------------------------------------------------------------
   7) فتح/إغلاق الطبقات (قائمة الجوال، الحقيبة، نافذة التفاصيل)
   -------------------------------------------------------------------------- */
function openLayer(layer) {
  if (!layer) return;
  layer.classList.add("is-open");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-locked");
}

function closeLayer(layer) {
  if (!layer) return;
  layer.classList.remove("is-open");
  layer.setAttribute("aria-hidden", "true");
  if (!$(".drawer.is-open") && !$(".modal.is-open")) {
    document.body.classList.remove("is-locked");
  }
}

function initLayers() {
  const navToggle = $("#navToggle");
  const mobileNav = $("#mobileNav");
  const cartBtn = $("#cartBtn");
  const drawer = $("#cartDrawer");
  const scrim = $("#scrim");
  const modal = $("#productModal");

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("is-locked", open);
    });
    $$("a", mobileNav).forEach((a) =>
      a.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("is-locked");
      })
    );
  }

  if (cartBtn && drawer) {
    cartBtn.addEventListener("click", () => {
      if (drawer.classList.contains("is-open")) closeLayer(drawer);
      else {
        openLayer(drawer);
        if (scrim) scrim.classList.add("is-open");
      }
    });
  }

  if (scrim) {
    scrim.addEventListener("click", () => {
      closeLayer(drawer);
      closeLayer(modal);
      scrim.classList.remove("is-open");
    });
  }

  if (modal) {
    $$("[data-close-modal]", modal).forEach((b) =>
      b.addEventListener("click", () => {
        closeLayer(modal);
        if (scrim) scrim.classList.remove("is-open");
      })
    );
  }

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    closeLayer(drawer);
    closeLayer(modal);
    if (scrim) scrim.classList.remove("is-open");
    if (mobileNav) {
      mobileNav.classList.remove("is-open");
      navToggle && navToggle.setAttribute("aria-expanded", "false");
    }
    document.body.classList.remove("is-locked");
  });
}

/* --------------------------------------------------------------------------
   8) نافذة تفاصيل المنتج
   -------------------------------------------------------------------------- */
function openProductModal(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const modal = $("#productModal");
  if (!p || !modal) return;

  $("#modalImg").src = p.image;
  $("#modalImg").alt = p.alt;
  $("#modalName").textContent = p.name;
  modal.dataset.productId = p.id;
  $("#modalPrice").innerHTML = money(p.price);
  $("#modalDesc").textContent = p.desc;
  $("#modalSpecs").innerHTML = p.details
    .map(([k, v]) => `<li><span class="k">${escapeHtml(k)}</span><span class="v">${escapeHtml(v)}</span></li>`)
    .join("");

  const waBtn = $("#modalWaBtn");
  waBtn.setAttribute("href", waLink(orderMessage(p)));
  waBtn.setAttribute("target", "_blank");
  waBtn.setAttribute("rel", "noopener");

  openLayer(modal);
  const scrim = $("#scrim");
  if (scrim) scrim.classList.add("is-open");
}

/* --------------------------------------------------------------------------
   9)delegated actions: أزرار البطاقات
   -------------------------------------------------------------------------- */
function initProductActions() {
  document.addEventListener("click", (e) => {
    const detailsBtn = e.target.closest("[data-details]");
    const addBtn = e.target.closest("[data-add]");
    const removeBtn = e.target.closest("[data-remove]");

    if (detailsBtn) {
      openProductModal(detailsBtn.dataset.details);
      return;
    }

    if (addBtn) {
      Cart.add(addBtn.dataset.add);
      addBtn.classList.add("is-added");
      setTimeout(() => addBtn.classList.remove("is-added"), 1400);
      return;
    }

    if (removeBtn) {
      Cart.remove(removeBtn.dataset.remove);
      return;
    }

    if (e.target.closest("[data-add-from-modal]")) {
      const id = $("#modalName") && $("#productModal")
        ? $("#productModal").dataset.productId
        : null;
      if (id) {
        Cart.add(id);
        const btn = e.target.closest("[data-add-from-modal]");
        const original = btn.textContent;
        btn.textContent = "تمت الإضافة";
        setTimeout(() => { btn.textContent = original; }, 1600);
      }
    }
  });
}

/* --------------------------------------------------------------------------
   10) التصفية والترتيب — صفحة المجموعة
   -------------------------------------------------------------------------- */
function initCollection() {
  const grid = $("#collectionGrid");
  if (!grid) return;

  /* بناء شرائح اللون والتصميم من بيانات المجموعة أولاً */
  buildFilterChips();

  const chipsColor = $$("[data-filter-color]");
  const chipsDesign = $$("[data-filter-design]");
  const range = $("#priceRange");
  const rangeValue = $("#priceValue");
  const sortSel = $("#sortSelect");
  const countEl = $("#resultsCount");
  const noResults = $("#noResults");
  const resetBtn = $("#resetFilters");

  /* أقصى سعر للفلتر — تعريف واحد فقط.
     المصدر: خاصية max في input#priceRange داخل collection.html. */
  const PRICE_MAX = range ? parseInt(range.max, 10) : 500;

  /* الألوان المتاحة مشتقة من المنتجات نفسها */
  const validColors = activeColorKeys();
  const requestedColor = new URLSearchParams(window.location.search).get("color");
  const state = {
    color: validColors.includes(requestedColor) ? requestedColor : "all",
    design: "all",
    maxPrice: PRICE_MAX,
    sort: "featured"
  };

  chipsColor.forEach((chip) =>
    chip.classList.toggle("is-active", chip.dataset.filterColor === state.color)
  );
  if (range) range.value = state.maxPrice;

  function apply() {
    let list = PRODUCTS.filter((p) => {
      const okColor = state.color === "all" || p.colorKey === state.color;
      const okDesign = state.design === "all" || p.design === state.design;
      const okPrice = p.price <= state.maxPrice;
      return okColor && okDesign && okPrice;
    });

    if (state.sort === "asc") list = list.slice().sort((a, b) => a.price - b.price);
    else if (state.sort === "desc") list = list.slice().sort((a, b) => b.price - a.price);
    else if (state.sort === "name") list = list.slice().sort((a, b) => a.name.localeCompare(b.name, "ar"));

    grid.innerHTML = list.length
      ? list.map(productCardHTML).join("")
      : "";

    if (noResults) noResults.classList.toggle("is-visible", list.length === 0);
    if (countEl) {
      countEl.textContent = list.length === PRODUCTS.length
        ? `عرض ${list.length} قطعة من ${PRODUCTS.length}`
        : `عرض ${list.length} قطعة`;
    }
    if (rangeValue) rangeValue.textContent = `حتى ${state.maxPrice} ${RAEM_CONFIG.currency}`;
  }

  chipsColor.forEach((chip) =>
    chip.addEventListener("click", () => {
      state.color = chip.dataset.filterColor;
      chipsColor.forEach((c) => c.classList.toggle("is-active", c === chip));
      apply();
    })
  );

  chipsDesign.forEach((chip) =>
    chip.addEventListener("click", () => {
      state.design = chip.dataset.filterDesign;
      chipsDesign.forEach((c) => c.classList.toggle("is-active", c === chip));
      apply();
    })
  );

  if (range) {
    range.addEventListener("input", () => {
      state.maxPrice = parseInt(range.value, 10);
      apply();
    });
  }

  if (sortSel) {
    sortSel.addEventListener("change", () => {
      state.sort = sortSel.value;
      apply();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      state.color = "all";
      state.design = "all";
      state.maxPrice = PRICE_MAX;
      state.sort = "featured";
      chipsColor.forEach((c) => c.classList.toggle("is-active", c.dataset.filterColor === "all"));
      chipsDesign.forEach((c) => c.classList.toggle("is-active", c.dataset.filterDesign === "all"));
      if (range) range.value = PRICE_MAX;
      if (sortSel) sortSel.value = "featured";
      apply();
    });
  }

  apply();
}

/* --------------------------------------------------------------------------
   11) الأسئلة الشائعة
   -------------------------------------------------------------------------- */
function initFaq() {
  $$(".faq-q").forEach((btn) => {
    btn.addEventListener("click", () => {
      const open = btn.getAttribute("aria-expanded") === "true";
      $$(".faq-q").forEach((b) => {
        if (b !== btn) b.setAttribute("aria-expanded", "false");
      });
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
}

/* --------------------------------------------------------------------------
   12) نموذج التواصل — واجهة فقط
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  const status = $("#formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!status) return;
    status.classList.add("is-visible");
    status.innerHTML = `
      <strong>تم التحقق من الحقول — دون إرسال.</strong><br>
      هذا النموذج واجهة عرض فقط (HTML/CSS/JavaScript) ولا يوجد خادم مرتبط به،
      لذلك لم تُرسل البيانات إلى أي جهة. لربطه بخدمة إرسال فعلية، يُضاف
      <code>action</code> إلى مزوّد مثل Formspree أو Netlify Forms أو خدمة
      بريد داخلية.
      <br><br>
      للاستفسار المباشر: واتساب <a href="${waLink(RAEM_CONFIG.waGreeting)}" target="_blank" rel="noopener">${escapeHtml(RAEM_CONFIG.whatsappDisplay)}</a>
      أو البريد <a href="mailto:${escapeHtml(RAEM_CONFIG.email)}">${escapeHtml(RAEM_CONFIG.email)}</a>.`;
    form.reset();
  });
}

/* --------------------------------------------------------------------------
   13) الترويسة عند التمرير + كشف العناصر
   -------------------------------------------------------------------------- */
function initScroll() {
  const header = $("#siteHeader");
  const onScroll = () => {
    if (header) header.classList.toggle("is-solid", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const items = $$(".reveal");
  if (!items.length) return;

  const show = (el) => el.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    items.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  items.forEach((i) => io.observe(i));

  /* شبكة أمان: لو تعذّر عمل المراقب لأي سبب، نكشف ما هو ظاهر في الشاشة
     عند التحميل وعند التمرير حتى لا يبقى أي محتوى مخفيًا بشكل دائم. */
  let ticking = false;
  const revealVisible = () => {
    ticking = false;
    const vh = window.innerHeight || 0;
    items.forEach((el) => {
      if (el.classList.contains("is-visible")) return;
      const r = el.getBoundingClientRect();
      if (r.top < vh * 1.05 && r.bottom > -80) {
        show(el);
        io.unobserve(el);
      }
    });
  };
  const onRevealTick = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(revealVisible);
  };

  requestAnimationFrame(revealVisible);
  window.addEventListener("load", onRevealTick);
  window.addEventListener("resize", onRevealTick, { passive: true });
  window.addEventListener("scroll", onRevealTick, { passive: true });
  setTimeout(onRevealTick, 400);
  setTimeout(onRevealTick, 1500);
  setTimeout(onRevealTick, 4000);
}

/* --------------------------------------------------------------------------
   14) التشغيل
   -------------------------------------------------------------------------- */
function init() {
  applyWhatsAppLinks();
  renderProducts();
  renderColorCards();
  Cart.render();
  initLayers();
  initProductActions();
  initCollection();
  initFaq();
  initContactForm();
  initScroll();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
