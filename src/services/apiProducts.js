import supabase from "./supabase";

export async function getCars() {
  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.log(error);
    throw new Error("Products could not be loaded.");
  }

  return data;
}

export async function getCategories() {
  const { data, error } = await supabase.from("categories").select("data");

  if (error) {
    console.log(error);
    throw new Error("Categories could not be loaded.");
  }
  let categoriesAPI = data[0].data;

  return categoriesAPI;
}
