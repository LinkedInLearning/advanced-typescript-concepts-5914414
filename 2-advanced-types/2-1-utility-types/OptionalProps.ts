interface OptionalProps {
  name?: string;
  age?: number;
}

function configureSettings(settings: Required<OptionalProps>) {
  console.log(`Name: ${settings.name}, Age: ${settings.age}`);
}

configureSettings({ name: "Gaia", age: 9 });