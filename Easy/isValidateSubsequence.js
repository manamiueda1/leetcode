//  Validate Subsequence

// Solution #1

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

function isValidSubsequence(array, sequence) {
  let counterForSequenceIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[counterForSequenceIndex]) {
      counterForSequenceIndex++;
    }
    if (sequence.length === counterForSequenceIndex) {
      return true;
    }
  }
  return false;
}
