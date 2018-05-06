
const BUFFER_LEN = 40;

function getScrollPercent(elem) {
    var h = elem,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

      return  (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function isElementInViewport (el) {
    if(!el){
        return false;
    }
    var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
}

function onEndScroll(el, percDir, cb){
    const stateChilds = []

    let  firstVisible = null, firstHide = null
    if(!el || !el.children || !el.children[0]){
        return false
    }

    [...el.children].map((child, idx)=>{

        const isVisibile = isElementInViewport(child)
        console.log('visible', idx, isVisibile);
        firstVisible = firstVisible === null && isVisibile ? idx : firstVisible
        firstHide = firstVisible !== null && firstHide === null && !isVisibile ? idx : firstHide
    })
    cb(percDir, firstVisible, firstHide)
}

function listenScroll(idDom, cb){
  const elem = window.document.getElementById(idDom)
  let last = 0, perc = 0, isWait = 0
  elem.addEventListener( "scroll", (e)=>{
    perc=getScrollPercent(elem)
    const dir = perc < last ? -1 : 1
    elem.scrollTop = elem.scrollTop > 50 ? 50 : elem.scrollTop

    last = perc
     if (!isWait){
       isWait = true

       setTimeout(()=>(isWait = false, onEndScroll(elem, perc * dir, cb )), 500)
     }
  })
}

function init(options){
  options = Object.assign({}, options)
  if (!options || !options.idDom>' ' || !options.onScroll ){
    console.log('infinite scroll, paramentri obbligatori mancanti ')
    return null
  }

  const len = options.bufferLen || BUFFER_LEN
  const listen = listenScroll(options.idDom, options.onScroll)

  return {
    listen,
    bufferLen: len,
    onScroll : options.onScroll,
    isElementInViewport
  }
}
export default init
