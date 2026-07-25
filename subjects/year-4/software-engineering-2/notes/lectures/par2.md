# المحاضرة 2 — الوحدة B: هندسة المتطلبات الكاملة (محاضرة 3 + 10 + 11)

> طبقة مراجعة إضافية — ملخص مفاهيم + أسئلة من دورات سابقة وأسلوب الدكتور.
> المصدر الأساسي للأسئلة الحقيقية: بنك دورات 2023–2026.

---

## ملخص: الفقرة 0أ: تعريف المتطلب + أهمية هندسة المتطلبات

**من المحاضرة:** محاضرة 3، §1-2 | المتطلب (`requirement`) له وظيفة مزدوجة: بيان عام (أساس لعرض/Bid) أو مواصفة دقيقة (أساس للعقد). الهندسة = حل مشاكل، وما تقدر تحل مشكلة إلا بفهمها كاملة.

**القاعدة الذهبية:** تصحيح خطأ متطلب بمرحلة الصيانة = **100 ضعف** تكلفته وقت جمع المتطلبات. أخطاء السلامة (`safety`) غالباً من تحديد المتطلبات، أخطاء تانية غالباً من التنفيذ.

---

## ملخص: الفقرة 0ب: التحديات السبعة لجمع المتطلبات (Present State of Practice)

**من المحاضرة:** محاضرة 3، §2 (تابع) | 7 تحديات: صعوبة الاكتشاف، تغيّر المتطلبات باستمرار، الاعتماد الزائد على أدوات CASE، ضيق الجدول الزمني، حواجز التواصل (لغة المستخدم الطبيعية مقابل دقة المطوّر)، تطوير موجّه بالسوق (عملاء مجهولون)، نقص الموارد.

---

## ملخص: الفقرة 0ج: Known / Unknown / Undreamt Requirements

**من المحاضرة:** محاضرة 3، §3 | `Known` (معروفة، واضحة من البداية) — `Unknown` (موجودة بس مو واضحة الآن، توقيت أو صاحب مصلحة مختلف) — `Undreamt` (العميل نفسه ما يتخيلها، تحتاج خبرة المحلل بالمجال). الثلاثة ممكن تكون Functional أو Non-functional.

---

## ملخص: الفقرة 0د: User Requirements مقابل System Requirements

**من المحاضرة:** محاضرة 3، §4 | `User Requirements`: لغة طبيعية، للعميل، عامة. `System Requirements`: وثيقة مُهيكَلة، للمطورين، مفصّلة، ممكن جزء من العقد. متطلب مستخدم واحد غالباً يتفرّع لعدة متطلبات نظام (مثال MHC-PMS: متطلب واحد → 5 متطلبات نظام).

---

## ملخص: الفقرة 0ه: What مقابل How

**من المحاضرة:** محاضرة 3، §6 | `What` (غرض النظام، خارجي، من `Application Domain`) مقابل `How` (بنية النظام، داخلي، من `Machine Domain`). **المتطلبات = What فقط** — أي ذكر لتقنية محددة (مثل "يستخدم MySQL") هو `How` وينتمي للتصميم لا للمتطلبات.

---

## ملخص: الفقرة 0و: عملية المتطلبات الأساسية (Essential Requirements Process)

**من المحاضرة:** محاضرة 3، §5 | 4 خطوات: **(1)** فهم المشكلة (مقابلات، استبيانات، ملاحظة، نمذجة أولية) **(2)** نمذجة وتحليلها (تحليل بنيوي/كائني/صوري) **(3)** الاتفاق عليها (تحقق، حل خلافات، تفاوض) **(4)** توصيلها (مواصفة، توثيق، اجتماعات مراجعة) — بالإضافة لإدارة تغيير مستمرة (مش خطوة تنتهي، بل دورة ترجع للخطوة الأولى باستمرار).

---

## ملخص: الفقرة 0ز: الغموض في المتطلبات (مثال "search" الشهير)

