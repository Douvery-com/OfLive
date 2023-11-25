export type Product = {
  dui: string;
  _id: string;
  name: string;
  slug: string;
  price: number;
  discount: number;
  description: string;
  quantity: number;
  likesCount: number;
  dislikesCount: number;

  images: [
    {
      url: string;
    },
  ];
  category: string;
  productDetails: {
    detailsPriceAndButton: string;
  };
  variations: variant[];
  ratings: ratings[];
};

export type ZipCode = {
  info: string;
};

export type ratings = {
  userId: string;
  userName: string;
  userImages: string;
  userComment: string;
};

export type rating = {
  title: string;
  rating: string;
};

export type variant = {
  name: string;
  variant: variantDate;
};

export type productDetails = {
  detailsPriceAndButton: string;
  basicFeatures: basicFeatures[];
};

export type basicFeatures = {
  dui: string;
  sizes: string;
};

export type variantDate = {
  name: string;
  dui: string;
};

export type Seller = {
  name: string;
};

export type CodePostalData = {
  name: string;
  county: string;
  postcode: string;
  state: string;
};

export type UserACC = {
  _id: string;
  name: string;
  lastname: string;
  token: string;
  avatar: string;
  email: string;
  active: boolean;
  sessionId: string;
  isBlocked: boolean;
  blockReason: BlockUserReason | null;
};

export type notification = {
  status: boolean;
};
export type sessionVerification = {
  status: boolean;
};
export type veriToolVerification = {
  status: boolean;
};
export type twoStepVerification = {
  status: boolean;
};

export type decodedUserInfos = {
  name: string;
};

export type Search = {
  totalProduct: number;
  product: Product[];
};

export type Address = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isPrimary: boolean;
  locationType: string;
};

export type PaymentMethod = {
  method: string;
  idMethod: string;
};

export type ShippingAddress = {
  name: string;
  addressLine1: string;
  addressLine2: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isPrimary: boolean;
  locationType: string;
};

export type OrderFeedback = {
  orderId: string;
  shoppingExperience: string;
};

export type Order = {
  orderId: string;
  isPaid: boolean; // Renombrado a 'isPaid' para coincidir con la entidad
  ordertotalItems: string; // Este campo debe ser un número para coincidir con tu entidad
  orderTotalAmount: string; // Este campo debe ser un número para coincidir con tu entidad
  orderPaymentMethod: PaymentMethod;
  paymentDetails: any; // Considera definir un tipo para esto
  orderShippingAddress: ShippingAddress;
  orderUserNotificationEmail: boolean;
  orderItems: orderItems[];
  account: any;
  orderFeedback: OrderFeedback;
  paidAt: string;
  createdAt: string;
  updatedAt: string;
};

export type orderItems = {
  name: string;
  dui: string;
  price: number;
  discount: number;
  quantity: number;
  _id: string;
  image: string;
  isDelivery: boolean;
  deliveryItem: deliveryItem;
};

export type deliveryItem = {
  deliveryDate: string;
  trackingNumber: string;
  tracking: [
    {
      trackingNumber: string;
    },
  ];
};

export type UserOrders = {
  orderId: string;
  totalAmount: string;
  itemCount: string;
  paymentMethod: string;
  image: string;
  status: number;
  orderedAt: string;
  notificationEmail: boolean;
};

export type reviewsProduct = {
  productDui: string;
  buyerId: string;
  date: Date;
  rating: number;
  title: string;
  review?: string;
  helpful: number;
  notHelpful: number;
  photos: string[];
  comments: ReviewComment[];
};

export type ReviewComment = {
  authorId: string;
  date: Date;
  content: string;
  helpful: number;
  notHelpful: number;
};

export type CheckComment = {
  canComment: boolean;
  lastPurchaseDate: number | null;
  hasReviewed: boolean;
};

export enum BlockUserReason {
  UnverifiedEmail = 'Unverified Email',
  SuspiciousActivity = 'Suspicious Activity',
  TermsOfServiceViolation = 'Terms of Service Violation',
  PaymentIssues = 'Payment Issues',
  FraudulentOrders = 'Fraudulent Orders',
  Chargebacks = 'Chargebacks',
  Spamming = 'Spamming',
  AccountHijacking = 'Account Hijacking',
  ReviewManipulation = 'Review Manipulation',
  InappropriateContent = 'Inappropriate Content',
  ProductPolicyViolation = 'Product Policy Violation',
  Other = 'Other',
}
