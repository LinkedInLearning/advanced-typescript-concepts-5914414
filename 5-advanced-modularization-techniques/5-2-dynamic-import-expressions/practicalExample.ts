let button = document.getElementById('button');
let condition = true;

button?.addEventListener('click', async () => {
  if (condition) {
    const specialFeature = await import('./specialFeatureModule');
    specialFeature.verySpecialFeature();
  }
});


