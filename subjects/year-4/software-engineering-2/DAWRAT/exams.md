## المحاضرة 1: Introduction to Software Engineering (مقدمة في هندسة البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 1 (سهل)
What is the primary goal of software measurement?
أ) To track the progress of the development team
ب) To estimate the cost of software development
ج) To assess the quality of software products
د) To allocate resources effectively
**الإجابة الصحيحة: ج**
**التعليل:**
Software Metrics حسب المحاضرة الأولى تنقسم لـ Process Metrics (تقيس عملية التطوير) وProduct Metrics (تقيس خصائص المنتج نفسه كالحجم والتعقيد) — والهدف الجامع الأشمل وراء كل هذا هو تقييم جودة المنتج البرمجي كمّياً بدل الاعتماد على الإحساس الشخصي.

أ) تتبع تقدم الفريق فائدة جانبية للـ Process Metrics فقط، مو الهدف الأساسي الشامل.
ب) تقدير التكلفة تطبيق عملي واحد من تطبيقات القياس، مو الهدف الأساسي نفسه.
د) توزيع الموارد نتيجة غير مباشرة، مو الهدف المباشر للقياس.

المحاضرة عرّفت Measure وMeasurement وMetrics كسلسلة مترابطة هدفها النهائي إعطاء أرقام موضوعية بدل أحكام شخصية على جودة المنتج.

**المصدر:** [نمط 2023-2024]
### السؤال 2 (سهل)
Which metric is often used to measure the efficiency of a software development team?
أ) Defect density
ب) Lines of code per person-month
ج) Code coverage
د) Number of test cases
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة الأولى عرّفت الإنتاجية (Productivity) بأنها معدل الناتج لكل وحدة جهد، وتُقاس عادة بـ LOC/PM (أسطر كود مقسومة على شهر-شخص) — وهذا مطابق تماماً لنص السؤال.

أ) Defect Density تقيس جودة المنتج، مو كفاءة الفريق.
ج) Code Coverage يقيس شمول الاختبارات، مو إنتاجية الفريق.
د) عدد حالات الاختبار مقياس اختبار، مو إنتاجية.

هذا تطبيق مباشر لتعريف الإنتاجية اللي ورد في نهاية المحاضرة الأولى ضمن مصطلحات إدارية وقياسية أساسية (Deliverables, Milestones, Product, Process, Measure, Measurement, Metrics, Productivity).

**المصدر:** [نمط 2023-2024]
### السؤال 3 (سهل)
A software process model is:
أ) A representation of the way in which software is developed
ب) A representation of the way in which software processes data
ج) A representation of the way in which software is used
د) A representation of the way in which software may fail
ه) An attractive young person used in the process of selling software
**الإجابة الصحيحة: أ**
**التعليل:**
Software Process حسب المحاضرة الأولى هو "الطريقة اللي ننتج فيها البرمجية" — وSoftware Process Model هو التمثيل المنظَّم لهذه الطريقة (زي Waterfall أو Spiral).

ب) معالجة البيانات وظيفة البرنامج نفسه، مو تعريف "نموذج العملية".
ج) طريقة استخدام البرنامج تخص المستخدم النهائي، لا عملية التطوير.
د) طريقة فشل البرنامج تخص الموثوقية، لا نموذج العملية.
ه) خيار هزلي واضح لا علاقة له بالتعريف التقني.

نماذج SDLC الكاملة (Waterfall, Prototyping, Iterative Enhancement, Evolutionary, Spiral) كلها أمثلة ملموسة على "تمثيل طريقة تطوير البرمجية" — وهذا جوهر تعريف Software Process Model.

**المصدر:** [نمط 2023-2024]
### السؤال 4 (سهل)
A metric is:
أ) an ISO standard unit (such a meter, kilogram, etc.)
ب) a qualitative measure of the degree to which a system component possesses a given attribute
ج) a quantitative measure of the degree to which a system component possesses a given attribute
د) a qualitative attribute which determines the degree to which a system component may be measured
ه) an attributed quantity which measures a system component in degrees.
**الإجابة الصحيحة: ج**
**التعليل:**
المحاضرة عرّفت Metrics بأنها ربط عدة Measures ببعض للحصول على مقياس كمّي (quantitative) يصف درجة امتلاك عنصر النظام لخاصية معيّنة — زي متوسط الأخطاء لكل module.

أ) وحدة ISO قياسية (مثل المتر) مفهوم فيزيائي عام، مو تعريف Metrics البرمجية.
ب) "qualitative" (نوعي) خطأ مباشر — المقياس بطبيعته كمّي (رقمي)، لا نوعي.
d وe صياغات مشوَّشة وغير دقيقة لا تطابق التعريف الرسمي.

هذا نفس التعريف اللي وردت به Metrics في نهاية المحاضرة الأولى ضمن السلسلة الثلاثية: Measure (مؤشر رقمي فردي) → Measurement (فعل القياس) → Metrics (ربط عدة measures للحصول على قياس كمّي).

**المصدر:** [نمط 2023-2024]
### السؤال 5 (متوسط)
Why is it useful to measure aspects of a system?
أ) Because human subjective perception is notoriously inaccurate.
ب) Because numbers give us a way of comparing, controlling and predicting system behavior.
ج) Because measurements give us a way of tracking progress.
د) Because it gives us an assessment of the product quality.
ه) All of the above.
**الإجابة الصحيحة: ه**
**التعليل:**
كل الأسباب الأربعة صحيحة ومكمّلة لبعض: الإحساس الشخصي غير دقيق فعلاً وغير موضوعي، الأرقام تتيح المقارنة والتحكم والتنبؤ، القياسات تساعد على تتبع التقدم، وتُعطي تقييماً موضوعياً لجودة المنتج.

a وb وc وd كلها أسباب حقيقية جزئية، لكن ولا واحد منها يغطي "كل" فوائد القياس لوحده.

هذا يلخّص الفكرة الجوهرية اللي بُنيت عليها المحاضرة الأولى كلها: بدل الاعتماد على الإحساس الشخصي غير الموضوعي، نستخدم أرقاماً فعلية (Measures/Metrics) لمقارنة والتحكم بالتنبؤ بسلوك النظام وتتبع تقدمه وتقييم جودته.

**المصدر:** [نمط 2023-2024]
### السؤال 6 (سهل)
Which of the following is not required when developing a metric?
أ) a measurable property
ب) a relationship between that property and what we wish to know
ج) a relationship between that property and some immeasurable dimensions of the system
د) a consistent expression of that relationship
ه) All of them are required.
**الإجابة الصحيحة: ج**
**التعليل:**
المقياس الجيد لازم يربط خاصية قابلة للقياس بشيء نريد معرفته (وهذا أيضاً لازم يكون قابلاً للتعبير عنه بشكل متسق) — لكن ربط الخاصية بـ"أبعاد غير قابلة للقياس أصلاً" يناقض الهدف الجوهري من بناء المقياس نفسه، لأنه يفقد قابلية القياس والتحقق.

أ) خاصية قابلة للقياس شرط أساسي فعلاً.
ب) علاقة الخاصية بما نريد معرفته شرط أساسي فعلاً (هذا ما يجعل المقياس مفيداً/ذا معنى).
د) تعبير متسق عن العلاقة شرط أساسي فعلاً (وإلا لا يمكن مقارنة نتائج القياس عبر الزمن).

المقياس الجيد يربط خصائص قابلة للقياس بأشياء نريد فهمها بطريقة متسقة وقابلة للتكرار — لا علاقة له بـ"أبعاد غير قابلة للقياس أصلاً"، وهذا بالضبط ما يميّز المقياس الجيد عن التخمين غير الموضوعي.

**المصدر:** [نمط 2023-2024]
### السؤال 7 (سهل)
What are the features of a poor metric?
أ) It is complex, hard-to-measure, and persuasive.
ب) It is complex, consistent, and language-independent.
ج) It is simple, hard-to-measure, and has no units.
د) It is complex, subjective, and inconsistent.
ه) It is complex, subjective, and persuasive.
**الإجابة الصحيحة: د**
**التعليل:**
المقياس السيء يتّصف بالتعقيد (صعب الفهم والتطبيق)، الذاتية (يعتمد رأي شخصي بدل معايير موضوعية)، وعدم الاتساق (نتائج مختلفة لنفس الظروف) — عكس تماماً خصائص المقياس الجيد (بسيط، موضوعي، متسق).

أ) "مقنع" (persuasive) ليست صفة سلبية جوهرية بحد ذاتها، والمقياس الجيد بالعكس يجب أن يكون مقنعاً بموضوعية.
ب) "متسق ومستقل عن اللغة" صفات إيجابية، لا تصف مقياساً سيئاً.
ج) "بسيط" صفة إيجابية للمقياس الجيد، لا السيء.

هذا عكس تماماً الشروط الأربعة لبناء مقياس جيد (خاصية قابلة للقياس + علاقة بما نريد معرفته + تعبير متسق) اللي ورد في السؤال السابق مباشرة بنفس الدورة.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 8 (سهل)
Which of the following is NOT a key characteristic of a good software metric?
أ) It should be easy to collect and automate.
ب) It should be independent of the development process.
ج) It should be consistently interpretable.
د) It should provide actionable insights for improvement.
**الإجابة الصحيحة: ب**
**التعليل:**
المقياس الجيد يجب أن يرتبط بما نريد معرفته ضمن سياق عملية التطوير الفعلية، لا أن يكون "مستقلاً" عنها تماماً — المقاييس (خصوصاً Process Metrics) بطبيعتها مرتبطة بعملية التطوير لتكون مفيدة أصلاً.

أ) سهولة الجمع والأتمتة صفة إيجابية مطلوبة فعلاً.
ج) قابلية التفسير المتسق شرط أساسي (تذكّر: "تعبير متسق عن العلاقة" من شروط المقياس الجيد في المحاضرة الأولى).
د) تقديم رؤى قابلة للتنفيذ هدف المقياس الجيد أصلاً.

هذا يربط بشروط المقياس الجيد اللي شرحتها المحاضرة الأولى: خاصية قابلة للقياس + علاقة بما نريد معرفته + تعبير متسق — والمقياس المفيد بطبيعته مرتبط بسياق العملية اللي يقيسها، لا منفصل عنها.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 9 (سهل)
Which of the following is a key benefit of using software metrics in a development project?
أ) They guarantee the success of the project.
ب) They eliminate the need for communication and collaboration among team members.
ج) They automatically fix bugs and resolve issues.
د) They provide objective data for decision-making and improvement.
**الإجابة الصحيحة: د**
**التعليل:**
المحاضرة الأولى أكدت أن القياس يحل مشكلة "الإحساس الشخصي غير الموضوعي" عبر إعطاء أرقام فعلية للمقارنة والتحكم والتنبؤ — أي بيانات موضوعية تدعم اتخاذ القرار والتحسين.

أ) "ضمان النجاح" مبالغة كاملة — المقاييس تساعد على اتخاذ قرار أفضل، لا تضمن النجاح المطلق.
ب) عكس الحقيقة تماماً — المقاييس تُستخدم كأساس للتواصل والمناقشة بين الفريق، لا تلغيه.
ج) المقاييس لا "تصلح" شيئاً بحد ذاتها؛ هي أداة تشخيص، والإصلاح فعل بشري لاحق.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 10 (سهل)
What is the primary cause of the "software crisis" as identified in the 1960s?
أ) Rapidly increasing hardware capabilities
ب) The rise of open-source software
ج) The introduction of agile methodologies
د) Inability to meet user requirements and project deadlines
**الإجابة الصحيحة: د**
**التعليل:**
المحاضرة وثّقت أزمة البرمجيات بأرقام IBM: 31% من المشاريع تُلغى، 53% تتجاوز الميزانية بمعدل 189%، 94 من كل 100 مشروع يُعاد بدؤه من الصفر — كلها مظاهر لفشل تلبية متطلبات المستخدم والالتزام بالمواعيد.

أ) تطور الهاردوير كان في الحقيقة سبباً إضافياً (الطلب المتزايد على برمجيات أعقد)، لا "السبب الأساسي" المباشر للأزمة.
ب) البرمجيات مفتوحة المصدر مفهوم لاحق زمنياً بعقود، لم يكن موجوداً أصلاً في الستينات.
ج) منهجيات Agile ظهرت لاحقاً بعقود (٢٠٠١) كحل جزئي لمشاكل لاحقة، لا سبب الأزمة الأصلية.

أمثلة المحاضرة (Y2K، صاروخ Patriot، مشروع قاعدة بيانات كلّف مليون دولار وسُلّم في وقته لكن ما اشتغل صح، Ariane-5) كلها توضح فشلاً جوهرياً في تلبية المتطلبات والالتزام بالمواعيد والجودة، لا مشكلة هاردوير أو منهجية.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 11 (متوسط)
Which of the following best describes a consequence of the software crisis?
أ) Decreased demand for software engineers
ب) Increased costs and delays in software development projects
ج) Improved collaboration between development teams and stakeholders
د) A shift towards more manual testing processes
**الإجابة الصحيحة: ب**
**التعليل:**
هذا مباشرة ما وثّقته أرقام المحاضرة: 53% من المشاريع تتجاوز الميزانية بمعدل 189%، وهذا يعني زيادة تكلفة وتأخيرات فعلية موثقة كنتيجة مباشرة للأزمة.

أ) الأزمة أدت فعلياً لزيادة الطلب على هندسة البرمجيات كتخصص منظم، لا انخفاضه.
ج) الأزمة كشفت فشل التواصل والتنسيق، لا تحسّنه — وهذا بالضبط ما دفع لظهور Software Engineering كحل.
د) الأزمة دفعت نحو منهجيات أكثر تنظيماً وأتمتة لاحقاً، لا مزيداً من الاختبار اليدوي.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 12 (سهل)
Which of the following factors contributed significantly to the software crisis?
أ) Lack of programming languages
ب) Insufficient documentation and poor project management practices
ج) High-quality coding standards
د) Over-reliance on automated testing tools
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة ربطت أزمة البرمجيات بغياب منهجية واضحة في التطوير — بما فيها ضعف التوثيق وسوء إدارة المشروع، وهذا بالضبط ما جاء Software Process ليحله عبر أربعة أنشطة منظمة (Specification, Development, Validation, Evolution).

أ) نقص لغات البرمجة لم يكن سبباً — كانت هناك لغات كافية، لكن نقص المنهجية هو المشكلة.
ج) معايير ترميز عالية الجودة عكس المشكلة تماماً — لو كانت موجودة فعلياً لما حصلت الأزمة.
د) الاعتماد المفرط على أدوات اختبار آلية مفهوم لاحق زمنياً؛ أدوات الأتمتة لم تكن منتشرة في الستينات أصلاً.

المحاضرة أكدت أن التكلفة الحقيقية للأزمة لم تكن فقط في "كتابة كود يشتغل"، بل في غياب منهجية واضحة تدير التكلفة والوقت والجودة معاً — وهذا يشمل التوثيق وإدارة المشروع تحديداً.

## المحاضرة 2: Software Life Cycle Models (نماذج دورة حياة البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 13 (سهل)
Which software development process model is characterized by iterations and feedback cycles?
أ) Waterfall
ب) Spiral
ج) Agile
د) V-shaped
**الإجابة الصحيحة: ج**
**التعليل:**
Agile معروف بدورات قصيرة متكررة (sprints) مع تغذية راجعة مستمرة من العميل بعد كل دورة — وهذا بالضبط ما يصفه السؤال بـ"iterations and feedback cycles".

أ) Waterfall تسلسل خطي صارم بدون تكرار أو رجوع للخلف.
ب) Spiral فيها تكرار فعلاً لكنها تركّز أساساً على تحليل المخاطر (Risk Analysis) في كل لفة، وليس "التغذية الراجعة" كمحور رئيسي.
د) V-shaped امتداد خطي لـ Waterfall مع مطابقة كل مرحلة تطوير باختبار مقابل، بدون تكرار.

ملاحظة: هذا السؤال يعتمد على معرفة عامة بـAgile أكثر من كونه مذكوراً بالاسم في محاضرة نماذج SDLC (لأن المحاضرة غطّت Build&Fix, Waterfall, Prototyping, Iterative Enhancement, Evolutionary, Spiral فقط) — الإجابة معتمدة على المعرفة العامة المتوافقة مع مبدأ "التكرار + الفيدباك" الذي هو جوهر Agile.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 14 (سهل)
Which of the following is a software maintenance activity?
أ) Requirement analysis
ب) Code development
ج) System testing
د) Bug fixing
**الإجابة الصحيحة: د**
**التعليل:**
مرحلة Operation & Maintenance في نموذج Waterfall تبدأ فور إطلاق البرنامج، وتشمل تصحيح الأخطاء (bug fixing)، إضافة تحسينات، وحذف قدرات غير مستخدمة.

أ) Requirement analysis وb) Code development وc) System testing كلها مراحل من دورة التطوير الأولية (قبل الإطلاق)، وليست أنشطة صيانة بعد التسليم.

هذا مرتبط مباشرة بتعريف Waterfall model في محاضرة SDLC، حيث الصيانة هي آخر مرحلة في المخطط، وتُفعَّل فقط بعد أن يكون النظام قيد الاستخدام الفعلي.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 15 (سهل)
Which software development process model involves a series of small, incremental releases?
أ) Waterfall
ب) Spiral
ج) Agile
د) V-shaped
**الإجابة الصحيحة: ج**
**التعليل:**
Agile يعتمد على إصدارات صغيرة متكررة (sprints) تُسلَّم بشكل تراكمي ومتكرر للعميل، بعكس النماذج الأخرى التي تُسلّم النظام دفعة واحدة أو بعد لفة واحدة كبيرة.

أ) Waterfall يسلّم النظام كاملاً مرة واحدة في نهاية المشروع.
ب) Spiral يركّز على تحليل المخاطر عبر لفات كبيرة، وليس بالضرورة إصدارات صغيرة متتالية بنفس منطق Agile.
د) V-shaped امتداد خطي لـ Waterfall، لا يتضمن إصدارات صغيرة متكررة.

ملاحظة: كما في سؤال سابق، Agile هنا معرفة عامة تكمّل ما تعلمناه عن Iterative Enhancement في محاضرة SDLC (حيث كل دورة تُنتج نسخة قابلة للاستخدام فعلياً) — المبدأ نفسه يوسّعه Agile لإصدارات أصغر وأسرع.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 16 (سهل)
Which software process model emphasizes the importance of risk analysis throughout the development process?
أ) Waterfall
ب) Spiral
ج) Agile
د) V-shaped
**الإجابة الصحيحة: ب**
**التعليل:**
Spiral Model هو النموذج الوحيد اللي أدمج "تحليل المخاطر" (Risk Analysis) كنشاط رسمي ثابت في كل لفة من لفاته الأربع (Planning → Risk Analysis → Development → Assessment) — وهذا كان الحل المباشر لمشكلة أن كل النماذج السابقة تجاهلت المخاطر تماماً.

أ) Waterfall لا يتضمن أي تقييم رسمي للمخاطر إطلاقاً — هذا أحد أهم عيوبه المذكورة بالمحاضرة.
ج) Agile يركّز على التكيّف والتسليم السريع أكثر من تحليل مخاطر رسمي منهجي.
د) V-shaped امتداد لـ Waterfall بدون تحليل مخاطر مدمج.

المحاضرة وصفت الشكل الحلزوني بدقة: البعد الشعاعي = التكلفة التراكمية، والبعد الزاوي = التقدم، وكل لفة تمر إجبارياً بمرحلة Risk Analysis.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 17 (سهل)
Which software development model involves the construction of a partial system that is progressively refined through iterations?
أ) Waterfall
ب) Spiral
ج) Incremental
د) V-shaped
**الإجابة الصحيحة: ج**
**التعليل:**
هذا وصف مباشر لما سمّته المحاضرة "Iterative Enhancement" (والمعروف عموماً أيضاً بـ Incremental Model): يُبنى نظام جزئي في البداية، وكل دورة لاحقة تضيف وظائف جديدة فوق الإصدار السابق تدريجياً، مع إطلاق منتج قابل للاستخدام فعلياً في نهاية كل دورة.

أ) Waterfall يبني النظام كاملاً دفعة واحدة بدون تجزئة تدريجية.
ب) Spiral يركّز على المخاطر أكثر من "البناء الجزئي المتصاعد" تحديداً، رغم أنه تكراري أيضاً.
د) V-shaped امتداد خطي غير تدريجي.

