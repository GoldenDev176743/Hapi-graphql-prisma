import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Customer = {
  __typename?: 'Customer';
  MFType: MfType;
  birthday: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dispensary: Dispensary;
  dispensaryId: Scalars['String']['output'];
  driverLicense: Scalars['String']['output'];
  driverLicenseExpirationDate: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isMedical: Scalars['Boolean']['output'];
  medicalLicense: Scalars['String']['output'];
  medicalLicenseExpirationDate: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CustomerCreateInput = {
  MFType: MfType;
  birthday: Scalars['String']['input'];
  dispensaryId: Scalars['String']['input'];
  driverLicense: Scalars['String']['input'];
  driverLicenseExpirationDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isMedical: Scalars['Boolean']['input'];
  medicalLicense: Scalars['String']['input'];
  medicalLicenseExpirationDate: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type CustomerUpdateInput = {
  MFType: MfType;
  birthday: Scalars['String']['input'];
  driverLicense: Scalars['String']['input'];
  driverLicenseExpirationDate: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isMedical: Scalars['Boolean']['input'];
  medicalLicense: Scalars['String']['input'];
  medicalLicenseExpirationDate: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Discount = {
  __typename?: 'Discount';
  applyDurationSet: Scalars['Boolean']['output'];
  applyFrom: Scalars['String']['output'];
  applyTo: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  discountPercent: Scalars['String']['output'];
  dispensaryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdminPin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  type: DiscountType;
  updatedAt: Scalars['DateTime']['output'];
};

export type DiscountCreateInput = {
  applyDurationSet: Scalars['Boolean']['input'];
  applyFrom: Scalars['String']['input'];
  applyTo: Scalars['String']['input'];
  color: Scalars['String']['input'];
  discountPercent: Scalars['String']['input'];
  dispensaryId: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isAdminPin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  type: DiscountType;
};

export enum DiscountType {
  Other = 'OTHER',
  Standard = 'STANDARD'
}

export type DiscountUpdateInput = {
  applyDurationSet: Scalars['Boolean']['input'];
  applyFrom: Scalars['String']['input'];
  applyTo: Scalars['String']['input'];
  color: Scalars['String']['input'];
  discountPercent: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isAdminPin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  type: DiscountType;
};

export type Dispensary = {
  __typename?: 'Dispensary';
  businessLicense: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dispensaryType: DispensaryType;
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  locationAddress: Scalars['String']['output'];
  locationCity: Scalars['String']['output'];
  locationState: StateType;
  locationZipCode: Scalars['String']['output'];
  metrcApiKey?: Maybe<Scalars['String']['output']>;
  metrcConnectionStatus?: Maybe<Scalars['Boolean']['output']>;
  metrcLicenseNumber?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: Organization;
  organizationId: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type DispensaryCreateInput = {
  businessLicense?: InputMaybe<Scalars['String']['input']>;
  dispensaryType: DispensaryType;
  email: Scalars['String']['input'];
  locationAddress?: InputMaybe<Scalars['String']['input']>;
  locationCity?: InputMaybe<Scalars['String']['input']>;
  locationState?: InputMaybe<StateType>;
  locationZipCode?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export enum DispensaryType {
  Med = 'MED',
  Medrec = 'MEDREC',
  Rec = 'REC'
}

export type DispensaryUpdateInput = {
  businessLicense?: InputMaybe<Scalars['String']['input']>;
  dispensaryType: DispensaryType;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  locationAddress?: InputMaybe<Scalars['String']['input']>;
  locationCity?: InputMaybe<Scalars['String']['input']>;
  locationState?: InputMaybe<StateType>;
  locationZipCode?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ItemCategory = {
  __typename?: 'ItemCategory';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  stateOfUsa: StateType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ItemCategoryCreateInput = {
  name: Scalars['String']['input'];
  stateOfUsa: StateType;
};

export type ItemCategoryUpdateInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Loyalty = {
  __typename?: 'Loyalty';
  applyDurationSet: Scalars['Boolean']['output'];
  applyFrom: Scalars['String']['output'];
  applyTo: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  dispensaryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isAdminPin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pointWorth: Scalars['String']['output'];
  type: LoyaltyType;
  updatedAt: Scalars['DateTime']['output'];
};

export type LoyaltyCreateInput = {
  applyDurationSet: Scalars['Boolean']['input'];
  applyFrom: Scalars['String']['input'];
  applyTo: Scalars['String']['input'];
  color: Scalars['String']['input'];
  dispensaryId: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isAdminPin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pointWorth: Scalars['String']['input'];
  type: LoyaltyType;
};

export enum LoyaltyType {
  Other = 'OTHER',
  Standard = 'STANDARD'
}

export type LoyaltyUpdateInput = {
  applyDurationSet: Scalars['Boolean']['input'];
  applyFrom: Scalars['String']['input'];
  applyTo: Scalars['String']['input'];
  color: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isAdminPin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  pointWorth: Scalars['String']['input'];
  type: LoyaltyType;
};

export enum MfType {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type MetrcConnectionInput = {
  dispensaryId: Scalars['String']['input'];
  metrcApiKey?: InputMaybe<Scalars['String']['input']>;
  metrcConnectionStatus: Scalars['Boolean']['input'];
  metrcLicenseNumber?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer?: Maybe<Customer>;
  createDiscount?: Maybe<Discount>;
  createDispensary?: Maybe<Dispensary>;
  createItemCategory?: Maybe<ItemCategory>;
  createLoyalty?: Maybe<Loyalty>;
  createOrganization?: Maybe<Organization>;
  createSupplier?: Maybe<Supplier>;
  createTaxSetting?: Maybe<TaxSetting>;
  createUser?: Maybe<User>;
  deleteCustomer?: Maybe<Customer>;
  deleteDiscount?: Maybe<Discount>;
  deleteDispensary?: Maybe<Dispensary>;
  deleteItemCategory?: Maybe<ItemCategory>;
  deleteLoyalty?: Maybe<Loyalty>;
  deleteOrganization?: Maybe<Organization>;
  deleteSupplier?: Maybe<Supplier>;
  deleteTaxSetting?: Maybe<TaxSetting>;
  deleteUser?: Maybe<User>;
  loginUser: UserData;
  metrcConnectionUpdate?: Maybe<Dispensary>;
  updateCustomer?: Maybe<Customer>;
  updateDiscount?: Maybe<Discount>;
  updateDispensary?: Maybe<Dispensary>;
  updateItemCategory?: Maybe<ItemCategory>;
  updateLoyalty?: Maybe<Loyalty>;
  updateOrganization?: Maybe<Organization>;
  updateSupplier?: Maybe<Supplier>;
  updateTaxSetting?: Maybe<TaxSetting>;
  updateUser?: Maybe<User>;
};


export type MutationCreateCustomerArgs = {
  input: CustomerCreateInput;
};


export type MutationCreateDiscountArgs = {
  input: DiscountCreateInput;
};


export type MutationCreateDispensaryArgs = {
  input: DispensaryCreateInput;
};


export type MutationCreateItemCategoryArgs = {
  input: ItemCategoryCreateInput;
};


export type MutationCreateLoyaltyArgs = {
  input: LoyaltyCreateInput;
};


export type MutationCreateOrganizationArgs = {
  input: OrganizationCreateInput;
};


export type MutationCreateSupplierArgs = {
  input: SupplierCreateInput;
};


export type MutationCreateTaxSettingArgs = {
  input: TaxSettingCreateInput;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDiscountArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDispensaryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteItemCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteLoyaltyArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteSupplierArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTaxSettingArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  input: UserLoginInput;
};


export type MutationMetrcConnectionUpdateArgs = {
  input: MetrcConnectionInput;
};


export type MutationUpdateCustomerArgs = {
  input: CustomerUpdateInput;
};


export type MutationUpdateDiscountArgs = {
  input: DiscountUpdateInput;
};


export type MutationUpdateDispensaryArgs = {
  input: DispensaryUpdateInput;
};


export type MutationUpdateItemCategoryArgs = {
  input: ItemCategoryUpdateInput;
};


export type MutationUpdateLoyaltyArgs = {
  input: LoyaltyUpdateInput;
};


export type MutationUpdateOrganizationArgs = {
  input: OrganizationUpdateInput;
};


export type MutationUpdateSupplierArgs = {
  input: SupplierUpdateInput;
};


export type MutationUpdateTaxSettingArgs = {
  input: TaxSettingUpdateInput;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
};

export type MutationResponse = {
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Organization = {
  __typename?: 'Organization';
  createdAt: Scalars['DateTime']['output'];
  dispensaries?: Maybe<Array<Maybe<Dispensary>>>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrganizationCreateInput = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type OrganizationUpdateInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ProductCategoryInput = {
  label: Scalars['String']['input'];
  stateOfUsa: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ProductCategoryOutput = {
  __typename?: 'ProductCategoryOutput';
  label: Scalars['String']['output'];
  stateOfUsa: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export enum ProductType {
  Mj = 'MJ',
  Nmj = 'NMJ'
}

export type Query = {
  __typename?: 'Query';
  allCustomersByDispensaryId?: Maybe<Array<Maybe<Customer>>>;
  allDiscountsByDispensaryId?: Maybe<Array<Maybe<Discount>>>;
  allDispensaries?: Maybe<Array<Maybe<Dispensary>>>;
  allDispensariesByOrganizationId?: Maybe<Array<Maybe<Dispensary>>>;
  allItemCategoriesByStateOfUsa?: Maybe<Array<Maybe<ItemCategory>>>;
  allLoyaltiesByDispensaryId?: Maybe<Array<Maybe<Loyalty>>>;
  allOrganizations?: Maybe<Array<Maybe<Organization>>>;
  allSuppliersByOrganizationId?: Maybe<Array<Maybe<Supplier>>>;
  allTaxSettingByDispensaryId?: Maybe<Array<Maybe<TaxSetting>>>;
  allUsersByDispensaryId?: Maybe<Array<Maybe<User>>>;
  customer?: Maybe<Customer>;
  discount?: Maybe<Discount>;
  dispensary?: Maybe<Dispensary>;
  itemCategory?: Maybe<ItemCategory>;
  loyalty?: Maybe<Loyalty>;
  metrcInfoByDispensaryId: MetrcInfo;
  organization?: Maybe<Organization>;
  supplier?: Maybe<Supplier>;
  taxSetting?: Maybe<TaxSetting>;
  user?: Maybe<User>;
};


export type QueryAllCustomersByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryAllDiscountsByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryAllDispensariesByOrganizationIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryAllItemCategoriesByStateOfUsaArgs = {
  stateOfUsa: StateType;
};


export type QueryAllLoyaltiesByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryAllSuppliersByOrganizationIdArgs = {
  organizationId: Scalars['String']['input'];
};


export type QueryAllTaxSettingByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryAllUsersByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryCustomerArgs = {
  id: Scalars['String']['input'];
};


export type QueryDiscountArgs = {
  id: Scalars['String']['input'];
};


export type QueryDispensaryArgs = {
  id: Scalars['String']['input'];
};


export type QueryItemCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryLoyaltyArgs = {
  id: Scalars['String']['input'];
};


export type QueryMetrcInfoByDispensaryIdArgs = {
  dispensaryId: Scalars['String']['input'];
};


export type QueryOrganizationArgs = {
  id: Scalars['String']['input'];
};


export type QuerySupplierArgs = {
  id: Scalars['String']['input'];
};


export type QueryTaxSettingArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export enum StateType {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}

export type Supplier = {
  __typename?: 'Supplier';
  UBI: Scalars['String']['output'];
  businessLicense: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  locationAddress: Scalars['String']['output'];
  locationCity: Scalars['String']['output'];
  locationState: StateType;
  locationZipCode: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizationId: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  supplierType: SupplierType;
  updatedAt: Scalars['DateTime']['output'];
};

export type SupplierCreateInput = {
  UBI: Scalars['String']['input'];
  businessLicense: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  locationAddress: Scalars['String']['input'];
  locationCity: Scalars['String']['input'];
  locationState: StateType;
  locationZipCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  supplierType: SupplierType;
};

export enum SupplierType {
  Cultivator = 'Cultivator',
  DeliveryService = 'DeliveryService',
  Dispensary = 'Dispensary',
  Distributor = 'Distributor',
  Lab = 'Lab',
  Other = 'Other',
  Processor = 'Processor'
}

export type SupplierUpdateInput = {
  UBI: Scalars['String']['input'];
  businessLicense: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  locationAddress: Scalars['String']['input'];
  locationCity: Scalars['String']['input'];
  locationState: StateType;
  locationZipCode: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  supplierType: SupplierType;
};

export type TaxSetting = {
  __typename?: 'TaxSetting';
  applyTo: Scalars['String']['output'];
  categories?: Maybe<Array<Maybe<ProductCategoryOutput>>>;
  createdAt: Scalars['DateTime']['output'];
  dispensaryId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  rate: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type TaxSettingCreateInput = {
  applyTo: Scalars['String']['input'];
  categories?: InputMaybe<Array<InputMaybe<ProductCategoryInput>>>;
  dispensaryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rate: Scalars['String']['input'];
};

export type TaxSettingUpdateInput = {
  applyTo: Scalars['String']['input'];
  categories?: InputMaybe<Array<InputMaybe<ProductCategoryInput>>>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rate: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  dispensary: Dispensary;
  dispensaryId: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isActive: Scalars['Boolean']['output'];
  isDispensaryAdmin: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isOrganizationAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userType: UserType;
};

export type UserCreateInput = {
  dispensaryId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isDispensaryAdmin: Scalars['Boolean']['input'];
  isOrganizationAdmin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userType: UserType;
};

export type UserLoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum UserType {
  Admin = 'ADMIN',
  Budtender = 'BUDTENDER',
  Manager = 'MANAGER'
}

export type UserUpdateInput = {
  dispensaryId: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isActive: Scalars['Boolean']['input'];
  isDispensaryAdmin: Scalars['Boolean']['input'];
  isOrganizationAdmin: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  userType: UserType;
};

export type MetrcInfo = {
  __typename?: 'metrcInfo';
  id: Scalars['String']['output'];
  metrcApiKey?: Maybe<Scalars['String']['output']>;
  metrcConnectionStatus: Scalars['Boolean']['output'];
  metrcLicenseNumber?: Maybe<Scalars['String']['output']>;
};

export type UserData = {
  __typename?: 'userData';
  token: Scalars['String']['output'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<RefType extends Record<string, unknown>> = {
  MutationResponse: never;
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Customer: ResolverTypeWrapper<Customer>;
  CustomerCreateInput: CustomerCreateInput;
  CustomerUpdateInput: CustomerUpdateInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Discount: ResolverTypeWrapper<Discount>;
  DiscountCreateInput: DiscountCreateInput;
  DiscountType: DiscountType;
  DiscountUpdateInput: DiscountUpdateInput;
  Dispensary: ResolverTypeWrapper<Dispensary>;
  DispensaryCreateInput: DispensaryCreateInput;
  DispensaryType: DispensaryType;
  DispensaryUpdateInput: DispensaryUpdateInput;
  ItemCategory: ResolverTypeWrapper<ItemCategory>;
  ItemCategoryCreateInput: ItemCategoryCreateInput;
  ItemCategoryUpdateInput: ItemCategoryUpdateInput;
  Loyalty: ResolverTypeWrapper<Loyalty>;
  LoyaltyCreateInput: LoyaltyCreateInput;
  LoyaltyType: LoyaltyType;
  LoyaltyUpdateInput: LoyaltyUpdateInput;
  MFType: MfType;
  MetrcConnectionInput: MetrcConnectionInput;
  Mutation: ResolverTypeWrapper<{}>;
  MutationResponse: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MutationResponse']>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationCreateInput: OrganizationCreateInput;
  OrganizationUpdateInput: OrganizationUpdateInput;
  ProductCategoryInput: ProductCategoryInput;
  ProductCategoryOutput: ResolverTypeWrapper<ProductCategoryOutput>;
  ProductType: ProductType;
  Query: ResolverTypeWrapper<{}>;
  StateType: StateType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Supplier: ResolverTypeWrapper<Supplier>;
  SupplierCreateInput: SupplierCreateInput;
  SupplierType: SupplierType;
  SupplierUpdateInput: SupplierUpdateInput;
  TaxSetting: ResolverTypeWrapper<TaxSetting>;
  TaxSettingCreateInput: TaxSettingCreateInput;
  TaxSettingUpdateInput: TaxSettingUpdateInput;
  User: ResolverTypeWrapper<User>;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserType: UserType;
  UserUpdateInput: UserUpdateInput;
  metrcInfo: ResolverTypeWrapper<MetrcInfo>;
  userData: ResolverTypeWrapper<UserData>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Customer: Customer;
  CustomerCreateInput: CustomerCreateInput;
  CustomerUpdateInput: CustomerUpdateInput;
  DateTime: Scalars['DateTime']['output'];
  Discount: Discount;
  DiscountCreateInput: DiscountCreateInput;
  DiscountUpdateInput: DiscountUpdateInput;
  Dispensary: Dispensary;
  DispensaryCreateInput: DispensaryCreateInput;
  DispensaryUpdateInput: DispensaryUpdateInput;
  ItemCategory: ItemCategory;
  ItemCategoryCreateInput: ItemCategoryCreateInput;
  ItemCategoryUpdateInput: ItemCategoryUpdateInput;
  Loyalty: Loyalty;
  LoyaltyCreateInput: LoyaltyCreateInput;
  LoyaltyUpdateInput: LoyaltyUpdateInput;
  MetrcConnectionInput: MetrcConnectionInput;
  Mutation: {};
  MutationResponse: ResolversInterfaceTypes<ResolversParentTypes>['MutationResponse'];
  Organization: Organization;
  OrganizationCreateInput: OrganizationCreateInput;
  OrganizationUpdateInput: OrganizationUpdateInput;
  ProductCategoryInput: ProductCategoryInput;
  ProductCategoryOutput: ProductCategoryOutput;
  Query: {};
  String: Scalars['String']['output'];
  Supplier: Supplier;
  SupplierCreateInput: SupplierCreateInput;
  SupplierUpdateInput: SupplierUpdateInput;
  TaxSetting: TaxSetting;
  TaxSettingCreateInput: TaxSettingCreateInput;
  TaxSettingUpdateInput: TaxSettingUpdateInput;
  User: User;
  UserCreateInput: UserCreateInput;
  UserLoginInput: UserLoginInput;
  UserUpdateInput: UserUpdateInput;
  metrcInfo: MetrcInfo;
  userData: UserData;
};

export type CustomerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Customer'] = ResolversParentTypes['Customer']> = {
  MFType?: Resolver<ResolversTypes['MFType'], ParentType, ContextType>;
  birthday?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensary?: Resolver<ResolversTypes['Dispensary'], ParentType, ContextType>;
  dispensaryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  driverLicense?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  driverLicenseExpirationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isMedical?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  medicalLicense?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  medicalLicenseExpirationDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = {
  applyDurationSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  applyFrom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  applyTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  discountPercent?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dispensaryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdminPin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['DiscountType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DispensaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dispensary'] = ResolversParentTypes['Dispensary']> = {
  businessLicense?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensaryType?: Resolver<ResolversTypes['DispensaryType'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['StateType'], ParentType, ContextType>;
  locationZipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metrcApiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrcConnectionStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  metrcLicenseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemCategory'] = ResolversParentTypes['ItemCategory']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateOfUsa?: Resolver<ResolversTypes['StateType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoyaltyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Loyalty'] = ResolversParentTypes['Loyalty']> = {
  applyDurationSet?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  applyFrom?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  applyTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensaryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isAdminPin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pointWorth?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['LoyaltyType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationCreateCustomerArgs, 'input'>>;
  createDiscount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<MutationCreateDiscountArgs, 'input'>>;
  createDispensary?: Resolver<Maybe<ResolversTypes['Dispensary']>, ParentType, ContextType, RequireFields<MutationCreateDispensaryArgs, 'input'>>;
  createItemCategory?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType, RequireFields<MutationCreateItemCategoryArgs, 'input'>>;
  createLoyalty?: Resolver<Maybe<ResolversTypes['Loyalty']>, ParentType, ContextType, RequireFields<MutationCreateLoyaltyArgs, 'input'>>;
  createOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationCreateOrganizationArgs, 'input'>>;
  createSupplier?: Resolver<Maybe<ResolversTypes['Supplier']>, ParentType, ContextType, RequireFields<MutationCreateSupplierArgs, 'input'>>;
  createTaxSetting?: Resolver<Maybe<ResolversTypes['TaxSetting']>, ParentType, ContextType, RequireFields<MutationCreateTaxSettingArgs, 'input'>>;
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  deleteCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationDeleteCustomerArgs, 'id'>>;
  deleteDiscount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<MutationDeleteDiscountArgs, 'id'>>;
  deleteDispensary?: Resolver<Maybe<ResolversTypes['Dispensary']>, ParentType, ContextType, RequireFields<MutationDeleteDispensaryArgs, 'id'>>;
  deleteItemCategory?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType, RequireFields<MutationDeleteItemCategoryArgs, 'id'>>;
  deleteLoyalty?: Resolver<Maybe<ResolversTypes['Loyalty']>, ParentType, ContextType, RequireFields<MutationDeleteLoyaltyArgs, 'id'>>;
  deleteOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationDeleteOrganizationArgs, 'id'>>;
  deleteSupplier?: Resolver<Maybe<ResolversTypes['Supplier']>, ParentType, ContextType, RequireFields<MutationDeleteSupplierArgs, 'id'>>;
  deleteTaxSetting?: Resolver<Maybe<ResolversTypes['TaxSetting']>, ParentType, ContextType, RequireFields<MutationDeleteTaxSettingArgs, 'id'>>;
  deleteUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  loginUser?: Resolver<ResolversTypes['userData'], ParentType, ContextType, RequireFields<MutationLoginUserArgs, 'input'>>;
  metrcConnectionUpdate?: Resolver<Maybe<ResolversTypes['Dispensary']>, ParentType, ContextType, RequireFields<MutationMetrcConnectionUpdateArgs, 'input'>>;
  updateCustomer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<MutationUpdateCustomerArgs, 'input'>>;
  updateDiscount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<MutationUpdateDiscountArgs, 'input'>>;
  updateDispensary?: Resolver<Maybe<ResolversTypes['Dispensary']>, ParentType, ContextType, RequireFields<MutationUpdateDispensaryArgs, 'input'>>;
  updateItemCategory?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType, RequireFields<MutationUpdateItemCategoryArgs, 'input'>>;
  updateLoyalty?: Resolver<Maybe<ResolversTypes['Loyalty']>, ParentType, ContextType, RequireFields<MutationUpdateLoyaltyArgs, 'input'>>;
  updateOrganization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<MutationUpdateOrganizationArgs, 'input'>>;
  updateSupplier?: Resolver<Maybe<ResolversTypes['Supplier']>, ParentType, ContextType, RequireFields<MutationUpdateSupplierArgs, 'input'>>;
  updateTaxSetting?: Resolver<Maybe<ResolversTypes['TaxSetting']>, ParentType, ContextType, RequireFields<MutationUpdateTaxSettingArgs, 'input'>>;
  updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensaries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dispensary']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductCategoryOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategoryOutput'] = ResolversParentTypes['ProductCategoryOutput']> = {
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stateOfUsa?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  allCustomersByDispensaryId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Customer']>>>, ParentType, ContextType, RequireFields<QueryAllCustomersByDispensaryIdArgs, 'dispensaryId'>>;
  allDiscountsByDispensaryId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Discount']>>>, ParentType, ContextType, RequireFields<QueryAllDiscountsByDispensaryIdArgs, 'dispensaryId'>>;
  allDispensaries?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dispensary']>>>, ParentType, ContextType>;
  allDispensariesByOrganizationId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Dispensary']>>>, ParentType, ContextType, RequireFields<QueryAllDispensariesByOrganizationIdArgs, 'organizationId'>>;
  allItemCategoriesByStateOfUsa?: Resolver<Maybe<Array<Maybe<ResolversTypes['ItemCategory']>>>, ParentType, ContextType, RequireFields<QueryAllItemCategoriesByStateOfUsaArgs, 'stateOfUsa'>>;
  allLoyaltiesByDispensaryId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Loyalty']>>>, ParentType, ContextType, RequireFields<QueryAllLoyaltiesByDispensaryIdArgs, 'dispensaryId'>>;
  allOrganizations?: Resolver<Maybe<Array<Maybe<ResolversTypes['Organization']>>>, ParentType, ContextType>;
  allSuppliersByOrganizationId?: Resolver<Maybe<Array<Maybe<ResolversTypes['Supplier']>>>, ParentType, ContextType, RequireFields<QueryAllSuppliersByOrganizationIdArgs, 'organizationId'>>;
  allTaxSettingByDispensaryId?: Resolver<Maybe<Array<Maybe<ResolversTypes['TaxSetting']>>>, ParentType, ContextType, RequireFields<QueryAllTaxSettingByDispensaryIdArgs, 'dispensaryId'>>;
  allUsersByDispensaryId?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType, RequireFields<QueryAllUsersByDispensaryIdArgs, 'dispensaryId'>>;
  customer?: Resolver<Maybe<ResolversTypes['Customer']>, ParentType, ContextType, RequireFields<QueryCustomerArgs, 'id'>>;
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType, RequireFields<QueryDiscountArgs, 'id'>>;
  dispensary?: Resolver<Maybe<ResolversTypes['Dispensary']>, ParentType, ContextType, RequireFields<QueryDispensaryArgs, 'id'>>;
  itemCategory?: Resolver<Maybe<ResolversTypes['ItemCategory']>, ParentType, ContextType, RequireFields<QueryItemCategoryArgs, 'id'>>;
  loyalty?: Resolver<Maybe<ResolversTypes['Loyalty']>, ParentType, ContextType, RequireFields<QueryLoyaltyArgs, 'id'>>;
  metrcInfoByDispensaryId?: Resolver<ResolversTypes['metrcInfo'], ParentType, ContextType, RequireFields<QueryMetrcInfoByDispensaryIdArgs, 'dispensaryId'>>;
  organization?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType, RequireFields<QueryOrganizationArgs, 'id'>>;
  supplier?: Resolver<Maybe<ResolversTypes['Supplier']>, ParentType, ContextType, RequireFields<QuerySupplierArgs, 'id'>>;
  taxSetting?: Resolver<Maybe<ResolversTypes['TaxSetting']>, ParentType, ContextType, RequireFields<QueryTaxSettingArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type SupplierResolvers<ContextType = any, ParentType extends ResolversParentTypes['Supplier'] = ResolversParentTypes['Supplier']> = {
  UBI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  businessLicense?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  locationAddress?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationCity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationState?: Resolver<ResolversTypes['StateType'], ParentType, ContextType>;
  locationZipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizationId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  supplierType?: Resolver<ResolversTypes['SupplierType'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TaxSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['TaxSetting'] = ResolversParentTypes['TaxSetting']> = {
  applyTo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductCategoryOutput']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensaryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  dispensary?: Resolver<ResolversTypes['Dispensary'], ParentType, ContextType>;
  dispensaryId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isDispensaryAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isEmailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isOrganizationAdmin?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  userType?: Resolver<ResolversTypes['UserType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetrcInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['metrcInfo'] = ResolversParentTypes['metrcInfo']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metrcApiKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metrcConnectionStatus?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  metrcLicenseNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['userData'] = ResolversParentTypes['userData']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Customer?: CustomerResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Discount?: DiscountResolvers<ContextType>;
  Dispensary?: DispensaryResolvers<ContextType>;
  ItemCategory?: ItemCategoryResolvers<ContextType>;
  Loyalty?: LoyaltyResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  ProductCategoryOutput?: ProductCategoryOutputResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Supplier?: SupplierResolvers<ContextType>;
  TaxSetting?: TaxSettingResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  metrcInfo?: MetrcInfoResolvers<ContextType>;
  userData?: UserDataResolvers<ContextType>;
};

