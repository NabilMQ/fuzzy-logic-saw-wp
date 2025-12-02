import { getAllWeight } from "./helper";

export const SVector = ({value} : {value : (string | number)[]}) => {
  let tempData : number = 1;
  const allWeight = getAllWeight()
  tempData *= Math.pow(parseFloat(value[2].toString()), -allWeight[0]);
  tempData *= Math.pow(parseFloat(value[3].toString()), allWeight[1]);
  tempData *= Math.pow(parseFloat(value[4].toString()), allWeight[2]);
  tempData *= Math.pow(parseFloat(value[5].toString()), allWeight[3]);
  tempData *= Math.pow(parseFloat(value[6].toString()), -allWeight[4]);
  
  return tempData.toFixed(3);
}

export const computeWPResult = ({currentValue, value} : {currentValue : number; value : number[]}) => {

  let result : number = 0;
  let sumAllValue = 0;
  
  for (let i = 0; i < value.length; i++) {
    sumAllValue += value[i];
  }
  
  result = currentValue / sumAllValue;

  return result.toFixed(3);
}