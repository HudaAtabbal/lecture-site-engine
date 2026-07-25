# المحاضرة 6 — الوحدة F: قياس البرمجيات الكامل (محاضرة 8 + 9)

> طبقة مراجعة إضافية — ملخص مفاهيم + أسئلة من دورات سابقة وأسلوب الدكتور.
> المصدر الأساسي للأسئلة الحقيقية: بنك دورات 2023–2026.

---

## ملخص: الفقرة 1: LOC — مشاكله وحدوده

**من المحاضرة:** محاضرة 8، §2 | `LOC` (Lines of Code) أبسط مقياس حجم، لكنه معتمد على اللغة وما يعكس التعقيد الحقيقي.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 1: LOC — مشاكله وحدوده

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 1 (متوسط)
"Lines of code" is a poor metric because:
أ) it is language independent
ب) it penalizes efficient, compact coding
ج) it measures what matters, not what can be measured
د) developed in the 1960's
ه) All of the above
**الإجابة الصحيحة: ب**
**التعليل:**
الكود المضغوط الفعّال بيسجّل LOC أقل، كأنو المبرمج الماهر "أنتج أقل" — عكس الحقيقة.

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 2 (متوسط)
Which statement is MOST accurate regarding LOC as a metric?
أ) universally reliable
ب) useful for comparing productivity across different languages
ج) useful within same organization/standards, but limited across different contexts
د) outdated, should never be used
**الإجابة الصحيحة: ج**
**التعليل:**
—


---

## ملخص: الفقرة 2: Cyclomatic Complexity (CC) — التعريف والحساب

**من المحاضرة:** محاضرة 8، §3 | `V(G) = e − n + 2p` (e=حواف، n=عُقد، p=مكوّنات متصلة) على `Control Flow Graph` (مخطط تدفق التحكم).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 2: Cyclomatic Complexity (CC) — التعريف والحساب

**المصدر:** [نمط 2023-2024]
### السؤال 3 (متوسط)
What does cyclomatic complexity measure?
أ) Number of lines of code
ب) Number of independent paths through the code
ج) Number of classes in a system
د) Total number of bugs
**الإجابة الصحيحة: ب**
**التعليل:**
—

---

**المصدر:** [نمط 2023-2024]
### السؤال 4 (متوسط)
In McCabe's CC metric, code is first represented as:
أ) A syntax graph
ب) A data-flow graph
ج) A flow control graph
د) A control-vs-command graph
ه) None
**الإجابة الصحيحة: ج**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 5 (متوسط)
CC is primarily used to measure:
أ) Number of potential execution paths in a module
ب) Degree of coupling between modules
ج) Depth of inheritance hierarchy
د) Number of external dependencies
**الإجابة الصحيحة: أ**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 6 (متوسط)
The cyclomatic complexity of a graph is:
أ) number of closed paths
ب) number of independent test cases required to reach every node
ج) edges − nodes + 1
د) All of the above
ه) None
**الإجابة الصحيحة: ب**
**التعليل:**
تفسيرها العملي: الحد الأدنى لعدد حالات الاختبار المستقلة اللازمة.


---

## ملخص: الفقرة 3: تطبيق شامل — مثال Calculator (LOC/CC/Coverage/Maintainability سوا)

**من المحاضرة:** محاضرة 8 (تمرين تطبيقي على كلاس Calculator بـ add/subtract/multiply/divide)

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 3: تطبيق شامل — مثال Calculator (LOC/CC/Coverage/Maintainability سوا)

**المصدر:** [نمط 2023-2024 (مجموعة أسئلة على نفس الكود)]
### السؤال 7 (متوسط)
What is the cyclomatic complexity of the ENTIRE Calculator class (WMC)?
أ) 1
ب) 2
ج) 4
د) 5
**الإجابة الصحيحة: د**
**التعليل:**
كل من add/subtract/multiply CC=1 (بدون شروط)، divide فيها if واحد فـ CC=2 → المجموع (`WMC`) = 1+1+1+2 = 5.

