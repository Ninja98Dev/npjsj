/* eslint-disable */
const foodCreateDtoInType = shape({
    id: string(10).isRequired(),
    kod: integer(5).isRequired(),
    cislo: integer(5).isRequired(),
    nazov: string(100).isRequired(),
    norma: string(10),
    kategoria: string(50).isRequired(),
    rate: integer(1)
});