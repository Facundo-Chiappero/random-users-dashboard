# Español

## Dashboard de Usuarios con React y TypeScript

Puedes acceder al sitio web desde el siguiente enlace desde tu PC o celular: [Random Users Dashboard](https://random-users-dashboard.netlify.app/)

Este es un proyecto de **gestión de usuarios** construido con **React**, **Vite**, **TypeScript** y la API pública **RandomUser**. La aplicación permite visualizar, filtrar, ordenar y eliminar usuarios, con la opción de restaurar los usuarios eliminados.

## Características

- **Mostrar usuarios**: Carga 100 usuarios desde la API [RandomUser](https://randomuser.me/).
- **Colorear filas**: Alterna entre un tono más oscuro para las filas impares y un tono más claro para las filas pares.
- **Eliminar usuarios**: Permite eliminar filas de la tabla.
- **Restaurar usuarios**: Los usuarios eliminados se pueden restaurar a su estado original.
- **Filtrar por país**: Permite filtrar los usuarios por país a través de un campo de entrada.
- **Ordenar por país, nombre y apellido**: Al hacer clic en las cabeceras de las columnas, se puede ordenar los usuarios por país, primer nombre o apellido.

## Tecnologías utilizadas

- **React**: Librería para la construcción de interfaces de usuario.
- **Vite**: Herramienta para un entorno de desarrollo rápido y eficiente.
- **TypeScript**: Para un tipado estático y mejorar la mantenibilidad del código.
- **Hooks de React**: `useState`, `useEffect`, `useMemo`, `useRef`, `useReducer` y custom hooks como `useGetUsers`, `useFilteredUsers`, `useSortUsers`, `useStore`.
- **API RandomUser**: Para obtener los datos de los usuarios.

## Instalación

Para instalar y ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:

```bash
git clone https://github.com/Facundo-Chiapperousuario/random-users-dashboard.git
cd random-users-dashboard
```
2. Instala las dependencias:
```bash
npm install
```

- Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

- Para ver el build en producción:
```bash
npm run build
npm run preview
```

- Para formatear el código:
```bash
npm run format
```

## Uso

- **Visualizar usuarios**: Los 100 usuarios se cargan automáticamente al cargar la página.
- **Eliminar usuarios**: Haz clic en el botón de eliminar en la fila correspondiente para eliminar a un usuario de la tabla.
- **Restaurar usuarios eliminados**: Haz clic en el botón para restaurar todos los usuarios eliminados y volver al estado inicial.
- **Filtrar por país**: Ingresa el nombre de un país en el campo de texto para filtrar los usuarios que provienen de ese país.
- **Ordenar por columnas**: Haz clic en los encabezados de las columnas de país, primer nombre o apellido para ordenar los usuarios según esa columna.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


# English

## User Dashboard with React and TypeScript

You can access the website through the following link on your PC or mobile: [Random Users Dashboard](https://random-users-dashboard.netlify.app/)

This is a **user management** project built with **React**, **Vite**, **TypeScript**, and the **RandomUser** public API. The application allows you to view, filter, sort, and delete users, with the option to restore deleted users.

## Features

- **Display users**: Loads 100 users from the [RandomUser](https://randomuser.me/) API.
- **Row coloring**: Alternates between a darker tone for odd rows and a lighter tone for even rows.
- **Delete users**: Allows you to delete rows from the table.
- **Restore users**: Deleted users can be restored to their original state.
- **Filter by country**: Allows you to filter users by country through an input field.
- **Sort by country, first name, and last name**: Clicking on the column headers allows you to sort users by country, first name, or last name.

## Technologies used

- **React**: Library for building user interfaces.
- **Vite**: Tool for a fast and efficient development environment.
- **TypeScript**: For static typing and improving code maintainability.
- **React Hooks**: `useState`, `useEffect`, `useMemo`, `useRef`, `useReducer`, and custom hooks like `useGetUsers`, `useFilteredUsers`, `useSortUsers`, `useStore`.
- **RandomUser API**: For fetching user data.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Facundo-Chiapperousername/random-users-dashboard.git
cd random-users-dashboard
```

- To start the development server:
```bash
npm run dev
```

- To view the build in production:

```bash
npm run build
npm run preview
```

To format the code:

```bash
npm run format
```

## Usage

- **View users**: The 100 users are automatically loaded when the page loads.
- **Delete users**: Click the delete button on the corresponding row to remove a user from the table.
- **Restore deleted users**: Click the button to restore all deleted users and return to the initial state.
- **Filter by country**: Enter a country's name in the text field to filter users from that country.
- **Sort by columns**: Click the headers of the country, first name, or last name columns to sort users by that column.

## License

This project is licensed under the MIT license. See the LICENSE file for more details.
