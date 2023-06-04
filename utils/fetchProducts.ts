export const fetchProducts = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProducts`
    );

    const data = await res.json();
    const products: Product[] = data.products;

    return products;
  } catch (err) {
    console.error(err);
  }
};
