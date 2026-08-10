const questions=[
{q:"كسر الروابط الموجودة في جزيئات المواد المتفاعلة وتكوين روابط جديدة في جزيئات المواد الناتجة يسمى:",o:["الانحلال الحراري","التفاعل الكيميائي","النشاط الكيميائي","قانون بقاء المادة"],a:1,e:"لأن التفاعل الكيميائي ينتج عنه مواد جديدة نتيجة إعادة ترتيب الذرات وتكوين روابط جديدة."},
{q:"أي مما يلي يدل على حدوث تفاعل كيميائي؟",o:["تغير شكل الجسم فقط","تكوين مادة جديدة","تقطيع المادة","تغيير مكان المادة"],a:1,e:"تكوين مادة جديدة من أهم دلائل حدوث التفاعل الكيميائي."},
{q:"المواد الموجودة قبل حدوث التفاعل تسمى:",o:["النواتج","المتفاعلات","الرواسب","العوامل الحفازة"],a:1,e:"المتفاعلات هي المواد التي تدخل التفاعل وتتحول إلى نواتج."},
{q:"المواد التي تتكون نتيجة التفاعل الكيميائي تسمى:",o:["المتفاعلات","العناصر","النواتج","المذيبات"],a:2,e:"النواتج هي المواد الجديدة التي تتكون بعد التفاعل."},
{q:"أي من الآتي مثال على تغير كيميائي؟",o:["انصهار الثلج","تبخر الماء","صدأ الحديد","تكسير الزجاج"],a:2,e:"صدأ الحديد ينتج عنه مادة جديدة هي أكسيد الحديد."},
{q:"طبقًا لقانون بقاء المادة أثناء التفاعل الكيميائي:",o:["تختفي الذرات","تتكون الذرات من لا شيء","لا تفنى المادة ولا تستحدث من العدم","تختفي المادة"],a:2,e:"المادة لا تفنى ولا تستحدث من العدم، وإنما يعاد ترتيبها."},
{q:"تصاعد فقاعات غاز عند خلط مادتين قد يكون دليلًا على:",o:["حدوث تفاعل كيميائي","عدم حدوث تغير","اختفاء المادة","توقف التفاعل"],a:0,e:"تصاعد غاز من العلامات التي قد تشير إلى حدوث تفاعل كيميائي."},
{q:"اتحاد مادتين أو أكثر لتكوين مادة واحدة يسمى تفاعل:",o:["اتحاد","تحلل","إحلال","تعادل"],a:0,e:"تفاعل الاتحاد يجمع مادتين أو أكثر لتكوين ناتج واحد."},
{q:"تحلل مادة واحدة إلى مادتين أو أكثر يسمى تفاعل:",o:["اتحاد","تحلل","احتراق فقط","إحلال مزدوج"],a:1,e:"في تفاعل التحلل تتحول مادة واحدة إلى مادتين أو أكثر."},
{q:"ماذا يحدث للذرات أثناء التفاعل الكيميائي؟",o:["تختفي تماما","تتحول دائمًا لذرات مختلفة","يعاد ترتيبها لتكوين مواد جديدة","تتوقف عن الحركة"],a:2,e:"الذرات لا تختفي، وإنما يعاد ترتيبها وتكوين روابط مختلفة بينها."}
];
let i=0,score=0,correct=0,name="";
const $=x=>document.getElementById(x);
$("start").onclick=()=>{name=$("name").value.trim();if(!name){$("name").focus();return}i=0;score=0;correct=0;$("student").textContent=name;show("quiz");render()};
$("name").onkeydown=e=>{if(e.key==="Enter")$("start").click()};
$("again").onclick=()=>{show("home");$("name").value=name};
$("next").onclick=()=>{i++;i<questions.length?render():finish()};
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");scrollTo(0,0)}
function render(){
 const x=questions[i];$("counter").textContent=`السؤال ${i+1} من ${questions.length}`;$("percent").textContent=`${Math.round((i+1)/questions.length*100)}%`;$("bar").style.width=`${(i+1)/questions.length*100}%`;$("qnum").textContent=String(i+1).padStart(2,"0");$("question").textContent=x.q;$("score").textContent=score;$("feedback").className="";$("feedback").textContent="";$("next").classList.add("hidden");
 const box=$("options");box.innerHTML="";
 x.o.forEach((t,n)=>{let b=document.createElement("button");b.className="option";b.textContent=`${["أ","ب","ج","د"][n]}) ${t}`;b.onclick=()=>answer(n,b);box.appendChild(b)})
}
function answer(n,btn){
 const x=questions[i],bs=[...document.querySelectorAll(".option")];bs.forEach(b=>b.disabled=true);
 if(n===x.a){btn.classList.add("correct");score+=10;correct++;$("feedback").textContent="✅ إجابة صحيحة! حصلت على +10 درجات";$("feedback").className="feedback good"}
 else{btn.classList.add("wrong");bs[x.a].classList.add("correct");$("feedback").textContent=`❌ إجابة غير صحيحة. ${x.e}`;$("feedback").className="feedback bad"}
 $("score").textContent=score;$("next").textContent=i===questions.length-1?"🏆 عرض النتيجة":"السؤال التالي ➜";$("next").classList.remove("hidden")
}
function finish(){
 show("result");$("resultName").textContent=name;$("final").textContent=score;$("correct").textContent=`${correct} / 10`;$("wrong").textContent=`${10-correct} / 10`;
 let g=score>=90?"ممتاز 🌟":score>=80?"جيد جدًا 👏":score>=65?"جيد 👍":score>=50?"مقبول 🙂":"يحتاج مراجعة 📚";$("grade").textContent=g;
 $("message").textContent=score>=80?"نتيجة رائعة! استمر بنفس المستوى 💪":"راجع الدرس وجرب مرة أخرى، ومع التدريب هتتحسن جدًا 📚";
}
