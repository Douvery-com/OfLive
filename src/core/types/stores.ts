export type Design = {
  logo: string;
  banners: string[];
  cover: string;
  primaryColor: string;
  secondaryColor: string;
};

export type ContactInfo = {
  email: string;
  phone: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    timezone: string;
    isPrimary: boolean;
    locationType: string;
  };
};

export type SocialLinks = {
  facebook: string;
  twitter: string;
  instagram: string;
};

export type Update = {
  updatedAt: Date;
  updatedBy: string;
  description: string;
};

export type Store = {
  store: any;
  ratingsCount: number;
  averageRating: number;
};