**من المحاضرة:** محاضرة 3، §8 | متطلب غامض ممكن يُفسَّر بطرق مختلفة تماماً. المثال الكلاسيكي: متطلب "المستخدم لازم يقدر يبحث بقوائم المواعيد" — المستخدم يقصد بحث شامل بكل العيادات، بينما المطور فهمها بحث داخل عيادة واحدة فقط. النتيجة: نظام "نُفِّذ حرفياً" لكنه ما لبّى الحاجة الفعلية.

**القاعدة الذهبية:** الحل = تفصيل أكثر دقة بمرحلة System Requirements، مو الاكتفاء بصياغة User Requirements العامة.

---

## ملخص: الفقرة 1: هدف هندسة المتطلبات + خصائص المتطلب الجيد

**من المحاضرة:** محاضرة 3، §1-2 | `Requirements Engineering` (هندسة المتطلبات): جمع وتوثيق متطلبات العميل عبر 4 أنشطة.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 1: هدف هندسة المتطلبات + خصائص المتطلب الجيد

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 1 (متوسط)
What is the primary goal of requirements engineering?
أ) Designing the architecture
ب) Developing the UI
ج) Gathering and documenting the software requirements
د) Implementing features
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 2 (متوسط)
Which of the following is NOT a characteristic of a good requirement?
أ) Consistency
ب) Completeness
ج) Ambiguity
د) Verifiability
**الإجابة الصحيحة: ج**
**التعليل:**
(الغموض (`Ambiguity`))

هو عكس المطلوب تماماً؛ مثال كلمة "search" الشهير بالمحاضرة يوضح كيف الغموض بيأدي لتنفيذ خاطئ.


---

## ملخص: الفقرة 2: Stakeholder + Scope Creep + Requirements Volatility

**من المحاضرة:** محاضرة 3، §17 | `Stakeholder` (صاحب مصلحة): أي شخص متأثر/مؤثر بالمشروع.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 2: Stakeholder + Scope Creep + Requirements Volatility

**المصدر:** [نمط 2023-2024]
### السؤال 3 (متوسط)
What does 'stakeholder' refer to?
أ) A person who writes code
ب) Anyone who has an interest in the project's outcome
ج) The project manager only
د) The person who provides funding
**الإجابة الصحيحة: ب**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024]
### السؤال 4 (متوسط)
What does 'scope creep' refer to?
أ) An increase in budget
ب) An expansion of project scope without corresponding adjustments in resources/time
ج) A delay in schedule
د) A reduction in team size
**الإجابة الصحيحة: ب**
**التعليل:**
الترجمة: `Scope Creep` = زحف/توسّع النطاق غير المُدار.

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 5 (متوسط)
What is meant by "requirements volatility"?
أ) Tendency for requirements to change over time due to evolving needs
ب) Stability of requirements throughout the lifecycle
ج) Ability to implement without rework
د) Process of validating against expectations
**الإجابة الصحيحة: أ**
**التعليل:**
بدون `Requirements Management` منضبطة، التغيّر الطبيعي بالمتطلبات (Volatility) بيتحول لـ Scope Creep غير مُدار.


---

## ملخص: الفقرة 3: Functional مقابل Non-functional Requirements

**من المحاضرة:** محاضرة 3، §7 | Functional = "شنو النظام يسوي؟" — Non-functional = "كيف بجودة معينة؟"

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 3: Functional مقابل Non-functional Requirements

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 6 (متوسط)
Which best describes "functional requirements"?
أ) How the system performs under conditions
ب) Performance metrics and scalability
ج) UI design and usability
د) What the system should do, including actions and services
**الإجابة الصحيحة: د**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 7 (متوسط)
What does "non-functional requirements" refer to?
أ) Not related to user interactions
ب) How the system performs its functions (performance, security, usability)
ج) Optional, can be excluded
د) Only applicable to hardware
**الإجابة الصحيحة: ب**
**التعليل:**
تنبيه: غير الوظيفية **إلزامية** زي الوظيفية، مو اختيارية (فخ خيار ج).


