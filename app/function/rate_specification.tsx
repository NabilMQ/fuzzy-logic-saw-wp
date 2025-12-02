export const convertPrice = ({price} : {price : number}) => {
  if (price < 70) {
    return 1;
  } 

  if (price >= 70 && price <= 99.99) {
    return 2;
  }

  if (price >= 100 && price <= 129.99) {
    return 3;
  }

  if (price >= 130 && price <= 160) {
    return 4;
  }

  if (price > 160) {
    return 5;
  }
}

export const convertStorage = ({storage} : {storage : number}) => {
  if (storage == 500) {
    return 3;
  }

  if (storage == 1000) {
    return 4;
  }

  if (storage == 2000) {
    return 5;
  }
}

export const convertWeight = ({weight} : {weight : number}) => {
  if (weight < 40) {
    return 1;
  } 

  if (weight >= 40 && weight <= 49.99) {
    return 2;
  }

  if (weight >= 50 && weight <= 59.99) {
    return 3;
  }

  if (weight >= 60 && weight <= 69.99) {
    return 4;
  }

  if (weight > 70) {
    return 5;
  }
}

export const convertReadSpeed = ({readSpeed} : {readSpeed : number}) => {
  if (readSpeed < 750) {
    return 1;
  } 

  if (readSpeed >= 750 && readSpeed <= 999.99) {
    return 2;
  }

  if (readSpeed >= 1000 && readSpeed <= 1299.99) {
    return 3;
  }

  if (readSpeed >= 1300 && readSpeed <= 1600) {
    return 4;
  }

  if (readSpeed > 1600) {
    return 5;
  }
}

export const convertWriteSpeed = ({writeSpeed} : {writeSpeed : number}) => {
  if (writeSpeed < 750) {
    return 1;
  } 

  if (writeSpeed >= 750 && writeSpeed <= 999.99) {
    return 2;
  }

  if (writeSpeed >= 1000 && writeSpeed <= 1299.99) {
    return 3;
  }

  if (writeSpeed >= 1300 && writeSpeed <= 1600) {
    return 4;
  }

  if (writeSpeed > 1600) {
    return 5;
  }
}