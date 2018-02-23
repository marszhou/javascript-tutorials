export function handleWordsCount (sentence) {
  let wordsCount = 0;
  for(let i=0; i<sentence.length; i++) {
    if(sentence.charCodeAt(i) > 256) {
      wordsCount +=1;
    }
  };
  return wordsCount;
}