---

## ملخص: الفقرة 4: أنشطة هندسة المتطلبات الأربعة (Elicitation → Analysis → Documentation → Validation)

**من المحاضرة:** محاضرة 3، §9-14 | الترتيب حرفياً: `Elicitation` (استخراج) → `Analysis and Negotiation` (تحليل وتفاوض) → `Documentation` (توثيق) → `Validation` (تحقق).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 4: أنشطة هندسة المتطلبات الأربعة (Elicitation → Analysis → Documentation → Validation)

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 8 (متوسط)
Which best describes "requirements elicitation"?
أ) Documenting after gathering
ب) Defining verification/validation during testing
ج) Discovering and collecting stakeholder needs
د) Prioritizing based on business value
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 9 (متوسط)
Which technique is commonly used for gathering requirements during SRS development?
أ) Code reviews
ب) Prototyping
ج) Performance testing
د) Version control
**الإجابة الصحيحة: ب**
**التعليل:**
Prototyping (نمذجة أولية) أداة ممتازة لكشف الغموض (مثال search).


---

## ملخص: الفقرة 5: Traceability + إدارة المتطلبات

**من المحاضرة:** محاضرة 3، §17-18 | `Traceability` (قابلية التتبع): ربط كل متطلب بمصدره وبتنفيذه لاحقاً.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 5: Traceability + إدارة المتطلبات

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 10 (متوسط)
What is "traceability" in the context of an SRS?
أ) Tracking codebase changes
ب) Documenting test cases from requirements
ج) Ensuring requirements met during testing
د) Ability to link requirements back to source and forward to implementation
**الإجابة الصحيحة: د**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 11 (متوسط)
What is the purpose of including the traceability matrix in the SRS?
أ) To map test cases to requirements for validation
ب) To break down project milestones
ج) To outline architecture/design patterns
د) To document user feedback
**الإجابة الصحيحة: أ**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 12 (متوسط)
What is one potential consequence of poorly defined requirements?
أ) Increased satisfaction due to flexibility
ب) Higher success likelihood
ج) Increased costs due to rework, scope creep, miscommunication
د) Faster cycles due to less documentation
**الإجابة الصحيحة: ج**
**التعليل:**
تصحيح خطأ بمرحلة الصيانة بيكلف حتى 100 ضعف تصحيحه أثناء جمع المتطلبات.


---

## ملخص: الفقرة 6: SRS كوثيقة "عقد" (محاضرة 10)

**من المحاضرة:** محاضرة 10، §1 | `SRS` مثل مخطط بناء بيت — توثّق كل التفاصيل عشان ما يصير خلاف بين العميل والفريق.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 6: SRS كوثيقة "عقد" (محاضرة 10)

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 13 (متوسط)
What is the primary purpose of an SRS document?
أ) Project management strategy
ب) Software architecture and design
ج) Detailed description of intended capabilities and constraints
د) Testing strategies
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 14 (متوسط)
Which document serves as a basis for the agreement between the customer and the development team?
أ) SDD
ب) SAD
ج) SRS
د) TPD - و) None
**الإجابة الصحيحة: ج**
**التعليل:**
الترجمة: `SDD` = وثيقة التصميم، `SAD` = وثيقة المعمارية.

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني *(معرفة عامة تكمّل المحاضرة)*]
### السؤال 15 (متوسط)
Who is typically responsible for preparing the SRS?
أ) Project manager
ب) System architect
ج) QA team
د) Business analyst - و) None
**الإجابة الصحيحة: د**
**التعليل:**
(Business Analyst)

*(دور تنظيمي لم يُسمَّ صراحة بالمحاضرة، اعتماداً على معرفة عامة)*


---

## ملخص: الفقرة 7: أقسام SRS التفصيلية — External Interfaces / Functions / Performance / Design Constraints (محاضرة 10-11)

