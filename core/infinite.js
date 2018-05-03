
const BUFFER_LEN = 40;

function getScrollPercent(elem) {
    var h = elem,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

      return  (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function lastTimeOut(func){

  setTimeout(func, )
}

function listenScroll(idDom, func){
  const elem = window.document.getElementById(idDom)
  let last = 0, perc = 0, isWait = 0
  elem.addEventListener( "scroll", ()=>{
    perc=getScrollPercent(elem)
    const dir = perc < last ? -1 : 1
    last = perc
     if (!isWait){
       isWait = true
       setTimeout(()=>(isWait = false, func(perc * dir)), 500)

     }

  })
}

function init(options){
  options = Object.assign({}, options)
  if (!options || !options.idDOm>' ' || !options.onScroll ){
    console.log('infinite scroll, paramentri obbligatori mancanti ')
    return null
  }

  const len = options.buffer_LEN || BUFFER_LEN
  const listen = listenScroll(options.idDOm, options.onScroll)

  return {
    listen,
    buffer_LEN: BUFFER_LEN,
    onScroll : options.onScroll
  }
}
export default init