**السؤال:** Which metric would help assess how well the Calculator class is tested?

- أ) Code Churn
- ب) Code Coverage
- ج) Function Points
- د) Defect Density

**الإجابة الصحيحة: ب**

**السؤال:** What is the impact of adding an additional conditional statement inside divide on CC?

- أ) Decrease
- ب) No effect
- ج) Increase
- د) Changes LOC only

**الإجابة الصحيحة: ج**

**التعليل:** كل قرار شرطي جديد يضيف حافة (edge)، فيرفع V(G) حتماً.

**السؤال:** Which metric is most useful for assessing the MAINTAINABILITY of the Calculator class?

- أ) Cyclomatic Complexity
- ب) Number of Methods
- ج) LOC
- د) Code Coverage

**الإجابة الصحيحة: أ**


---

## ملخص: الفقرة 4: مقاييس OO — DIT / Coupling (CBO) / RFC / WMC

**من المحاضرة:** محاضرة 8، §4 | مقاييس Chidamber & Kemerer الستة: DIT, NOC, WMC, RFC, CBO, LCOM.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 4: مقاييس OO — DIT / Coupling (CBO) / RFC / WMC

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 8 (متوسط)
A high Depth of Inheritance Tree (DIT) value generally indicates:
أ) Well-designed, easily maintainable hierarchy
ب) Potential difficulties in understanding/maintaining due to increased complexity
ج) Improved reuse, reduced duplication
د) Lower risk of errors
**الإجابة الصحيحة: ب**
**التعليل:**
مقايضة حقيقية: DIT عميق = reuse أكبر **لكن** تعقيد أكبر، مو "جيد دائماً".

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 9 (متوسط)
In quality metrics, what does "coupling" refer to?
أ) Degree of interaction between different modules/components
ب) Strength of relationship in inheritance hierarchy
ج) Number of dependencies on external libraries
د) Cohesion of elements within a module
**الإجابة الصحيحة: أ**
**التعليل:**
القاعدة الذهبية: "حافظ على اقتران منخفض (`low coupling`) لكن تماسك عالي (`high cohesion`)".

---

**المصدر:** [نمط 2023-2024 — الفصل الثاني]
### السؤال 10 (متوسط)
Weighted Methods per Class (WMC) is calculated as:
أ) Total number of methods
ب) Sum of Cyclomatic Complexity of all methods in a class
ج) Ratio of methods to attributes
د) Average methods across all classes - و) None
**الإجابة الصحيحة: ب**
**التعليل:**
قاعدة عملية: WMC=20 جيدة، تجنّبي تجاوز 40.

---

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 11 (متوسط)
`Lack of Cohesion in Methods` (LCOM) measures:
أ) How strongly methods within a class share the class's attributes
ب) The number of external classes a class depends on
ج) The depth of a class's inheritance chain
د) The total lines of code in a class
**الإجابة الصحيحة: أ**
**التعليل:**
الترجمة: `Cohesion` = التماسك (كل دوال الفئة تتشارك بمسؤولية واحدة مترابطة). `LCOM` مرتفع = تماسك ضعيف = مرشّح لتقسيم الفئة (`Extract Class`).


---

## ملخص: الفقرة 5: مقاييس اعتمادية الحزم (Ca / Ce / Instability)

**من المحاضرة:** محاضرة 8، §5 | `Ca` (Afferent — اعتمادية داخلة)، `Ce` (Efferent — اعتمادية خارجة)، `Instability = Ce/(Ca+Ce)`.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 5: مقاييس اعتمادية الحزم (Ca / Ce / Instability)

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 12 (متوسط)
A package with high `Instability` (Ce/(Ca+Ce) close to 1) means:
أ) It is heavily depended upon by others, so it's hard to change
ب) It depends heavily on others but few depend on it, so it's easy to change
ج) It has no dependencies at all
د) It is the most stable package in the system
**الإجابة الصحيحة: ب**
**التعليل:**
—


