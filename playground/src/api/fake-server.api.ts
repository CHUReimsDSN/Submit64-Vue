import type { TResourceFormMetadata, TResourceFormMetadataAndData, TSubmit64AssociationData, TSubmit64GetAssociationData, TSubmit64GetMetadataAndData, TSubmit64GetSubmitData, TSubmit64SubmitData } from "submit64-vue";

type TRecordData = {
    metadata: TResourceFormMetadataAndData,
    association: TSubmit64AssociationData,
    submit: TSubmit64SubmitData
}

// Article
const articleForm : TResourceFormMetadata = {
        resource_name: 'Article',
        backend_date_format: 'YYYY/MM/DD',
        backend_datetime_format: 'YYYY/MM/DD HH:mm',
        css_class: null,
        clearable: true,
        readonly: false,
        sections: [
            {
                label: 'My first section',
                name: null,
                icon: null,
                css_class: '',
                readonly: null,
                fields: [
                    {
                        field_name: 'label',
                        field_type: 'string',
                        label: 'Label',
                        rules: [],
                        static_select_options: [],
                        unlinked: false,
                        field_association_name: null,
                        field_association_class: null,
                        hint: null,
                        prefix: null,
                        suffix: null,
                        readonly: null,
                        css_class: ''
                    }
                ]
            }
        ]
}
const article1 = {
    id: 1,
    label: 'My article',
    description: 'My Description'
}
const articleData: TRecordData = {
    metadata: {
        form: articleForm,
        resource_data: article1
    },
    association: {
        rows: [
            {
                label: 'Article 1',
                value: 1,
                data: {
                    id: 1
                }
            }
        ],
        row_count: 1
    },
    submit: {
        success: true,
        errors: {},
        resource_id: 1,
        form: articleForm,
        resource_data: article1,
    }
}

function postFakeServerMetadata(submit64params: TSubmit64GetMetadataAndData): TResourceFormMetadataAndData {
    switch (submit64params.resourceName) {
        case 'Article': return articleData.metadata
    }
    return articleData.metadata
}
function postFakeServerAssociation(submit64params: TSubmit64GetAssociationData): TSubmit64AssociationData {
    switch (submit64params.resourceName) {
        case 'Article': return articleData.association
    }
    return articleData.association
}
function postFakeServerSubmit(submit64params: TSubmit64GetSubmitData): TSubmit64SubmitData {
    switch (submit64params.resourceName) {
        case 'Article': return articleData.submit
    }
    return articleData.submit
}

export const FakeServerApi = {
    postFakeServerMetadata,
    postFakeServerAssociation,
    postFakeServerSubmit
}
