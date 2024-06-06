type Status = "active" | "inactive" | "pending";

const userStatus: Record<number, Status> = {
  1: "active",
  2: "inactive",
  3: "pending",
};

console.log(userStatus[1]); // Output: "active" (video)