المحاضرة حذّرت صراحة من خطأ شائع: الخلط بين Iterative Enhancement وEvolutionary Development — فقط الأول ("Incremental" هنا) يُنتج منتجاً قابلاً للاستخدام فعلياً في كل دورة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 18 (سهل)
Which software development approach involves the creation of a series of prototypes to refine the requirements and design?
أ) Waterfall
ب) Spiral
ج) Prototype-based
د) V-shaped
**الإجابة الصحيحة: ج**
**التعليل:**
Prototyping Model يعتمد على بناء نسخة تجريبية (prototype) بناءً على المتطلبات المتاحة، يجرّبها العميل ويعطي ملاحظات، وتُنقَّح المتطلبات بناءً عليها، وقد تتكرر الدورة أكثر من مرة حتى تصل لمواصفة نهائية دقيقة.

أ) Waterfall لا يبني أي نموذج تجريبي إطلاقاً.
ب) Spiral يبني نماذج تجريبية أيضاً ضمن لفاته الأولى، لكن جوهره الأعمق هو تحليل المخاطر لا تنقيح المتطلبات فقط.
د) V-shaped لا يتضمن نماذج تجريبية.

نقطة مهمة أكدتها المحاضرة: النموذج التجريبي بأكمله يُرمى (thrown away) بعد انتهاء مهمته، والفائدة الحقيقية هي الخبرة المكتسبة لبناء النظام الفعلي لاحقاً.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 19 (سهل)
Which software development process model involves a series of overlapping, incremental, and iterative activities?
أ) Waterfall
ب) Spiral
ج) Iterative and incremental development
د) V-shaped
**الإجابة الصحيحة: ج**
**التعليل:**
"Iterative and Incremental Development" (IID) هو الاسم العام الذي يجمع فكرة Iterative Enhancement اللي شرحتها المحاضرة: أنشطة متداخلة ومتكررة تُنتج زيادات وظيفية متعاقبة، كل دورة تبني فوق سابقتها.

أ) Waterfall تسلسل خطي بدون تداخل أو تكرار.
ب) Spiral تكراري فعلاً لكن جوهره تحليل المخاطر، مو مجرد "أنشطة متداخلة ومتصاعدة".
د) V-shaped لا يتضمن تكراراً.

هذا هو نفس مفهوم Iterative Enhancement بمسمى بديل شائع في الأدبيات (IID)، وهو الحل المباشر الذي طرحته المحاضرة لمشكلة "العميل يرى النتيجة متأخراً جداً" في Waterfall.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 20 (سهل)
Which software development process model is characterized by a linear and sequential flow?
أ) Agile
ب) Waterfall
ج) Spiral
د) Iterative
**الإجابة الصحيحة: ب**
**التعليل:**
Waterfall هو التعريف الكلاسيكي للتدفق الخطي المتسلسل — خمس مراحل صارمة (Requirements → Design → Implementation → Testing → Maintenance) لازم تكتمل كل واحدة بالكامل قبل التالية، بدون رجوع للخلف نظرياً، تماماً مثل الماء اللي ينزل من الشلال.

أ) Agile تكراري بطبيعته (sprints)، عكس الخطية تماماً.
ج) Spiral حلزوني ومتكرر، ليس خطياً.
د) Iterative بطبيعته يتضمن تكراراً ورجوعاً، عكس "التدفق الخطي المتسلسل".

المحاضرة استخدمت تشبيه "الشلال" بالضبط لوصف Waterfall: الماء ينزل باتجاه واحد فقط ولا يرجع لفوق — وهذا جوهر السؤال.

**المصدر:** [نمط 2023-2024]
### السؤال 21 (سهل)
Which of the following is NOT a typical phase in the software project management lifecycle?
أ) Requirements Analysis
ب) Design
ج) Implementation
د) Deployment
**الإجابة الصحيحة: د**
**التعليل:**
مراحل Waterfall الخمس اللي سمّتها المحاضرة بدقة هي: Requirements Analysis & Specification، Design، Implementation، Testing، وOperation & Maintenance. "Deployment" لم تُذكر كاسم مرحلة مستقلة بهذا المسمى في المحاضرة — أقرب مرحلة لها هي جزء من Operation & Maintenance (الإطلاق الفعلي)، لا مرحلة منفصلة بذاتها.

أ) Requirements Analysis مرحلة أولى مذكورة صراحة.
ب) Design مرحلة ثانية مذكورة صراحة.
ج) Implementation مرحلة ثالثة مذكورة صراحة.

هذا سؤال يختبر حفظ الأسماء الدقيقة لمراحل Waterfall الخمس كما وردت بالمحاضرة، لا المفهوم العام لـ"النشر" الذي يُعتبر جزءاً ضمنياً من مرحلة التشغيل.

**المصدر:** [نمط 2023-2024]
### السؤال 22 (سهل)
Which project management approach focuses on delivering small, incremental improvements through iterative development?
أ) Waterfall
ب) Spiral
ج) Agile
د) V-Model
**الإجابة الصحيحة: ج**
**التعليل:**
Agile هو النهج الأشهر المرتبط بتسليم تحسينات صغيرة متكررة عبر دورات قصيرة (sprints)، وهو مبني على مبدأ Iterative Enhancement اللي شرحته محاضرة SDLC.

أ) Waterfall يسلّم النظام كاملاً دفعة واحدة.
ب) Spiral تكراري لكنه يركّز على المخاطر أكثر من "التحسينات الصغيرة المتكررة" تحديداً.
د) V-Model امتداد خطي لـ Waterfall.

**المصدر:** [نمط 2023-2024]
### السؤال 23 (سهل)
System maintenance is necessary because:
أ) Humans never get it right the first time.
ب) The deployment platform may change over time.
ج) The user's needs may change over time.
د) All of the above.
ه) None of the above.
**الإجابة الصحيحة: د**
**التعليل:**
الأسباب الثلاثة كلها صحيحة ومكمّلة لبعض: البشر نادراً ما يصيبون من أول محاولة (Software Myths ناقشت هذا في المحاضرة الأولى)، منصة النشر تتطور وتتغير، واحتياجات المستخدم تتطور مع الوقت — وكلها أسباب حقيقية لضرورة الصيانة المستمرة.

أ) صحيح لوحده لكنه ليس السبب الوحيد.
ب) صحيح لوحده لكنه ليس السبب الوحيد.
ج) صحيح لوحده لكنه ليس السبب الوحيد.

مرحلة Operation & Maintenance في Waterfall تشمل تصحيح الأخطاء، إضافة تحسينات، وحذف قدرات غير مستخدمة — وهذا يغطي فعلياً الأسباب الثلاثة مجتمعة (أخطاء بشرية أولية، تغيّر البيئة، وتغيّر احتياجات المستخدم).

**المصدر:** [نمط 2023-2024]
### السؤال 24 (سهل)
The five general phases in the Spiral model are:
أ) Analysis, Design, Implementation, Testing, and Review
ب) Review, Decision, Engineering, Acceptance, and Planning
ج) Analysis, Design, Engineering, Testing, and Payment
د) Review, Risk-analysis, Prototyping, Engineering (develop & verify), and Planning
ه) Review, Risk-analysis, Design, Implementation, and Planning
**الإجابة الصحيحة: د**
**التعليل:**
هذا الخيار هو الأقرب لمصطلحات Spiral Model الحقيقية اللي شرحتها المحاضرة: Planning (تحديد الأهداف والبدائل والقيود)، Risk Analysis (تحليل المخاطر)، بناء نموذج تجريبي (Prototyping) في اللفات الأولى، Engineering/Development (التطوير والتحقق الفعلي)، وReview/Assessment (تقييم العميل) — وكل هذه المصطلحات مذكورة بالخيار d تحديداً.

باقي الخيارات (a, b, c, e) تخلط مصطلحات من نماذج أخرى (Waterfall) أو تضيف كلمات غير منطقية (Payment) لا علاقة لها بالنموذج إطلاقاً.

المحاضرة وصفت اللفة الأولى (Planning → Risk Analysis → نموذج تجريبي أولي → تقييم العميل) بالتفصيل، وهذا يطابق ترتيب الخيار d بدقة.

**المصدر:** [نمط 2023-2024]
### السؤال 25 (سهل)
Which of the following increases as the Spiral model process moves "outwards"?
أ) Risk
ب) Profit
ج) Time-to-delivery
د) Time-to-completion
ه) None of the above
**الإجابة الصحيحة: د**
**التعليل:**
البعد الشعاعي في مخطط Spiral يمثّل التكلفة التراكمية للمشروع، والبعد الزاوي يمثّل التقدم المُحرز — وكل ما ابتعدنا عن المركز (لفة جديدة إضافية) زاد الوقت المنقضي فعلياً من عمر المشروع (Time-to-completion يتراكم مع كل لفة إضافية).

أ) المخاطر تنخفض تدريجياً مع تقدم اللفات (كل لفة تحلّل وتحل مخاطر جديدة)، لا ترتفع.
ب) الربح مفهوم غير مرتبط مباشرة بأبعاد المخطط الحلزوني.
ج) "وقت التسليم" (delivery) قد يكون ثابتاً كهدف نهائي، بعكس الوقت المنقضي فعلياً (completion) الذي يتراكم مع كل لفة.

هذا يربط مباشرة بوصف المحاضرة للمخطط: كل لفة إضافية تعني مزيداً من الوقت المنقضي والتكلفة المتراكمة، بينما الهدف من إدماج Risk Analysis أصلاً هو تقليل المخاطر تدريجياً كلما تقدمنا للخارج.

**المصدر:** [نمط 2023-2024]
### السؤال 26 (سهل)
A software development model is really just:
أ) a more complex metaphor for what happens in reality.
ب) a theory which approximates what happens in reality
ج) an exact isomorphism to what happens in reality
د) an elaboration of the abstraction of flexibility
ه) a comforting lie we tell ourselves to maintain the delusion that we're developing software in some logical fashion.
**الإجابة الصحيحة: ب**
**التعليل:**
أي نموذج (model) في العلوم الهندسية، بما فيها نماذج SDLC، هو تبسيط/تقريب نظري للواقع المعقّد — يساعد على التفكير المنظم لكنه لا يطابق الواقع حرفياً 100%.

أ) "استعارة أكثر تعقيداً" وصف غير دقيق؛ النموذج يهدف للتبسيط لا زيادة التعقيد.
ج) "تطابق حرفي تام" (isomorphism) مبالغة غير واقعية — النماذج تقريبية دائماً، ولذلك نحتاج نماذج متعددة (Waterfall, Spiral...) لسياقات مختلفة.
d وe خيارات هزلية/غير تقنية واضحة.

هذا يتماشى مع فكرة رئيسية في محاضرة SDLC: لكل نموذج نقاط قوة وضعف، وأياً منها ليس "الحل المثالي المطلق" بل تقريب نظري مفيد ضمن سياق معين.

## المحاضرة 3: Software Requirements (متطلبات البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 27 (سهل)
What is the primary goal of requirements engineering?
أ) Designing the software architecture
ب) Developing the user interface
ج) Gathering and documenting the software requirements
د) Implementing the software features
**الإجابة الصحيحة: ج**
**التعليل:**
هندسة المتطلبات (Requirements Engineering) هدفها الأساسي جمع المتطلبات من العميل وأصحاب المصلحة وتوثيقها بدقة عبر أنشطتها الأربعة: Elicitation، Analysis and Negotiation، Documentation، Validation — لتنتج في النهاية وثيقة SRS.

أ) تصميم المعمارية يأتي بعد اكتمال المتطلبات، في مرحلة Design وليست جزءاً من RE.
ب) تطوير واجهة المستخدم نشاط تنفيذي لاحق، ليس هدف هندسة المتطلبات.
د) تنفيذ الميزات (implementation) يأتي في مرحلة لاحقة كلياً بعد التصميم.

المحاضرة أكدت أن هندسة البرمجيات في جوهرها "حل مشاكل"، وما تقدر تحل مشكلة صح إلا إذا فهمتها وجمعتها ووثقتها صح من الأول — وهذا بالضبط دور Requirements Engineering.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 28 (سهل)
Which of the following is NOT a characteristic of a good requirement?
أ) Consistency
ب) Completeness
ج) Ambiguity
د) Verifiability
**الإجابة الصحيحة: ج**
**التعليل:**
الغموض (Ambiguity) هو بالضبط عكس ما يجب أن يكون عليه المتطلب الجيد — المحاضرة أعطت مثال كلمة "search" الشهير لتوضيح كيف أن الغموض في صياغة متطلب واحد أدى لتنفيذ خاطئ تماماً رغم أن المطوّر نفّذ النص "حرفياً".

أ) الاتساق (Consistency) صفة مطلوبة — لا يوجد تعارض بين المتطلبات.
ب) الاكتمال (Completeness) صفة مطلوبة — كل الوظائف المطلوبة موصوفة.
د) قابلية التحقق (Verifiability) صفة مطلوبة — من فحوصات Validation الخمسة التي شرحتها المحاضرة.

هذا مرتبط مباشرة بفحوصات Validation الخمسة (الصلاحية، الاتساق، الاكتمال، الواقعية، وقابلية التحقق) — والغموض هو بالضبط ما تحاول كل هذه الفحوصات القضاء عليه.

**المصدر:** [نمط 2023-2024]
### السؤال 29 (متوسط)
In the context of project management, what does 'scope creep' refer to?
أ) An increase in project budget
ب) An expansion of project scope without corresponding adjustments in resources or time
ج) A delay in project schedule
د) A reduction in project team size
**الإجابة الصحيحة: ب**
**التعليل:**
Scope Creep مصطلح قياسي يصف توسّع نطاق المشروع تدريجياً بدون تعديل مقابل في الموارد أو الجدول الزمني — غالباً بسبب متطلبات تتغير أو تُضاف باستمرار بدون إدارة تغيير رسمية.

أ) زيادة الميزانية نتيجة محتملة لـ Scope Creep، مو تعريفه نفسه.
ج) تأخر الجدول الزمني نتيجة محتملة أيضاً، مو التعريف المباشر.
د) تقليص حجم الفريق لا علاقة له بتوسّع النطاق.

هذا يرتبط مباشرة بتحدي "المتطلبات تتغير" اللي شرحته محاضرة Requirements — بدون عملية Requirements Management منضبطة (تتبع، روابط، تقييم أثر كل تغيير)، يتحول التغيّر الطبيعي في المتطلبات إلى Scope Creep غير مُدار.

**المصدر:** [نمط 2023-2024]
### السؤال 30 (سهل)
What does the term 'stakeholder' refer to in project management?
أ) A person who writes the project code
ب) Anyone who has an interest in the project's outcome
ج) The project manager only
د) The person who provides project funding
**الإجابة الصحيحة: ب**
**التعليل:**
Stakeholder حسب محاضرة Requirements هو "أي شخص أو جهة متأثرة أو مؤثرة بالمشروع" — تعريف واسع يشمل العملاء والمستخدمين والمطورين والإدارة وغيرهم، وليس مقتصراً على دور واحد.

أ) كاتب الكود دور واحد فقط ضمن أصحاب المصلحة (مطوّر).
ج) مدير المشروع دور واحد فقط أيضاً، وليس التعريف الكامل.
د) ممول المشروع مثال واحد على stakeholder، لكن التعريف أوسع بكثير من هذا الدور فقط.

المحاضرة عدّدت خمس فئات مستخدمين لوثيقة SRS وحدها (عملاء، مدراء، مهندسو نظام، مهندسو اختبار، مهندسو صيانة) — وكلهم أمثلة على Stakeholders بمعناها الواسع.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 31 (متوسط)
Which of the following best describes "functional requirements" in an SRS?
أ) Requirements that specify how the system should perform under specific conditions.
ب) Requirements that outline the system's performance metrics and scalability.
ج) Requirements related to the user interface design and usability.
د) Requirements that define what the system should do, including actions and services it must provide.
**الإجابة الصحيحة: د**
**التعليل:**
المحاضرة عرّفت Functional Requirements بأنها تصف "الوظائف والخدمات الأساسية للنظام" — أي "ماذا" يفعل النظام، مطابق تماماً للخيار d.

أ) "كيف يؤدي تحت ظروف معينة" أقرب لتعريف Non-functional Requirements (قيود الأداء).
ب) مقاييس الأداء وقابلية التوسع من فئة Non-functional Requirements، لا Functional.
ج) تصميم واجهة المستخدم قد يتضمن جانبين وظيفي وغير وظيفي، لكنه ليس التعريف العام لـ Functional Requirements.

المحاضرة فرّقت بوضوح: الوظيفي يجاوب "شنو النظام يسوي؟"، وغير الوظيفي يجاوب "كيف يسويه بجودة معينة؟" — وهذا الفرق العملي هو جوهر السؤال.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 32 (سهل)
In an SRS, what does "non-functional requirements" refer to?
أ) Requirements that are not related to user interactions.
ب) Requirements that describe how the system performs its functions, such as performance, security, and usability.
ج) Requirements that are optional and can be excluded from the final product.
د) Requirements that are only applicable to hardware components of the system.
**الإجابة الصحيحة: ب**
**التعليل:**
Non-functional Requirements حسب المحاضرة هي قيود والتزامات تصف "كيف" يؤدي النظام وظائفه بجودة معينة — تشمل الأمان، السلامة، التوافر، سهولة الاستخدام، وقابلية النقل، وهذا مطابق تماماً للخيار b.

أ) قد تكون مرتبطة أو غير مرتبطة بتفاعل المستخدم، هذا ليس الفيصل الحقيقي بينها وبين الوظيفية.
ج) "اختيارية ويمكن استبعادها" خطأ جوهري — Non-functional Requirements إلزامية تماماً مثل Functional، فقط من نوع مختلف.
د) قصرها على مكونات الهاردوير فقط خطأ — تشمل أيضاً السوفتوير والأمان وسهولة الاستخدام.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 33 (متوسط)
What is "traceability" in the context of an SRS?
أ) The ability to track changes made to the codebase throughout development.
ب) The process of documenting test cases based on requirements.
ج) The method used to ensure that all requirements are met during testing.
د) The ability to link requirements back to their source and forward to their implementation in design or code.
**الإجابة الصحيحة: د**
**التعليل:**
Traceability حسب مبادئ إدارة المتطلبات اللي شرحتها المحاضرة تعني القدرة على ربط كل متطلب بمصدره الأصلي (لماذا وُجد) وبتنفيذه لاحقاً في التصميم أو الكود — لتتبع كل متطلب عبر دورة حياته الكاملة.

أ) تتبع تغييرات الكود عام جداً وأقرب لـ Configuration Management وليس Traceability بمعناها الدقيق في RE.
ب) توثيق حالات اختبار مبنية على المتطلبات نشاط منفصل (رغم ارتباطه بـ Traceability عملياً).
ج) التأكد من تحقق كل المتطلبات أثناء الاختبار أقرب لـ Validation، لا تعريف Traceability نفسه.

المحاضرة ذكرت إدارة المتطلبات كعملية تشمل ثلاث مهام: تتبع كل متطلب فردي، الحفاظ على روابط بين المتطلبات المترابطة، وتقييم أثر أي تغيير مقترح — وهذا بالضبط جوهر Traceability.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 34 (سهل)
Which technique is commonly used for gathering requirements during the SRS development process?
أ) Code reviews
ب) Prototyping
ج) Performance testing
د) Version control
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة ذكرت Prototyping صراحة كإحدى تقنيات فهم المشكلة الأربعة في مرحلة الاستخراج (Elicitation): "مقابلات، استبيانات، ملاحظة، ونماذج أولية" — وهي أيضاً تقنية Validation فعّالة لكشف الغموض.

أ) مراجعات الكود نشاط لاحق يخص التنفيذ، لا جمع المتطلبات.
ج) اختبار الأداء نشاط اختبار لاحق تماماً، لا علاقة له بجمع المتطلبات.
د) التحكم بالإصدارات (Version Control) موضوع Configuration Management، لا علاقة له بجمع المتطلبات.

المحاضرة أكدت أن النمذجة الأولية (Prototyping) "طريقة ممتازة لكشف غموض زي مشكلة search" — وهذا يجعلها أداة قوية لكل من الجمع والتحقق من المتطلبات.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 35 (سهل)
What is meant by "requirements volatility"?
أ) The tendency for requirements to change over time due to evolving stakeholder needs or market conditions.
ب) The stability of requirements throughout the software development lifecycle.
ج) The ability to implement requirements without significant rework.
د) The process of validating requirements against user expectations.
**الإجابة الصحيحة: أ**
**التعليل:**
المحاضرة شرحت بالتفصيل ليش المتطلبات تتغير دائماً: الأنظمة تُطوَّر لمعالجة مشاكل لا يمكن تعريفها كاملاً من الأساس، البيئة التقنية والتجارية تتغير، وأصحاب المصلحة المختلفون عندهم أولويات متعارضة — وهذا التقلب المستمر هو بالضبط "Requirements Volatility".

