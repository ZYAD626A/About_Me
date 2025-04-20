
function showAll() {
    // هجيب كل الكروت اللي كلاسها "card"
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.display = 'inline-block'; // أخليهم كلهم يظهروا
    });
  }

  function showPublished() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (card.classList.contains('published')) {
          card.style.display = 'inline-block'; // المشروع المنشور يظهر
        } else {
        card.style.display = 'none'; // اللي مش منشور يتخبي
      }
    });
  }

  function showNotPublished() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (card.classList.contains('not-published')) {
        card.style.display = 'inline-block'; // اللي مش منشور يظهر
      } else {
        card.style.display = 'none'; // اللي منشور يتخبي
      }
    });
  }

  let up = document.getElementById('up');
  up.onclick = function(){
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }
  let nav = document.getElementById('resNav');
    onscroll = function(){
    if(scrollY >= 20){
      nav.style.position = "fixed";
      nav.style.height = "53px";
      nav.style.background = "var(--blue-green)";
      up.style.right="2%";
     }else{
     nav.style.position = "relative";
     nav.style.height = "20%";
     nav.style.background = "none";
     up.style.right="-100%";
    }
  }

  let openNav = document.getElementById('open');
  let closeNav = document.getElementById('close');
  let open_ul = document.getElementById('ul1');
  let socialMedia = document.querySelector('.socialMedia');
  openNav.onclick = function(){
    open_ul.style.right = "0%";
    openNav.classList.add('hide');
    closeNav.classList.remove('hide');
    closeNav.classList.add('show');
    socialMedia.style.zIndex = "-1";
  }
  closeNav.onclick = function(){
    open_ul.style.right = "-100%";
    openNav.classList.remove('hide');
    closeNav.classList.remove('show');
    closeNav.classList.add('hide');
    socialMedia.style.zIndex = "1";
  }
  //add languages
  const languages = {
    li1 : document.getElementById('li1_home'),
    li2 : document.getElementById('li2_pro'),
    li3 : document.getElementById('li3_call'),
    english : document.getElementById('english'),
    arabic : document.getElementById('arabic'),
    my_name_2:document.getElementById("my_name_2"),
    jop:document.getElementById("jop"),
    infor_about_me:document.getElementById("infor_about_me"),
    show_all_pro:document.getElementById("show_all_pro"),
    published_pro :document.getElementById('published_pro'),
    not_published_pro :document.getElementById('not_published_pro'),
    restaurant_title :document.getElementById('restaurant_title'),
    restaurant_title2 :document.getElementById('restaurant_title2'),
    about_res :document.getElementById('about_res'),
    enter_web :document.getElementById('enter_web'),
    puplished_text_t : document.getElementById('puplished_text_t'),
    puplished_text_f : document.getElementById('puplished_text_f'),
    student : document.getElementById('student'),
    student2 : document.getElementById('student2'),
    student_des : document.getElementById('student_des'),
    adidas_title : document.getElementById('adidas_title'),
    adidas_title2 : document.getElementById('adidas_title2'),
    adidas_des : document.getElementById('adidas_des'),
    games_title : document.getElementById('games_title'),
    games_title2 : document.getElementById('games_title2'),
    games_des : document.getElementById('games_des'),
    see_all_projects:document.getElementById('see_all_projects'),
    about_me_title:document.getElementById('about_me_title'),
    about_me_des:document.getElementById('about_me_des'),
    my_name_footer:document.getElementById('my_name_footer'),
    my_des:document.getElementById('my_des'),
    my_des_1:document.getElementById('my_des_1'),
  }

