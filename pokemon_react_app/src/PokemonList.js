import { Datagrid, List, TextField, NumberField, EditButton, TextInput, Edit, NumberInput, SimpleForm, Filter } from 'react-admin';

const PostTitle = ({ record }) =>
    <span>Pokemon Edit Mode {record ? `"${record.subject}"` : ''}</span>
const PostFilter = (props) => <Filter {...props}>
    <TextInput label="Search" source="subject" alwaysOn />

</Filter>

export const PokemonList = (props) => (
    <List filters={<PostFilter />} {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" />
            <TextField source="nome" />
            <TextField source="primeiro_tipo" />
            <TextField source="segundo_tipo" />
            <NumberField source="id_equipa" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PokemonEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <NumberInput source="id" />
            <TextInput source="nome" />
            <TextInput source="primeiro_tipo" />
            <TextInput source="segundo_tipo" />
            <NumberInput source="id_equipa" />
        </SimpleForm>
    </Edit>
);

