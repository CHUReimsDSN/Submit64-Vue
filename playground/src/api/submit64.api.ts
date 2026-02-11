import type {
  TResourceFormMetadataAndData,
  TSubmit64AssociationData,
  TSubmit64GetAssociationData,
  TSubmit64GetMetadataAndData,
  TSubmit64GetSubmitData,
  TSubmit64SubmitData,
} from 'submit64-vue';
import { FakeServerApi } from './fake-server.api';

async function getMetadataAndResource(
  submit64params: TSubmit64GetMetadataAndData,
): Promise<TResourceFormMetadataAndData> {
  return Promise.resolve(FakeServerApi.postFakeServerMetadata(submit64params));
}

async function getAssociationData(
  submit64params: TSubmit64GetAssociationData,
): Promise<TSubmit64AssociationData> {
  return await Promise.resolve(FakeServerApi.postFakeServerAssociation(submit64params));
}

async function getSubmitFormData(
  submit64params: TSubmit64GetSubmitData,
): Promise<TSubmit64SubmitData> {
  return await Promise.resolve(FakeServerApi.postFakeServerSubmit(submit64params));
}

export const Submit64Api = {
  getMetadataAndResource,
  getAssociationData,
  getSubmitFormData,
};
