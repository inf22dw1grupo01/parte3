

import { Datagrid, List, TextField, NumberField, EditButton, TextInput, Edit, NumberInput, SimpleForm, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Equipa Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />

</Filter>


export const EquipaList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EquipaEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
        </SimpleForm>
    </Edit>
);


