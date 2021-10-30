let wd = document.body.clientWidth;
window.addEventListener('resize', ()=>{ wd = document.body.clientWidth });

const handelAnmyElem = (elem, anmyName) => {
      elem.style.animationName = anmyName;
      // elem.style.opacity = '1';
      setTimeout(() => { elem.style.opacity = '1'; }, 400);
}

const handelHeadAnmy = (ht1, ht2, hthdsm, ht3, ht4, ht5, ht6, ht7, num) => {
    // const ht1 = document.getElementsByTagName('header')[0].offsetHeight ,
    // ht2 = document.querySelector('.scr-no-small').offsetHeight ,
    // hthdsm = document.querySelector('.scr-small').offsetHeight ,
    // ht3 = document.querySelector('.AppCarousel').offsetHeight;
    let totalOffset = 0;
    if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3;
    }else{ totalOffset = hthdsm + ht3; }
    totalOffset += ht4 + ht5 + ht6 + ht7;
    const trgHd = document.querySelectorAll('h3')[num];
    if( window.scrollY >= totalOffset ){
      trgHd.style.opacity = '1';
      trgHd.style.animationName = 'scHdsAnmy' ;
    }
}

const handelCampsAnmy = (ht1, ht2, hthdsm, ht3, ht4h3) => {
    let totalOffset = 0;
    if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3 + ht4h3;
    }else{ totalOffset = hthdsm + ht3 + ht4h3; }
    const links = document.querySelectorAll('#Campuses .campuses__container__item a'),
          imgs = document.querySelectorAll('#Campuses .campuses__container__item img');
    if( window.scrollY >= totalOffset ){
      imgs[0].style.opacity = '1';   imgs[0].style.animationName = 'campsImgAnmy';
      setTimeout(() => {
        links[0].style.opacity = '1';   links[0].style.animationName = 'campsLnkAnmy';
      }, 200);
      for(let i = 1; i<links.length; i++){
          setTimeout(() => {
            imgs[i].style.opacity = '1';   imgs[i].style.animationName = 'campsImgAnmy';
            setTimeout(() => {
              links[i].style.opacity = '1';   links[i].style.animationName = 'campsLnkAnmy';
            }, 200);
          }, 400);
      }
    }
}

const handelSrvsAnmy = (ht1, ht2, hthdsm, ht3, ht4, ht5h3) => {
    let totalOffset = 0;
    if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3 + ht4 + ht5h3;
    }else{ totalOffset = hthdsm + ht3 + ht4 + ht5h3; }
    const srvs = document.querySelectorAll('#services .services__item');
    if( window.scrollY >= totalOffset ){
      for(let i = 0; i<srvs.length; i++){
        handelAnmyElem(srvs[i], 'srvsItmsAnmy');          
      }
    }
}

const handelNewsAnmy = (ht1, ht2, hthdsm, ht3, ht4, ht5, ht6h3) => {
    let totalOffset = 0;
    if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3 + ht4 + ht5 + ht6h3;
    }else{ totalOffset = hthdsm + ht3 + ht4 + ht5 + ht6h3; }
    const news = document.querySelectorAll('#latestNews .latestNews__container__item');
    const newsLnk = document.querySelectorAll('#latestNews .latestNews__container__item a');
    if( window.scrollY >= totalOffset ){
      for(let i = 0; i<news.length; i++){
        handelAnmyElem(news[i], 'fadeAnmy');   
        setTimeout(() => {
            handelAnmyElem(newsLnk[i], 'newsLnkAnmy');            
        }, 200);
      }
    }
}

