import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
};

export type AccountantsAndBookkeeper = {
  __typename?: 'AccountantsAndBookkeeper';
  AccountantsList?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  HeroImageFile?: Maybe<UploadFile>;
  Seo?: Maybe<ComponentSeoSeo>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AccountantsAndBookkeeperAccountantsListArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type AccountantsAndBookkeeperFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AccountantsAndBookkeeperInput = {
  AccountantsList?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Author = {
  __typename?: 'Author';
  ImageFile?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AuthorEntityResponseCollection = {
  __typename?: 'AuthorEntityResponseCollection';
  nodes: Array<Author>;
  pageInfo: Pagination;
};

export type AuthorFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<AuthorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AuthorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AuthorInput = {
  ImageFile?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Benefit = {
  __typename?: 'Benefit';
  Description?: Maybe<Scalars['String']['output']>;
  ImageFile?: Maybe<UploadFile>;
  ImageRight?: Maybe<Scalars['Boolean']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BenefitEntityResponseCollection = {
  __typename?: 'BenefitEntityResponseCollection';
  nodes: Array<Benefit>;
  pageInfo: Pagination;
};

export type BenefitFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  ImageRight?: InputMaybe<BooleanFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BenefitFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BenefitFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BenefitFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BenefitInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  ImageFile?: InputMaybe<Scalars['ID']['input']>;
  ImageRight?: InputMaybe<Scalars['Boolean']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Business = {
  __typename?: 'Business';
  AboutDescription?: Maybe<Scalars['String']['output']>;
  AboutTitle?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  HeroImageFile?: Maybe<UploadFile>;
  Ladder?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Name?: Maybe<Scalars['String']['output']>;
  Seo?: Maybe<ComponentSeoSeo>;
  Slug?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  showOnMenu?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BusinessFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type BusinessLadderArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BusinessEntityResponseCollection = {
  __typename?: 'BusinessEntityResponseCollection';
  nodes: Array<Business>;
  pageInfo: Pagination;
};

export type BusinessFiltersInput = {
  AboutDescription?: InputMaybe<StringFilterInput>;
  AboutTitle?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Ladder?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  TitleUnderline?: InputMaybe<StringFilterInput>;
  UnderlineLeft?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<BusinessFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<BusinessFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BusinessFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showOnMenu?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BusinessInput = {
  AboutDescription?: InputMaybe<Scalars['String']['input']>;
  AboutTitle?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  Ladder?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  showOnMenu?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Category = {
  __typename?: 'Category';
  category?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  nodes: Array<Category>;
  pageInfo: Pagination;
};

export type CategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ComponentAnswersAnswers = {
  __typename?: 'ComponentAnswersAnswers';
  AnswerLink?: Maybe<Scalars['String']['output']>;
  AnswerTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentAnswersAnswersFiltersInput = {
  AnswerLink?: InputMaybe<StringFilterInput>;
  AnswerTitle?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentAnswersAnswersFiltersInput>>>;
  not?: InputMaybe<ComponentAnswersAnswersFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentAnswersAnswersFiltersInput>>>;
};

export type ComponentAnswersAnswersInput = {
  AnswerLink?: InputMaybe<Scalars['String']['input']>;
  AnswerTitle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentBlockWithIconIntegrationList = {
  __typename?: 'ComponentBlockWithIconIntegrationList';
  Description?: Maybe<Scalars['String']['output']>;
  IconFile?: Maybe<UploadFile>;
  Link?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentFaqFaq = {
  __typename?: 'ComponentFaqFaq';
  Answer?: Maybe<Scalars['String']['output']>;
  Question?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentFaqFaqFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  Question?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFaqFaqFiltersInput>>>;
  not?: InputMaybe<ComponentFaqFaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFaqFaqFiltersInput>>>;
};

export type ComponentFaqFaqInput = {
  Answer?: InputMaybe<Scalars['String']['input']>;
  Question?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentFeaturesFeatureItem = {
  __typename?: 'ComponentFeaturesFeatureItem';
  Description?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<UploadFile>;
  Title?: Maybe<Scalars['String']['output']>;
  features: Array<Maybe<Feature>>;
  features_connection?: Maybe<FeatureRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentFeaturesFeatureItemFeaturesArgs = {
  filters?: InputMaybe<FeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentFeaturesFeatureItemFeatures_ConnectionArgs = {
  filters?: InputMaybe<FeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFeaturesFeatureItemFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentFeaturesFeatureItemFiltersInput>>>;
  features?: InputMaybe<FeatureFiltersInput>;
  not?: InputMaybe<ComponentFeaturesFeatureItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentFeaturesFeatureItemFiltersInput>>>;
};

export type ComponentFeaturesFeatureItemInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Image?: InputMaybe<Scalars['ID']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  features?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentFeaturesFeatures = {
  __typename?: 'ComponentFeaturesFeatures';
  Description?: Maybe<Scalars['String']['output']>;
  Items?: Maybe<Array<Maybe<ComponentFeaturesFeatureItem>>>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};


export type ComponentFeaturesFeaturesItemsArgs = {
  filters?: InputMaybe<ComponentFeaturesFeatureItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentFeaturesFeaturesInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Items?: InputMaybe<Array<InputMaybe<ComponentFeaturesFeatureItemInput>>>;
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentLadderLadderItem = {
  __typename?: 'ComponentLadderLadderItem';
  Description?: Maybe<Scalars['String']['output']>;
  IconFile?: Maybe<UploadFile>;
  ImageFile?: Maybe<UploadFile>;
  Link?: Maybe<Scalars['String']['output']>;
  Subtitle?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  reverse?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentLadderLadderItemFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Link?: InputMaybe<StringFilterInput>;
  Subtitle?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemFiltersInput>>>;
  not?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemFiltersInput>>>;
  reverse?: InputMaybe<BooleanFilterInput>;
};

export type ComponentLadderLadderItemInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  IconFile?: InputMaybe<Scalars['ID']['input']>;
  ImageFile?: InputMaybe<Scalars['ID']['input']>;
  Link?: InputMaybe<Scalars['String']['input']>;
  Subtitle?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  reverse?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentPeoplePeople = {
  __typename?: 'ComponentPeoplePeople';
  AvatarFile?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  Role?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentPeoplePeopleFiltersInput = {
  Name?: InputMaybe<StringFilterInput>;
  Role?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentPeoplePeopleFiltersInput>>>;
  not?: InputMaybe<ComponentPeoplePeopleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentPeoplePeopleFiltersInput>>>;
};

export type ComponentPeoplePeopleInput = {
  AvatarFile?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Role?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentSeoSeo = {
  __typename?: 'ComponentSeoSeo';
  MetaDescription?: Maybe<Scalars['String']['output']>;
  MetaTitle?: Maybe<Scalars['String']['output']>;
  OgDescription?: Maybe<Scalars['String']['output']>;
  OgTitle?: Maybe<Scalars['String']['output']>;
  ShareImageFile?: Maybe<UploadFile>;
  id: Scalars['ID']['output'];
};

export type ComponentSeoSeoFiltersInput = {
  MetaDescription?: InputMaybe<StringFilterInput>;
  MetaTitle?: InputMaybe<StringFilterInput>;
  OgDescription?: InputMaybe<StringFilterInput>;
  OgTitle?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
  not?: InputMaybe<ComponentSeoSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSeoSeoFiltersInput>>>;
};

export type ComponentSeoSeoInput = {
  MetaDescription?: InputMaybe<Scalars['String']['input']>;
  MetaTitle?: InputMaybe<Scalars['String']['input']>;
  OgDescription?: InputMaybe<Scalars['String']['input']>;
  OgTitle?: InputMaybe<Scalars['String']['input']>;
  ShareImageFile?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DeleteMutationResponse = {
  __typename?: 'DeleteMutationResponse';
  documentId: Scalars['ID']['output'];
};

export enum Enum_Landing_Template {
  New = 'new',
  Old = 'old'
}

export type Faq = {
  __typename?: 'Faq';
  Answer?: Maybe<Scalars['String']['output']>;
  Question?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FaqEntityResponseCollection = {
  __typename?: 'FaqEntityResponseCollection';
  nodes: Array<Faq>;
  pageInfo: Pagination;
};

export type FaqFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  Question?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FaqFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FaqFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FaqInput = {
  Answer?: InputMaybe<Scalars['String']['input']>;
  Question?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Feature = {
  __typename?: 'Feature';
  Answers?: Maybe<Array<Maybe<ComponentAnswersAnswers>>>;
  AnswersDescription?: Maybe<Scalars['String']['output']>;
  AnswersInfo?: Maybe<Scalars['String']['output']>;
  AnswersTitle?: Maybe<Scalars['String']['output']>;
  CtaText?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  ImageFile?: Maybe<UploadFile>;
  Ladder?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Link?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Seo?: Maybe<ComponentSeoSeo>;
  SingleDescription?: Maybe<Scalars['String']['output']>;
  SingleImageFile?: Maybe<UploadFile>;
  SingleTitle?: Maybe<Scalars['String']['output']>;
  SingleTitleUnderline?: Maybe<Scalars['String']['output']>;
  Slug?: Maybe<Scalars['String']['output']>;
  SortOrder: Scalars['Int']['output'];
  Title?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  showOnMain?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FeatureAnswersArgs = {
  filters?: InputMaybe<ComponentAnswersAnswersFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FeatureFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type FeatureLadderArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeatureEntityResponseCollection = {
  __typename?: 'FeatureEntityResponseCollection';
  nodes: Array<Feature>;
  pageInfo: Pagination;
};

export type FeatureFiltersInput = {
  Answers?: InputMaybe<ComponentAnswersAnswersFiltersInput>;
  AnswersDescription?: InputMaybe<StringFilterInput>;
  AnswersInfo?: InputMaybe<StringFilterInput>;
  AnswersTitle?: InputMaybe<StringFilterInput>;
  CtaText?: InputMaybe<StringFilterInput>;
  Description?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Ladder?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  Link?: InputMaybe<StringFilterInput>;
  Name?: InputMaybe<StringFilterInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  SingleDescription?: InputMaybe<StringFilterInput>;
  SingleTitle?: InputMaybe<StringFilterInput>;
  SingleTitleUnderline?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  SortOrder?: InputMaybe<IntFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  UnderlineLeft?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<FeatureFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<FeatureFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<FeatureFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showOnMain?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type FeatureInput = {
  Answers?: InputMaybe<Array<InputMaybe<ComponentAnswersAnswersInput>>>;
  AnswersDescription?: InputMaybe<Scalars['String']['input']>;
  AnswersInfo?: InputMaybe<Scalars['String']['input']>;
  AnswersTitle?: InputMaybe<Scalars['String']['input']>;
  CtaText?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  ImageFile?: InputMaybe<Scalars['ID']['input']>;
  Ladder?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Link?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  SingleDescription?: InputMaybe<Scalars['String']['input']>;
  SingleImageFile?: InputMaybe<Scalars['ID']['input']>;
  SingleTitle?: InputMaybe<Scalars['String']['input']>;
  SingleTitleUnderline?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  SortOrder?: InputMaybe<Scalars['Int']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  showOnMain?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeatureRelationResponseCollection = {
  __typename?: 'FeatureRelationResponseCollection';
  nodes: Array<Feature>;
};

export type FeaturesPage = {
  __typename?: 'FeaturesPage';
  CtaText?: Maybe<Scalars['String']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  HeroImageFile?: Maybe<UploadFile>;
  Seo?: Maybe<ComponentSeoSeo>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type FeaturesPageFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturesPageInput = {
  CtaText?: InputMaybe<Scalars['String']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AccountantsAndBookkeeper | Author | Benefit | Business | Category | ComponentAnswersAnswers | ComponentBlockWithIconIntegrationList | ComponentFaqFaq | ComponentFeaturesFeatureItem | ComponentFeaturesFeatures | ComponentLadderLadderItem | ComponentPeoplePeople | ComponentSeoSeo | Faq | Feature | FeaturesPage | Glossary | Home | I18NLocale | Integration | IntegrationsPage | Landing | LegalPage | Post | PostRating | PricingPage | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Setting | Testimonial | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Glossary = {
  __typename?: 'Glossary';
  Content?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  Image?: Maybe<UploadFile>;
  Name: Scalars['String']['output'];
  PageDescription?: Maybe<Scalars['String']['output']>;
  PageTitle?: Maybe<Scalars['String']['output']>;
  Seo?: Maybe<ComponentSeoSeo>;
  ShortDescription?: Maybe<Scalars['String']['output']>;
  Slug: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  glossaries: Array<Maybe<Glossary>>;
  glossaries_connection?: Maybe<GlossaryRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  relatedGlossaries: Array<Maybe<Glossary>>;
  relatedGlossaries_connection?: Maybe<GlossaryRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GlossaryFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryGlossariesArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryGlossaries_ConnectionArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryRelatedGlossariesArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type GlossaryRelatedGlossaries_ConnectionArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GlossaryEntityResponseCollection = {
  __typename?: 'GlossaryEntityResponseCollection';
  nodes: Array<Glossary>;
  pageInfo: Pagination;
};

export type GlossaryFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  PageDescription?: InputMaybe<StringFilterInput>;
  PageTitle?: InputMaybe<StringFilterInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  ShortDescription?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<GlossaryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  glossaries?: InputMaybe<GlossaryFiltersInput>;
  not?: InputMaybe<GlossaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<GlossaryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  relatedGlossaries?: InputMaybe<GlossaryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GlossaryInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  Image?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  PageDescription?: InputMaybe<Scalars['String']['input']>;
  PageTitle?: InputMaybe<Scalars['String']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  ShortDescription?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  glossaries?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  relatedGlossaries?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type GlossaryRelationResponseCollection = {
  __typename?: 'GlossaryRelationResponseCollection';
  nodes: Array<Glossary>;
};

export type Home = {
  __typename?: 'Home';
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  Features?: Maybe<ComponentFeaturesFeatures>;
  FeaturesDescription?: Maybe<Scalars['String']['output']>;
  FeaturesTitle?: Maybe<Scalars['String']['output']>;
  HeroDescription?: Maybe<Scalars['String']['output']>;
  HeroTitle?: Maybe<Scalars['String']['output']>;
  HeroTitleUnderline?: Maybe<Scalars['String']['output']>;
  Ladder?: Maybe<ComponentLadderLadderItem>;
  Ladder2?: Maybe<ComponentLadderLadderItem>;
  Ladder3?: Maybe<ComponentLadderLadderItem>;
  Seo?: Maybe<ComponentSeoSeo>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomeFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomeInput = {
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  Features?: InputMaybe<ComponentFeaturesFeaturesInput>;
  FeaturesDescription?: InputMaybe<Scalars['String']['input']>;
  FeaturesTitle?: InputMaybe<Scalars['String']['input']>;
  HeroDescription?: InputMaybe<Scalars['String']['input']>;
  HeroTitle?: InputMaybe<Scalars['String']['input']>;
  HeroTitleUnderline?: InputMaybe<Scalars['String']['input']>;
  Ladder?: InputMaybe<ComponentLadderLadderItemInput>;
  Ladder2?: InputMaybe<ComponentLadderLadderItemInput>;
  Ladder3?: InputMaybe<ComponentLadderLadderItemInput>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type Integration = {
  __typename?: 'Integration';
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  IconFile?: Maybe<UploadFile>;
  Name?: Maybe<Scalars['String']['output']>;
  Seo?: Maybe<ComponentSeoSeo>;
  SingleAboutDescription?: Maybe<Scalars['String']['output']>;
  SingleAboutTitle?: Maybe<Scalars['String']['output']>;
  SingleDescription?: Maybe<Scalars['String']['output']>;
  SingleFirstIconFile?: Maybe<UploadFile>;
  SingleHeroFile?: Maybe<UploadFile>;
  SingleLadder?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  SingleSecondIconFile?: Maybe<UploadFile>;
  SingleTitle?: Maybe<Scalars['String']['output']>;
  SingleUnderlineTitle?: Maybe<Scalars['String']['output']>;
  Slug?: Maybe<Scalars['String']['output']>;
  SortOrder: Scalars['Int']['output'];
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  showOnMenu?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IntegrationFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IntegrationSingleLadderArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IntegrationEntityResponseCollection = {
  __typename?: 'IntegrationEntityResponseCollection';
  nodes: Array<Integration>;
  pageInfo: Pagination;
};

export type IntegrationFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  SingleAboutDescription?: InputMaybe<StringFilterInput>;
  SingleAboutTitle?: InputMaybe<StringFilterInput>;
  SingleDescription?: InputMaybe<StringFilterInput>;
  SingleLadder?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  SingleTitle?: InputMaybe<StringFilterInput>;
  SingleUnderlineTitle?: InputMaybe<StringFilterInput>;
  Slug?: InputMaybe<StringFilterInput>;
  SortOrder?: InputMaybe<IntFilterInput>;
  UnderlineLeft?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IntegrationFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<IntegrationFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IntegrationFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showOnMenu?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IntegrationInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  IconFile?: InputMaybe<Scalars['ID']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  SingleAboutDescription?: InputMaybe<Scalars['String']['input']>;
  SingleAboutTitle?: InputMaybe<Scalars['String']['input']>;
  SingleDescription?: InputMaybe<Scalars['String']['input']>;
  SingleFirstIconFile?: InputMaybe<Scalars['ID']['input']>;
  SingleHeroFile?: InputMaybe<Scalars['ID']['input']>;
  SingleLadder?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  SingleSecondIconFile?: InputMaybe<Scalars['ID']['input']>;
  SingleTitle?: InputMaybe<Scalars['String']['input']>;
  SingleUnderlineTitle?: InputMaybe<Scalars['String']['input']>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  SortOrder?: InputMaybe<Scalars['Int']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  showOnMenu?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IntegrationsPage = {
  __typename?: 'IntegrationsPage';
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  HeroImageFile?: Maybe<UploadFile>;
  IntegrationDescription?: Maybe<Scalars['String']['output']>;
  IntegrationTitle?: Maybe<Scalars['String']['output']>;
  Ladder?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Seo?: Maybe<ComponentSeoSeo>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IntegrationsPageFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IntegrationsPageLadderArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IntegrationsPageInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  IntegrationDescription?: InputMaybe<Scalars['String']['input']>;
  IntegrationTitle?: InputMaybe<Scalars['String']['input']>;
  Ladder?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Landing = {
  __typename?: 'Landing';
  Description?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  HeroImageFile?: Maybe<UploadFile>;
  Ladder?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Seo?: Maybe<ComponentSeoSeo>;
  Slug?: Maybe<Scalars['String']['output']>;
  SubTitle?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  customButtonText?: Maybe<Scalars['String']['output']>;
  customUrlQuery?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  showFooter?: Maybe<Scalars['Boolean']['output']>;
  showPrice: Scalars['Boolean']['output'];
  template?: Maybe<Enum_Landing_Template>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LandingFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LandingLadderArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingEntityResponseCollection = {
  __typename?: 'LandingEntityResponseCollection';
  nodes: Array<Landing>;
  pageInfo: Pagination;
};

export type LandingFiltersInput = {
  Description?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Ladder?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  SubTitle?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  TitleUnderline?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  customButtonText?: InputMaybe<StringFilterInput>;
  customUrlQuery?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LandingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LandingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  showFooter?: InputMaybe<BooleanFilterInput>;
  showPrice?: InputMaybe<BooleanFilterInput>;
  template?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LandingInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  Ladder?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  SubTitle?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  customButtonText?: InputMaybe<Scalars['String']['input']>;
  customUrlQuery?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  showFooter?: InputMaybe<Scalars['Boolean']['input']>;
  showPrice?: InputMaybe<Scalars['Boolean']['input']>;
  template?: InputMaybe<Enum_Landing_Template>;
};

export type LegalPage = {
  __typename?: 'LegalPage';
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  LadderItems?: Maybe<Array<Maybe<ComponentLadderLadderItem>>>;
  Name: Scalars['String']['output'];
  SEO?: Maybe<ComponentSeoSeo>;
  Slug?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  robotsIndex?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LegalPageFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type LegalPageLadderItemsArgs = {
  filters?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LegalPageEntityResponseCollection = {
  __typename?: 'LegalPageEntityResponseCollection';
  nodes: Array<LegalPage>;
  pageInfo: Pagination;
};

export type LegalPageFiltersInput = {
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  LadderItems?: InputMaybe<ComponentLadderLadderItemFiltersInput>;
  Name?: InputMaybe<StringFilterInput>;
  SEO?: InputMaybe<ComponentSeoSeoFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LegalPageFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<LegalPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LegalPageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  robotsIndex?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LegalPageInput = {
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  LadderItems?: InputMaybe<Array<InputMaybe<ComponentLadderLadderItemInput>>>;
  Name?: InputMaybe<Scalars['String']['input']>;
  SEO?: InputMaybe<ComponentSeoSeoInput>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  robotsIndex?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAuthor?: Maybe<Author>;
  createBenefit?: Maybe<Benefit>;
  createBusiness?: Maybe<Business>;
  createCategory?: Maybe<Category>;
  createFaq?: Maybe<Faq>;
  createFeature?: Maybe<Feature>;
  createGlossary?: Maybe<Glossary>;
  createIntegration?: Maybe<Integration>;
  createLanding?: Maybe<Landing>;
  createLegalPage?: Maybe<LegalPage>;
  createPost?: Maybe<Post>;
  createPostRating?: Maybe<PostRating>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createTestimonial?: Maybe<Testimonial>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAccountantsAndBookkeeper?: Maybe<DeleteMutationResponse>;
  deleteAuthor?: Maybe<DeleteMutationResponse>;
  deleteBenefit?: Maybe<DeleteMutationResponse>;
  deleteBusiness?: Maybe<DeleteMutationResponse>;
  deleteCategory?: Maybe<DeleteMutationResponse>;
  deleteFaq?: Maybe<DeleteMutationResponse>;
  deleteFeature?: Maybe<DeleteMutationResponse>;
  deleteFeaturesPage?: Maybe<DeleteMutationResponse>;
  deleteGlossary?: Maybe<DeleteMutationResponse>;
  deleteHome?: Maybe<DeleteMutationResponse>;
  deleteIntegration?: Maybe<DeleteMutationResponse>;
  deleteIntegrationsPage?: Maybe<DeleteMutationResponse>;
  deleteLanding?: Maybe<DeleteMutationResponse>;
  deleteLegalPage?: Maybe<DeleteMutationResponse>;
  deletePost?: Maybe<DeleteMutationResponse>;
  deletePostRating?: Maybe<DeleteMutationResponse>;
  deletePricingPage?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteSetting?: Maybe<DeleteMutationResponse>;
  deleteTestimonial?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAccountantsAndBookkeeper?: Maybe<AccountantsAndBookkeeper>;
  updateAuthor?: Maybe<Author>;
  updateBenefit?: Maybe<Benefit>;
  updateBusiness?: Maybe<Business>;
  updateCategory?: Maybe<Category>;
  updateFaq?: Maybe<Faq>;
  updateFeature?: Maybe<Feature>;
  updateFeaturesPage?: Maybe<FeaturesPage>;
  updateGlossary?: Maybe<Glossary>;
  updateHome?: Maybe<Home>;
  updateIntegration?: Maybe<Integration>;
  updateIntegrationsPage?: Maybe<IntegrationsPage>;
  updateLanding?: Maybe<Landing>;
  updateLegalPage?: Maybe<LegalPage>;
  updatePost?: Maybe<Post>;
  updatePostRating?: Maybe<PostRating>;
  updatePricingPage?: Maybe<PricingPage>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateSetting?: Maybe<Setting>;
  updateTestimonial?: Maybe<Testimonial>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBenefitArgs = {
  data: BenefitInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateBusinessArgs = {
  data: BusinessInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateFaqArgs = {
  data: FaqInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateFeatureArgs = {
  data: FeatureInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateGlossaryArgs = {
  data: GlossaryInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateIntegrationArgs = {
  data: IntegrationInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLandingArgs = {
  data: LandingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateLegalPageArgs = {
  data: LegalPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostArgs = {
  data: PostInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreatePostRatingArgs = {
  data: PostRatingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateTestimonialArgs = {
  data: TestimonialInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAuthorArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBenefitArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteBusinessArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteFaqArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteFeatureArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteGlossaryArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteIntegrationArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteLandingArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteLegalPageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeletePostRatingArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteTestimonialArgs = {
  documentId: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAccountantsAndBookkeeperArgs = {
  data: AccountantsAndBookkeeperInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateAuthorArgs = {
  data: AuthorInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBenefitArgs = {
  data: BenefitInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateBusinessArgs = {
  data: BusinessInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFaqArgs = {
  data: FaqInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFeatureArgs = {
  data: FeatureInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateFeaturesPageArgs = {
  data: FeaturesPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateGlossaryArgs = {
  data: GlossaryInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateHomeArgs = {
  data: HomeInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateIntegrationArgs = {
  data: IntegrationInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateIntegrationsPageArgs = {
  data: IntegrationsPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLandingArgs = {
  data: LandingInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateLegalPageArgs = {
  data: LegalPageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostArgs = {
  data: PostInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePostRatingArgs = {
  data: PostRatingInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePricingPageArgs = {
  data: PricingPageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateSettingArgs = {
  data: SettingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateTestimonialArgs = {
  data: TestimonialInput;
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  Content?: Maybe<Scalars['String']['output']>;
  Faq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  ImageFile?: Maybe<UploadFile>;
  Seo?: Maybe<ComponentSeoSeo>;
  Slug?: Maybe<Scalars['String']['output']>;
  Title: Scalars['String']['output'];
  author?: Maybe<Author>;
  category?: Maybe<Category>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Array<Maybe<PostRating>>;
  rating_connection?: Maybe<PostRatingRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PostFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostRatingArgs = {
  filters?: InputMaybe<PostRatingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type PostRating_ConnectionArgs = {
  filters?: InputMaybe<PostRatingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostEntityResponseCollection = {
  __typename?: 'PostEntityResponseCollection';
  nodes: Array<Post>;
  pageInfo: Pagination;
};

export type PostFiltersInput = {
  Content?: InputMaybe<StringFilterInput>;
  Faq?: InputMaybe<ComponentFaqFaqFiltersInput>;
  Seo?: InputMaybe<ComponentSeoSeoFiltersInput>;
  Slug?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  author?: InputMaybe<AuthorFiltersInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<PostRatingFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PostInput = {
  Content?: InputMaybe<Scalars['String']['input']>;
  Faq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  ImageFile?: InputMaybe<Scalars['ID']['input']>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Slug?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  author?: InputMaybe<Scalars['ID']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type PostRating = {
  __typename?: 'PostRating';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  post?: Maybe<Post>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rating: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: Scalars['String']['output'];
};

export type PostRatingEntityResponseCollection = {
  __typename?: 'PostRatingEntityResponseCollection';
  nodes: Array<PostRating>;
  pageInfo: Pagination;
};

export type PostRatingFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PostRatingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PostRatingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PostRatingFiltersInput>>>;
  post?: InputMaybe<PostFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rating?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<StringFilterInput>;
};

export type PostRatingInput = {
  post?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

export type PostRatingRelationResponseCollection = {
  __typename?: 'PostRatingRelationResponseCollection';
  nodes: Array<PostRating>;
};

export type PricingPage = {
  __typename?: 'PricingPage';
  Description?: Maybe<Scalars['String']['output']>;
  HeroImageFile?: Maybe<UploadFile>;
  PricingFaq?: Maybe<Array<Maybe<ComponentFaqFaq>>>;
  Seo?: Maybe<ComponentSeoSeo>;
  Title?: Maybe<Scalars['String']['output']>;
  TitleUnderline?: Maybe<Scalars['String']['output']>;
  UnderlineLeft?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type PricingPagePricingFaqArgs = {
  filters?: InputMaybe<ComponentFaqFaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PricingPageInput = {
  Description?: InputMaybe<Scalars['String']['input']>;
  HeroImageFile?: InputMaybe<Scalars['ID']['input']>;
  PricingFaq?: InputMaybe<Array<InputMaybe<ComponentFaqFaqInput>>>;
  Seo?: InputMaybe<ComponentSeoSeoInput>;
  Title?: InputMaybe<Scalars['String']['input']>;
  TitleUnderline?: InputMaybe<Scalars['String']['input']>;
  UnderlineLeft?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum PublicationStatus {
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  accountantsAndBookkeeper?: Maybe<AccountantsAndBookkeeper>;
  author?: Maybe<Author>;
  authors: Array<Maybe<Author>>;
  authors_connection?: Maybe<AuthorEntityResponseCollection>;
  benefit?: Maybe<Benefit>;
  benefits: Array<Maybe<Benefit>>;
  benefits_connection?: Maybe<BenefitEntityResponseCollection>;
  business?: Maybe<Business>;
  businesses: Array<Maybe<Business>>;
  businesses_connection?: Maybe<BusinessEntityResponseCollection>;
  categories: Array<Maybe<Category>>;
  categories_connection?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<Category>;
  faq?: Maybe<Faq>;
  faqs: Array<Maybe<Faq>>;
  faqs_connection?: Maybe<FaqEntityResponseCollection>;
  feature?: Maybe<Feature>;
  features: Array<Maybe<Feature>>;
  featuresPage?: Maybe<FeaturesPage>;
  features_connection?: Maybe<FeatureEntityResponseCollection>;
  glossaries: Array<Maybe<Glossary>>;
  glossaries_connection?: Maybe<GlossaryEntityResponseCollection>;
  glossary?: Maybe<Glossary>;
  home?: Maybe<Home>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  integration?: Maybe<Integration>;
  integrations: Array<Maybe<Integration>>;
  integrationsPage?: Maybe<IntegrationsPage>;
  integrations_connection?: Maybe<IntegrationEntityResponseCollection>;
  landing?: Maybe<Landing>;
  landings: Array<Maybe<Landing>>;
  landings_connection?: Maybe<LandingEntityResponseCollection>;
  legalPage?: Maybe<LegalPage>;
  legalPages: Array<Maybe<LegalPage>>;
  legalPages_connection?: Maybe<LegalPageEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  post?: Maybe<Post>;
  postRating?: Maybe<PostRating>;
  postRatings: Array<Maybe<PostRating>>;
  postRatings_connection?: Maybe<PostRatingEntityResponseCollection>;
  posts: Array<Maybe<Post>>;
  posts_connection?: Maybe<PostEntityResponseCollection>;
  pricingPage?: Maybe<PricingPage>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  setting?: Maybe<Setting>;
  testimonial?: Maybe<Testimonial>;
  testimonials: Array<Maybe<Testimonial>>;
  testimonials_connection?: Maybe<TestimonialEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAccountantsAndBookkeeperArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthorsArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryAuthors_ConnectionArgs = {
  filters?: InputMaybe<AuthorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBenefitArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBenefitsArgs = {
  filters?: InputMaybe<BenefitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBenefits_ConnectionArgs = {
  filters?: InputMaybe<BenefitFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBusinessArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBusinessesArgs = {
  filters?: InputMaybe<BusinessFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryBusinesses_ConnectionArgs = {
  filters?: InputMaybe<BusinessFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategories_ConnectionArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryCategoryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqsArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFaqs_ConnectionArgs = {
  filters?: InputMaybe<FaqFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFeatureArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFeaturesArgs = {
  filters?: InputMaybe<FeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFeaturesPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryFeatures_ConnectionArgs = {
  filters?: InputMaybe<FeatureFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlossariesArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlossaries_ConnectionArgs = {
  filters?: InputMaybe<GlossaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryGlossaryArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryHomeArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIntegrationArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIntegrationsArgs = {
  filters?: InputMaybe<IntegrationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIntegrationsPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryIntegrations_ConnectionArgs = {
  filters?: InputMaybe<IntegrationFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLandingArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLandingsArgs = {
  filters?: InputMaybe<LandingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLandings_ConnectionArgs = {
  filters?: InputMaybe<LandingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLegalPageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLegalPagesArgs = {
  filters?: InputMaybe<LegalPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryLegalPages_ConnectionArgs = {
  filters?: InputMaybe<LegalPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostRatingArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostRatingsArgs = {
  filters?: InputMaybe<PostRatingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostRatings_ConnectionArgs = {
  filters?: InputMaybe<PostRatingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPostsArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPosts_ConnectionArgs = {
  filters?: InputMaybe<PostFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPricingPageArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QuerySettingArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonialArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonialsArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryTestimonials_ConnectionArgs = {
  filters?: InputMaybe<TestimonialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars['ID']['input'];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: 'ReviewWorkflowsWorkflow';
  contentTypes: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  stageRequiredToPublish?: Maybe<ReviewWorkflowsWorkflowStage>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stageRequiredToPublish?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars['JSON']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  stageRequiredToPublish?: InputMaybe<Scalars['ID']['input']>;
  stages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: 'ReviewWorkflowsWorkflowStage';
  color?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageEntityResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflow?: InputMaybe<Scalars['ID']['input']>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: 'ReviewWorkflowsWorkflowStageRelationResponseCollection';
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type Setting = {
  __typename?: 'Setting';
  bodyNoScript?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  headScript?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SettingInput = {
  bodyNoScript?: InputMaybe<Scalars['String']['input']>;
  headScript?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  Author?: Maybe<ComponentPeoplePeople>;
  Text?: Maybe<Scalars['String']['output']>;
  Title: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialEntityResponseCollection = {
  __typename?: 'TestimonialEntityResponseCollection';
  nodes: Array<Testimonial>;
  pageInfo: Pagination;
};

export type TestimonialFiltersInput = {
  Author?: InputMaybe<ComponentPeoplePeopleFiltersInput>;
  Text?: InputMaybe<StringFilterInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<TestimonialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TestimonialFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type TestimonialInput = {
  Author?: InputMaybe<ComponentPeoplePeopleInput>;
  Text?: InputMaybe<Scalars['String']['input']>;
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  documentId: Scalars['ID']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  documentId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  documentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  nodes: Array<UsersPermissionsUser>;
};

export type UploadFileFragmentFragment = { __typename?: 'UploadFile', alternativeText?: string | null, url: string };

export type LadderFragmentFragment = { __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null };

export type PostFragmentFragment = { __typename?: 'Post', documentId: string, Content?: string | null, Slug?: string | null, Title: string, publishedAt?: string | null, updatedAt?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, category?: { __typename?: 'Category', category?: string | null, color?: string | null } | null };

export type ComponentSeoSeoFragmentFragment = { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null };

export type GetAccountantsAndBookkeepersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountantsAndBookkeepersQuery = { __typename?: 'Query', accountantsAndBookkeeper?: { __typename?: 'AccountantsAndBookkeeper', Title?: string | null, TitleUnderline?: string | null, UnderlineLeft?: boolean | null, Description?: string | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, AccountantsList?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null } | null };

export type GetBlogPageArticlesQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  start: Scalars['Int']['input'];
}>;


export type GetBlogPageArticlesQuery = { __typename?: 'Query', posts_connection?: { __typename?: 'PostEntityResponseCollection', nodes: Array<{ __typename?: 'Post', documentId: string, Content?: string | null, Slug?: string | null, Title: string, publishedAt?: string | null, updatedAt?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, category?: { __typename?: 'Category', category?: string | null, color?: string | null } | null }>, pageInfo: { __typename?: 'Pagination', page: number, pageCount: number, pageSize: number, total: number } } | null };

export type GetBusinessTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetBusinessTemplateQuery = { __typename?: 'Query', businesses: Array<{ __typename?: 'Business', Name?: string | null, Title?: string | null, TitleUnderline?: string | null, UnderlineLeft?: boolean | null, Description?: string | null, AboutTitle?: string | null, AboutDescription?: string | null, Slug?: string | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, Ladder?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null } | null> };

export type GetAllFaqsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFaqsQuery = { __typename?: 'Query', faqs: Array<{ __typename?: 'Faq', Answer?: string | null, Question?: string | null, documentId: string } | null> };

export type GetFeaturesTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetFeaturesTemplateQuery = { __typename?: 'Query', features: Array<{ __typename?: 'Feature', SingleTitle?: string | null, SingleDescription?: string | null, SingleTitleUnderline?: string | null, UnderlineLeft?: boolean | null, Slug?: string | null, Name?: string | null, CtaText?: string | null, AnswersTitle?: string | null, AnswersInfo?: string | null, AnswersDescription?: string | null, SingleImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, Ladder?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, Answers?: Array<{ __typename?: 'ComponentAnswersAnswers', AnswerTitle?: string | null, AnswerLink?: string | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null } | null> };

export type GetFeaturesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturesPageQuery = { __typename?: 'Query', featuresPage?: { __typename?: 'FeaturesPage', Title?: string | null, TitleUnderline?: string | null, UnderlineLeft?: boolean | null, Description?: string | null, CtaText?: string | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null, features: Array<{ __typename?: 'Feature', Title?: string | null, Name?: string | null, Description?: string | null, Link?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> };

export type GetHeaderDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHeaderDataQuery = { __typename?: 'Query', setting?: { __typename?: 'Setting', headScript?: string | null, bodyNoScript?: string | null } | null, features: Array<{ __typename?: 'Feature', Name?: string | null, Slug?: string | null, SortOrder: number } | null>, integrations: Array<{ __typename?: 'Integration', Name?: string | null, Slug?: string | null } | null>, businesses: Array<{ __typename?: 'Business', Slug?: string | null, Name?: string | null } | null> };

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', home?: { __typename?: 'Home', FeaturesDescription?: string | null, FeaturesTitle?: string | null, HeroDescription?: string | null, HeroTitle?: string | null, HeroTitleUnderline?: string | null, UnderlineLeft?: boolean | null, Ladder?: { __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null, Ladder2?: { __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null, Ladder3?: { __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, Features?: { __typename?: 'ComponentFeaturesFeatures', Title?: string | null, Description?: string | null, Items?: Array<{ __typename?: 'ComponentFeaturesFeatureItem', Title?: string | null, Description?: string | null, Image?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, features: Array<{ __typename?: 'Feature', Description?: string | null, Link?: string | null, Name?: string | null, Slug?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> } | null> | null } | null } | null, benefits: Array<{ __typename?: 'Benefit', Description?: string | null, ImageRight?: boolean | null, Name?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> };

export type GetIntegrationTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetIntegrationTemplateQuery = { __typename?: 'Query', integrations: Array<{ __typename?: 'Integration', Name?: string | null, SingleAboutTitle?: string | null, SingleAboutDescription?: string | null, SingleDescription?: string | null, SingleTitle?: string | null, SingleUnderlineTitle?: string | null, UnderlineLeft?: boolean | null, Slug?: string | null, SingleFirstIconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, SingleHeroFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, SingleLadder?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, SingleSecondIconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null } | null> };

export type GetIntegrationPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIntegrationPageQuery = { __typename?: 'Query', integrationsPage?: { __typename?: 'IntegrationsPage', IntegrationDescription?: string | null, IntegrationTitle?: string | null, Title?: string | null, TitleUnderline?: string | null, UnderlineLeft?: boolean | null, Description?: string | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, Ladder?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null } | null, integrations: Array<{ __typename?: 'Integration', Description?: string | null, Name?: string | null, Slug?: string | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> };

export type GetLandingPageTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetLandingPageTemplateQuery = { __typename?: 'Query', landings: Array<{ __typename?: 'Landing', Slug?: string | null, template?: Enum_Landing_Template | null, SubTitle?: string | null, Title?: string | null, TitleUnderline?: string | null, Description?: string | null, showPrice: boolean, showFooter?: boolean | null, customUrlQuery?: string | null, customButtonText?: string | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, Ladder?: Array<{ __typename?: 'ComponentLadderLadderItem', Description?: string | null, Link?: string | null, Subtitle?: string | null, Title?: string | null, reverse?: boolean | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, IconFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null } | null> };

export type GetLegalPageTemplateQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetLegalPageTemplateQuery = { __typename?: 'Query', legalPages: Array<{ __typename?: 'LegalPage', Slug?: string | null, Name: string, content?: string | null, robotsIndex?: boolean | null, SEO?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null } | null> };

export type GetPostPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetPostPageQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', documentId: string, Content?: string | null, Slug?: string | null, Title: string, publishedAt?: string | null, updatedAt?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, author?: { __typename?: 'Author', Name?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null, category?: { __typename?: 'Category', color?: string | null, category?: string | null } | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null, rating: Array<{ __typename?: 'PostRating', user: string, rating: number } | null>, Faq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null } | null> | null } | null>, relatedPosts: Array<{ __typename?: 'Post', documentId: string, Content?: string | null, Slug?: string | null, Title: string, publishedAt?: string | null, updatedAt?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, category?: { __typename?: 'Category', category?: string | null, color?: string | null } | null } | null> };

export type GetPricingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPricingPageQuery = { __typename?: 'Query', pricingPage?: { __typename?: 'PricingPage', Title?: string | null, TitleUnderline?: string | null, Description?: string | null, HeroImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, PricingFaq?: Array<{ __typename?: 'ComponentFaqFaq', Answer?: string | null, Question?: string | null, id: string } | null> | null, Seo?: { __typename?: 'ComponentSeoSeo', MetaDescription?: string | null, MetaTitle?: string | null, OgDescription?: string | null, OgTitle?: string | null, ShareImageFile?: { __typename?: 'UploadFile', url: string } | null } | null } | null };

export type GetTestimonialsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTestimonialsQuery = { __typename?: 'Query', testimonials: Array<{ __typename?: 'Testimonial', Text?: string | null, Title: string, Author?: { __typename?: 'ComponentPeoplePeople', Name?: string | null, Role?: string | null, AvatarFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null> };

export type GetWhatsNewArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWhatsNewArticlesQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', documentId: string, Content?: string | null, Slug?: string | null, Title: string, publishedAt?: string | null, updatedAt?: string | null, ImageFile?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null, category?: { __typename?: 'Category', category?: string | null, color?: string | null } | null } | null> };

export const UploadFileFragmentFragmentDoc = gql`
    fragment UploadFileFragment on UploadFile {
  alternativeText
  url
}
    `;
export const LadderFragmentFragmentDoc = gql`
    fragment LadderFragment on ComponentLadderLadderItem {
  Description
  ImageFile {
    ...UploadFileFragment
  }
  IconFile {
    ...UploadFileFragment
  }
  Link
  Subtitle
  Title
  reverse
}
    ${UploadFileFragmentFragmentDoc}`;
export const PostFragmentFragmentDoc = gql`
    fragment PostFragment on Post {
  documentId
  Content
  ImageFile {
    ...UploadFileFragment
  }
  Slug
  Title
  publishedAt
  updatedAt
  category {
    category
    color
  }
}
    ${UploadFileFragmentFragmentDoc}`;
export const ComponentSeoSeoFragmentFragmentDoc = gql`
    fragment ComponentSeoSeoFragment on ComponentSeoSeo {
  MetaDescription
  MetaTitle
  OgDescription
  OgTitle
  ShareImageFile {
    url
  }
}
    `;
export const GetAccountantsAndBookkeepersDocument = gql`
    query GetAccountantsAndBookkeepers {
  accountantsAndBookkeeper {
    Title
    TitleUnderline
    UnderlineLeft
    Description
    HeroImageFile {
      ...UploadFileFragment
    }
    AccountantsList {
      ...LadderFragment
    }
    Faq {
      Answer
      Question
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetBlogPageArticlesDocument = gql`
    query GetBlogPageArticles($limit: Int!, $start: Int!) {
  posts_connection(
    status: PUBLISHED
    sort: ["updatedAt:desc"]
    pagination: {limit: $limit, start: $start}
  ) {
    nodes {
      ...PostFragment
    }
    pageInfo {
      page
      pageCount
      pageSize
      total
    }
  }
}
    ${PostFragmentFragmentDoc}`;
export const GetBusinessTemplateDocument = gql`
    query GetBusinessTemplate($slug: String!) {
  businesses(filters: {Slug: {eq: $slug}}) {
    Name
    Title
    TitleUnderline
    UnderlineLeft
    Description
    HeroImageFile {
      ...UploadFileFragment
    }
    Ladder {
      ...LadderFragment
    }
    AboutTitle
    AboutDescription
    Slug
    Seo {
      ...ComponentSeoSeoFragment
    }
    Faq {
      Answer
      Question
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetAllFaqsDocument = gql`
    query getAllFaqs {
  faqs {
    Answer
    Question
    documentId
  }
}
    `;
export const GetFeaturesTemplateDocument = gql`
    query GetFeaturesTemplate($slug: String!) {
  features(filters: {Slug: {eq: $slug}}) {
    SingleTitle
    SingleDescription
    SingleImageFile {
      ...UploadFileFragment
    }
    SingleTitleUnderline
    UnderlineLeft
    Slug
    Name
    Ladder {
      ...LadderFragment
    }
    CtaText
    AnswersTitle
    AnswersInfo
    AnswersDescription
    Answers {
      AnswerTitle
      AnswerLink
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
    Faq {
      Answer
      Question
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetFeaturesPageDocument = gql`
    query GetFeaturesPage {
  featuresPage {
    Faq {
      Answer
      Question
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
    HeroImageFile {
      ...UploadFileFragment
    }
    Title
    TitleUnderline
    UnderlineLeft
    Description
    CtaText
  }
  features(filters: {showOnMain: {eq: true}}) {
    Title
    ImageFile {
      ...UploadFileFragment
    }
    Name
    Description
    Link
  }
}
    ${ComponentSeoSeoFragmentFragmentDoc}
${UploadFileFragmentFragmentDoc}`;
export const GetHeaderDataDocument = gql`
    query GetHeaderData {
  setting {
    headScript
    bodyNoScript
  }
  features(filters: {showOnMain: {eq: true}}, sort: ["Name:asc"]) {
    Name
    Slug
    SortOrder
  }
  integrations(sort: ["Name:asc"], filters: {showOnMenu: {eq: true}}) {
    Name
    Slug
  }
  businesses(filters: {showOnMenu: {eq: true}}) {
    Slug
    Name
  }
}
    `;
export const GetHomePageDocument = gql`
    query GetHomePage {
  home {
    FeaturesDescription
    FeaturesTitle
    HeroDescription
    HeroTitle
    HeroTitleUnderline
    UnderlineLeft
    Ladder {
      ...LadderFragment
    }
    Ladder2 {
      ...LadderFragment
    }
    Ladder3 {
      ...LadderFragment
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
    Features {
      Title
      Description
      Items {
        Title
        Description
        Image {
          ...UploadFileFragment
        }
        features {
          Description
          ImageFile {
            ...UploadFileFragment
          }
          Link
          Name
          Slug
        }
      }
    }
  }
  benefits {
    Description
    ImageFile {
      ...UploadFileFragment
    }
    ImageRight
    Name
  }
}
    ${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}
${UploadFileFragmentFragmentDoc}`;
export const GetIntegrationTemplateDocument = gql`
    query GetIntegrationTemplate($slug: String!) {
  integrations(filters: {Slug: {eq: $slug}}) {
    Name
    SingleAboutTitle
    SingleAboutDescription
    SingleDescription
    SingleFirstIconFile {
      ...UploadFileFragment
    }
    SingleHeroFile {
      ...UploadFileFragment
    }
    SingleLadder {
      ...LadderFragment
    }
    SingleSecondIconFile {
      ...UploadFileFragment
    }
    SingleTitle
    SingleUnderlineTitle
    UnderlineLeft
    Slug
    Faq {
      Answer
      Question
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetIntegrationPageDocument = gql`
    query GetIntegrationPage {
  integrationsPage {
    IntegrationDescription
    IntegrationTitle
    Title
    TitleUnderline
    UnderlineLeft
    Description
    HeroImageFile {
      ...UploadFileFragment
    }
    Ladder {
      ...LadderFragment
    }
    Faq {
      Answer
      Question
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
  }
  integrations {
    Description
    IconFile {
      ...UploadFileFragment
    }
    Name
    Slug
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetLandingPageTemplateDocument = gql`
    query GetLandingPageTemplate($slug: String!) {
  landings(filters: {Slug: {eq: $slug}}) {
    Slug
    template
    SubTitle
    Title
    TitleUnderline
    Description
    HeroImageFile {
      ...UploadFileFragment
    }
    showPrice
    showFooter
    customUrlQuery
    customButtonText
    Ladder {
      ...LadderFragment
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
    Faq {
      Answer
      Question
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${LadderFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetLegalPageTemplateDocument = gql`
    query GetLegalPageTemplate($slug: String!) {
  legalPages(filters: {Slug: {eq: $slug}}) {
    Slug
    Name
    content
    SEO {
      ...ComponentSeoSeoFragment
    }
    Faq {
      Answer
      Question
    }
    robotsIndex
  }
}
    ${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetPostPageDocument = gql`
    query GetPostPage($slug: String!) {
  posts(filters: {Slug: {eq: $slug}}, pagination: {limit: 1}) {
    documentId
    Content
    ImageFile {
      ...UploadFileFragment
    }
    Slug
    Title
    publishedAt
    updatedAt
    author {
      ImageFile {
        ...UploadFileFragment
      }
      Name
    }
    category {
      color
      category
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
    rating {
      user
      rating
    }
    Faq {
      Answer
      Question
    }
  }
  relatedPosts: posts(
    filters: {category: {category: {eq: "Cash Flow"}}, Slug: {ne: $slug}}
    sort: ["updatedAt:desc"]
    pagination: {limit: 6}
  ) {
    ...PostFragment
  }
}
    ${UploadFileFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}
${PostFragmentFragmentDoc}`;
export const GetPricingPageDocument = gql`
    query GetPricingPage {
  pricingPage {
    Title
    TitleUnderline
    Description
    HeroImageFile {
      ...UploadFileFragment
    }
    PricingFaq {
      Answer
      Question
      id
    }
    Seo {
      ...ComponentSeoSeoFragment
    }
  }
}
    ${UploadFileFragmentFragmentDoc}
${ComponentSeoSeoFragmentFragmentDoc}`;
export const GetTestimonialsDocument = gql`
    query GetTestimonials {
  testimonials {
    Author {
      AvatarFile {
        ...UploadFileFragment
      }
      Name
      Role
    }
    Text
    Title
  }
}
    ${UploadFileFragmentFragmentDoc}`;
export const GetWhatsNewArticlesDocument = gql`
    query GetWhatsNewArticles {
  posts(
    filters: {category: {category: {eq: "Whats new"}}}
    sort: ["updatedAt:desc"]
    pagination: {limit: 100}
  ) {
    ...PostFragment
  }
}
    ${PostFragmentFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAccountantsAndBookkeepers(variables?: GetAccountantsAndBookkeepersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAccountantsAndBookkeepersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAccountantsAndBookkeepersQuery>({ document: GetAccountantsAndBookkeepersDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAccountantsAndBookkeepers', 'query', variables);
    },
    GetBlogPageArticles(variables: GetBlogPageArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetBlogPageArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPageArticlesQuery>({ document: GetBlogPageArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetBlogPageArticles', 'query', variables);
    },
    GetBusinessTemplate(variables: GetBusinessTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetBusinessTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBusinessTemplateQuery>({ document: GetBusinessTemplateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetBusinessTemplate', 'query', variables);
    },
    getAllFaqs(variables?: GetAllFaqsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllFaqsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllFaqsQuery>({ document: GetAllFaqsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'getAllFaqs', 'query', variables);
    },
    GetFeaturesTemplate(variables: GetFeaturesTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetFeaturesTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFeaturesTemplateQuery>({ document: GetFeaturesTemplateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetFeaturesTemplate', 'query', variables);
    },
    GetFeaturesPage(variables?: GetFeaturesPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetFeaturesPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetFeaturesPageQuery>({ document: GetFeaturesPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetFeaturesPage', 'query', variables);
    },
    GetHeaderData(variables?: GetHeaderDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetHeaderDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHeaderDataQuery>({ document: GetHeaderDataDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHeaderData', 'query', variables);
    },
    GetHomePage(variables?: GetHomePageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetHomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageQuery>({ document: GetHomePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetHomePage', 'query', variables);
    },
    GetIntegrationTemplate(variables: GetIntegrationTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetIntegrationTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetIntegrationTemplateQuery>({ document: GetIntegrationTemplateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetIntegrationTemplate', 'query', variables);
    },
    GetIntegrationPage(variables?: GetIntegrationPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetIntegrationPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetIntegrationPageQuery>({ document: GetIntegrationPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetIntegrationPage', 'query', variables);
    },
    GetLandingPageTemplate(variables: GetLandingPageTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetLandingPageTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLandingPageTemplateQuery>({ document: GetLandingPageTemplateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetLandingPageTemplate', 'query', variables);
    },
    GetLegalPageTemplate(variables: GetLegalPageTemplateQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetLegalPageTemplateQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetLegalPageTemplateQuery>({ document: GetLegalPageTemplateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetLegalPageTemplate', 'query', variables);
    },
    GetPostPage(variables: GetPostPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPostPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPostPageQuery>({ document: GetPostPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPostPage', 'query', variables);
    },
    GetPricingPage(variables?: GetPricingPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPricingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPricingPageQuery>({ document: GetPricingPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPricingPage', 'query', variables);
    },
    GetTestimonials(variables?: GetTestimonialsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetTestimonialsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestimonialsQuery>({ document: GetTestimonialsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetTestimonials', 'query', variables);
    },
    GetWhatsNewArticles(variables?: GetWhatsNewArticlesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetWhatsNewArticlesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetWhatsNewArticlesQuery>({ document: GetWhatsNewArticlesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetWhatsNewArticles', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;