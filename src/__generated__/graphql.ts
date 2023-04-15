/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type NeiBaseRecipe = {
  __typename?: 'NEIBaseRecipe';
  inputFluids: Array<NeiFluid>;
  inputItems: Array<NeiItem>;
  outputFluids: Array<NeiItem>;
  outputItems: Array<NeiItem>;
  recipeId: Scalars['String'];
};

export type NeiFluid = {
  __typename?: 'NEIFluid';
  density: Scalars['Int'];
  fluidId: Scalars['Int'];
  gaseous: Scalars['Boolean'];
  imageFilePath: Scalars['String'];
  input: Scalars['Boolean'];
  internalName: Scalars['String'];
  liters: Scalars['Int'];
  localizedName: Scalars['String'];
  luminosity: Scalars['Int'];
  modId: Scalars['String'];
  nbt: Scalars['String'];
  outputProbability: Scalars['Float'];
  position: Scalars['Int'];
  temperature: Scalars['Int'];
  unlocalizedName: Scalars['String'];
  viscosity: Scalars['Int'];
};

export type NeiGtRecipe = {
  __typename?: 'NEIGtRecipe';
  additionalInfo: Scalars['String'];
  amperage: Scalars['Int'];
  baseRecipe: NeiBaseRecipe;
  durationTicks: Scalars['Int'];
  fluidInputDims: NeiRecipeDimensions;
  fluidOutputDims: NeiRecipeDimensions;
  iconId: Scalars['String'];
  iconInfo: Scalars['String'];
  itemInputDims: NeiRecipeDimensions;
  itemOutputDims: NeiRecipeDimensions;
  localizedMachineName: Scalars['String'];
  recipeId: Scalars['Int'];
  requiresCleanroom: Scalars['Boolean'];
  requiresLowGravity: Scalars['Boolean'];
  shapeless: Scalars['Boolean'];
  voltage: Scalars['Int'];
  voltageTier: Scalars['Int'];
};

export type NeiItem = {
  __typename?: 'NEIItem';
  imageFilePath: Scalars['String'];
  input: Scalars['Boolean'];
  internalName: Scalars['String'];
  itemDamage: Scalars['Int'];
  itemId: Scalars['String'];
  localizedName: Scalars['String'];
  maxDamage: Scalars['Int'];
  maxStackSize: Scalars['Int'];
  modId: Scalars['String'];
  nbt: Scalars['String'];
  outputProbability: Scalars['Float'];
  position: Scalars['Int'];
  stackSize: Scalars['Int'];
  tooltip: Scalars['String'];
  unlocalizedName: Scalars['String'];
};

export type NeiRecipeDimensions = {
  __typename?: 'NEIRecipeDimensions';
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getGTRecipeById: NeiGtRecipe;
  getNSidebarItems: Array<SidebarItem>;
};


export type QueryGetGtRecipeByIdArgs = {
  recipeId: Scalars['String'];
};


export type QueryGetNSidebarItemsArgs = {
  limit: Scalars['Int'];
};

export type SidebarItem = {
  __typename?: 'SidebarItem';
  imageFilePath: Scalars['String'];
  itemId: Scalars['String'];
  localizedName: Scalars['String'];
  tooltip: Scalars['String'];
};

export type SidebarItemsQueryVariables = Exact<{
  limit: Scalars['Int'];
}>;


export type SidebarItemsQuery = { __typename?: 'Query', getNSidebarItems: Array<{ __typename?: 'SidebarItem', itemId: string, imageFilePath: string, tooltip: string, localizedName: string }> };


export const SidebarItemsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SidebarItems"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getNSidebarItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemId"}},{"kind":"Field","name":{"kind":"Name","value":"imageFilePath"}},{"kind":"Field","name":{"kind":"Name","value":"tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"localizedName"}}]}}]}}]} as unknown as DocumentNode<SidebarItemsQuery, SidebarItemsQueryVariables>;