const handelEvnsAnmy = (ht1, ht2, hthdsm, ht3, ht4, ht5, ht6, ht7h3) => {
  let totalOffset = 0;
  if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3 + ht4 + ht5 + ht6 + ht7h3;
  }else{ totalOffset = hthdsm + ht3 + ht4 + ht5 + ht6 + ht7h3; }
  const evnsDiv = document.querySelectorAll('#upEvents .upEvents__container__item div');
  const evnsP1 = document.querySelectorAll('#upEvents .upEvents__container__item p:first-of-type');
  const evnsP2 = document.querySelectorAll('#upEvents .upEvents__container__item p:last-of-type');
  if( window.scrollY >= totalOffset ){
    for(let i = 0; i<evnsDiv.length; i++){
      handelAnmyElem(evnsDiv[i], 'evnsDivAnmy');   
      setTimeout(() => {
          handelAnmyElem(evnsP1[i], 'evnsPAnmy');
          handelAnmyElem(evnsP2[i], 'evnsPAnmy');            
      }, 200);
    }
  }
}

const handelDeanImgAnmy = (ht1, ht2, hthdsm, ht3, ht4, ht5, ht6, ht7, ht8) => {
  let totalOffset = 0;
  if( wd >= 768 ){ totalOffset = ht1 + ht2 + ht3 + ht4 + ht5 + ht6 + ht7;
  }else{ totalOffset = hthdsm + ht3 + ht4 + ht5 + ht6 + ht7; }
  const trgEl = document.querySelector('#Deanery img'); 
  if( window.scrollY >= totalOffset && window.scrollY < totalOffset + ht8 ){ 
    if( wd >= 768 ){ handelAnmyElem(trgEl, 'deanImgAnmyLg');
    }else{ handelAnmyElem(trgEl, 'deanImgAnmySm'); }       
  }
}

document.addEventListener('scroll', () => { 
    const ht1 = document.getElementsByTagName('header')[0].offsetHeight ,
    ht2 = document.querySelector('.scr-no-small').offsetHeight ,
    hthdsm = document.querySelector('.scr-small').offsetHeight ,
    ht3 = document.querySelector('.AppCarousel').offsetHeight,
    ht4 = document.querySelector('#Campuses').offsetHeight,
    ht5 = document.querySelector('#services').offsetHeight,
    ht6 = document.querySelector('#latestNews').offsetHeight,
    ht7 = document.querySelector('#upEvents').offsetHeight,
    ht8 = document.querySelector('#Deanery').offsetHeight;



    const ht4h3 = document.querySelector('#Campuses h3').offsetHeight;
    const ht5h3 = document.querySelector('#services h3').offsetHeight;
    const ht6h3 = document.querySelector('#latestNews h3').offsetHeight;
    const ht7h3 = document.querySelector('#upEvents h3').offsetHeight;

    handelHeadAnmy(ht1, ht2, ht3, hthdsm, 0, 0, 0, 0, 2);     
    handelHeadAnmy(ht1, ht2, ht3, hthdsm, ht4, 0, 0, 0, 3);
    handelHeadAnmy(ht1, ht2, ht3, hthdsm, ht4, ht5, 0, 0, 4);     
    handelHeadAnmy(ht1, ht2, ht3, hthdsm, ht4, ht5, ht6, 0, 5);
    handelCampsAnmy(ht1, ht2, hthdsm, ht3, ht4h3);
    handelSrvsAnmy(ht1, ht2, hthdsm, ht3, ht4, ht5h3);
    handelNewsAnmy(ht1, ht2, hthdsm, ht3, ht4, ht5, ht6h3);
    handelEvnsAnmy(ht1, ht2, hthdsm, ht3, ht4, ht5, ht6, ht7h3);
    handelDeanImgAnmy(ht1, ht2, hthdsm, ht3, ht4, ht5, ht6, ht7, ht8);
});

export const handelNavHeadFade = () => {
  const nav = document.querySelector('.scr-no-small'),
        head = document.querySelector('header'),
        hdsm = document.querySelector('#headerSm'); 
  if( wd >= 768 ){ handelAnmyElem(nav, 'fadeAnmy');   handelAnmyElem(head, 'fadeAnmy');
  }else{ handelAnmyElem(hdsm, 'fadeAnmy'); } 
}