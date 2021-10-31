let wd = document.body.clientWidth;
window.addEventListener('resize', ()=>{ wd = document.body.clientWidth });

const handelAnmyElem = (elem, anmyName) => {      
      elem.style.animationName = anmyName;
      setTimeout(() => { elem.style.opacity = '1'; }, 400);
}

const handelHeadAnmy = (num) => {
    const trgHd = document.querySelectorAll('h3')[num];
    if( window.scrollY >= trgHd.parentElement.offsetTop ){
      handelAnmyElem(trgHd, 'scHdsAnmy');
    }
}

const handelCampsAnmy = () => {
    const links = document.querySelectorAll('#Campuses .campuses__container__item a'),
          imgs = document.querySelectorAll('#Campuses .campuses__container__item img'),
          trgCamps = document.querySelectorAll('#Campuses .campuses__container__item');
    if( window.scrollY >= (trgCamps[0].offsetTop - (trgCamps[0].offsetHeight * 0.8)) ){
      handelAnmyElem(imgs[0], 'campsImgAnmy');
      setTimeout(() => { handelAnmyElem(links[0], 'campsLnkAnmy'); }, 200);
      for(let i = 1; i<links.length; i++){
          if( window.scrollY >= (trgCamps[i].offsetTop - (trgCamps[i].offsetHeight * 0.8)) ){
            setTimeout(() => {
              handelAnmyElem(imgs[i], 'campsImgAnmy');
              setTimeout(() => { handelAnmyElem(links[i], 'campsLnkAnmy'); }, 200);
            }, 400);
          }
      }
    }
}

const handelSrvsAnmy = () => {  
    const srvs = document.querySelectorAll('#services .services__item');    
    for(let i = 0; i<srvs.length; i++){
      if( window.scrollY >= (srvs[i].offsetTop - (srvs[i].offsetHeight * 0.75)) ){
        handelAnmyElem(srvs[i], 'srvsItmsAnmy');          
      }
    }
}

const handelNewsAnmy = () => {
    const news = document.querySelectorAll('#latestNews .latestNews__container__item');
    const newsLnk = document.querySelectorAll('#latestNews .latestNews__container__item a');
      for(let i = 0; i<news.length; i++){
        if( window.scrollY >= (news[i].offsetTop - (news[i].offsetHeight * 0.3)) ){
          handelAnmyElem(news[i], 'fadeAnmy');   
          setTimeout(() => { handelAnmyElem(newsLnk[i], 'newsLnkAnmy'); },200);
        }
      }
}

const handelEvnsAnmy = () => {
  const evnsDiv = document.querySelectorAll('#upEvents .upEvents__container__item div');
  const evnsP1 = document.querySelectorAll('#upEvents .upEvents__container__item p:first-of-type');
  const evnsP2 = document.querySelectorAll('#upEvents .upEvents__container__item p:last-of-type');
  const evns = document.querySelectorAll('#upEvents .upEvents__container__item');
  
    for(let i = 0; i<evnsDiv.length; i++){
      let evht = 0;
      if( wd >= 768 ){ evht = 1.6;
      }else{ evht = 0.8; }
      if( window.scrollY >= (evns[i].offsetTop - (evns[i].offsetHeight * evht)) ){
      handelAnmyElem(evnsDiv[i], 'evnsDivAnmy');   
      setTimeout(() => {
          handelAnmyElem(evnsP1[i], 'evnsPAnmy');
          handelAnmyElem(evnsP2[i], 'evnsPAnmy');            
      }, 200);
    }
  }
}

const handelDeanImgAnmy = () => {
  const trgEl = document.querySelector('#Deanery img'); 
  const trgPr = document.querySelector('#Deanery');
    if( window.scrollY >= (trgPr.offsetTop - (trgPr.offsetHeight * 0.25)) ){ 
    if( wd >= 768 ){ handelAnmyElem(trgEl, 'deanImgAnmyLg');
    }else{ handelAnmyElem(trgEl, 'deanImgAnmySm'); }       
  }
}

document.addEventListener('scroll', () => { 
    handelHeadAnmy(2);     
    handelHeadAnmy(3);
    handelHeadAnmy(4);     
    handelHeadAnmy(5);
    handelCampsAnmy();
    handelSrvsAnmy();
    handelNewsAnmy();
    handelEvnsAnmy();
    handelDeanImgAnmy();
});

export const handelNavHeadFade = () => {
  const nav = document.querySelector('.scr-no-small'),
        head = document.querySelector('header'),
        hdsm = document.querySelector('#headerSm'); 
  if( wd >= 768 ){ 
    nav.style.opacity = '0';  handelAnmyElem(nav, 'fadeAnmy');   
    head.style.opacity = '0';  handelAnmyElem(head, 'fadeAnmy');
  }else{ hdsm.style.opacity = '0';   handelAnmyElem(hdsm, 'fadeAnmy'); } 
}