ب) "الاستقرار" عكس المعنى المقصود تماماً.
ج) القدرة على التنفيذ بدون إعادة عمل موضوع مختلف (أقرب لجودة التصميم)، لا تقلب المتطلبات.
د) عملية التحقق (Validation) نشاط منفصل تماماً عن مفهوم التقلب نفسه.

هذا يربط مباشرة بالأسباب الثلاثة اللي عدّدتها المحاضرة لتغيّر المتطلبات دائماً — وأهمها أن المتطلبات محكوم عليها تكون ناقصة في البداية حتماً.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 36 (متوسط)
Which of the following best describes "requirements elicitation"?
أ) The process of documenting requirements after they have been gathered from stakeholders.
ب) The process of defining how requirements will be verified and validated during testing.
ج) The process of discovering and collecting stakeholder needs and expectations for the software product.
د) The process of prioritizing requirements based on business value and feasibility.
**الإجابة الصحيحة: ج**
**التعليل:**
Elicitation حسب المحاضرة هو أول أنشطة هندسة المتطلبات الأربعة، ويُعرف أيضاً "جمع المتطلبات" — يُحدَّد فيه المتطلبات بمساعدة العميل والأنظمة الموجودة، أي اكتشاف وجمع احتياجات وتوقعات أصحاب المصلحة.

أ) التوثيق بعد الجمع هو نشاط Documentation المنفصل، النشاط الثالث لا الأول.
ب) التحقق والتصديق أثناء الاختبار أقرب لـ Validation، النشاط الرابع.
د) ترتيب الأولويات جزء من Analysis and Negotiation، النشاط الثاني.

المحاضرة رتّبت الأنشطة الأربعة بدقة: Elicitation (جمع) → Analysis and Negotiation (تحليل وتفاوض) → Documentation (توثيق) → Validation (تحقق) — وElicitation هو نقطة البداية الأولى دائماً.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 37 (سهل)
What is one potential consequence of poorly defined requirements in an SRS?
أ) Increased stakeholder satisfaction due to flexibility in development.
ب) Higher likelihood of project success due to clear guidelines for developers.
ج) Increased project costs due to rework, scope creep, and miscommunication among stakeholders.
د) Faster development cycles due to reduced documentation overhead.
**الإجابة الصحيحة: ج**
**التعليل:**
المحاضرة أكدت أن تكلفة تصحيح خطأ في المتطلبات تكبر بشكل مخيف كل ما تأخر اكتشافها (تصحيحه في مرحلة الصيانة يكلّف 100 ضعف تصحيحه أثناء جمع المتطلبات) — والمتطلبات المُعرَّفة بشكل سيء تؤدي مباشرة لإعادة عمل، توسّع نطاق غير مُدار، وسوء فهم بين الأطراف.

أ) رضا أصحاب المصلحة عكس المتوقع تماماً — الغموض يسبب إحباطاً لا رضا.
ب) احتمال نجاح أعلى عكس الحقيقة تماماً — متطلبات سيئة تعني احتمال فشل أعلى.
د) دورات تطوير أسرع عكس الحقيقة — سوء التعريف يبطئ التطوير بسبب إعادة العمل المتكررة.

المحاضرة ربطت صراحة تحليل المشاريع الفاشلة أو المتجاوزة للميزانية بفشل فهم وإدارة المتطلبات كسبب رئيسي متكرر — لا مشاكل لغة برمجة أو أداة معيّنة.

## المحاضرة 4: Design and Implementation (التصميم والتنفيذ)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 38 (متوسط)
What is the purpose of a use case in requirements engineering?
أ) To define the system architecture
ب) To specify the implementation details
ج) To describe the interactions between actors and the system
د) To document the project management plan
**الإجابة الصحيحة: ج**
**التعليل:**
Use case هو جزء من الـ Interaction Model — نموذج ديناميكي يوضح كيف يتفاعل النظام مع بيئته الخارجية (actors)، حيث كل use case يمثّل تفاعلاً محدداً موثَّقاً بجدول فيه: النظام، الفاعلين، الحافز، والاستجابة.

أ) System architecture توثّقه المحاضرة عبر الخطوة الثانية من OOD (التصميم المعماري)، وهي منفصلة عن use case.
ب) تفاصيل التنفيذ (implementation details) عكس فكرة use case تماماً — use case يصف "ماذا" يحدث لا "كيف" يُنفَّذ.
د) خطة إدارة المشروع موضوع مختلف كلياً (محاضرة إدارة المشاريع).

هذا مرتبط مباشرة بالخطوة الأولى من خطوات OOD الخمس: فهم سياق النظام وتفاعلاته الخارجية عبر نموذجي System Context وInteraction Model.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 39 (سهل)
Which reuse approach involves assembling software components from various sources to create a new system?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: ج**
**التعليل:**
Component-based reuse هو أحد مستويات إعادة الاستخدام الأربعة (Abstraction, Object, Component, System) اللي شرحتها المحاضرة، وفيه يتم تجميع مكوّنات جاهزة من مصادر مختلفة (قد تحتاج بعض الكود الإضافي لدمجها) لبناء نظام جديد.

أ) Object-oriented reuse يعتمد على مكتبات جاهزة (زي JUnit) بدون كتابة كود إضافي غالباً.
ب) Application frameworks هي هياكل عامة قابلة للتخصيص، مو مجرد تجميع مكونات من مصادر متعددة.
د) Customization reuse ليس أحد المستويات الأربعة المذكورة في المحاضرة بهذا الاسم.

المحاضرة رتّبت المستويات الأربعة من الأبسط للأعقد: Abstraction (بدون كود) ← Object (بدون كود، مكتبات) ← Component (يحتاج شوي كود للدمج) ← System (تطبيق كامل جاهز يحتاج تهيئة فقط).

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 40 (سهل)
Which modeling technique is used to represent the dynamic behavior of a system over time?
أ) Use case diagram
ب) Class diagram
ج) Activity diagram
د) Sequence diagram
**الإجابة الصحيحة: د**
**التعليل:**
Sequence diagram هو من النماذج الديناميكية (Dynamic Models) اللي شرحتها المحاضرة، ويوضح تحديداً ترتيب طلبات الخدمة بين الكائنات عبر الزمن — الكائنات أفقياً والزمن يمشي عمودياً، وهذا يطابق "dynamic behavior over time" حرفياً.

أ) Use case diagram جزء من Interaction Model لكنه يوضح "من يتفاعل مع ماذا"، مو تسلسل زمني دقيق.
ب) Class diagram نموذج هيكلي/ساكن (structural/static) يوضح البنية الثابتة، عكس الديناميكية المطلوبة بالسؤال.
ج) Activity diagram يوضح تدفق الأنشطة، لكن المحاضرة تحديداً استخدمت Sequence وState لتمثيل "التفاعلات وتغييرات الحالة بمرور الزمن".

المحاضرة قسّمت نماذج UML بوضوح لنوعين: Structural/Static (زي class diagram) وDynamic (زي sequence diagram وstate diagram) — وSequence هو الأنسب لوصف "مرور الزمن" تحديداً.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 41 (سهل)
Which software reuse approach involves adapting existing software components to fit new requirements without modifying their core functionality?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Wrapping reuse
**الإجابة الصحيحة: د**
**التعليل:**
Wrapping (التغليف) هو أسلوب يُبقي الوظيفة الأساسية (core functionality) للمكوّن كما هي بدون أي تعديل داخلي، ويكتفي بإضافة طبقة واجهة خارجية (wrapper) تجعله يتوافق مع متطلبات جديدة — وهذا مطابق تماماً لنص السؤال "without modifying their core functionality".

أ) Object-oriented reuse يعتمد على مكتبات جاهزة تُستخدم كما هي، مو "تكييف" مكوّن موجود.
ب) Application frameworks تُخصَّص عبر نقاط توسعة محددة سلفاً من مصمم الـ framework، مو تكييفاً حراً لمكوّن موجود.
ج) Component-based reuse يخص تجميع مكونات، وليس التكييف تحديداً.

ملاحظة: "Wrapping" لم يُذكر بالاسم صراحة ضمن مستويات إعادة الاستخدام الأربعة (Abstraction/Object/Component/System) في المحاضرة — الإجابة معتمدة على معرفة عامة قياسية تكمّل موضوع إعادة الاستخدام الذي غطّته المحاضرة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 42 (سهل)
Which software reuse approach involves creating software components that can be easily adapted and extended for different applications?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: ب**
**التعليل:**
Application frameworks هي هياكل عامة مصمَّمة خصيصاً لتكون قابلة للتكييف والتوسعة (adaptable and extensible) عبر نقاط توسعة محددة، لتُستخدم كأساس لعدة تطبيقات مختلفة.

أ) Object-oriented reuse يخص استخدام مكتبات جاهزة كما هي، مو بناء مكونات مصمَّمة للتوسعة أصلاً.
ج) Component-based reuse يخص تجميع مكونات موجودة، وليس بالضرورة "مصمَّمة للتكيّف والتوسعة".
د) Customization reuse ليس أحد المستويات الأربعة الرسمية (Abstraction/Object/Component/System) المذكورة في المحاضرة.

Application Frameworks هي أحد مستويات إعادة الاستخدام الأربعة، وتتميّز عن باقي المستويات بأنها مصمَّمة خصيصاً لتوسّع وتُخصَّص من قِبل المطوّرين الذين يستخدمونها.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 43 (متوسط)
What is the primary purpose of a software configuration management system?
أ) To track project progress
ب) To identify and fix defects in the software
ج) To manage changes to software artifacts throughout the development process
د) To estimate project costs
**الإجابة الصحيحة: ج**
**التعليل:**
Configuration Management هي عملية تتبع النسخ المختلفة من كل مكوّن عبر عملية التطوير، وتتكوّن من ثلاثة أنشطة أساسية شرحتها المحاضرة: إدارة النسخ (Version Management)، دمج النظام (System Integration)، وتتبع المشاكل (Problem Tracking) — كلها تصب في إدارة التغييرات على مخرجات المشروع.

أ) تتبع تقدم المشروع دور Project Plan العام، مو Configuration Management تحديداً.
ب) تحديد وإصلاح الأخطاء دور الاختبار وDebugging، لا علاقة مباشرة بإدارة النسخ.
د) تقدير التكلفة موضوع منفصل تماماً (محاضرة إدارة المشاريع).

المحاضرة ذكرت أدوات عملية لهذا الغرض مثل ClearCase وSubversion وBugZilla — كلها أدوات تخدم هدفاً واحداً: منع دمج نسخ خاطئة ببعضها أثناء التطوير المتوازي.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 44 (متوسط)
What is the purpose of a use case diagram in software modeling?
أ) To show the interaction between objects in the system
ب) To visualize the flow of activities in a use case
ج) To represent the relationships between classes
د) To depict the sequence of messages exchanged between objects
**الإجابة الصحيحة: TODO**
**التعليل:**
هذا السؤال فيه مشكلة حقيقية في صياغة الخيارات: ولا خيار من الأربعة يصف بدقة الوظيفة الفعلية لـ Use Case Diagram كما شرحتها المحاضرة (توضيح تفاعل النظام مع الفاعلين الخارجيين actors عبر use cases بيضاوية الشكل، مو تفاصيل رسائل أو تدفق أنشطة داخلية). كل خيار من الأربعة يصف فعلياً diagram مختلف تماماً:

أ) "التفاعل بين الكائنات" أقرب لوصف Sequence/Collaboration diagram.
ب) "تدفق الأنشطة داخل use case واحد" هو تحديداً وصف Activity Diagram، مو Use Case Diagram نفسه.
ج) "العلاقات بين الفئات" هو تعريف Class Diagram بالضبط.
د) "تسلسل الرسائل بين الكائنات" هو تعريف Sequence Diagram بالضبط.

بما إن ولا خيار يطابق التعريف الصحيح لـ Use Case Diagram (توثيق تفاعل actors مع النظام عبر use cases)، فالسؤال يبدو فيه خطأ في الاستخراج أو صياغة الخيارات الأصلية، وأُترك TODO للمراجعة اليدوية بدل تخمين إجابة غير دقيقة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 45 (سهل)
What is the main advantage of reusing software components?
أ) Reduced development time and cost
ب) Improved software quality
ج) Enhanced software maintainability
د) Increased software performance
**الإجابة الصحيحة: أ**
**التعليل:**
المحاضرة عدّدت فوائد إعادة الاستخدام: سرعة، تقليل مخاطر، تكلفة أقل، وموثوقية أعلى — لكن الفائدة "الرئيسية" الأكثر تكراراً في الأدبيات والأكثر مباشرة هي توفير الوقت والتكلفة، لأنك لا تكتب من الصفر.

ب) تحسين الجودة فائدة محتملة لكنها غير مضمونة دائماً (المكوّن الجاهز قد يكون أقل جودة من كود مخصَّص).
ج) تحسين قابلية الصيانة فائدة جانبية، مو الميزة الرئيسية المباشرة.
د) تحسين الأداء غير مضمون إطلاقاً — أحياناً المكوّنات الجاهزة أبطأ من كود مخصَّص.

المحاضرة حذّرت أيضاً من فهم خاطئ شائع: إعادة الاستخدام ليست "مجانية" — فيها تكاليف حقيقية (بحث، تقييم، تكييف، دمج) يجب موازنتها مقابل الفائدة الأساسية في الوقت والتكلفة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 46 (متوسط)
What is the main purpose of a class diagram in software modeling?
أ) To illustrate the behavior of individual objects
ب) To represent the flow of activities in a use case
ج) To depict the static structure of a system
د) To show the sequence of messages exchanged between objects
**الإجابة الصحيحة: ج**
**التعليل:**
Class Diagram هو أهم مثال على النماذج الهيكلية/الساكنة (Structural/Static Models) اللي شرحتها المحاضرة — يوضح الكائنات والعلاقات بينها كبنية ثابتة، بعكس النماذج الديناميكية التي تصف التغيير بمرور الزمن.

أ) سلوك الكائنات الفردية أقرب لوصف State Diagram (ديناميكي).
ب) تدفق أنشطة use case وصف Activity Diagram، مو Class Diagram.
د) تسلسل الرسائل وصف Sequence Diagram (ديناميكي)، مو Class Diagram (ساكن).

المحاضرة قسّمت UML بوضوح لنموذجين: Structural/Static (البنية الثابتة، مثالها Class Diagram) وDynamic (التفاعلات وتغييرات الحالة، مثالها Sequence وState) — وClass Diagram دائماً يقع في الفئة الأولى.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 47 (سهل)
Which software reuse approach involves modifying existing software components to meet specific requirements?
أ) Object-oriented reuse
ب) Application frameworks
ج) Component-based reuse
د) Customization reuse
**الإجابة الصحيحة: د**
**التعليل:**
"Customization" يعني حرفياً تعديل مكوّن موجود ليلائم متطلبات محددة (بعكس Wrapping الذي يُبقي الكود الداخلي كما هو تماماً) — وهذا مطابق لنص السؤال "modifying existing components".

أ) Object-oriented reuse يستخدم المكتبات كما هي بدون تعديل داخلي.
ب) Application frameworks تُخصَّص عبر نقاط توسعة محددة سلفاً من المصمم، لا تعديل حر للكود الداخلي.
ج) Component-based reuse يخص التجميع من مصادر متعددة، وليس التعديل تحديداً.

ملاحظة: "Customization reuse" لم يُذكر بالاسم صراحة ضمن مستويات إعادة الاستخدام الأربعة الرسمية في المحاضرة (Abstraction/Object/Component/System) — الإجابة معتمدة على معرفة عامة قياسية تكمّل الموضوع، وتميّز بين Customization (تعديل داخلي) وWrapping (بدون تعديل داخلي، سؤال آخر بنفس الدورة).

**المصدر:** [نمط 2023-2024]
### السؤال 48 (سهل)
Maintenance may involve:
أ) only additional coding and testing.
ب) only additional analysis and design.
ج) only additional design, coding and testing.
د) any of the development phases, except analysis.
ه) any of the development phases.
**الإجابة الصحيحة: ه**
**التعليل:**
الصيانة قد تتطلب الرجوع لأي مرحلة من مراحل التطوير — بما فيها إعادة تحليل المتطلبات نفسها لو تغيّرت احتياجات المستخدم، وليس فقط التصميم والكود والاختبار.

a وb وc كلها تحصر الصيانة في مجموعة فرعية محددة من المراحل، بينما الصيانة الحقيقية قد تحتاج أي مرحلة حسب طبيعة التغيير المطلوب.
d تستثني التحليل تحديداً، وهذا خاطئ — أحياناً السبب الجذري لمشكلة الصيانة هو سوء فهم أصلي بالمتطلبات يحتاج إعادة تحليل.

هذا يتماشى مع مبدأ Software Evolution اللي ذكرته المحاضرة الأولى كأحد أنشطة Software Process الأربعة: تعديل البرمجية لمواكبة المتطلبات المتغيرة قد يمس أي جزء من العملية بأكملها.

**المصدر:** [نمط 2023-2024]
### السؤال 49 (سهل)
Reuse-based software engineering is:
أ) software engineering strategy where the development process is geared to reusing existing software.
ب) an approach to development that tries to maximize the reuse of existing software.
ج) All of the above
د) None of the above
**الإجابة الصحيحة: ج**
**التعليل:**
الخياران a وb يصفان نفس الفكرة بصياغتين متقاربتين جداً — استراتيجية تطوير موجَّهة نحو إعادة استخدام البرمجيات الموجودة قدر الإمكان — وكلاهما صحيح ومتوافق مع ما شرحته المحاضرة عن مستويات إعادة الاستخدام الأربعة (Abstraction, Object, Component, System).

د) استبعاد كل الخيارات غير منطقي بما أن a وb صحيحان فعلياً.

المحاضرة أكدت أن أغلب البرمجيات الحديثة تُبنى بإعادة استخدام مكونات موجودة، لأن الكتابة من الصفر صارت غير عملية اقتصادياً — وهذا جوهر Reuse-based Software Engineering بكلا الصياغتين.

**المصدر:** [نمط 2023-2024]
### السؤال 50 (سهل)
_______ is a benefit of software reusing:
أ) Increased dependability
ب) Reduced process risk
ج) Standards compliance
د) Accelerated development
ه) All of the above
**الإجابة الصحيحة: ه**
**التعليل:**
المحاضرة عدّدت فوائد إعادة الاستخدام: سرعة (Accelerated development)، تقليل مخاطر (Reduced process risk)، تكلفة أقل، وموثوقية أعلى (Increased dependability) — وStandards compliance فائدة إضافية معروفة (مكونات جاهزة غالباً مطابقة لمعايير الصناعة أصلاً).

a وb وc وd كلها فوائد حقيقية جزئية مذكورة أو ضمنية في شرح المحاضرة عن Reuse.

كل هذه الفوائد مجتمعة هي بالضبط ما دفع الصناعة للانتقال من "الكتابة من الصفر" (شائعة من الستينات للتسعينات) إلى الاعتماد المكثف على إعادة الاستخدام كما شرحت المحاضرة.

**المصدر:** [نمط 2023-2024]
### السؤال 51 (سهل)
_______ is a problem of software reusing:
أ) Increased maintenance costs
ب) Lack of tool support
ج) Finding, understanding, and adapting reusable components
د) A & C
ه) A & B & C
**الإجابة الصحيحة: ه**
**التعليل:**
المحاضرة ذكرت صراحة تكاليف حقيقية لإعادة الاستخدام: وقت البحث والتقييم والاختبار (يطابق c)، تكلفة التكييف والدمج (يطابق c أيضاً)، وأشارت ضمناً لصعوبات دعم الأدوات وزيادة تكلفة الصيانة كتحديات عملية معروفة في أدبيات إعادة الاستخدام.

a وb وc كلها مشاكل حقيقية جزئية مرتبطة بإعادة الاستخدام.
d يستبعد b رغم أنها مشكلة حقيقية مذكورة أيضاً.

