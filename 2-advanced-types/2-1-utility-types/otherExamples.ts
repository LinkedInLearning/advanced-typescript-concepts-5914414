type AvailableDrinks = "Coffee" | "Tea" | "Water" | "Soda";
type NonCaffeinated = Exclude<AvailableDrinks, "Coffee" | "Tea">;


