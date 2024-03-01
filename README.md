## Installation guide for the React Table AG plugin:

## 1. Prerequisites

- [NodesJS (**vestion 16**)] (https://nodejs.org/en/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

the plugin need too data array :
 - first one for the columns section, you need a array of objects that use a 
    "dataField" for the type of the column,
    "text" for the name of the column,
    "sortOrder" for the boolean of the sorting (ASC = Ascending/alphabetic order and DSC = Descending/anti alphabetic order),
    "type" for string or date or number

    ex: 
``` javascript
    {
      dataField: 'firstName',
      text: 'First Name',
      sortOrder: "ASC",
      type: "String",
    },
```

 - second one for the data you want in the table, your object property must match with your dataField in the culumn array

    ex: 
 ``` javascript   
    {
        "firstName": "Alice",
        "lastName": "LAROCHE",
        "dateBirth": "1990-12-05",
        "dateStart": "2015-09-20",
        "street": "12 avenue des roses"
    },
```    

## 2. Installation command

`npm i axelgalliand_table-maker`

## 3. Call Part

For the calling, you need the two array in a props and call it like :
`import TableMaker from 'axelgalliand_table-maker/src'` 
```javascript
<TableMaker columns={columns} rows={data}/>
```

## 4. Style Part

The style is simple for let you the liberty and the customization of the table. You can do it just by adding the class name in the parent element of the table call. All the names are simple for a good comprehension like : paginate; button; sizeSelect; columnTitle...