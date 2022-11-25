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
  Date: any;
};

export type Mensaje = {
  __typename?: 'Mensaje';
  createdAt: Scalars['Date'];
  cuerpo: Scalars['String'];
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getMensajes: Array<Mensaje>;
  getUsuarios: Array<Usuario>;
};

export type Usuario = {
  __typename?: 'Usuario';
  id: Scalars['ID'];
  mensajes: Array<Mensaje>;
  nombre: Scalars['String'];
};

export type GetUsuariosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsuariosQuery = { __typename?: 'Query', getUsuarios: Array<{ __typename?: 'Usuario', nombre: string, mensajes: Array<{ __typename?: 'Mensaje', cuerpo: string }> }> };


export const GetUsuariosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsuarios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUsuarios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nombre"}},{"kind":"Field","name":{"kind":"Name","value":"mensajes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cuerpo"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsuariosQuery, GetUsuariosQueryVariables>;