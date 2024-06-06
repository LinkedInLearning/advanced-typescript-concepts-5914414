type EventType<T extends string> = `${T}Changed`;
type SpecificEvent = EventType<"user">;  // "userChanged" (slide)

interface EventConfig {
  [key: string]: string;
}

function handleEvent<T extends string>(event: EventType<T>, handler: (e: EventConfig) => void) {
  // Event handling logic...
}

handleEvent("userChanged", (config) => {
  console.log(`Handling user changed event with data: ${config.detail}`);
});