المحاضرة حذّرت من فهم خاطئ شائع: إعادة الاستخدام ليست "مجانية دائماً" — فيها تكاليف حقيقية (بحث، تقييم، تكييف، دمج) يجب موازنتها، وهذا يطابق مجموع المشاكل الثلاثة المذكورة.

**المصدر:** [نمط 2023-2024]
### السؤال 52 (سهل)
Which of the following approaches support reusing?
أ) ERP systems
ب) Program libraries
ج) COTS product reuse
د) B & C
ه) A & B & C
**الإجابة الصحيحة: ه**
**التعليل:**
كل الثلاثة أمثلة فعلية على إعادة استخدام حسب مستويات المحاضرة: مكتبات البرمجة (Program libraries) تطابق مستوى "Object" (مكتبات جاهزة زي JUnit)، منتجات COTS (Commercial Off-The-Shelf) تطابق مستوى "System" (تطبيق كامل جاهز يحتاج تهيئة فقط)، وأنظمة ERP مثال تطبيقي على نفس مستوى System.

d يستبعد ERP رغم أنها مثال حقيقي وشائع جداً على System-level reuse.

المحاضرة ذكرت "تكلفة الشراء (عالية خصوصاً للمنتجات الجاهزة COTS)" كأحد تكاليف إعادة الاستخدام على مستوى النظام — وERP وCOTS كلاهما من نفس الفئة (تطبيقات جاهزة كاملة)، بينما Program Libraries أبسط (مستوى Object).

**المصدر:** [نمط 2023-2024]
### السؤال 53 (سهل)
Frameworks are language specific:
أ) True
ب) False
**الإجابة الصحيحة: أ**
**التعليل:**
الأطر البرمجية (Application Frameworks) مبنية عادة داخل بيئة لغة برمجة محددة وتعتمد على آلياتها الخاصة (زي Spring لجافا أو Django لبايثون أو .NET لـC#) — فهي بطبيعتها مرتبطة بلغة/منصة محددة، ولا يمكن استخدام نفس الـ framework مباشرة عبر لغات مختلفة تماماً بدون إعادة كتابة كبيرة.

هذا يتماشى مع تصنيف المحاضرة لمستوى "Application Frameworks" كأحد مستويات إعادة الاستخدام الأربعة — وبما أنها تعتمد على آليات وراثة وتوسعة (inheritance/hooks) خاصة بلغة برمجة معيّنة، فهي مرتبطة عملياً بتلك اللغة أو المنصة تحديداً.

ملاحظة: هذه النقطة التفصيلية (اعتماد الـ framework على لغة محددة) لم تُشرح صراحة بنفس هذه الصياغة في المحاضرة، لكنها استنتاج مباشر ومنطقي من طبيعة الـ frameworks كأدوات مبنية داخل بيئة برمجية محددة.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 54 (متوسط)
What is the primary purpose of version control systems like Git?
أ) To manage project budgets and timelines.
ب) To automatically generate documentation for the codebase.
ج) To optimize code performance and reduce memory usage.
د) To track changes to code, enable collaboration, and facilitate reverting to previous states.
**الإجابة الصحيحة: د**
**التعليل:**
أنظمة التحكم بالإصدار جزء من نشاط "إدارة النسخ" (Version Management) اللي شرحته المحاضرة ضمن Configuration Management: تتبع النسخ المختلفة من كل مكوّن، تمكين العمل الجماعي المتوازي دون تضارب، والقدرة على الرجوع لنسخة سابقة عند الحاجة.

أ) إدارة الميزانية والجدول الزمني دور Project Plan، لا أدوات التحكم بالإصدار.
ب) توليد التوثيق تلقائياً ليس الوظيفة الأساسية لأدوات زي Git (رغم وجود أدوات مساعدة منفصلة لذلك).
ج) تحسين أداء الكود واستهلاك الذاكرة لا علاقة له بتتبع الإصدارات.

المحاضرة ذكرت أدوات ClearCase وSubversion كأمثلة على أدوات إدارة النسخ ضمن Configuration Management — وGit هو الأداة الأكثر شيوعاً اليوم لنفس الغرض بالضبط.

## المحاضرة 5: Software Testing (اختبار البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 55 (سهل)
Which testing technique involves executing the entire system with realistic data in a simulated environment?
أ) Unit testing
ب) Regression testing
ج) System testing
د) Acceptance testing
**الإجابة الصحيحة: ج**
**التعليل:**
System Testing هو اختبار النظام الكامل بكل مكوناته مجتمعة، وهو آخر مستوى في تدرّج Development Testing (بعد Unit ثم Component)، ويُنفَّذ عادة ببيانات واقعية (realistic data) في بيئة محاكاة قبل الإصدار الفعلي.

أ) Unit testing يختبر وحدة واحدة بمعزل عن الباقي، مو النظام كامل.
ب) Regression testing يعيد تشغيل اختبارات سابقة بعد تعديل الكود، مو تنفيذ النظام كامل ببيانات واقعية.
د) Acceptance testing هو نوع خاص من User Testing يقوم به العميل نفسه، وليس بالضرورة "بيانات واقعية في بيئة محاكاة".

هذا يربط مباشرة بتدرّج مستويات Development Testing الثلاثة اللي شرحتها المحاضرة: Unit → Component → System، حيث كل مستوى أوسع من اللي قبله ويعتمد على نجاحه.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 56 (سهل)
Which software testing technique involves testing a system's ability to handle maximum expected load?
أ) Stress testing
ب) Usability testing
ج) Regression testing
د) Integration testing
**الإجابة الصحيحة: أ**
**التعليل:**
Stress testing يفحص سلوك النظام تحت أقصى حِمل متوقّع (maximum expected load) أو حتى أعلى منه، للتأكد أنه لا ينهار عند الضغط الشديد.

ب) Usability testing يقيس سهولة الاستخدام، لا علاقة له بالحِمل.
ج) Regression testing يتأكد أن تعديلاً جديداً لم يكسر وظيفة موجودة، مو اختبار الحِمل.
د) Integration testing يفحص تفاعل المكونات ببعضها، مو قدرة تحمّل الحمل.

نوع الاختبار هذا امتداد طبيعي لفكرة System Testing اللي شرحتها المحاضرة — النظام الكامل يُختبر تحت ظروف واقعية، والحمل الأقصى واحد من أهم هذه الظروف.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 57 (متوسط)
What is the primary purpose of software testing?
أ) To ensure the software meets customer requirements
ب) To improve the performance of the software
ج) To identify and fix defects in the software
د) To estimate the effort required for software development
**الإجابة الصحيحة: أ**
**التعليل:**
الاختبار في جوهره يهدف للتأكد من أن النظام يحقق ما يحتاجه العميل فعلاً — وهذا الهدف يتقاطع مع مفهوم Validation ("هل نبني المنتج الصحيح؟") الذي شرحته المحاضرة كأحد الهدفين الأساسيين وراء أي عملية اختبار.

ب) تحسين الأداء ليس هدف الاختبار — الاختبار يكتشف مشاكل الأداء، لا يحسّنه مباشرة.
ج) "تحديد وإصلاح" غير دقيقة تماماً — الاختبار يكتشف (identify) الأخطاء، لكن الإصلاح نفسه هو Debugging، وهو نشاط منفصل يأتي بعد الاختبار.
د) تقدير الجهد يخص إدارة المشروع، مو الاختبار.

المحاضرة تفرّق بوضوح بين Validation ("نبني الصحيح؟") وVerification ("نبنيه صح؟") — والاختبار أداة رئيسية لتحقيق كليهما، لكن هدفه النهائي الأعمق هو التأكد من رضا العميل الحقيقي.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 58 (سهل)
Which of the following is NOT a characteristic of a good software testing technique?
أ) High fault detection rate
ب) Ability to uncover complex defects
ج) Low time and cost requirements
د) High execution speed
**الإجابة الصحيحة: د**
**التعليل:**
سرعة التنفيذ (execution speed) ليست معياراً جوهرياً يُعرّف "جودة" تقنية الاختبار — تقنية بطيئة لكنها تكتشف أخطاء حقيقية بفعالية تبقى تقنية جيدة، بينما السرعة وحدها بدون فعالية اكتشاف لا تعني شيئاً.

أ) معدل اكتشاف أخطاء عالٍ هو جوهر أي تقنية اختبار جيدة.
ب) القدرة على اكتشاف أخطاء معقدة معيار أساسي للفعالية.
ج) انخفاض الوقت والتكلفة معيار عملي مهم جداً لأي تقنية اختبار (لأن الاختبار مكلف أصلاً).

هذا يربط بمبدأ اختيار حالات اختبار فعّالة اللي شرحته المحاضرة: المعيار هو "هل تكشف أخطاء موجودة فعلاً؟" و"هل تُثبت أن المكوّن يعمل بشكل طبيعي صحيح؟" — مو سرعة التنفيذ بحد ذاتها.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 59 (سهل)
Which software testing technique involves executing specific test cases that are derived from the internal structure of the software?
أ) White-box testing
ب) Black-box testing
ج) Regression testing
د) Acceptance testing
**الإجابة الصحيحة: أ**
**التعليل:**
White-box testing يصمّم حالات الاختبار بناءً على معرفة البنية الداخلية للكود (المسارات، الشروط، الحلقات) — وهذا مطابق تماماً لعبارة "derived from the internal structure".

ب) Black-box testing عكسه تماماً — يصمَّم بناءً على المواصفات الخارجية فقط بدون أي معرفة بالكود الداخلي.
ج) Regression testing يعيد تشغيل اختبارات قديمة بعد تعديل، بغض النظر عن مصدر تصميمها الأصلي.
د) Acceptance testing يعتمد على متطلبات العميل، لا البنية الداخلية للكود.

هذا الفرق (White-box يعتمد الكود الداخلي مقابل Black-box يعتمد المواصفات الخارجية) هو أحد أكثر المفاهيم تكراراً في بنك الأسئلة كله، وشُرح بالتفصيل في محاضرة JUnit كذلك.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 60 (سهل)
Which testing technique focuses on evaluating the system's behavior under normal and peak load conditions?
أ) Stress testing
ب) Unit testing
ج) System testing
د) Acceptance testing
**الإجابة الصحيحة: أ**
**التعليل:**
Stress testing تحديداً هي التي تقيّم سلوك النظام تحت ظروف الحِمل العادي والحِمل الأقصى (peak load)، بهدف كشف نقاط الانهيار قبل الاستخدام الفعلي.

ب) Unit testing يختبر وحدة معزولة صغيرة، لا علاقة له بالحِمل.
ج) System testing أوسع من مجرد اختبار الحِمل — يشمل اختبار النظام كاملاً بجوانب متعددة.
د) Acceptance testing يخص قبول العميل للنظام، لا الحِمل تحديداً.

هذا تكرار لمفهوم سبق ذكره بصيغة مختلفة في سؤال آخر بنفس الدورة — يوضح كيف يمكن لنفس المفهوم أن يُصاغ بعدة طرق في بنك أسئلة واحد.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 61 (سهل)
Which testing technique focuses on executing the code with different inputs?
أ) White-box testing
ب) Black-box testing
ج) Integration testing
د) Regression testing
**الإجابة الصحيحة: أ**
**التعليل:**
White-box testing يصمَّم بناءً على معرفة الكود الداخلي، وحالاته تُبنى خصيصاً لتغطية مسارات تنفيذ (execution paths) مختلفة داخل الكود عبر مدخلات متنوعة تفعّل كل مسار.

ب) Black-box testing يعتمد المواصفات الخارجية بدون أي اعتبار لكيفية تنفيذ الكود داخلياً.
ج) Integration testing يركّز على تفاعل المكونات ببعضها، مو تنفيذ الكود بمدخلات متعددة تحديداً.
د) Regression testing يعيد تشغيل اختبارات قديمة بعد تعديل، بصرف النظر عن أصل تصميمها.

ملاحظة: هذا السؤال قريب الصياغة من سؤال سابق (test cases derived from internal structure) وبالإجابة نفسها — تكرار مقصود لتثبيت هذا الفرق الأساسي.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 62 (سهل)
Which testing technique focuses on testing the interactions between different components of a system?
أ) Integration testing
ب) Unit testing
ج) System testing
د) Acceptance testing
**الإجابة الصحيحة: أ**
**التعليل:**
Integration testing (المسمى Component Testing في تدرّج المحاضرة) يركّز تحديداً على اختبار مجموعة وحدات مترابطة تعمل معاً، أي التفاعل بينها — وهذا مطابق حرفياً لنص السؤال.

ب) Unit testing يختبر وحدة واحدة بمعزل تام عن الباقي، عكس فكرة "التفاعل بين مكونات".
ج) System testing أوسع من مجرد التفاعل بين مكونات — يشمل النظام الكامل بكل جوانبه.
د) Acceptance testing يخص قبول العميل النهائي للنظام، لا التفاعل الداخلي بين المكونات.

هذا يطابق المستوى الثاني من مستويات Development Testing الثلاثة: Unit (وحدة واحدة) → Component/Integration (مجموعة وحدات مترابطة) → System (النظام كامل).

**المصدر:** [نمط 2023-2024]
### السؤال 63 (سهل)
The testing phase of software development doesn't require:
أ) testing that the implementation compiles correctly.
ب) testing that the implementation matches the design.
ج) testing that the implementation matches the requirements.
د) testing that the components of the implementation work separately and together.
ه) testing that the implementation interacts correctly with the environment.
**الإجابة الصحيحة: أ**
**التعليل:**
التأكد من أن الكود "يترجم/يُصرَّف بنجاح" (compiles correctly) هو شرط أساسي سابق للاختبار نفسه — يحدث في مرحلة البناء (build/compilation) قبل أن يبدأ أي اختبار فعلي، وليس نشاط اختبار بحد ذاته.

ب) مطابقة التصميم جزء من Verification ("هل بنيناه صح؟") اللي شرحته المحاضرة.
ج) مطابقة المتطلبات جزء من Validation ("هل بنينا الصحيح؟").
د) اختبار المكونات منفردة ومجتمعة يطابق تماماً تدرّج Unit → Component/Integration Testing.
ه) التفاعل الصحيح مع البيئة جزء من System Testing وUser Testing.

الفكرة الجوهرية: الاختبار يبدأ بعد أن يكون الكود قابلاً للتصريف والتشغيل أصلاً — التصريف الناجح شرط مسبق (prerequisite) للاختبار، لا هدفاً من أهدافه.

**المصدر:** [نمط 2023-2024]
### السؤال 64 (سهل)
Integration is important because:
أ) it ensures that the software is familiar to those who will use it.
ب) it ensures that the software is "friendly" to those who will use it.
ج) it ensures that the software works where it is to be used.
د) it ensures that the software replaces the existing system simultaneously everywhere it is to be used.
ه) it ensures that the software is not installed until the old system has been removed.
**الإجابة الصحيحة: ج**
**التعليل:**
هنا "Integration" يُقصد بها دمج ونشر النظام فعلياً في بيئته الحقيقية المستهدفة (target environment) — والتأكد أنه يعمل صح في تلك البيئة الفعلية بكل ظروفها هو الهدف الجوهري.

أ) و b) "الألفة" و"الود" تجاه المستخدمين تخص Usability، مو الدمج بالبيئة.
د) الاستبدال الفوري لكل نسخ النظام القديم دفعة واحدة ليس شرطاً لنجاح الدمج (غالباً يتم تدريجياً).
ه) عدم التركيب قبل إزالة النظام القديم تفصيل إجرائي، وليس السبب الجوهري وراء أهمية الدمج.

هذا يرتبط بمفهوم Host-target Development اللي شرحته محاضرة Design and Implementation — التأكد أن البرنامج يعمل صح على بيئة الـ target الفعلية هو جوهر عملية الدمج والنشر.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 65 (سهل)
What is the primary goal of software testing?
أ) To prove that the software is bug-free.
ب) To find as many defects as possible before the software is released.
ج) To ensure that the software meets all requirements.
د) To improve the code quality.
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة عرّفت الاختبار بأنه "تشغيل البرنامج ببيانات مُجهّزة بهدف اكتشاف الأخطاء قبل الاستخدام الفعلي" — واكتشاف أكبر عدد ممكن من الأخطاء مبكراً هو الهدف العملي المباشر.

أ) "إثبات خلوّ البرنامج من الأخطاء" هو بالضبط الفهم الخاطئ الذي حذّرت منه المحاضرة صراحة: "الاختبار يكشف وجود الأخطاء، ولا يثبت غيابها أبداً".
ج) ضمان تحقق كل المتطلبات أقرب لهدف Validation الأوسع، والاختبار أداة واحدة من أدواته، لا الهدف المباشر لعملية الاختبار نفسها.
د) تحسين جودة الكود نتيجة غير مباشرة (عبر اكتشاف مشاكل تُصلَح لاحقاً)، لا الهدف المباشر للاختبار نفسه.

هذا الفرق (اكتشاف الأخطاء وليس إثبات غيابها) هو أول وأهم نقطة أكدتها محاضرة Testing بأكملها.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 66 (سهل)
What is a test case in software testing?
أ) A step-by-step procedure to execute a test.
ب) A set of preconditions, inputs, execution steps, and expected results.
ج) A software tool used to automate testing.
د) A document outlining the testing strategy.
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة عرّفت Test Case بأنه "المواصفة الكاملة للاختبار: يشمل المدخل، والمخرج المتوقع، ووصف واضح لماذا نختبر هذا بالتحديد" — وهذا يطابق الخيار b الأكثر شمولاً واكتمالاً بين الخيارات.

أ) "خطوات تنفيذ فقط" وصف جزئي وناقص لـ Test Case الكامل.
ج) أداة أتمتة الاختبار (زي JUnit) شيء مختلف تماماً عن مفهوم Test Case نفسه.
د) وثيقة استراتيجية الاختبار أوسع بكثير من حالة اختبار واحدة، وتحتوي عادة عشرات حالات الاختبار.

المحاضرة فرّقت بوضوح بين Test Case (المواصفة الكاملة) وTest Data (المدخلات فقط) — وهذا سؤال يختبر فهم Test Case بمعناه الشامل.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 67 (سهل)
What is regression testing?
أ) Testing new features in the software.
ب) Retesting existing functionality after changes have been made to ensure that new defects have not been introduced.
ج) Testing the performance of the software under heavy load.
د) Testing the security of the software.
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة عرّفت Regression Testing تحديداً بأنه "إعادة تشغيل اختبارات سابقة كل مرة تُعدّل فيها الكود، للتأكد أن التعديل الجديد ما كسر ميزة كانت تعمل بشكل صحيح سابقاً" — مطابق حرفياً للخيار b.

أ) اختبار ميزات جديدة نشاط تطوير مختلف تماماً، مو Regression.
ج) اختبار الأداء تحت حمل ثقيل هو Stress/Load Testing، مو Regression.
د) اختبار الأمان موضوع منفصل تماماً.

المحاضرة أكدت أن الفائدة الكبرى للأتمتة تظهر بوضوح في Regression Testing تحديداً — لأن إعادة هذا يدوياً مئات المرات مستحيلة عملياً.

## المحاضرة 6: JUnit (اختبار الوحدة بلغة Java)

**المصدر:** [نمط 2023-2024]
### السؤال 68 (متوسط)
What is the purpose of using metrics like 'code coverage'?
أ) To determine the number of lines of code
ب) To measure how much of the code is tested by automated tests
ج) To track the number of defects over time
د) To assess the number of features implemented
**الإجابة الصحيحة: ب**
**التعليل:**
Test Coverage حسب محاضرة JUnit هو مقياس يجاوب سؤال "الاختبارات اللي كتبتها لمست كم بالمئة من الكود فعلياً؟" — مطابق تماماً لنص السؤال.

أ) عدد أسطر الكود مقياس LOC مختلف تماماً.
ج) تتبع الأخطاء عبر الزمن مقياس Defect Discovery Rate، مو Code Coverage.
د) عدد الميزات المنفَّذة لا علاقة له بنسبة تغطية الاختبار.

المحاضرة نبّهت لنقطة مهمة: تغطية 100% لا تعني خلوّ الكود من الأخطاء، فقط تعني أن كل سطر نُفِّذ أثناء الاختبار — وهذا فرق دقيق يجب تذكّره.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 69 (متوسط)
What is the purpose of measuring "Code Coverage" in software testing?
أ) To assess the overall quality of the code.
ب) To determine the percentage of code executed by automated tests.
ج) To identify potential security vulnerabilities.
د) To track the progress of the testing team.
**الإجابة الصحيحة: ب**
**التعليل:**
هذا هو التعريف الحرفي لـ Test Coverage كما شرحته محاضرة JUnit: "نسبة الكود اللي غطتها الاختبارات فعلياً" — لا أكثر ولا أقل.

