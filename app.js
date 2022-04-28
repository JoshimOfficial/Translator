let translateBtn = document.querySelector(".translate_Btn");

translateBtn.addEventListener("click",()=>{
   let user_value = document.querySelector(".translate_from_input").value;
   let transtalteLangValue = document.querySelector(".translate_to_input");
   let translate_from_lang = document.querySelector(".translate_from_lang").value;
   let translate_to_lang = document.querySelector(".translate_to_lang").value;

  let translation_api = `https://api.mymemory.translated.net/get?q=${user_value}!&langpair=${translate_from_lang}|${translate_to_lang}`;

  fetch(translation_api).then(res=> res.json()).then(data=> {
    
    transtalteLangValue.setAttribute("placeholder", "Translating.....")
    setTimeout(function(){
    transtalteLangValue.value = data.responseData.translatedText;

    let gTranslate_sec = document.querySelector(".gTranslate_sec");
    gTranslate_sec.style.display = "block";
    },500)
  })


  let gTranslate = document.querySelector(".gTranslate_ic");
  gTranslate.addEventListener("click", ()=>{
  
  let user_tanslate_value = document.querySelector(".translate_from_input").value;
  gTranslate_link =  `https://translate.google.com/?sl=en&tl=bn&text=${user_tanslate_value}&op=translate`;
  window.open( gTranslate_link , '_blank');
})


})


