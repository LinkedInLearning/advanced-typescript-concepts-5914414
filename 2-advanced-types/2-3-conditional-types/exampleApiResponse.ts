interface User {
  username: string;
  email: string;
}

interface ApiError {
  errorCode: number;
  errorMessage: string;
}


type ApiResponse<Status extends 'success' | 'error'> =
  Status extends 'success' ? User : ApiError;

function fetchUserData<Status extends 'success' | 'error'>(status: Status): ApiResponse<Status> {
  if (status === 'success') {
    // Simulating a successful API response
    return {
      id: 1,
      username: 'johndoe',
      email: 'john.doe@example.com'
    } as ApiResponse<Status>;
  } else {
    // Simulating an error response from the API
    return {
      errorCode: 404,
      errorMessage: 'User not found'
    } as ApiResponse<Status>;
  }
}
 
const successResponse = fetchUserData('success'); // User
console.log(successResponse.email); // Accessible because successResponse is inferred as User

const errorResponse = fetchUserData('error'); // ApiError
console.log(errorResponse.errorMessage); // Accessible because errorResponse is inferred as ApiError
