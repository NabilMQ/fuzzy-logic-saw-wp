import { criteriaData } from "../data/criteria";

export const getArrayOfRowByColumn = ({value, indexCol} : {value : (string | number)[][]; indexCol : number}) => {
  const tempArray: (string | number)[] = [];
  for (let i = 0; i < value.length; i++) {
    tempArray.push(value[i][indexCol]);
  }

  return tempArray;
}

export const rankFromArrayOfValue = ({arrayValue} : {arrayValue: number[]}) => {
  const tempArray : number[] = [];
  for (let i = 0; i < arrayValue.length; i++) {
    const tempSet = new Set();
    for (let j = 0; j < arrayValue.length; j++) {
      if (arrayValue[j] > arrayValue[i] && !tempSet.has(arrayValue[j])) {
        tempSet.add(arrayValue[j]);
      }
    }

    tempArray[i] = tempSet.size + 1;
  }

  return tempArray
}

export const getAllWeight = () => {
  const tempData : number[] = []

  for (let i = 0; i < criteriaData.length; i++) {
    tempData.push(parseFloat(criteriaData[i][2].toString()));
  }

  return tempData;
}