أ) تقييم "الجودة الشاملة" أوسع بكثير من Coverage وحدها (المحاضرة نبّهت أن 100% تغطية لا تعني خلوّ الكود من الأخطاء).
ج) اكتشاف ثغرات أمنية موضوع اختبار مختلف تماماً (Security Testing).
د) تتبع تقدم فريق الاختبار مقياس إداري، لا تقني.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 70 (سهل)
Which of the following is an example of black-box testing?
أ) Testing individual methods in a class.
ب) Examining the code to identify potential errors.
ج) Testing the software based on its specifications without knowledge of the internal implementation.
د) Analyzing the memory usage of the application.
**الإجابة الصحيحة: ج**
**التعليل:**
Black-box testing يعتمد فقط على المواصفات الخارجية للنظام (المدخلات والمخرجات المتوقعة) بدون أي معرفة بكيفية تنفيذ الكود داخلياً — مطابق حرفياً لنص الخيار c.

أ) اختبار دوال فردية داخل فئة يفترض معرفة بالبنية الداخلية، أقرب لـ White-box/Unit testing.
ب) فحص الكود لتحديد أخطاء محتملة هو تعريف Inspections/Reviews، لا Black-box testing.
د) تحليل استهلاك الذاكرة أقرب لاختبار الأداء (Performance testing)، مو Black-box بحد ذاته.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 71 (متوسط)
What is JUnit primarily used for?
أ) End-to-end testing of web applications.
ب) Performance testing of servers.
ج) Unit testing of Java code.
د) Security testing of web services.
**الإجابة الصحيحة: ج**
**التعليل:**
JUnit مكتبة Java مخصصة تحديداً لكتابة اختبارات الوحدة (Unit Testing) الآلية، كما عرّفته المحاضرة من أول جملة فيها.

أ) اختبار end-to-end لتطبيقات الويب أدوات مختلفة (زي Selenium)، مو JUnit.
ب) اختبار أداء الخوادم موضوع منفصل تماماً.
د) اختبار أمان خدمات الويب موضوع منفصل تماماً.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 72 (سهل)
In JUnit, what does the @Test annotation signify?
أ) It indicates that a method is a setup method.
ب) It indicates that a method is a test method.
ج) It indicates that a method is a teardown method.
د) It indicates that a method is a helper method.
**الإجابة الصحيحة: ب**
**التعليل:**
@Test هو الـ annotation اللي يحدد أن هذه method هي اختبار فعلي سيُنفَّذ ويُقيَّم نجاحه/فشله — كما شرحته المحاضرة بوضوح تام.

أ) دوال التجهيز تستخدم @Before أو @BeforeClass، مو @Test.
ج) دوال التنظيف تستخدم @After أو @AfterClass، مو @Test.
د) لا يوجد annotation باسم "helper method" في JUnit.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 73 (سهل)
Which JUnit annotation is used to execute code before each test method in a class?
أ) @BeforeClass
ب) @BeforeAll
ج) @Before
د) @BeforeEach
**الإجابة الصحيحة: ج**
**التعليل:**
@Before هي الـ annotation اللي تُنفَّذ قبل كل test method (وليس مرة واحدة فقط للفئة كلها) — كما شرحته المحاضرة بالتفصيل ضمن JUnit 4.x.

أ) @BeforeClass تُنفَّذ مرة واحدة فقط لكل الفئة قبل بداية كل الاختبارات، لا قبل كل اختبار منفرد.
ب) و d) @BeforeAll و@BeforeEach أسماء JUnit 5، بينما محاضرة JUnit في هذه المادة استخدمت تحديداً JUnit 4.x اللي فيها @Before و@BeforeClass.

المحاضرة أكدت أن @BeforeClass و@AfterClass يجب أن تكونا static (لأنهما لمستوى الفئة كاملة)، بينما @Before و@After عاديتان (لأنهما تتكرران لكل اختبار منفرد) — وهذا الفرق جوهري في فهم دورة حياة الاختبار.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 74 (سهل)
What is an assertion in JUnit?
أ) A method that throws an exception if a test fails.
ب) A statement that checks whether a specific condition is true or false during a test.
ج) A comment that describes the purpose of a test.
د) A method that initializes the test environment.
**الإجابة الصحيحة: ب**
**التعليل:**
الـ Assert statements (assertTrue, assertEquals, assertNull...) هي بالضبط عبارات تتحقق من صحة شرط معيّن أثناء تنفيذ الاختبار، وتحدد نجاح أو فشل الاختبار بناءً على ذلك.

أ) رمي استثناء عند الفشل نتيجة تقنية لآلية عمل assert داخلياً، مو تعريفها المفاهيمي المباشر.
ج) التعليقات الوصفية شيء مختلف تماماً، لا علاقة له بالتحقق المنطقي.
د) تهيئة بيئة الاختبار دور @Before، مو الـ assertions.

المحاضرة شرحت أنواعاً متعددة من الـ assertions (assertTrue, assertEquals, assertNull/NotNull, assertSame/NotSame, fail) — وكلها أدوات "كيف نتحقق من صحة النتيجة" بعد تنفيذ الكود المختبَر.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 75 (متوسط)
What is the purpose of a test suite in JUnit?
أ) To group related test cases together for execution.
ب) To generate test reports.
ج) To define the overall testing strategy.
د) To automatically fix bugs in the code.
**الإجابة الصحيحة: أ**
**التعليل:**
المحاضرة عرّفت Test Suite بأنه "ملف خاص يجمع مرجعاً لعدة test classes ويشغّلها كلها معاً بتقرير نتائج موحد" — مطابق تماماً للخيار a.

ب) توليد التقارير نتيجة جانبية لتشغيل الـ Suite، مو غرضها الأساسي (التجميع والتشغيل الموحد).
ج) تحديد استراتيجية الاختبار الشاملة موضوع أوسع بكثير من مجرد تجميع ملفات اختبار.
د) إصلاح الأخطاء تلقائياً ليس من وظائف JUnit إطلاقاً.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 76 (سهل)
What is the difference between @BeforeAll and @BeforeEach in JUnit 5?
أ) @BeforeAll runs before every test case, while @BeforeEach runs only once before all test cases.
ب) @BeforeAll runs once before all test cases, while @BeforeEach runs before every test case.
ج) There is no difference; they are interchangeable.
د) @BeforeAll is used for integration tests, while @BeforeEach is used for unit tests.
**الإجابة الصحيحة: ب**
**التعليل:**
@BeforeAll (المكافئ لـ @BeforeClass في JUnit 4) تُنفَّذ مرة واحدة فقط قبل بداية كل اختبارات الفئة، بينما @BeforeEach (المكافئ لـ @Before) تتكرر قبل كل اختبار منفرد — وهذا مطابق تماماً لمبدأ "مرة واحدة للفئة مقابل تكرار لكل اختبار" الذي شرحته المحاضرة بأسماء JUnit 4.

أ) عكس الترتيب الصحيح تماماً.
ج) خاطئ تماماً — الفرق جوهري في التوقيت وعدد مرات التنفيذ.
د) لا علاقة لهذا التمييز بنوع الاختبار (وحدة/تكامل)، بل بتوقيت التنفيذ فقط.

المحاضرة أكدت نفس المبدأ بأسماء JUnit 4: @Before/@After تتكرران لكل اختبار، بينما @BeforeClass/@AfterClass (يجب أن تكونا static) تُنفَّذان مرة واحدة فقط للفئة كاملة — JUnit 5 أعاد تسميتها إلى @BeforeEach/@BeforeAll لكن المفهوم مطابق تماماً.

## المحاضرة 7: Project Management and Planning (تخطيط وإدارة المشاريع البرمجية)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 77 (سهل)
Which project management technique involves identifying the dependencies between project activities?
أ) Work breakdown structure
ب) Critical path method
ج) Dependency diagram
د) Resource allocation
**الإجابة الصحيحة: ب**
**التعليل:**
Critical Path Method (CPM) يعتمد بشكل جوهري على رسم Activity Graph الذي يوضح الاعتماديات بين الأنشطة (أيها يسبق أيها، وأيها يمكن تنفيذه بالتوازي)، ثم يحسب المسار الحرج بناءً على هذه الاعتماديات.

أ) Work Breakdown Structure يقسّم المشروع لمراحل وخطوات وأنشطة، لكنه لا يحدد الاعتماديات الزمنية بينها.
ج) "Dependency diagram" ليس مصطلحاً استخدمته المحاضرة تحديداً؛ المصطلح المستخدم فعلياً هو Activity Graph ضمن عملية CPM.
د) Resource allocation يخص توزيع الأفراد والموارد، مو ترتيب الأنشطة الزمني.

CPM هو الأداة الفعلية التي تُستخدم لتحديد أي نشاط يقع على المسار الحرج (Slack = 0)، وهذا مبني بالكامل على فهم اعتماديات الأنشطة أولاً.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 78 (سهل)
Which project management technique is used to estimate the effort required to complete a project activity?
أ) Work breakdown structure
ب) Critical path method
ج) Bottom-up estimation
د) Earned value analysis
**الإجابة الصحيحة: ج**
**التعليل:**
Bottom-up estimation تقنية عامة تقدّر جهد كل نشاط صغير على حدة ثم تجمعها لتكوين تقدير المشروع الكلي — وهذا هو أدق وصف لـ"تقدير الجهد اللازم لإنجاز نشاط واحد".

أ) WBS يقسّم المشروع لأنشطة، لكنه لا يقدّر الجهد بنفسه.
ب) CPM يستخدم تقديرات الزمن الموجودة مسبقاً لحساب المسار الحرج، لا يولّدها.
د) Earned Value Analysis يقارن التقدم الفعلي بالمخطط له، مو تقدير جهد نشاط فردي.

المحاضرة ذكرت طرقاً متعددة لتقدير الجهد (خبرة سابقة، مصفوفة Wolverton، معادلات مثل COCOMO) وكلها في جوهرها صيغ من Bottom-up estimation تُطبَّق على مستوى الأنشطة الفردية ثم تُجمَّع.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 79 (سهل)
Which project management technique is used to allocate resources to project activities based on their priority and availability?
أ) Work breakdown structure
ب) Critical path method
ج) Resource leveling
د) Risk identification
**الإجابة الصحيحة: ج**
**التعليل:**
Resource leveling تقنية قياسية في إدارة المشاريع توزّع الموارد المتاحة على الأنشطة بناءً على أولويتها وتوفّرها الفعلي، خصوصاً عند وجود تعارض أو نقص في الموارد.

أ) WBS يقسّم المشروع لأنشطة، لكنه لا يوزّع الموارد بحد ذاته.
ب) CPM يحدد المسار الحرج زمنياً، مو توزيع الموارد.
د) Risk identification يخص تحديد المخاطر، موضوع مختلف تماماً.

هذا يكمّل موضوع "اختيار وتنظيم الفريق" اللي شرحته المحاضرة، حيث ذُكرت معايير اختيار الأشخاص للمهام (القدرة، الخبرة، التوفر) — Resource Leveling هو التطبيق العملي لتوزيعهم لاحقاً على الأنشطة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 80 (سهل)
Which project management technique is used to identify and prioritize risks?
أ) Risk assessment
ب) Risk mitigation
ج) Risk identification
د) Risk monitoring
**الإجابة الصحيحة: أ**
**التعليل:**
عملية إدارة المخاطر في المحاضرة تمر بثلاث مراحل: Risk Identification (تحديد المخاطر فقط) ثم Risk Analysis (دراسة احتمالها وتأثيرها، وهذا ما يمكّن من الترتيب حسب الأولوية عبر Risk Exposure = Probability × Impact) ثم Risk Control. "Risk Assessment" هو المصطلح العام الذي يغطي التحديد + التحليل معاً، وبالتالي هو الأقرب لعبارة "identify AND prioritize" مجتمعة.

ب) Risk mitigation يخص التعامل مع الخطر بعد تحديده (تجنّب/نقل/قبول)، لا تحديده وترتيبه.
ج) Risk identification وحدها تحدد المخاطر لكن لا "ترتّبها حسب الأولوية" (هذا يحتاج تحليل Probability×Impact الإضافي).
د) Risk monitoring متابعة دورية لاحقة، مو التحديد الأولي.

المثال العملي في المحاضرة (شجرة قرار regression testing) يوضح كيف يُستخدم Risk Exposure لمقارنة وترتيب الخيارات — وهذا بالضبط جوهر "تحديد وترتيب المخاطر حسب الأولوية".

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 81 (متوسط)
What is the purpose of a Gantt chart in project management?
أ) To estimate project costs
ب) To track project progress
ج) To allocate project resources
د) To define project requirements
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة ذكرت صراحة أن Gantt Chart أداة تعرض الأنشطة وأزمنتها والمسار الحرج بصرياً، وتساعد بشكل خاص في توضيح الأنشطة القابلة للتنفيذ بالتوازي — وهذا يُستخدم عملياً لمتابعة تقدم تنفيذ الأنشطة عبر الزمن.

أ) تقدير التكلفة موضوع منفصل (يعتمد على COCOMO أو معادلات أخرى)، مو وظيفة Gantt Chart.
ج) توزيع الموارد يخص Resource Leveling، مو الغرض المباشر من الرسم البياني نفسه.
د) تعريف المتطلبات مرحلة سابقة تماماً على الجدولة.

Gantt Chart هو التمثيل البصري النهائي لكل بيانات CPM (الأنشطة، أزمنتها، المسار الحرج) — وبالتالي أداته الأساسية هي متابعة وتتبع تقدم تنفيذ هذه الأنشطة بمرور الوقت.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 82 (سهل)
Which project management technique is used to estimate the duration of project activities?
أ) Work breakdown structure
ب) Critical path method
ج) Resource allocation
د) Earned value analysis
**الإجابة الصحيحة: ب**
**التعليل:**
من بين الخيارات المتاحة، Critical Path Method هو الأقرب عملياً لتقدير المدة الزمنية للمشروع ولأنشطته المترابطة، لأن حساب Earliest Start وLatest Start وSlack لكل نشاط يعتمد بالكامل على تقديرات مدة كل نشاط ويحدد أثرها التراكمي على المدة الكلية للمشروع.

أ) WBS يقسّم المشروع لأنشطة لكنه لا "يقدّر" مدتها الزمنية بحد ذاته.
ج) Resource allocation يخص توزيع الأفراد، مو تقدير الزمن.
د) Earned Value Analysis يقارن الأداء الفعلي بالمخطط، وليس تقنية تقدير أولي للمدة.

ملاحظة: تقنياً، تقدير المدة الفعلي غالباً يستخدم أسلوب PERT (المتفائل/المتشائم/الأكثر احتمالاً بمعادلة توزيع بيتا) الذي شرحته المحاضرة ضمن طرق تقدير الجهد، لكنه لم يكن أحد الخيارات المتاحة هنا — فاخترنا الخيار الأقرب من الأربعة المتاحة.

**المصدر:** [نمط 2023-2024]
### السؤال 83 (متوسط)
What is the primary purpose of a project management plan?
أ) To define the software requirements
ب) To outline how the project will be executed, monitored, and controlled
ج) To write the source code
د) To design the system architecture
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة عرّفت Project Plan كوثيقة شاملة من 14 بنداً (Scope, Schedule, Team Organization...) تعمل كـ"عقد" غير رسمي يوضّح كيف سيُنفَّذ المشروع ويُتابَع تقدمه — مطابق تماماً لنص السؤال "executed, monitored, and controlled".

أ) تعريف المتطلبات دور SRS، مو Project Plan.
ج) كتابة الكود نشاط تنفيذي، لا علاقة له بالخطة نفسها.
د) تصميم المعمارية جزء من مرحلة Design، منفصل عن التخطيط الإداري.

المحاضرة أكدت أن Project Plan يُستخدم لمطابقة الكلفة والجدول الزمني الفعليين بما تم التخطيط له — وهذا بالضبط معنى "المراقبة والتحكم" في نص السؤال.

**المصدر:** [نمط 2023-2024]
### السؤال 84 (متوسط)
In project management, what is the purpose of a Gantt chart?
أ) To allocate resources
ب) To define project requirements
ج) To illustrate the project schedule and track progress
د) To identify project risks
**الإجابة الصحيحة: ج**
**التعليل:**
كما شرحته المحاضرة، Gantt Chart أداة بصرية تعرض الأنشطة وأزمنتها والمسار الحرج، وتساعد بشكل خاص على توضيح الأنشطة القابلة للتنفيذ بالتوازي، وبالتالي تتبع تقدم الجدول الزمني.

أ) توزيع الموارد دور Resource Leveling، مو الغرض المباشر من الرسم نفسه.
ب) تعريف المتطلبات مرحلة سابقة تماماً على الجدولة.
د) تحديد المخاطر دور Risk Identification، موضوع منفصل.

**المصدر:** [نمط 2023-2024]
### السؤال 85 (سهل)
What is the main focus of risk management in project management?
أ) To identify and mitigate potential problems that could affect the project
ب) To define project scope and requirements
ج) To allocate resources effectively
د) To manage stakeholder communication
**الإجابة الصحيحة: أ**
**التعليل:**
عملية إدارة المخاطر حسب المحاضرة تمر بثلاث مراحل: Risk Identification، Risk Analysis، وRisk Control (يتضمّن Risk Planning للتجنب أو التقليل) — وهذا مطابق تماماً لنص السؤال "identify and mitigate potential problems".

ب) تحديد النطاق والمتطلبات مرحلة مختلفة تماماً (RE/Scope).
ج) توزيع الموارد يخص Resource Leveling.
د) إدارة تواصل أصحاب المصلحة موضوع منفصل.

المحاضرة فرّقت بوضوح بين Risk (احتمال حدوثه أقل من 1) وProblem (مؤكد الحدوث) — وإدارة المخاطر هي بالضبط التعامل المنهجي مع الاحتمالات السلبية قبل تحولها لمشاكل فعلية.

**المصدر:** [نمط 2023-2024]
### السؤال 86 (سهل)
Which project management technique is used to estimate project durations by evaluating the most optimistic, most likely, and most pessimistic scenarios?
أ) Monte Carlo Simulation
ب) Critical Path Method (CPM)
ج) PERT (Program Evaluation and Review Technique)
د) Earned Value Management (EVM)
**الإجابة الصحيحة: ج**
**التعليل:**
هذا وصف حرفي لتقنية PERT اللي شرحتها المحاضرة عبر معادلة توزيع بيتا: `(x + 4z + y) / 6` حيث `y` متفائل، `x` متشائم، و`z` الأكثر احتمالاً — بالضبط السيناريوهات الثلاثة المذكورة بالسؤال.

أ) Monte Carlo Simulation تقنية محاكاة إحصائية أوسع، لم تُذكر بهذا الاسم في المحاضرة.
ب) CPM يحسب المسار الحرج من تقديرات زمنية موجودة مسبقاً، لا يولّدها بهذه الطريقة الثلاثية.
د) EVM يقارن الأداء الفعلي بالمخطط، لا يقدّر المدة أولاً.

المحاضرة قدّمت هذه المعادلة كإحدى طرق تقدير الجهد بالاعتماد على خبرة عدة خبراء يُسألون عن ثلاثة تقديرات، ثم تُدمج بمعادلة PERT الموزونة.

## المحاضرة 8: Software Measurement (قياس البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 87 (سهل)
Which software metric measures the average time required to fix a software defect?
أ) Defect density
ب) Mean Time Between Failures
ج) Mean Time to Repair
د) Software complexity
**الإجابة الصحيحة: ج**
**التعليل:**
Mean Time to Repair (MTTR) يقيس بالتحديد متوسط الوقت اللازم لإصلاح عطل بعد اكتشافه — وهذا مطابق تماماً لنص السؤال.

أ) Defect Density تقيس عدد الأخطاء لكل وحدة حجم (LOC أو Function Points)، مو زمن الإصلاح.
ب) Mean Time Between Failures يقيس متوسط الفترة بين عطلين متتاليين، مو زمن الإصلاح نفسه.
د) Software Complexity (زي Cyclomatic Complexity) يقيس عدد المسارات في الكود، مو زمن الإصلاح.