---

## ملخص: الفقرة 6: مقاييس الجودة — Defect Density / MTTR / MTBF / Discovery Rate

**من المحاضرة:** محاضرة 8، §7 | `Defect Density = #defects / size`. `MTTR` = زمن الإصلاح. `MTBF` = زمن بين عطلين.

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 6: مقاييس الجودة — Defect Density / MTTR / MTBF / Discovery Rate

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 13 (متوسط)
Which metric measures the average time required to fix a software defect?
أ) Defect density
ب) Mean Time Between Failures
ج) Mean Time to Repair
د) Software complexity
**الإجابة الصحيحة: ج**
**التعليل:**
(MTTR)

---

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 14 (متوسط)
Which metric measures the number of defects discovered PER UNIT OF TIME during testing?
أ) Defect density
ب) Defect discovery rate
ج) Cyclomatic complexity
د) Test coverage
**الإجابة الصحيحة: ب**
**التعليل:**
الفرق: Density = لكل وحدة حجم، Discovery Rate = لكل وحدة زمن.

---

**المصدر:** [نمط 2023-2024]
### السؤال 15 (متوسط)
Which of the following is NOT a software metric?
أ) Lines of code
ب) Cyclomatic complexity
ج) Defect density
د) Software documentation
**الإجابة الصحيحة: د**
**التعليل:**
التوثيق منتج (deliverable)، مو مقياساً رقمياً.

---

**المصدر:** [نمط 2023-2024]
### السؤال 16 (متوسط)
Which is NOT a common software quality metric?
أ) Mean time to failure
ب) Code churn
ج) Feature count
د) Lines of code
**الإجابة الصحيحة: ج**
**التعليل:**
(Feature count)

ليست مقياس جودة معياري.


---

## ملخص: الفقرة 6ب: Predictor مقابل Control Metrics

**من المحاضرة:** محاضرة 9، §2 | `Control/Process Metrics` (مقاييس التحكم): تراقب العملية نفسها (مثال: متوسط الجهد/الوقت لإصلاح عطل). `Predictor/Product Metrics` (مقاييس التنبؤ): مرتبطة بالمنتج البرمجي نفسه = نفس `Internal Attributes` (LOC، CC).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 6ب: Predictor مقابل Control Metrics

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 17 (متوسط)
"Average time required to repair a defect" is an example of a:
أ) Predictor metric
ب) Control metric
ج) Static metric
د) Function Point
**الإجابة الصحيحة: ب**
**التعليل:**
(Control/Process Metric)

تراقب العملية (زمن الإصلاح)، مو خاصية بالكود نفسه.


---

## ملخص: الفقرة 6ج: Dynamic مقابل Static Metrics

**من المحاضرة:** محاضرة 9، §3 | `Dynamic Metrics`: تُجمع أثناء تشغيل البرنامج فعلياً (مثال: عدد تقارير الأخطاء، وقت إنجاز عملية حسابية) — تقيّم الكفاءة والموثوقية. `Static Metrics`: تُجمع من الكود بدون تشغيله (مثال: حجم الكود، Cyclomatic Complexity) — تقيّم التعقيد وسهولة الفهم/الصيانة.

---

## ملخص: الفقرة 8ب: Fan-in / Fan-out + طول أسماء المتغيرات

**من المحاضرة:** محاضرة 9، §4-5 | (تكملة للفقرة 8 بالوحدة F) — طول أسماء المتغيرات (`Length of Identifiers`): أسماء أطول وأوضح عادة ترتبط بفهم أسهل للكود (لكن ليست قاعدة مطلقة، فيه حدود عملية للطول المفيد).

---

## ملخص: الفقرة 9ب: Halstead Metric (1977)

**من المحاضرة:** محاضرة 9، §10-11 | يقيس **الكود نفسه رمزاً برمز** (بعكس Function Points اللي تقيس الوظائف قبل الكود). كل برنامج = مجموعة رموز (`tokens`): إما `Operators` (عوامل: =, while, +, print()) أو `Operands` (معاملات: متغيرات وثوابت).

