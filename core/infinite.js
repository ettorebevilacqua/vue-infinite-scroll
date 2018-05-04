
import init from './scroll.js'

function onList(list, start){
  // const listAssoc = list.map(el=>({visible:false}) );
  const iMax = list.length - 1
  return start > imax ? imax : start

}

const numberNotMinOf = (num, min) => num < min ? min : num
const numberNotMaxnOf = (num, max) => num > max ? max : num
const NumberIntoMaxMin =( num, max, min) =>  num > max ? max : numberNotMinOf(num, min)
const calcStart = (imax, start) => numberNotMaxnOf(start, imax)
const numOfPage = (listLen, len) => parseInt(listLen / len)
const nextPage  = (iPag, numOfPage) => numberNotMaxnOf(iPag, numOfPage -1)
const precPage  = iPag => numberNotMinOf(iPag, 0)
const iPageToListIndex = (iPag, len) => iPag * len
const listIndexToiPag = (iList, len) => numOfPage(iList, len)

function getList(list, start, lenBuffer) {
  const lenList = list.length;
  if (!lenList){
    return null
  }

  const iStart = numberNotMinOf( calcStart( lenList -1, start) - lenBuffer, 0 )
  const currentPag = listIndexToiPag(iStartMax,lenBuffer) // trova la pagina per quel indice
  const iNumOfPageMax = numOfPage(lenList, lenBuffer)

// elimino i primi lenBuffer / 2
// aggiungo lenBuffer / 2

  const buffer = list.splice(iStart, lenBuffer)

  return {iStart, currentPag, iNumOfPageMax}
}

console.log(' test infinitejs calcStart', calcStart([1,2,3,4,5], 8));

function Infinite(options){

  let iStart=0, currentPag=0, iNumOfPageMax=0
  const scroller = init(options)

  const refresh = list =>{
    iStart = getList(list, iStart, scroller.bufferLen)
  }


  }

  return {
    scroller,
    refresh,
    moveNext
  }
}
export default Infinite

/* test qui */
