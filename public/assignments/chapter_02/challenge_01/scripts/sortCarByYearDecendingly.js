function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  bubbleSort(result, 'year', 'descending');

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