MTTR وMTBF مقياسان مكمّلان لبعض في تقييم الموثوقية: MTBF يقول "كل قد ايش يصير عطل؟" وMTTR يقول "لما يصير عطل، قد ايش ناخذ نصلحه؟".

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 88 (سهل)
Which software metric measures the number of defects discovered per unit of time during testing?
أ) Defect density
ب) Defect discovery rate
ج) Cyclomatic complexity
د) Test coverage
**الإجابة الصحيحة: ب**
**التعليل:**
Defect discovery rate يقيس تحديداً عدد الأخطاء المكتشفة لكل وحدة زمن — مطابق حرفياً لنص السؤال.

أ) Defect Density تقيس الأخطاء لكل وحدة حجم (LOC أو Function Points)، مو لكل وحدة زمن.
ج) Cyclomatic Complexity تقيس عدد المسارات المستقلة في الكود، لا علاقة لها بمعدل اكتشاف الأخطاء.
د) Test Coverage تقيس نسبة الكود اللي غطته الاختبارات، مو معدل اكتشاف الأخطاء.

الفرق الجوهري بين Density (نسبة لحجم البرنامج) وDiscovery Rate (نسبة لزمن الاختبار) هو نقطة يسهل الخلط فيها لأن الاسمين متشابهان لغوياً.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 89 (سهل)
Which of the following is NOT a software metric?
أ) Lines of code
ب) Cyclomatic complexity
ج) Defect density
د) Software documentation
**الإجابة الصحيحة: د**
**التعليل:**
"Software documentation" هو منتج/تسليمة (deliverable) وليس مقياساً رقمياً بحد ذاته — لا يعطي رقماً نقيّم به شيئاً، بعكس باقي الخيارات الثلاثة.

أ) Lines of Code مقياس حجم صريح شرحته المحاضرة.
ب) Cyclomatic Complexity مقياس تعقيد صريح (V(G) = e−n+2p).
ج) Defect Density مقياس جودة صريح (#defects/size).

هذا الفرق مهم: التوثيق هو أحد عناصر "منتج البرمجية" (Software Product) نفسه كما عرّفته المحاضرة الأولى، لكنه ليس مقياساً — المقاييس تُطبَّق عليه أو على غيره من عناصر المنتج، لا العكس.

**المصدر:** [نمط 2023-2024]
### السؤال 90 (سهل)
Which of the following is an example of a product metric?
أ) Defect density
ب) Number of developers
ج) Project duration
د) Time to market
**الإجابة الصحيحة: أ**
**التعليل:**
Defect Density (عدد الأخطاء لكل وحدة حجم) مقياس يصف خاصية في المنتج البرمجي نفسه (Product Metric)، بعكس باقي الخيارات التي تصف موارد أو زمن المشروع (Process/Project Metrics).

ب) عدد المطورين خاصية فريق العمل، مو المنتج.
ج) مدة المشروع خاصية عملية إدارة المشروع، مو المنتج.
د) الوقت للوصول للسوق خاصية عملية تسويقية/إدارية، مو المنتج نفسه.

المحاضرة الأولى فرّقت بوضوح بين Process Metrics (تقيس عملية التطوير) وProduct Metrics (تقيس المنتج نفسه كالحجم والتعقيد وعدد الأخطاء) — Defect Density مثال كلاسيكي على النوع الثاني.

**المصدر:** [نمط 2023-2024]
### السؤال 91 (سهل)
What does cyclomatic complexity measure?
أ) The number of lines of code
ب) The number of independent paths through the code
ج) The number of classes in a system
د) The total number of bugs in the system
**الإجابة الصحيحة: ب**
**التعليل:**
Cyclomatic Complexity (V(G) = e − n + 2p) تقيس بالضبط عدد المسارات المستقلة خطياً (independent paths) داخل دالة معيّنة، وهذا هو تعريفها الأساسي في المحاضرة.

أ) عدد أسطر الكود مقياس مختلف تماماً (LOC).
ج) عدد الفئات في النظام لا علاقة له بـ CC، بل بمقاييس أخرى مثل عدد الحزم.
د) إجمالي عدد الأخطاء نتيجة قد ترتبط إحصائياً بـ CC العالية، لكنه ليس ما تقيسه CC مباشرة.

المحاضرة أعطت مثالاً محلولاً (دالة showClients) حيث E=7, N=6, P=1 فـ V(G)=7−6+2=3، أي 3 مسارات مستقلة — تطبيق مباشر لهذا التعريف.

**المصدر:** [نمط 2023-2024]
### السؤال 92 (متوسط)
In the context of software metrics, what does 'defect density' refer to?
أ) The number of defects per unit of code
ب) The number of lines of code written by each developer
ج) The total number of defects found in the system
د) The time taken to fix each defect
**الإجابة الصحيحة: أ**
**التعليل:**
Defect Density = #defects / System_size (بـ LOC أو Function Points) — أي عدد الأخطاء لكل وحدة حجم من الكود، وهذا مطابق حرفياً للخيار A.

ب) أسطر الكود لكل مطوّر مقياس إنتاجية مختلف تماماً.
ج) إجمالي عدد الأخطاء رقم مطلق بدون تطبيع (normalization) بحجم النظام، بعكس Defect Density اللي تجعل المقارنة عادلة بين أنظمة مختلفة الحجم.
د) وقت إصلاح كل خطأ هو تعريف MTTR، مقياس مختلف تماماً.

المحاضرة أكدت أن التطبيع بحجم النظام (القسمة على LOC أو FP) هو ما يجعل Defect Density مقياساً عادلاً للمقارنة بين أنظمة مختلفة الحجم، بعكس العدد المطلق وحده.

**المصدر:** [نمط 2023-2024]
### السؤال 93 (سهل)
Which of the following is NOT a common software quality metric?
أ) Mean time to failure (MTTF)
ب) Code churn
ج) Feature count
د) Lines of code (LOC)
**الإجابة الصحيحة: ج**
**التعليل:**
عدد الميزات (Feature count) ليس مقياس جودة معياري مذكوراً في المحاضرة — هو مؤشر على حجم وظيفي، لا على جودة الكود أو موثوقيته.

أ) MTTF مقياس موثوقية قياسي.
ب) Code Churn مقياس شرحته المحاضرة صراحة (Churned LOC, Churned Count, File Churned) كمؤشر على "الأماكن الساخنة" المرتبطة بمعدل أخطاء أعلى.
د) LOC مقياس حجم أساسي مذكور من أول محاضرة.

المحاضرة ذكرت Code Churn وDefect Density وFailure Rate كمقاييس جودة منتج فعلية — بعكس "عدد الميزات" الذي لم يُذكر كمقياس جودة إطلاقاً.

**المصدر:** [نمط 2023-2024]
### السؤال 94–103 (مجموعة أسئلة على كود Calculator)

```java
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int subtract(int a, int b) { return a - b; }
    public int multiply(int a, int b) { return a * b; }
    public double divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return (double) a / b;
    }
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        System.out.println("Add: " + calc.add(5, 3));
        System.out.println("Subtract: " + calc.subtract(5, 3));
        System.out.println("Multiply: " + calc.multiply(5, 3));
        System.out.println("Divide: " + calc.divide(5, 3));
    }
}
```

**السؤال 94:** What is the cyclomatic complexity of the provided Calculator class?
أ) 1
ب) 2
ج) 4
د) 5
**الإجابة الصحيحة: د**
**التعليل:**
باستخدام V(G) = e − n + 2p على مستوى الدالة الواحدة، كل من add وsubtract وmultiply CC=1 (بدون أي قرار شرطي)، بينما divide فيها شرط if واحد فـ CC=2. مجموع CC لكل الدوال (WMC — Weighted Methods per Class، وهو مجموع Cyclomatic Complexity لكل الدوال في الفئة كما عرّفته المحاضرة) = 1+1+1+2 = 5 (بدون احتساب main لأنها ليست جزءاً من منطق العمل الأساسي للفئة).

هذا يربط مباشرة بمفهوم WMC من مقاييس Chidamber & Kemerer: WMC هو مجموع CC لكل دوال الفئة، وليس CC لدالة واحدة بمفردها — ولذلك السؤال عن "الفئة كاملة" يختلف عن سؤال عن دالة add وحدها (سؤال آخر بنفس المجموعة).

**السؤال 95:** Which metric would be used to measure the size of the Calculator class in terms of code lines?
أ) Lines of Code (LOC)
ب) Cyclomatic Complexity
ج) Code Coverage
د) Halstead Complexity
**الإجابة الصحيحة: أ**
**التعليل:**
LOC هو المقياس المباشر لحجم الكود بعدد الأسطر — وهذا بالضبط ما يسأل عنه السؤال.

ب) Cyclomatic Complexity يقيس التعقيد المنطقي، مو عدد الأسطر.
ج) Code Coverage يقيس نسبة الكود المُختبَر، لا حجمه.
د) Halstead Complexity يقيس الحجم بناءً على عدد الـ operators/operands (n1, n2, N)، وهو مقياس مختلف تماماً عن LOC رغم أنه يقيس "حجماً" أيضاً بطريقة مختلفة.

**السؤال 96:** What is the primary purpose of the divide method's exception handling in the Calculator class?
أ) To measure code complexity
ب) To prevent division by zero errors
ج) To count the number of method calls
د) To test the code coverage
**الإجابة الصحيحة: ب**
**التعليل:**
كتلة الـ if (b == 0) تُطلق ArithmeticException بشكل متعمَّد لمنع حدوث قسمة على صفر (وهو خطأ رياضي وبرمجي خطير) قبل أن يحدث فعلياً.

أ) قياس التعقيد نتيجة جانبية لوجود الشرط (يرفع CC)، مو الغرض من كتابته.
ج) عدّ استدعاءات الدوال لا علاقة له بهذا الشرط إطلاقاً.
د) اختبار التغطية غرض لاحق يخص من يكتب اختبارات لهذه الدالة، مو غرض الشرط نفسه داخل الكود.

هذا مثال تطبيقي مباشر على "اختبار الحدود" (Boundary Value Analysis) اللي شرحته محاضرة Testing — القيمة b=0 هي بالضبط الحد الذي يجب معالجته صراحة.

**السؤال 97:** Which software metric would help assess how well the Calculator class is tested?
أ) Code Churn
ب) Code Coverage
ج) Function Points
د) Defect Density
**الإجابة الصحيحة: ب**
**التعليل:**
Code Coverage تحديداً تقيس نسبة الكود الذي نُفِّذ فعلياً أثناء تشغيل الاختبارات — وهذا يجاوب مباشرة على "كم Calculator مُختبَرة جيداً؟".

أ) Code Churn يقيس كمية الكود المتغيرة بمرور الزمن، لا علاقة له بجودة الاختبار.
ج) Function Points تقيس الحجم الوظيفي، لا تغطية الاختبار.
د) Defect Density تقيس عدد الأخطاء لكل وحدة حجم، وهي نتيجة نهائية وليست مقياس تغطية مباشر.

**السؤال 98:** How many methods are present in the Calculator class?
أ) 3
ب) 4
ج) 5
د) 6
**الإجابة الصحيحة: ج**
**التعليل:**
الدوال الموجودة فعلياً: add، subtract، multiply، divide، وmain — أي 5 دوال بالمجموع.

A وB أقل من العدد الفعلي.
D يزيد دالة غير موجودة في الكود المعطى.

هذا سؤال عدّ بسيط يتحقق من قراءة الكود المعطى بدقة، مباشرة من نص الكلاس المصدر في السؤال.

**السؤال 99:** What type of metric is the divide method's handling of division by zero?
أ) Code Quality Metric
ب) Functional Metric
ج) Performance Metric
د) Complexity Metric
**الإجابة الصحيحة: أ**
**التعليل:**
معالجة الحالات الاستثنائية (زي القسمة على صفر) بشكل صريح ومدروس هي ممارسة ترفع من جودة الكود ومتانته (robustness) — وهذا يصنَّف ضمن مؤشرات جودة الكود العامة، لا ضمن مقياس رقمي محدد بحد ذاته.

ب) Functional Metric يخص قياس الوظائف (زي Function Points)، مو معالجة استثناء واحد.
ج) Performance Metric يخص السرعة واستهلاك الموارد، لا معالجة الأخطاء.
د) Complexity Metric يقيس تعقيد المسارات (وفعلاً الشرط يرفع CC)، لكن "نوع" هذا الإجراء نفسه من ناحية الغرض هو تحسين الجودة، لا قياس التعقيد بحد ذاته.

**السؤال 100:** If you wanted to measure the complexity of the add method, which metric would be most appropriate?
أ) Halstead Complexity
ب) Lines of Code (LOC)
ج) Cyclomatic Complexity
د) Code Churn
**الإجابة الصحيحة: ج**
**التعليل:**
Cyclomatic Complexity هو المقياس القياسي لتعقيد دالة واحدة عبر عدّ مساراتها المستقلة — وهو الأنسب مباشرة هنا (وCC لدالة add=1 لأنها بدون أي قرار شرطي).

أ) Halstead Complexity ممكن تُستخدم أيضاً لكنها أعقد حساباً وتحتاج عدّ operators/operands، وليست "الأنسب" مباشرة لدالة بهذا البساطة.
ب) LOC يقيس الحجم مو التعقيد المنطقي.
د) Code Churn يقيس التغيّر عبر الزمن، لا التعقيد.

**السؤال 101:** Which metric would be most useful for assessing the maintainability of the Calculator class?
أ) Cyclomatic Complexity
ب) Number of Methods
ج) Lines of Code (LOC)
د) Code Coverage
**الإجابة الصحيحة: أ**
**التعليل:**
كما شرحته محاضرة Measurement 2، Cyclomatic Complexity العالية تُستخدم كمؤشر مباشر على انخفاض Maintainability — فهي الأنسب من بين الخيارات لتقييم صعوبة صيانة الفئة.

ب) عدد الدوال وحده لا يعكس مدى تعقيد كل دالة داخلياً.
ج) LOC مقياس حجم بسيط لا يعكس التعقيد المنطقي المؤثر فعلياً على الصيانة.
د) Code Coverage يقيس التغطية الاختبارية، لا صعوبة الصيانة.

**السؤال 102:** What would be the impact of adding an additional conditional statement inside the divide method on the cyclomatic complexity?
أ) It would decrease complexity
ب) It would have no effect
ج) It would increase complexity
د) It would change the number of lines of code
**الإجابة الصحيحة: ج**
**التعليل:**
كل قرار شرطي إضافي (if/else إضافي) يضيف حافة (edge) جديدة لمخطط التدفق، وبالتالي يرفع V(G) = e − n + 2p مباشرة — فإضافة شرط جديد ترفع CC حتماً.

أ) عكس الحقيقة الرياضية تماماً — إضافة شرط لا يمكن أن تخفّض CC.
ب) خاطئ لأن أي قرار شرطي جديد يغيّر عدد الحواف بالضرورة.
د) صحيح أن الأسطر ستزيد أيضاً، لكن هذا ليس "الأثر" المطلوب بالسؤال تحديداً (السؤال يسأل عن CC تحديداً لا LOC).

**السؤال 103:** Which metric could help determine how much of the Calculator class code is being executed during testing?
أ) Cyclomatic Complexity
ب) Code Coverage
ج) Lines of Code (LOC)
د) Halstead Complexity
**الإجابة الصحيحة: ب**
**التعليل:**
هذا نفس تعريف Code Coverage تماماً — "نسبة الكود المُنفَّذ فعلياً أثناء الاختبار" هو التعريف الحرفي لهذا المقياس كما شرحته محاضرة JUnit.

أ) CC يقيس التعقيد المنطقي الثابت للكود، لا نسبة تنفيذه أثناء الاختبار.
ج) LOC مقياس حجم ثابت، لا علاقة له بالتنفيذ الفعلي وقت الاختبار.
د) Halstead Complexity يقيس حجم/صعوبة الكود من رموزه، لا نسبة تنفيذه.

**المصدر:** [نمط 2023-2024]
### السؤال 104 (سهل)
In McCabe's cyclomatic complexity metric code is first represented as:
أ) A syntax graph
ب) A data-flow graph
ج) A flow control graph
د) A control-vs-command graph
ه) None of the above
**الإجابة الصحيحة: ج**
**التعليل:**
معادلة V(G) = e − n + 2p تُحسب مباشرة من مخطط تدفق التحكم (Control Flow Graph) للدالة — حيث e عدد الحواف وn عدد العُقد في هذا المخطط تحديداً.

أ) مخطط نحوي (syntax graph/tree) يمثّل بنية الجملة البرمجية، لا تدفق التحكم.
ب) مخطط تدفق البيانات (data-flow graph) يمثّل كيف تتحرك البيانات، مو مسارات التحكم.
د) مصطلح غير موجود أصلاً في أدبيات CC.

مثال المحاضرة المحلول (دالة showClients بـ E=7, N=6, P=1) بُني بالكامل على تحويل الكود لمخطط تدفق تحكم أولاً، ثم عدّ حوافه وعُقده.

**المصدر:** [نمط 2023-2024]
### السؤال 105 (سهل)
The cyclomatic complexity of a graph is:
أ) the number of closed paths in the graph.
ب) the number of independent test cases required to reach every node in the graph.
ج) the number of edges - the number of nodes + 1.
د) All of the above.
ه) None of the above.
**الإجابة الصحيحة: ب**
**التعليل:**
التفسير العملي الأدق لـ Cyclomatic Complexity هو أنه يعطي الحد الأدنى لعدد حالات الاختبار المستقلة اللازمة للوصول لكل عقدة (وبالتالي كل مسار مستقل) في مخطط التدفق — وهذا هو ما شرحته المحاضرة كفائدة عملية مباشرة لـ CC في تحديد تغطية الاختبار.

أ) "المسارات المغلقة" ليست تعريفاً دقيقاً لـ CC؛ CC تقيس المسارات المستقلة خطياً، لا المسارات المغلقة (loops) تحديداً.
ج) الصيغة "e − n + 1" غير دقيقة رياضياً؛ المعادلة الصحيحة حسب المحاضرة هي `V(G) = e − n + 2p`، فمع p=1 (مخطط متصل واحد) الناتج e−n+2 لا e−n+1 — خطأ حسابي بمقدار واحد في هذا الخيار.
د) بما أن الخيارين a وc فيهما أخطاء، فـ"كل ما سبق" غير صحيح.

هذا يربط مباشرة بفائدة CC العملية اللي شرحتها المحاضرة: "تعطي حداً أعلى لعدد حالات اختبار الفروع وحداً أدنى لتغطية المسارات" — أي أنها فعلياً تحدد الحد الأدنى من حالات الاختبار المطلوبة.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 106 (متوسط)
Cyclomatic Complexity (CC) is primarily used to measure:
أ) The number of potential execution paths in a module.
ب) The degree of coupling between modules.
ج) The depth of the inheritance hierarchy.
د) The number of external dependencies a module has.
**الإجابة الصحيحة: أ**
**التعليل:**
CC تحسب عدد المسارات المستقلة خطياً عبر V(G) = e − n + 2p، وهذا مطابق تماماً لـ"عدد مسارات التنفيذ المحتملة داخل الدالة/الوحدة".

ب) درجة الاقتران بين الوحدات هي CBO، مقياس مختلف تماماً.
ج) عمق شجرة الوراثة هو DIT، مقياس مختلف.
د) عدد الاعتماديات الخارجية أقرب لـ Fan-out أو Ce، مقاييس مختلفة.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 107 (سهل)
A high Depth of Inheritance Tree (DIT) value in object-oriented design generally indicates:
أ) A well-designed and easily maintainable class hierarchy.
ب) Potential difficulties in understanding and maintaining the class hierarchy due to increased complexity.
ج) Improved code reuse and reduced code duplication.
د) Lower risk of errors due to encapsulation and abstraction.
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة أكدت أن الشجرة الأعمق تعني إعادة استخدام أكبر، لكن أيضاً تعقيد تصميم أكبر — كلما كانت الفئة أعمق، زاد عدد الدوال الموروثة من الآباء وزاد عدد الدوال المطلوب اختبارها وفهمها، وهذه مقايضة حقيقية وليست دائماً إيجابية.

أ) عكس المقصود — DIT عالٍ ليس دائماً "جيد التصميم"، بل يحمل مخاطرة تعقيد حقيقية.
ج) صحيحة جزئياً (reuse أكبر فعلاً) لكنها ليست الأثر "العام" الأهم المذكور — المحاضرة ربطت DIT العالي أساساً بالتعقيد، لا فقط الفائدة.
د) لا علاقة مباشرة بين DIT وانخفاض الأخطاء تلقائياً.

