

import { Datagrid, List, TextField, NumberField, EditButton, TextInput, Edit, NumberInput, SimpleForm, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Treinador Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />

</Filter>

export const TreinadoreList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <NumberField source="id_equipa" />
            <EditButton />
        </Datagrid>
    </List>
);

export const TreinadoreEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <NumberInput source="id_equipa" />
        </SimpleForm>
    </Edit>
);