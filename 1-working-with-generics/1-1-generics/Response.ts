export interface Response<T> {
  status: number;
  message: string;
  data: T;
}

function createResponse<T>(status: number, message: string, data: T): Response<T> {
  return { status, message, data };
}

const stringResponse = createResponse<string>(200, "OK", "This is a successful response");
console.log(stringResponse);

const numbersResponse = createResponse<number[]>(200, "OK", [1, 2, 3, 4]);
console.log(numbersResponse);




