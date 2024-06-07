async function fetchData(url: string): Promise<unknown> {
  const response = await fetch(url);
  const data: unknown = await response.json();
  return data;
}

async function handleData() {
  const data = await fetchData("https://api.example.com/data");

  // Type checking
  if (Array.isArray(data)) {
    console.log("Data is an array", data);
  } else if (typeof data === "object" && data !== null) {
    console.log("Data is an object", data);
  }
}

handleData();