المحاضرة وضعت DIT كمقايضة حقيقية (reuse مقابل complexity)، وليس عاملاً "جيداً دائماً" أو "سيئاً دائماً" بشكل مطلق.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 108 (متوسط)
In the context of software quality metrics, what does "coupling" refer to?
أ) The degree of interaction between different modules or components.
ب) The strength of the relationship between classes in an inheritance hierarchy.
ج) The number of dependencies a module has on external libraries.
د) The cohesion of elements within a module.
**الإجابة الصحيحة: أ**
**التعليل:**
Coupling حسب المحاضرة هو "قوة الارتباط بين الفئات المختلفة"، ويحدث بطريقتين: استخدام دوال كائن آخر، أو الوراثة — أي درجة التفاعل بين المكونات المختلفة، مطابق تماماً للخيار a.

ب) علاقة الوراثة تحديداً تخص DIT/NOC، مو Coupling العام (رغم أن الوراثة أحد مصادره).
ج) الاعتماديات على مكتبات خارجية تحديداً أقرب لـ Ce (Efferent Coupling على مستوى الحزمة)، مو التعريف العام.
د) التماسك (Cohesion) هو نقيض/مكمّل Coupling، مفهوم منفصل تماماً.

القاعدة الذهبية المتكررة في المحاضرة: "حافظ على اقتران منخفض لكن تماسك عالي" — وهذا يوضح Coupling كمفهوم مستقل عن Cohesion رغم ارتباطهما.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 109 (سهل)
Which of the following Kemerer metrics measures the number of methods that can access attributes of the class?
أ) Lack of Cohesion in Methods
ب) Coupling Between Object classes
ج) Response For A Class
د) Weighted Methods per Class
**الإجابة الصحيحة: ج**
**التعليل:**
Response For a Class (RFC) هو مجموعة الدوال التي يمكن أن تُنفَّذ استجابة لرسالة يستقبلها كائن من الفئة — وهذا أقرب مفهوم من مقاييس Chidamber & Kemerer لصياغة السؤال "عدد الدوال التي يمكنها الوصول/الاستجابة ضمن الفئة".

أ) LCOM يقيس غياب التماسك (تشارك المتغيرات بين الدوال)، مو "عدد الدوال التي تصل" بحد ذاته.
ب) CBO يقيس الاقتران مع فئات أخرى، لا عدد الدوال داخل الفئة نفسها.
د) WMC يقيس مجموع تعقيد كل الدوال (CC)، لا عدد الدوال "التي تصل" للخصائص تحديداً.

ملاحظة: صياغة السؤال ("methods that can access attributes") غير دقيقة تماماً مقارنة بالتعريف الرسمي لـ RFC ("methods executed in response to a message") — الإجابة معتمدة على أقرب مقياس من نفس مجموعة Kemerer الستة (DIT, NOC, WMC, RFC, CBO, LCOM) التي شرحتها المحاضرة.

## المحاضرة 9: Software Measurement — الجزء الثاني (قياس البرمجيات)

**المصدر:** [نمط 2023-2024]
### السؤال 110 (متوسط)
Which metric would be most useful for evaluating code maintainability?
أ) Lines of code (LOC)
ب) Cyclomatic complexity
ج) Function points
د) Development cost
**الإجابة الصحيحة: ب**
**التعليل:**
المحاضرة صرّحت أن Cyclomatic Complexity العالية تُستخدم كمؤشر مباشر على انخفاض Maintainability وانخفاض Reliability معاً — أي أنها من أفضل المقاييس الداخلية (Internal Attribute) للتنبؤ بصعوبة الصيانة.

أ) LOC مقياس حجم بسيط لا يعكس التعقيد الفعلي المؤثر على الصيانة.
ج) Function Points تقيس الحجم الوظيفي لأغراض تقدير التكلفة، مو صعوبة الصيانة تحديداً.
د) تكلفة التطوير خاصية إدارية، لا علاقة مباشرة بصعوبة الصيانة.

هذا مرتبط مباشرة بمفهوم "Internal Attributes كمؤشرات على External Attributes" اللي شرحته المحاضرة: CC صفة داخلية قابلة للقياس، تُستخدم كمؤشر على Maintainability الصعبة القياس المباشر.

**المصدر:** [نمط 2023-2024]
### السؤال 111 (سهل)
What does the term 'function point' measure?
أ) The complexity of the code
ب) The size and complexity of the software based on its functionality
ج) The number of functions in the code
د) The execution speed of the software
**الإجابة الصحيحة: ب**
**التعليل:**
Function Points تقيس حجم البرنامج بناءً على "إيش يسوي البرنامج" (وظائفه) لا عدد أسطر كوده، وهذا يجعلها مستقلة عن لغة البرمجة — تماماً كما عرّفتها المحاضرة.

أ) تعقيد الكود مقياس مختلف (Cyclomatic Complexity)، لا Function Points.
ج) عدد الدوال في الكود ليس نفس مفهوم "الوظائف" (functions) بمعنى FP، اللي تشمل Inputs/Outputs/Files/Inquiries على مستوى النظام كامل.
د) سرعة التنفيذ مقياس أداء ديناميكي مختلف تماماً.

المحاضرة أكدت أن FP قدّمها Albrecht من IBM سنة 1979 وأصبحت معياراً ISO سنة 2003 لتقدير التكلفة بناءً على الوظائف مستقلة عن التقنية.

**المصدر:** [نمط 2023-2024]
### السؤال 112 (سهل)
"Lines of code" is a poor metric because:
أ) it is language independent.
ب) it penalizes efficient, compact coding.
ج) it measures what matters, not what can be measured.
د) it was developed as a metric in the 1960's.
ه) All of the above.
**الإجابة الصحيحة: ب**
**التعليل:**
LOC يحاسب الكود بعدد الأسطر، وهذا يعني أن الكود المضغوط والفعّال (اللي يحل نفس المشكلة بأسطر أقل باستخدام مهارة برمجية أعلى) يُسجَّل بقيمة LOC "أقل"، وكأن المبرمج الأكثر مهارة "أنتج أقل" — عكس الحقيقة تماماً.

أ) عكس الحقيقة تماماً — LOC مقياس معتمد بشدة على اللغة (نفس المنطق يحتاج أسطر مختلفة بلغات مختلفة)، وهذا أحد أهم عيوبه المذكورة بالمحاضرة.
ج) عكس المقصود — LOC "يقيس ما يمكن قياسه بسهولة" (عدّ الأسطر)، لا بالضرورة "ما يهم فعلياً" (التعقيد الحقيقي)؛ الصياغة بالخيار c معكوسة عن المشكلة الفعلية.
د) تاريخ تطوير المقياس لا يجعله سيئاً بحد ذاته.

المحاضرة ذكرت صراحة مشاكل LOC: قرار غير واضح (هل نعدّ الأسطر الفارغة أو التعليقات؟)، اعتماد على اللغة، وعدم عكسه للتعقيد الفعلي — وهذا يفسّر مباشرة ليش برنامج قصير قد يكون أعقد من برنامج طويل.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 113 (متوسط)
Which of the following statements is MOST accurate regarding the use of Lines of Code (LOC) as a software metric?
أ) LOC is a universally reliable metric for measuring software size and complexity.
ب) LOC is useful for comparing the productivity of developers working on different programming languages.
ج) LOC can be a useful metric when comparing similar projects within the same organization and using the same coding standards, but it has limitations when comparing across different contexts.
د) LOC is an outdated metric and should never be used in modern software engineering practices.
**الإجابة الصحيحة: ج**
**التعليل:**
المحاضرة أكدت أن LOC مقياس محدود السياق: يعتمد بشدة على اللغة البرمجية ومعايير الترميز المستخدمة، فمقارنة مشاريع متشابهة داخل نفس المؤسسة بنفس المعايير تبقى مفيدة نسبياً، لكن مقارنته عبر لغات أو سياقات مختلفة تماماً تفقده موثوقيته.

أ) "موثوق عالمياً" مبالغة تناقض عيوب LOC المذكورة صراحة (قرار غير واضح حول الأسطر الفارغة/التعليقات، اعتماد على اللغة).
ب) مقارنة إنتاجية مطورين بلغات مختلفة أسوأ استخدام ممكن لـ LOC، لأنه بالتحديد يفشل في هذا السياق.
د) رفض استخدامه كلياً مبالغة أخرى — المحاضرة استخدمته كنقطة بداية معقولة رغم عيوبها.

المحاضرة وصفت LOC كأبسط مقياس حجم، لكنها حذّرت بوضوح من مشكلتين رئيسيتين: الاعتماد على اللغة، وعدم عكسه للتعقيد الفعلي — وهذا بالضبط ما يعنيه "له حدود عند المقارنة عبر سياقات مختلفة".

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 114 (سهل)
What is the primary goal of using Function Point Analysis (FPA) as a software metric?
أ) To estimate the development time required for a project.
ب) To assess the code quality and identify potential bugs.
ج) To measure the size of the software based on its functionality from the user's perspective.
د) To track the progress of the development team.
**الإجابة الصحيحة: ج**
**التعليل:**
FPA تقيس حجم البرنامج بناءً على وظائفه (Inputs, Outputs, Files, Interfaces, Inquiries) من منظور المستخدم، مستقلة عن لغة البرمجة — وهذا الهدف الأساسي المذكور صراحة بالمحاضرة.

أ) تقدير الوقت نتيجة غير مباشرة تُبنى على FP لاحقاً، مو الهدف المباشر لـ FPA نفسها.
ب) تقييم جودة الكود واكتشاف الأخطاء دور مقاييس أخرى (زي Defect Density)، لا FP.
د) تتبع تقدم الفريق دور Process Metrics، لا FP.

المحاضرة حددت ثلاثة أهداف رسمية لـ FP: قياس الوظائف المطلوبة والمقدَّمة، قياس التطوير والصيانة مستقلاً عن التقنية، وقياس متسق عبر المشاريع — كلها تصب في "قياس الحجم الوظيفي من منظور المستخدم".

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 115 (متوسط)
Which of the following metrics would be MOST relevant when assessing the maintainability of a software system?
أ) Number of defects found during testing.
ب) Lines of Code (LOC) in the entire system.
ج) Number of user stories completed per sprint.
د) Cyclomatic Complexity (CC) of individual modules.
**الإجابة الصحيحة: د**
**التعليل:**
CC تُستخدم كمؤشر داخلي مباشر ومحدد لصعوبة الصيانة (Maintainability) — كلما زاد عدد المسارات المستقلة داخل دالة، زاد صعوبة فهمها وتعديلها بأمان.

أ) عدد الأخطاء المكتشفة مقياس جودة عام، لا يعكس صعوبة الصيانة تحديداً.
ب) LOC للنظام كامل مقياس حجم بسيط لا يعكس التعقيد المحلي المؤثر فعلياً على كل وحدة.
ج) عدد قصص المستخدم المنجزة مقياس إنتاجية إدارية (Process Metric)، لا علاقة له بصعوبة صيانة الكود نفسه.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 116 (سهل)
What does the acronym "SLOC" typically stand for in software metrics?
أ) Standard Lines of Code
ب) System Lines of Code
ج) Structured Lines of Code
د) None of the above
**الإجابة الصحيحة: د**
**التعليل:**
SLOC يعني فعلياً "Source Lines of Code" — أي أسطر الكود المصدري — وهذا الاختصار الصحيح غير موجود ضمن الخيارات الثلاثة الأولى المعطاة، لذلك الإجابة الصحيحة هي "لا شيء مما سبق".

أ) "Standard Lines of Code" ليس التوسيع الصحيح للاختصار.
ب) "System Lines of Code" ليس التوسيع الصحيح.
ج) "Structured Lines of Code" ليس التوسيع الصحيح أيضاً.

هذا مثال على سؤال يفحص دقة معرفة المصطلح الحرفي — SLOC هو ببساطة الاسم الكامل لـ LOC اللي شرحته المحاضرة (أسطر الكود المصدري)، وليس أياً من الخيارات المطروحة.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 117 (سهل)
When evaluating software metrics, it's crucial to consider:
أ) The specific context of the project and organization.
ب) The absolute values of the metrics without considering external factors.
ج) The opinions of individual developers regarding the usefulness of the metrics.
د) The latest industry trends and best practices without adapting them to the project's needs.
**الإجابة الصحيحة: أ**
**التعليل:**
المحاضرة أكدت أن العلاقة بين الصفات الداخلية (زي CC) والصفات الخارجية (زي Maintainability) هي علاقة "افتراضية وإحصائية"، مو حقيقة رياضية مؤكدة — يعني لازم تُفسَّر ضمن سياق المشروع تحديداً، لا كقيمة مطلقة معزولة.

ب) تجاهل العوامل الخارجية عكس ما تنصح به المحاضرة تماماً.
ج) الاعتماد على آراء فردية دون سياق موضوعي غير موثوق ومتقلّب.
د) تبنّي أحدث الاتجاهات "بدون تكييف" يناقض فكرة "السياق الخاص بكل مشروع" في السؤال نفسه.

مثال المحاضرة: برنامج بتعقيد عالٍ قد يكون فعلياً سهل الصيانة لو موثّق كويس — استثناء يوضح أهمية السياق، لا الاعتماد على الرقم المجرد وحده.

## المحاضرة 10: Software Requirements Specification (مواصفات متطلبات البرمجيات)

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 118 (متوسط)
What is the primary purpose of a Software Requirements Specification (SRS) document?
أ) To outline the project management strategy.
ب) To define the software architecture and design.
ج) To provide a detailed description of the software's intended capabilities and constraints.
د) To document the testing strategies and methodologies.
**الإجابة الصحيحة: ج**
**التعليل:**
المحاضرة عرّفت SRS بأنه وثيقة تعمل مثل "مخطط البيت" — توثّق كل تفاصيل قدرات النظام المطلوبة وقيوده بدقة، عشان يكون فيه اتفاق واضح بين الفريق والعميل من البداية.

أ) استراتيجية إدارة المشروع دور Project Plan، وثيقة منفصلة تماماً.
ب) تصميم المعمارية يأتي لاحقاً بعد اكتمال SRS، في مرحلة Design.
د) استراتيجيات الاختبار موضوع منفصل (Test Plan).

المحاضرة استخدمت تشبيهاً واضحاً: SRS مثل مخطط بناء بيت مكتوب بالتفصيل — كم غرفة، وين الحمامات — عشان ما يصير خلاف بين العميل والمقاول لاحقاً.

## المحاضرة 11: Software Requirements Specification - 2 (وثيقة متطلبات البرمجيات - الجزء الثاني)

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 119 (سهل)
Which of the following is NOT typically included in a well-structured SRS document?
أ) Use case diagrams
ب) Glossary of terms
ج) Source code
د) System interfaces
**الإجابة الصحيحة: ج**
**التعليل:**
الكود المصدري (Source code) هو نتاج مرحلة التنفيذ اللاحقة، وليس جزءاً من وثيقة المتطلبات — SRS يصف "ماذا" يجب أن يفعل النظام، لا "كيف" يُنفَّذ الكود فعلياً.

أ) مخططات use case جزء أساسي من قسم External Interfaces/Functions في IEEE 830.
ب) قاموس المصطلحات هو قسم 1.3 (Definitions, Acronyms, Abbreviations) الرسمي في معيار IEEE 830.
د) واجهات النظام قسم 2.1.1/3.1 رسمي في المعيار.

المحاضرة أكدت مراراً أن المتطلبات تصف "ماذا" (What) وليس "كيف" (How) — والكود المصدري هو تجسيد الـ How بالكامل، ولذلك لا مكان له في SRS.

## المحاضرة 12: Software Quality (جودة البرمجيات)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 120 (سهل)
What is the measure of the ability of a software component to be transferred from one environment to another?
أ) Reusability
ب) Portability
ج) Interoperability
د) Scalability
**الإجابة الصحيحة: ب**
**التعليل:**
Portability هي الجهد المطلوب لنقل البرنامج لمنصة هاردوير أو سوفتوير مختلفة — أي بالضبط "القدرة على النقل من بيئة لبيئة".

أ) Reusability تخص إعادة استخدام مكوّن البرنامج ضمن مشروع آخر، مو نقله لبيئة مختلفة.
ج) Interoperability تخص قدرة البرنامج على التعاون مع برامج أخرى، مو أين يعمل هو نفسه.
د) Scalability لم تُذكر كعامل جودة أساسي في المحاضرة، والوصف لا يطابقها.

المحاضرة تفرّق بوضوح بين Portability ("أين يعمل البرنامج؟") وInteroperability ("مع من يتعاون؟") — وهذا الفرق نفسه يتكرر بصيغ مختلفة في أكثر من سؤال بنك الأسئلة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 121 (متوسط)
Which software quality attribute refers to the ability of a system to recover from failures and restore normal operation?
أ) Reliability
ب) Availability
ج) Usability
د) Maintainability
**الإجابة الصحيحة: ب**
**التعليل:**
"القدرة على التعافي من الأعطال واستعادة التشغيل الطبيعي" هي تعريف Availability (التوفّرية) في الأدبيات الهندسية العامة — وهي مرتبطة بمدى بقاء النظام متاحاً وقابلاً للاستخدام رغم حدوث أعطال.

أ) Reliability هي استمرار البرنامج بالعمل بدون فشل من الأساس (منع حدوث العطل)، وليس "التعافي بعده" — هذا فرق دقيق يميل الطلاب لتجاهله.
ج) Usability تخص سهولة الاستخدام والتعلّم، لا علاقة لها بالتعافي من الأعطال.
د) Maintainability تخص الجهد اللازم لإيجاد وإصلاح خلل في الكود، وهي أوسع من مجرد "استعادة التشغيل بعد عطل".

ملاحظة: هذه المحاضرة (12) عدّدت 12 عامل جودة رسمي ولم تذكر Availability كعامل مستقل ضمنهم صراحة — الإجابة هنا معتمدة على معرفة عامة قياسية في هندسة البرمجيات (Reliability مقابل Availability)، وليست اقتباساً حرفياً من نص المحاضرة.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 122 (متوسط)
What is the primary purpose of a software quality management plan?
أ) To identify and fix defects in the software
ب) To ensure that the software meets customer requirements
ج) To define the quality goals and processes for a project
د) To monitor project progress
**الإجابة الصحيحة: ج**
**التعليل:**
المحاضرة عرّفت Quality Plan تحديداً بأنه وثيقة تحدد أهداف الجودة لكل مشروع وأي عمليات ومعايير ستُستخدم لتحقيقها — وهذا مطابق حرفياً لنص السؤال.

أ) تحديد وإصلاح الأخطاء هو دور SQA/Testing/Debugging العملي، وليس دور "الخطة" نفسها.
ب) تحقيق متطلبات العميل هدف أوسع (Validation)، لكن أداته المباشرة هي تنفيذ ما حددته خطة الجودة، لا الخطة نفسها كوثيقة.
د) متابعة تقدم المشروع دور Project Plan العام، مو Quality Plan تحديداً.

المحاضرة ربطت SQM (على المستوى التنظيمي والمشروع) مباشرة بوضع Quality Plan لكل مشروع تحدد أهدافه وعملياته ومعاييره الخاصة — وهذا هو جوهر السؤال.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 123 (سهل)
What is the measure of the degree to which a system can be used by specified users to achieve specified goals effectively, efficiently, and with satisfaction?
أ) Reliability
ب) Usability
ج) Maintainability
د) Portability
**الإجابة الصحيحة: ب**
**التعليل:**
هذا هو تعريف ISO القياسي لـ Usability تحديداً، وهو نفسه ما ذكرته المحاضرة ضمن عوامل الجودة الاثني عشر: "سهولة استخدام وتعلّم البرنامج" من منظور المستخدم النهائي.

أ) Reliability تخص استمرار العمل بدون فشل، لا علاقة مباشرة بسهولة الاستخدام أو الرضا.
ج) Maintainability تخص جهد المطوّر لإصلاح الخلل، مو تجربة المستخدم.
د) Portability تخص النقل بين البيئات، لا علاقة لها بسهولة الاستخدام.

المحاضرة صنّفت Usability كأحد أهم عوامل الجودة من "منظور المستخدم" تحديداً — إلى جانب Correctness وReliability وSecurity وAdaptability.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 124 (سهل)
What is the measure of the ability of a software component to operate correctly in different operating environments?
أ) Reusability
ب) Portability
ج) Interoperability
د) Scalability
**الإجابة الصحيحة: ب**
**التعليل:**
"العمل بشكل صحيح في بيئات تشغيل مختلفة" هو بالضبط تعريف Portability — الجهد المطلوب لنقل البرنامج لمنصة هاردوير أو سوفتوير مختلفة والعمل عليها بنجاح.

