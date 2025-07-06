export interface AuthType {
  billing_address: {
    country: string;
    town: string;
    street_address: string;
    extra_address: string;
    state: string;
    zip: string;
  };
  created_at: string;
  created_by: string;
  email: string;
  followers: [];

  name: string;
  order_list: [];
  password: string;
  permission: {
    create: boolean;
    update: boolean;
    delete: boolean;
    read: boolean;
  };
  phone_number: string;
  profile_photo: string;
  surname: string;
  user_type: string;
  username: string;
  wishlist: [];
  _id: string;
}

export interface  CategoryType {
count: number
route_path: string
title: string
_id: string
}

export interface Datatype<T>{
  isLoading: boolean;
  isError:boolean;
  data?:T;
}
export interface DiscountFlowerType {
  discoount_up_to: number;
  id: number;
  poster_image_url: string;
  title: string;
}


export interface ProductsType {
  category?: string;
  comments: string[];
  description?: string;
  detailed_images: string[];
  discount?: boolean;
  discount_price?: string;
  main_image: string;
  price: number;
  rate: number;
  short_description: string;
  sold_times: number;
  tags: [];
  title: string;
  views: number;
  _id: string;
}

export interface ProductsType {
  id: string;
  title: string;
  main_image: string;
  price: number;
  discount_price?: string;
}

export interface SimplifiedProduct {
  _id: string;
  title: string;
  price: number;
  discount: boolean;
  discount_price: number;
  main_image: string;
  count: number;
  category: string;
  rate: number;
  views: number;
  sold_times: number;
}
export interface SessionUser {
  _id: string;
  name: string;
  surname: string;
  profile_photo: string;
  followers?: string[];
  following?: string[];
  bio?:string,
}
export interface BlogType {
  _id: string;              // Blog ID
  title: string;            // Blog sarlavhasi
  content: string;          // Blog HTML kontenti
  image: string;            // Blog rasmi (path)
  viewCount: number;        // Ko‘rishlar soni
  commentCount: number;     // Izohlar soni
  likeCount: number;        // Layklar soni
  createdBy: string;        // Muallif ID si
}

