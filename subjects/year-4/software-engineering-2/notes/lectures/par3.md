# المحاضرة 3 — الوحدة C: التصميم والتنفيذ (محاضرة 4)

> طبقة مراجعة إضافية — ملخص مفاهيم + أسئلة من دورات سابقة وأسلوب الدكتور.
> المصدر الأساسي للأسئلة الحقيقية: بنك دورات 2023–2026.

---

## الجزء الأول: ملخص المفاهيم

### الفقرة 0أ: Design مقابل Implementation + متى نوثّق رسمياً

**من المحاضرة:** محاضرة 4، §1-2 | `Design` (نشاط إبداعي: تحديد المكونات وعلاقاتها بناءً على المتطلبات) → `Implementation` (تحقيق التصميم كبرنامج فعلي). التوثيق الرسمي بـ`UML` مهم أكتر مع: منهج كائني التوجه + فريق أكبر من شخص — مو إلزامي لكل مشروع (مثلاً سكربت Python بسيط لشخص واحد ما يحتاج UML مفصّل).

### الفقرة 0ب: خطوات التصميم الكائني التوجه الخمس (OOD Steps)

**من المحاضرة:** محاضرة 4، §3 | 5 خطوات مرتبطة تسلسلياً (كل خطوة تبني على السابقة): **(1)** فهم السياق والتفاعلات (`Context & Interaction Models`) **(2)** التصميم المعماري (`Architectural Design`) **(3)** تحديد أصناف الكائنات (`Object Class Identification`) **(4)** بناء نماذج التصميم (`Design/System Models` — هيكلية وديناميكية) **(5)** تحديد الواجهات (`Interface Specification`). المثال المرافق طول المحاضرة: نظام محطة طقس (`Weather Station`) بيرسل بياناته عبر قمر صناعي.

**📌 الترجمة:** `Object Class Identification` = استخراج أصناف الكائنات الفعلية من وصف النظام، وهي عملية **تكرارية** (مو خطية بحتة، ترجعلها أكتر من مرة).

### الفقرة 0ج: Structural مقابل Dynamic Models + Interface Specification

**من المحاضرة:** محاضرة 4، §3.4-3.5 | `Structural/Static Models` (هيكلية/ساكنة، مثالها `Class Diagram`): تصف البنية الثابتة. `Dynamic Models` (ديناميكية، مثالها `Sequence Diagram`, `State Diagram`): تصف التفاعلات وتغيّر الحالة بمرور الزمن. `Interface Specification` (تحديد الواجهات): تحديد توقيعات ودلالات الخدمات بين المكونات **دون** كشف كيفية تنفيذها الداخلي — أساس أي `API`.

### الفقرة 0د: Host-Target Development

**من المحاضرة:** محاضرة 4، §4.3 | التطوير على منصتين: `Host` (بيئة التطوير، فيها أدوات ومحررات وأدوات تصحيح) و`Target` (البيئة الفعلية اللي رح يشتغل عليها النظام النهائي عند المستخدم) — قد تختلفان تماماً (مثلاً تطوير على PC، والتشغيل الفعلي على جهاز embedded محدود الموارد).

### الفقرة 1: Use Case + النماذج الديناميكية مقابل الساكنة

**من المحاضرة:** محاضرة 4، §3.1 و §3.4 | `Use Case` جزء من `Interaction Model` (ديناميكي). `Class Diagram` = هيكلي/ساكن.

#### 🧪 نمط 2023-2024 — الفصل الأول
**السؤال:** What is [the class diagram] used to represent? *(من سؤال مشابه بنفس الدورة)*

**الإجابة الصحيحة: بنية العلاقات الثابتة بين الفئات (Structural/Static)**

**التعليل:** عكس Sequence/State (ديناميكية).

**📌 الترجمة:** `Structural/Static Models` = نماذج هيكلية/ساكنة، `Dynamic Models` = نماذج ديناميكية.

### الفقرة 2: مستويات إعادة الاستخدام (Reuse Levels)

**من المحاضرة:** محاضرة 4، §4.1 | 4 مستويات: Abstraction ← Object ← Component ← System (من الأبسط للأعقد).

### الفقرة 3: فوائد ومشاكل إعادة الاستخدام

**من المحاضرة:** محاضرة 4، §4.1

### الفقرة 4: Configuration Management + Version Control

