async function loadMathUtils() {
  const mathUtils = await import('./mathUtils');
  console.log(mathUtils.add(10, 5));  // Outputs: 15
}

loadMathUtils();