- `n1` = عدد الـ Operators الفريدة (unique)
- `n2` = عدد الـ Operands الفريدة (unique)
- `N` = الطول الكلي (كل الرموز مع التكرار)
- **الحجم** `Volume V = N × log2(n1+n2)`
- **الصعوبة** `Difficulty D = (n1/2) × (total operands/n2)`
- **الجهد** `Effort E = D × V`
- **وقت البرمجة المقدَّر** `T = E / 18` (بالثواني)

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 9ب: Halstead Metric (1977)

**المصدر:** [سؤال بأسلوب الدكتور — من تأليفي]
### السؤال 18 (متوسط)
In Halstead's metric, what does `n1` represent?
أ) The total length of the program including repetitions
ب) The number of unique operators
ج) The number of unique operands
د) The estimated coding time
**الإجابة الصحيحة: ب**
**التعليل:**
(عدد الـ Operators الفريدة)

`n2` هو عدد الـ Operands الفريدة (مو n1)، و`N` هو الطول الكلي مع التكرار (مو n1 ولا n2).

Function Points تُحسب **قبل** كتابة الكود (على مستوى الوظائف)، بينما Halstead يُحسب **من الكود المكتوب فعلياً** — الاثنان مكمّلان بمراحل مختلفة من المشروع.


---

## ملخص: الفقرة 7: Function Points — التعريف والهدف

**من المحاضرة:** محاضرة 9، §6-9 | قياس الحجم بناءً على "الوظائف" (Inputs/Outputs/Files/Interfaces/Inquiries)، مستقل عن لغة البرمجة (Albrecht/IBM 1979، معيار ISO 2003).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 7: Function Points — التعريف والهدف

**المصدر:** [نمط 2023-2024]
### السؤال 19 (متوسط)
What does the term 'function point' measure?
أ) Complexity of the code
ب) Size and complexity based on functionality
ج) Number of functions in code
د) Execution speed
**الإجابة الصحيحة: ب**
**التعليل:**
—

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 20 (متوسط)
What is the primary goal of Function Point Analysis (FPA)?
أ) Estimate development time
ب) Assess code quality/bugs
ج) Measure size based on functionality from user's perspective
د) Track development team progress
**الإجابة الصحيحة: ج**
**التعليل:**
—


---

## ملخص: الفقرة 8: Fan-in / Fan-out + السياق عند تفسير المقاييس

**من المحاضرة:** محاضرة 9، §4 | `Fan-in` (استدعاءات داخلة) = كم وحدة بتنادي عليّي. `Fan-out` (استدعاءات خارجة) = كم وحدة أنا بنادي عليها (بما فيها المكتبات الخارجية).

---

## أسئلة اختيار من متعدد (MCQ) — الفقرة 8: Fan-in / Fan-out + السياق عند تفسير المقاييس

**المصدر:** [نمط 2025-2026]
### السؤال 21 (متوسط)
Fan-out for a function that calls 3 functions and 2 external libraries. Value?
أ) Components
ب) 5
ج) 2
د) 3
**الإجابة الصحيحة: ب**
**التعليل:**
المجموع الكلي (3 داخلية + 2 خارجية)، بغض النظر عن كونها داخل النظام أو مكتبة خارجية.

---

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 22 (متوسط)
When evaluating software metrics, it's crucial to consider:
أ) The specific context of the project and organization
ب) Absolute values without external factors
ج) Individual developer opinions
د) Latest trends without adapting them
**الإجابة الصحيحة: أ**
**التعليل:**
العلاقة بين الصفات الداخلية (CC) والخارجية (Maintainability) إحصائية/افتراضية، لازم تُفسَّر بالسياق.

CC تكرر ذكرها كمؤشر Maintainability بثلاث مواضع مختلفة (محاضرة 8، 9، وحتى محاضرة 12 الجودة) — هاد الربط أهم نقطة بكل وحدة القياس.


---
