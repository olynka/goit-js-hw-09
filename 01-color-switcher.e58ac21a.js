const t={bodyEl:document.body,startEl:document.querySelector("button[data-start]"),stopEl:document.querySelector("button[data-stop]")};t.startEl.addEventListener("click",(function(){e=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startEl.disabled=!0})),t.stopEl.addEventListener("click",(function(){clearInterval(e),t.startEl.disabled=!1}));let e=null;
//# sourceMappingURL=01-color-switcher.e58ac21a.js.map