**من المحاضرة:** محاضرة 10، §4-5 ومحاضرة 11 | 7 أبواب لـ`Specific Requirements`: External Interfaces, Functions, Performance, Logical DB, Design Constraints, Software System Attributes, Organization.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 7: أقسام SRS التفصيلية — External Interfaces / Functions / Performance / Design Constraints (محاضرة 10-11)

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 16 (متوسط)
Which section typically includes info about hardware/software interfaces?
أ) Functional requirements
ب) Non-functional
ج) External interfaces
د) User characteristics - و) None
**الإجابة الصحيحة: ج**
**التعليل:**
مثال ACME: كرت شبكة Ethernet + قارئ باركود عبر serial port.

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 17 (متوسط)
Which section typically includes performance requirements details?
أ) Functional
ب) Non-functional
ج) System constraints
د) User characteristics - و) None
**الإجابة الصحيحة: ب**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 18 (متوسط)
Which type of requirement specifies constraints on development process and implementation?
أ) Functional
ب) Non-functional
ج) Performance requirement
د) Design requirement - و) None
**الإجابة الصحيحة: د**
**التعليل:**
(Design Constraints (قيود التصميم))

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 19 (متوسط)
Which SRS section would typically contain user roles and permissions info?
أ) Functional Requirements
ب) Non-Functional Requirements
ج) System Architecture
د) Use Cases or User Stories
**الإجابة الصحيحة: د**
**التعليل:**
مثال مكتبة ACME: Public/Private/Administration modes موثّقة عبر use cases مخصصة لكل دور.


---

## ملخص: الفقرة 8: Assumptions and Dependencies + إدارة التغيير (محاضرة 11)

**من المحاضرة:** محاضرة 11، §3 | `Assumptions and Dependencies` (الافتراضات والتبعيات): عوامل خارجية غير مضمونة، لو تغيّرت لازم مراجعة الـSRS كاملة.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 8: Assumptions and Dependencies + إدارة التغيير (محاضرة 11)

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 20 (متوسط)
What is the purpose of including assumptions and dependencies in the SRS?
أ) Outline risks
ب) Justify prioritizing requirements
ج) Clarify context and limitations of requirements
د) Define acceptance criteria - و) None
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 21 (متوسط)
Which aspect of SRS is crucial for ensuring the software can be maintained/enhanced in the future?
أ) Requirements prioritization
ب) Change control procedures
ج) User acceptance criteria
د) Performance metrics - و) None
**الإجابة الصحيحة: ب**
**التعليل:**
(إجراءات التحكم بالتغيير)


---

## ملخص: الفقرة 9: تحليل وتحقق المتطلبات + SRS كوثيقة (محاضرة 3 نفسها)

**من المحاضرة:** محاضرة 3، §12-16 | `Requirements Analysis` (تحليل المتطلبات): تنقيح وتنظيم المتطلبات المُستخرَجة، حل التعارضات بينها. `Requirements Validation` (التحقق من المتطلبات): فحص الوثيقة النهائية عبر 5 معايير أساسية: **الصلاحية** (`Validity` — هل هاي المتطلبات فعلاً؟)، **الاتساق** (`Consistency`)، **الاكتمال** (`Completeness`)، **الواقعية** (`Realism`)، و**قابلية التحقق** (`Verifiability`). وثيقة `SRS` نفسها لها 5 فئات مستخدمين رئيسية: العملاء (`Customers`)، المدراء (`Managers`)، مهندسو النظام (`System Engineers`)، مهندسو الاختبار (`Test Engineers`)، ومهندسو الصيانة (`Maintenance Engineers`).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 9: تحليل وتحقق المتطلبات + SRS كوثيقة (محاضرة 3 نفسها)

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 22 (متوسط)
Which of the following is NOT one of the five Requirements Validation checks discussed in the lecture?
أ) Consistency
ب) Completeness
ج) Profitability
د) Verifiability
**الإجابة الصحيحة: ج**
**التعليل:**
(Profitability)

مش من المعايير الخمسة (Validity, Consistency, Completeness, Realism, Verifiability).


---
