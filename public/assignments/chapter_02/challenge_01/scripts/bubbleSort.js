function bubbleSort(arr, propToSort, sortDirection) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const prevCar = arr[j];
      const nextCar = arr[j + 1];

      const prevCarItem = prevCar[propToSort];
      const nextCarItem = nextCar[propToSort];

      const okayCondition =
        sortDirection === 'ascending'
          ? prevCarItem > nextCarItem
          : prevCarItem < nextCarItem;

      if (okayCondition) {
        arr[j] = nextCar;
        arr[j + 1] = prevCar;
      }
    }
  }

  return arr;
}
