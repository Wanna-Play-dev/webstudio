/* eslint-disable */
      /* This is a auto generated file for building the project */ 


      import type { PageMeta } from "@webstudio-is/sdk";
      import type { System, ResourceRequest } from "@webstudio-is/sdk";
export const getResources = (_props: { system: System }) => {
  let baserowTableId = "475271"
  let baserowUserFieldNames = false
  let baserowItemsPerPage = "12"
  let baserowOrderBy = "-field_3720886"
  const system = _props.system
  let baserowToken = "Ut6HpvN9w16kmojPh20rh9pzdpOBBz3T"
  const baserowData_1: ResourceRequest = {
    id: "Vxv7Y58xni58CwppL1kQb",
    name: "baserowData",
    url: `https://api.baserow.io/api/database/rows/table/${baserowTableId}/?user_field_names=${baserowUserFieldNames}&size=${baserowItemsPerPage}&order_by=${baserowOrderBy}${system?.search?.page ? `&page=${system?.search?.page}` : ''}`
,
    method: "get",
    headers: [
      { name: "Authorization", value: `Token ${baserowToken}` },
    ],
  }
  const _data = new Map<string, ResourceRequest>([
    ["baserowData_1", baserowData_1],
  ])
  const _action = new Map<string, ResourceRequest>([
  ])
  return { data: _data, action: _action }
}


      export const getPageMeta = ({
  system,
  resources,
}: {
  system: System;
  resources: Record<string, any>;
}): PageMeta => {
  return {
    title: "Untitled",
    description: "",
    excludePageFromSearch: true,
    language: "",
    socialImageAssetName: undefined,
    socialImageUrl: "",
    status: 200,
    redirect: "",
    custom: [
    ],
  };
};


      type Params = Record<string, string | undefined>;
export const getRemixParams = ({ ...params }: Params): Params => {
  return params
}


      export const projectId = "4b4419b4-1da3-4481-9a51-9d3d3d3f5dc4";

      export const contactEmail = "kotvo66@gmail.com";
    