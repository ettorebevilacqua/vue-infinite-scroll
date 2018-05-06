
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

console.log(' test infinitejs calcStart', calcStart([1,2,3,4,5], 8))

function Infinite(options){

  let iStart=0, currentPag=0, iNumOfPageMax=0, list=[]
  const externalOnScroll = options.onScroll

  options.onScroll = (perc, firstVisible, firstHide) =>{
      console.log('internal scroll and cell visible', perc, firstVisible, firstHide)
      moveNext(perc>0 ? 1 : -1)
      externalOnScroll(perc, options.buffer)
  }

const scroller = init(options)

  function getList(list, lenBuffer) {
    const lenList = list.length
    if (!lenList){
      return []
    }

     iStart = numberNotMinOf( calcStart( lenList -1, iStart) - lenBuffer, 0 )
     options.buffer = list.splice(iStart, lenBuffer)
  }


  const refresh = newList =>{
      list = newList
      getList(newList, scroller.bufferLen)
     return options.buffer
  }

   options.buffer =  list.splice(iStart, scroller.bufferLen)


  const moveNext = dir =>{
      const half = parseInt(scroller.bufferLen / 2)
      iStart = iStart + 5 // (5 * dir) // half * dir
      const lenList = list.length
      iStart = NumberIntoMaxMin(iStart, scroller.bufferLen - 5, 0)
      options.buffer = list.splice(iStart, scroller.bufferLen)

      console.log('infinite move next dir=', dir)
      return options.buffer
  }

  return {
    scroller,
    refresh,
    moveNext,
    list
  }
}

export default Infinite

/* test qui */