**من المحاضرة:** محاضرة 4، §4.2 | 3 أنشطة: `Version Management` (إدارة النسخ)، `System Integration` (دمج النظام)، `Problem Tracking` (تتبع المشاكل).

### الفقرة 5: مراحل التطوير والصيانة (Maintenance)

**من المحاضرة:** محاضرة 4، §4.3 (مرتبط بمحاضرة 1، Software Evolution)

---

## الجزء الثاني: أسئلة اختيار من متعدد (MCQ)

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 1 (متوسط)
Formal UML documentation of a design becomes MORE important when:
أ) The project uses a simple scripting language and one developer
ب) The project uses an object-oriented language and involves more than one developer
ج) The design is trivial and unlikely to change
د) UML is always mandatory regardless of context
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة صراحة: "use it when OO, not Python" — التوثيق الرسمي يرتبط بمنهج OO وحجم الفريق، مو إلزام مطلق.

---

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 2 (متوسط)
Which OOD step comes immediately BEFORE "Object Class Identification" in the lecture's sequence?
أ) Interface Specification
ب) Design/System Models
ج) Architectural Design
د) Implementation
**الإجابة الصحيحة: ج**
**التعليل:**
الترتيب الحرفي: Context/Interactions → Architectural Design → Object Class Identification → Design Models → Interface Specification.

---

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 3 (متوسط)
In Host-Target development, the "Target" refers to:
أ) The development environment with debugging tools
ب) The actual environment where the final system will run
ج) The version control repository
د) The requirements document
**الإجابة الصحيحة: ب**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 4 (متوسط)
What is the purpose of a use case in requirements engineering?
أ) Define system architecture
ب) Specify implementation details
ج) Describe interactions between actors and the system
د) Document project management plan
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 5 (متوسط)
Which modeling technique represents the dynamic behavior of a system over time?
أ) Use case diagram
ب) Class diagram
ج) Activity diagram
د) Sequence diagram
**الإجابة الصحيحة: د**
**التعليل:**
(Sequence diagram)

الكائنات أفقياً، الزمن عمودياً.

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 6 (متوسط)
Which reuse approach involves assembling components from various sources to create a new system?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 7 (متوسط)
Which approach involves adapting existing components to fit new requirements WITHOUT modifying core functionality?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Wrapping reuse
**الإجابة الصحيحة: د**
**التعليل:**
(Wrapping (تغليف))

الكلمة المفتاحية "بدون تعديل الوظيفة الأساسية".

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 8 (متوسط)
Which approach involves MODIFYING existing components to meet specific requirements?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: د**
**التعليل:**
(Customization (تخصيص))

عكس Wrapping تماماً (هون *بيتعدّل* الكود الداخلي).

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 9 (متوسط)
Which approach involves creating components easily adapted/extended for different applications?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: ب**
**التعليل:**
(Application Frameworks (أطر تطبيقية))

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 10 (متوسط)
What is the main advantage of reusing software components?
أ) Reduced development time and cost
ب) Improved quality
ج) Enhanced maintainability
د) Increased performance
**الإجابة الصحيحة: أ**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024]
### السؤال 11 (متوسط)
_______ is a problem of software reusing:
أ) Increased maintenance costs
ب) Lack of tool support
ج) Finding, understanding, adapting reusable components
د) A & C
ه) A & B & C
**الإجابة الصحيحة: ه**
**التعليل:**
إعادة الاستخدام مش "مجانية"، فيها تكاليف بحث وتقييم وتكييف ودمج حقيقية.

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 12 (متوسط)
What is the primary purpose of a software configuration management system?
أ) Track project progress
ب) Identify and fix defects
ج) Manage changes to software artifacts throughout development
د) Estimate project costs
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 13 (متوسط)
What is the primary purpose of version control systems like Git?
أ) Manage budgets/timelines
ب) Auto-generate documentation
ج) Optimize performance
د) Track changes, enable collaboration, revert to previous states
**الإجابة الصحيحة: د**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024]
### السؤال 14 (متوسط)
Maintenance may involve:
أ) only additional coding and testing
ب) only additional analysis and design
ج) only additional design, coding and testing
د) any phase except analysis
ه) any of the development phases
**الإجابة الصحيحة: ه**
**التعليل:**
الصيانة ممكن تحتاج الرجوع لأي مرحلة، حتى إعادة تحليل المتطلبات نفسها.

