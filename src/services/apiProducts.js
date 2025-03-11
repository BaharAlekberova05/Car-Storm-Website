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

export async function getNews() {
  const { data, error } = await supabase.from("news").select("*");

  if (error) {
    console.log(error);
    throw new Error("News could not be loaded.");
  }

  return data[0].data;
}

export async function getLimitedCars() {
  let { data, error } = await supabase.from("products").select("*").range(0, 3);

  if (error) {
    console.log(error);
    throw new Error("Cars could not be loaded.");
  }

  return data;
}

export async function getLimitedNews() {
  let { data, error } = await supabase.from("news").select("*").range(0, 3);

  if (error) {
    console.log(error);
    throw new Error("Cars could not be loaded.");
  }

  return data;
}