أ) Reusability تخص إعادة استخدام المكوّن ضمن برنامج آخر، لا علاقة لها بالعمل في بيئات تشغيل مختلفة.
ج) Interoperability تخص التعاون مع أنظمة أخرى، لا "أين يعمل" النظام نفسه.
د) Scalability ليست من عوامل الجودة الاثني عشر المذكورة في المحاضرة.

هذا السؤال يكرر مفهوم Portability بصياغة مختلفة عن سؤال سابق في نفس الدورة (النقل من بيئة لأخرى) — تكرار متعمّد لتثبيت الفرق بين Portability وInteroperability.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 125 (سهل)
Which of the following is NOT a characteristic of high-quality software?
أ) Reliability
ب) Maintainability
ج) Inefficiency
د) Usability
**الإجابة الصحيحة: ج**
**التعليل:**
عدم الكفاءة (Inefficiency) هو نقيض عامل الجودة Performance (الكفاءة في استخدام الذاكرة ودورات المعالج) اللي عدّدته المحاضرة ضمن عوامل الجودة الاثني عشر — فهو بالتعريف صفة سيئة، وليست خاصية للبرمجية عالية الجودة.

أ) Reliability عامل جودة أساسي مذكور صراحة.
ب) Maintainability عامل جودة أساسي مذكور صراحة.
د) Usability عامل جودة أساسي مذكور صراحة، خصوصاً من منظور المستخدم.

هذا سؤال مباشر يختبر معرفة قائمة عوامل الجودة الاثني عشر التي شرحتها المحاضرة، عبر عكس أحدها (Performance → Inefficiency) كخيار خاطئ واضح.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 126 (سهل)
What is the measure of the amount of effort required to understand, prepare, and modify a software component?
أ) Code coverage
ب) Software complexity
ج) Software maintainability
د) Software reliability
**الإجابة الصحيحة: ج**
**التعليل:**
هذا تعريف Maintainability بالضبط كما ذكرته المحاضرة ضمن عوامل الجودة الاثني عشر: "الجهد المطلوب لإيجاد وإصلاح خلل ما" — وفهم الكود وتحضيره وتعديله كلها جزء من هذا الجهد.

أ) Code coverage يقيس نسبة الكود المُختبَر، لا علاقة له بجهد الفهم والتعديل.
ب) Software complexity (زي Cyclomatic Complexity) مقياس داخلي يُستخدم كمؤشر على انخفاض Maintainability، لكنه ليس نفسه تعريف "الجهد المطلوب للفهم والتعديل".
د) Software reliability تخص استمرار العمل بدون فشل، لا علاقة مباشرة بجهد الفهم أو التعديل.

من منظور المطوّر (Developer's perspective) اللي شرحته المحاضرة، Maintainability هي أحد أهم خمسة عوامل تهمّه مباشرة، إلى جانب Portability وReadability وUnderstandability وTestability.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 127 (متوسط)
What is the primary purpose of a software quality assurance process?
أ) To identify and fix defects in the software
ب) To ensure that the software meets customer requirements
ج) To improve the performance of the software
د) To monitor project progress
**الإجابة الصحيحة: ب**
**التعليل:**
Software Quality Assurance (SQA) حسب المحاضرة تعني "التأكد من أن نظام البرمجيات يحقق أهداف جودته المحددة" — وهذه الأهداف مرتبطة أساساً بتلبية احتياجات وتوقعات المستخدم الحقيقية، وفق تعريفي IEEE وISO للجودة اللذين ركّزا كلاهما على "متطلبات محددة رسمياً واحتياجات المستخدم الضمنية".

أ) SQA أوسع من مجرد "تحديد وإصلاح الأخطاء" — هذا دور Testing وDebugging تحديداً، وهما ركيزتان فقط من ركائز SQA الثلاث (مع Reviews).
ج) تحسين الأداء ليس هدف SQA المباشر.
د) متابعة تقدم المشروع دور إدارة المشروع، مو ضمان الجودة.

المحاضرة بيّنت أن SQA تقوم على ثلاث ركائز: Testing (ديناميكي)، Debugging، وReviews (ساكن) — وكلها أدوات لتحقيق الهدف الأشمل: التأكد أن النظام يلبي فعلاً ما يحتاجه المستخدم، لا فقط ما هو مكتوب حرفياً بالوثيقة.

**المصدر:** [نمط 2023-2024]
### السؤال 128 (متوسط)
Which software metric would be most useful for assessing the effectiveness of code reviews?
أ) Defect density
ب) Number of lines of code
ج) Percentage of code reviewed
د) Development cost
**الإجابة الصحيحة: ج**
**التعليل:**
تقييم فعالية Code Reviews (وهي أحد ركائز SQA الثلاث: Testing/Debugging/Reviews) يعتمد منطقياً على معرفة نسبة الكود الذي فعلاً خضع للمراجعة — وهذا مطابق للخيار C.

أ) Defect Density تقيس جودة المنتج النهائي بشكل عام، لا فعالية المراجعات تحديداً.
ب) عدد أسطر الكود مقياس حجم، لا علاقة له بفعالية المراجعة.
د) تكلفة التطوير خاصية إدارية عامة، لا تقيس فعالية المراجعات تحديداً.

المحاضرة صنّفت Reviews كتحليل ساكن (static analysis) يفحص الكود دون تشغيله — ولمعرفة مدى فعاليته، أول خطوة منطقية هي معرفة أي نسبة من الكود خضعت فعلاً لهذا الفحص.

## المحاضرة 13: Refactoring (إعادة هيكلة الكود)

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 129 (متوسط)
What is the primary purpose of code refactoring in software development?
أ) To fix defects in the code
ب) To improve the performance of the code
ج) To enhance the readability and maintainability of the code
د) To add new features to the code
**الإجابة الصحيحة: ج**
**التعليل:**
Refactoring هو تغيير البنية الداخلية للكود بدون تغيير سلوكه الخارجي، والهدف الأساسي منه أن يصبح البرنامج أسهل فهماً وتعديلاً (maintainability) عبر إزالة التكرار وتبسيط البنى المعقدة.

أ) تصحيح الأخطاء (bug fixing) نشاط مختلف تماماً — Refactoring لا يغيّر السلوك، فلا يمكن أن "يصحح" خطأ وظيفي (رغم أنه أحياناً يكشف bugs مصادفة أثناء التنظيف).
ب) تحسين الأداء ليس هدف Refactoring المباشر؛ قد يحصل كأثر جانبي أحياناً لكنه ليس الغاية.
د) إضافة ميزات جديدة تُستبعد صراحة من تعريف Refactoring — لأنها تغيّر السلوك الخارجي.

المحاضرة تؤكد بوضوح: الفيصل الحاسم بين Refactoring وأي نشاط آخر هو "هل تغيّر السلوك الخارجي؟" — لو تغيّر فهذا تطوير وليس Refactoring.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 130 (سهل)
What is the primary goal of software reengineering?
أ) To add new features to an existing software system
ب) To improve the performance of an existing software system
ج) To enhance the maintainability of an existing software system
د) To rewrite an existing software system from scratch
**الإجابة الصحيحة: ج**
**التعليل:**
إعادة الهندسة (Reengineering) هدفها الأساسي تحسين قابلية صيانة نظام قديم عبر تحسين بنيته الداخلية، وهو نفس الفلسفة العامة اللي شرحتها محاضرة Refactoring: "نفس السلوك الخارجي، لكن بنية داخلية أفضل وأسهل صيانة".

أ) إضافة ميزات جديدة تغيّر السلوك الخارجي — هذا تطوير جديد، مو إعادة هندسة بالمعنى الكلاسيكي.
ب) تحسين الأداء قد يحدث كأثر جانبي، لكنه ليس الهدف المباشر.
د) إعادة الكتابة من الصفر (rewriting from scratch) نقيض إعادة الهندسة التدريجية — المحاضرة ميّزت صراحة بين Refactoring/Reengineering وبين "إعادة الكتابة الكاملة" كنشاطين مختلفين تماماً.

مبدأ "تحسين البنية الداخلية دون المساس بالسلوك الخارجي" اللي شرحته محاضرة Refactoring بالتفصيل ينطبق بشكل أوسع على مفهوم Reengineering ذاته.

## المحاضرة الكل: أسئلة عامة

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 131 (سهل)
Which software development approach focuses on delivering working software frequently, with a preference for face-to-face communication?
أ) Waterfall
ب) Agile
ج) Spiral
د) V-shaped
**الإجابة الصحيحة: ب**
**التعليل:**
هذا وصف شبه حرفي لمبادئ Agile Manifesto: "تسليم برمجيات شغّالة بشكل متكرر" و"التواصل وجهاً لوجه هو أفضل وسيلة لنقل المعلومات داخل الفريق".

أ) Waterfall لا يسلّم برمجية شغّالة إلا في نهاية المشروع.
ج) Spiral يركّز على المخاطر أكثر من التسليم المتكرر السريع.
د) V-shaped امتداد خطي لـ Waterfall.

هذا السؤال معرفة عامة عن Agile، مكمّلة لما تعلمناه في محاضرة SDLC عن فكرة "التسليم المتكرر" في Iterative Enhancement.

**المصدر:** [نمط 2023-2024 — الفصل الأول]
### السؤال 132 (سهل)
Which software development model emphasizes frequent customer collaboration and responding to change?
أ) Waterfall
ب) Agile
ج) Spiral
د) V-shaped
**الإجابة الصحيحة: ب**
**التعليل:**
هذا هو نص أحد أشهر أربعة قيم في Agile Manifesto مباشرة: "التعاون مع العميل" و"الاستجابة للتغيير" أهم من التعاقد الصارم والالتزام بخطة ثابتة.

أ) Waterfall يفترض أن كل المتطلبات ثابتة ومعروفة من البداية — عكس "الاستجابة للتغيير" تماماً.
ج) Spiral يتعامل مع المخاطر أكثر من كونه محوره "تعاون العميل المتكرر".
د) V-shaped امتداد خطي صارم لـ Waterfall.

معرفة عامة عن Agile تكمّل ما درسناه في محاضرة SDLC عن مشاكل Waterfall الأساسية (العميل يرى النتيجة متأخراً، لا يتكيّف مع التغيير) — وAgile جاء كحل مباشر لهذه المشاكل تحديداً.

**المصدر:** [نمط 2023-2024]
### السؤال 133 (متوسط)
What is the primary purpose of software metrics?
أ) To increase the number of lines of code
ب) To measure the performance of software development processes
ج) To create more documentation
د) To reduce the cost of software tools
**الإجابة الصحيحة: ب**
**التعليل:**
Software Metrics حسب المحاضرة الأولى تنقسم لـ Process Metrics (تقيس خصائص عملية التطوير مثل الإنتاجية والجودة) وProduct Metrics (تقيس خصائص المنتج) — والغرض الأساسي منها هو قياس أداء وخصائص عملية التطوير بشكل موضوعي بدل الإحساس الشخصي.

أ) زيادة عدد أسطر الكود ليست هدفاً، بل LOC نفسه أحد المقاييس اللي تُقاس، مو غاية.
ج) إنشاء توثيق إضافي ليس هدف المقاييس؛ التوثيق منتج منفصل تماماً.
د) تقليل تكلفة الأدوات نتيجة جانبية محتملة، مو الهدف الأساسي.

المحاضرة عرّفت Metrics كسلسلة مترابطة (Measure → Measurement → Metrics) هدفها الأشمل قياس خصائص العملية أو المنتج بشكل رقمي موضوعي.

**المصدر:** [نمط 2023-2024]
### السؤال 134 (سهل)
Which document outlines the scope, objectives, and deliverables of a project?
أ) Risk Management Plan
ب) Project Charter
ج) Project Schedule
د) Resource Plan
**الإجابة الصحيحة: ب**
**التعليل:**
Project Charter هو المصطلح القياسي في إدارة المشاريع للوثيقة التي تحدد نطاق المشروع وأهدافه ومخرجاته الرئيسية بشكل رسمي في بدايته.

أ) خطة إدارة المخاطر تخص المخاطر فقط، لا نطاق المشروع كاملاً.
ج) جدول المشروع يخص التوقيت، لا النطاق والأهداف.
د) خطة الموارد تخص توزيع الموارد، لا نطاق المشروع.

ملاحظة: مصطلح "Project Charter" تحديداً لم يُستخدم بهذا الاسم في محاضرة إدارة المشاريع (اللي استخدمت مصطلح "Project Plan" الشامل من 14 بنداً بما فيها بند Scope الذي يحدد بدقة ما يتضمنه المشروع وما لا يتضمنه) — الإجابة معتمدة على معرفة عامة قياسية في إدارة المشاريع تكمّل مفهوم Scope الذي شرحته المحاضرة.

**المصدر:** [نمط 2023-2024]
### السؤال 135 (متوسط)
In Agile project management, what is the purpose of a Sprint Retrospective?
أ) To plan the next sprint
ب) To review and adjust the project backlog
ج) To evaluate the team's performance and discuss ways to improve
د) To demo the completed work to stakeholders
**الإجابة الصحيحة: ج**
**التعليل:**
Sprint Retrospective في منهجية Scrum هو اجتماع مخصَّص لتقييم أداء الفريق خلال السبرنت المنتهي ومناقشة ما يمكن تحسينه في السبرنتات القادمة.

أ) تخطيط السبرنت القادم هو Sprint Planning، اجتماع منفصل.
ب) مراجعة الـ backlog هي Backlog Refinement/Grooming، اجتماع مختلف.
د) عرض العمل المنجز على أصحاب المصلحة هو Sprint Review، اجتماع مختلف تماماً عن الـ Retrospective.

هذا سؤال معرفة عامة عن Scrum (لم تُغطَّ تفاصيله في محاضرات المادة)، لكنه يرتبط بفكرة "التحسين المستمر" العامة التي تتقاطع مع مبدأ Refactoring وCMM Level 5 (Optimizing) اللذين درسناهما.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 136 (سهل)
High Change Failure Rate in software development often indicates:
أ) Frequent and successful deployments
ب) Poor code quality or inadequate testing
ج) Rapid innovation and frequent updates
د) Efficient collaboration between teams
**الإجابة الصحيحة: ب**
**التعليل:**
Change Failure Rate هو مقياس DevOps قياسي يحسب نسبة التغييرات (نشرات/deployments) التي تسبب مشكلة في الإنتاج — ارتفاعه يدل على جودة كود ضعيفة أو اختبار غير كافٍ قبل النشر.

أ) نشرات "ناجحة" تعني بالضبط عكس "معدل فشل عالٍ".
ج) الابتكار السريع لا يعني بالضرورة فشلاً، بل معدل التغيير فقط؛ الفشل مرتبط بالجودة لا السرعة وحدها.
د) تعاون فعّال بين الفرق يُفترض أن يقلل الأخطاء، لا يرفع معدل الفشل.

ملاحظة: هذا مصطلح DevOps قياسي (أحد مقاييس DORA الأربعة) لم يُذكر بهذا الاسم تحديداً في محاضرات المادة، لكنه معرفة عامة قريبة من مفهوم Failure Rate وDefect Density اللي شرحتهما محاضرة Measurement.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 137 (سهل)
In an SRS document, which section would typically contain information about user roles and permissions?
أ) Functional Requirements
ب) Non-Functional Requirements
ج) System Architecture
د) Use Cases or User Stories
**الإجابة الصحيحة: د**
**التعليل:**
أدوار المستخدمين وصلاحياتهم (زي Public Mode وPrivate Mode وAdministration Mode في مثال مكتبة ACME الذي شرحته المحاضرة) تُوثَّق عادة عبر use cases مرتبطة بكل نوع مستخدم (actor)، حيث كل صلاحية تُترجَم لمجموعة use cases مسموحة لذلك الدور تحديداً.

أ) المتطلبات الوظيفية تصف الوظائف نفسها، لا بالضرورة من يملك صلاحية الوصول إليها.
ب) المتطلبات غير الوظيفية تصف جودة الأداء العام، لا الأدوار والصلاحيات تحديداً.
ج) معمارية النظام تصف البنية التقنية، لا صلاحيات المستخدمين.

المحاضرة شرحت مفهوم "الأوضاع" (modes) في قسم Product Perspective — حيث نفس النظام يتصرف بشكل مختلف حسب نوع المستخدم، وهذا التمايز في الصلاحيات يُوثَّق عملياً عبر use cases مخصصة لكل دور.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 138 (متوسط)
What is the purpose of an API?
أ) To provide a user interface for interacting with a software application.
ب) To define a set of rules and specifications that software components can follow to communicate with each other.
ج) To encrypt data transmitted over a network.
د) To manage the memory allocation of a software application.
**الإجابة الصحيحة: ب**
**التعليل:**
API (Application Programming Interface) هو مجموعة قواعد ومواصفات محددة تتيح لمكونات برمجية مختلفة (حتى لو كُتبت بلغات أو من فرق مختلفة) أن تتواصل مع بعضها بشكل موحّد ومتوقَّع.

أ) الواجهة الرسومية للمستخدم (GUI) شيء مختلف تماماً عن API الذي يخدم تواصل البرمجيات ببعضها لا مع المستخدم البشري مباشرة.
ج) تشفير البيانات وظيفة أمنية منفصلة، ليست تعريف API نفسه.
د) إدارة الذاكرة وظيفة نظام التشغيل/بيئة التشغيل، لا API.

هذا يرتبط بمفهوم "تحديد الواجهات" (Interfaces) اللي شرحته محاضرة Design and Implementation كخطوة خامسة من OOD: تحديد توقيعات ودلالات الخدمات فقط دون كشف كيفية تنفيذها الداخلي — وهذا جوهر أي API.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 139 (سهل)
What is the primary difference between white-box testing and black-box testing?
أ) White-box testing focuses on internal logic, while black-box testing focuses on input-output behavior.
ب) White-box testing is performed by end-users, while black-box testing is performed by developers.
ج) White-box testing requires knowledge of external systems, while black-box testing does not.
د) White-box testing is more cost-effective than black-box testing.
**الإجابة الصحيحة: أ**
**التعليل:**
هذا الفرق الجوهري تكرر في أكثر من محاضرة (Testing وJUnit): White-box يعتمد على معرفة البنية الداخلية للكود، بينما Black-box يعتمد فقط على العلاقة بين المدخلات والمخرجات المتوقعة حسب المواصفات، دون اعتبار للتنفيذ الداخلي.

ب) عكس الحقيقة الشائعة تماماً — كلاهما عادة ينفّذهما فريق اختبار تقني، والفرق في المنهجية لا في من ينفّذ.
ج) "معرفة أنظمة خارجية" ليست الفرق الجوهري بينهما؛ الفرق هو معرفة الكود الداخلي تحديداً.
د) لا توجد قاعدة عامة تجعل أحدهما دائماً أرخص من الآخر؛ يعتمد على السياق.

**المصدر:** [نمط 2024-2025 — الفصل الأول]
### السؤال 140 (سهل)
In response to the software crisis, which methodology was introduced to improve software development processes?
أ) Waterfall model
ب) Agile methodologies
ج) Spiral model
د) DevOps practices
**الإجابة الصحيحة: أ**
**التعليل:**
تاريخياً، Waterfall Model هو أول نموذج منظم رسمياً ظهر كاستجابة مباشرة لفوضى "Build and Fix" التي كانت سبباً رئيسياً في أزمة البرمجيات — فرض قاعدة "عرّف قبل أن تصمم، صمّم قبل أن تكتب الكود" لأول مرة بشكل منهجي.

ب) Agile ظهر لاحقاً بعقود (٢٠٠١) كردة فعل على مشاكل Waterfall نفسه، لا كاستجابة مباشرة لأزمة الستينات الأصلية.
ج) Spiral Model ظهر لاحقاً (1986) كتطوير أنضج يضيف تحليل المخاطر، بعد Waterfall.
د) ممارسات DevOps مفهوم حديث جداً (٢٠٠٠+)، بعيد زمنياً جداً عن أزمة الستينات.

المحاضرة وصفت Waterfall كـ"أقدم وأشهر نموذج منظم رسمياً"، وهو الحل التاريخي المباشر لفوضى Build and Fix اللي كانت جزءاً أساسياً من مسببات أزمة البرمجيات الأصلية.
