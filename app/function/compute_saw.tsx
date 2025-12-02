import { getAllWeight } from "./helper";

export const normalizeSAW = ({
  currentValue, 
  arrayOfValue,
  isCost
} : {
  currentValue : number; 
  arrayOfValue : number[]
  isCost : boolean
}) => {
  if (isCost) {
    return (Math.min(...arrayOfValue) / currentValue).toFixed(2);
  }

  return (currentValue / Math.max(...arrayOfValue)).toFixed(2);
}

export const getallValueForEachCriteriaSAW = ({value, indexRow} : {value : (string | number)[][]; indexRow : number}) => {
  const tempData : number[] = [];

  tempData.push(parseFloat(value[indexRow][2].toString()));
  tempData.push(parseFloat(value[indexRow][3].toString()));
  tempData.push(parseFloat(value[indexRow][4].toString()));
  tempData.push(parseFloat(value[indexRow][5].toString()));
  tempData.push(parseFloat(value[indexRow][6].toString()));
  
  return tempData;
}

export const computeSAWResult = ({value} : {value : number[]}) => {
  let result : number = 0;
  const allWeight : number[] = getAllWeight()

  for (let i = 0; i < value.length; i++) {
    result += value[i] * allWeight[i];
  }

  return result.toFixed(3);
}