document.getElementById("langSwitcher").addEventListener("change", function () {
  const selectedLang = this.value;
  console.log(selectedLang)

  if (selectedLang === "ar") {
    languages.li1.innerHTML = `الرئيسية`;
    languages.li2.innerHTML = `الملف الشخصي`;
    languages.li3.innerHTML = `اتصال`;
    languages.english.innerHTML = `الإنجليزية`;
    languages.arabic.innerHTML = `العربية`;
    languages.my_name_2.innerHTML = `زياد أحمد`;
    languages.jop.innerHTML = `مطوّر واجهات أمامية`;
    languages.infor_about_me.innerHTML = `
    أنا زياد أحمد، مطور عمره 15 سنة من مصر. بدأت أتعلم البرمجة بشكل جدي من أكثر من سنة بعد ما اكتشفت إني بدأت بطريقة خاطئة. دلوقتي أنا مركز على إني أبقى مطور واجهات أمامية قوي، وقريب هابدأ أتعلم الـ Back-End بعد ما أتقن JavaScript. بحب أعمل مواقع، ومتحمس أطور مهاراتي في تطوير الويب والألعاب.
    `;
    languages.show_all_pro.innerHTML = `عرض الكل`;
    languages.published_pro.innerHTML = `منشور`;
    languages.not_published_pro.innerHTML = `غير منشور`;
    languages.restaurant_title.innerHTML = `🍽️ موقع مطعم`;
    languages.restaurant_title2.innerHTML = `موقع مطعم`;
    languages.about_res.innerHTML = `موقع مطعم بسيط باستخدام HTML, CSS & JS.`;
    languages.enter_web.innerHTML = `عرض مباشر`;
    languages.puplished_text_t.innerHTML = `الحالة: الموقع منشور ✅`;
    languages.puplished_text_f.innerHTML = `الحالة: الموقع غير منشور 🕒`;
    languages.student.innerHTML = `🎓 بوابة الطالب`;
    languages.student2.innerHTML = `موقع الطالب`;
    languages.student_des = `موقع الطالب
    بوابة طالب بسيطة باستخدام HTML, CSS & JS.`;
    languages.adidas_title.innerHTML = `👟 موقع أديداس`;
    languages.adidas_title2.innerHTML = `موقع أديداس`;
    languages.adidas_des.innerHTML = `موقع
    موقع أديداس بسيط باستخدام HTML, CSS & JS.`;
    languages.games_title.innerHTML = `🎮 معرض الألعاب`;
    languages.games_title2.innerHTML = `موقع الألعاب`;
    languages.games_des.innerHTML = `موقع معرض ألعاب بسيط باستخدام HTML, CSS & JS.`;
    languages.see_all_projects.innerHTML = `عرض جميع المشاريع`;
    languages.about_me_title.innerHTML = `من أنا :`;
    languages.about_me_des.innerHTML = `أنا زياد أحمد، مبرمج عندي 15 سنة من مصر. بدأت أتعلم البرمجة بجد من سنة تقريبًا، رغم إني بدأت من حوالي سنة ونص أو سنتين بس كانت البداية غلط. دلوقتي مركز على تطوير الواجهات الأمامية، وقريب هانتقل لتعلم الـ Back-End بعد ما أخلص JavaScript. بحب أعمل مواقع فريدة وبحب أتعلم حاجات جديدة كل يوم.`;
    languages.my_name_footer.innerHTML = `زياد`;
    languages.my_des.innerHTML = `أحب كل أنواع البرمجة ، الويب`;
    languages.my_des_1.innerHTML = `الألعاب، التطبيقات — هاتعلم كل ده قريب. عندي شغف بـ HTML, CSS, JavaScript، وبخطط أتعلم C++, C#, Java, PHP, MySQL, React، وNode.js. المشوار لسه في أوله، وأنا ناوي أكمل للآخر.`;
    
  } else if (selectedLang === "en") {/**************/
    languages.li1.innerHTML =`Home`;
    languages.li2.innerHTML =`Profile`;
    languages.li3.innerHTML =`Call`;
    languages.english.innerHTML=`English`;
    languages.arabic.innerHTML=`Arabic`;
    languages.my_name_2.innerHTML=`Ziad Ahmed`;
    languages.jop.innerHTML=`Front-End Developer`;
    languages.infor_about_me.innerHTML=`
    I'm Ziad Ahmed, a 15-year-old developer from Egypt. I've been seriously learning programming for over a year now, after realizing I started on the wrong path. Now, I'm focused on becoming a strong front-end developer, and soon I’ll dive into back-end development after mastering JavaScript. I love building websites, and I'm passionate about growing my skills in web and game development.
    `;
    languages.show_all_pro.innerHTML=`Show All`;
    languages.published_pro.innerHTML=`Published`;
    languages.not_published_pro.innerHTML=`Not Published`;
    languages.restaurant_title.innerHTML=`🍽️ Restaurant Web`;
    languages.restaurant_title2.innerHTML=`Restaurant Website`;
    languages.about_res.innerHTML=`Simple restaurant website using HTML, CSS & JS.`;
    languages.enter_web.innerHTML=`Live Demo`;
    languages.puplished_text_t.innerHTML=`Status:Website Published✅`;
    languages.puplished_text_f.innerHTML=`Status:Website Not Published🕒`;
    languages.student.innerHTML=`🎓 Student Portal`;
    languages.student2.innerHTML=`Student Website`;
    languages.student_des=`Student Website
Simple Student Portal website using HTML, CSS & JS.`
    languages.adidas_title.innerHTML=`👟 Adidas Website`;
    languages.adidas_title2.innerHTML=`Adidas Website`;
    languages.adidas_des.innerHTML=`Website
    Simple Adidas website using HTML, CSS & JS.`;
    languages.games_title.innerHTML=`🎮 Games Gallery`;
    languages.games_title2.innerHTML=`Games Website`;
    languages.games_des.innerHTML=`Simple Games Gallery website using HTML, CSS & JS.`;
    languages.see_all_projects.innerHTML=`See All Projects`;
    languages.about_me_title.innerHTML=`About Me :`;
    languages.about_me_des.innerHTML=`My name is Ziad Ahmed, I'm a 15-year-old programmer from Egypt. I've been coding for about a year seriously, though I initially started around 1.5 to 2 years ago, but on the wrong path. I'm now fully dedicated to Front-End development, and soon transitioning to Back-End once I master JavaScript. I'm passionate about making unique websites and learning new things every day.`;
    languages.my_name_footer.innerHTML=`Ziad`;
    languages.my_des.innerHTML=`I Love All Type Programming , Web`;
    languages.my_des_1.innerHTML=`Games, Apps — I will learn it all soon. I'm passionate about HTML, CSS, JavaScript, and planning to dive into C++, C#, Java, PHP, MySQL, React, and Node.js. The journey just started, and I'm all in.`;
  }
});
