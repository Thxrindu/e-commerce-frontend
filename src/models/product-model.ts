export interface IProduct {
  name?: string;
  imageUrl?: string | null;
  description?: string;
  price?: string;
}
export const defaultValue: Readonly<IProduct> = {};
