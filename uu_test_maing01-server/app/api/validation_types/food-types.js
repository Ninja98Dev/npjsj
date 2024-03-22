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

const foodGetDtoInType = shape({
    kod: integer().isRequired()
});

const foodUpdateDtoInType = shape({
    id: integer(10).isRequired(),
    kod: integer(5),
    cislo: integer(5),
    nazov: string(100),
    norma: string(10),
    kategoria: string(50),
    rate: integer(1)
});

const foodListDtoInType = shape({
    id: string(10),
    kod: integer(5),
    cislo: integer(5),
    nazov: string(100),
    norma: string(10),
    kategoria: array(),
    rate: integer(1)
});

const foodDeleteDtoInType = shape({
    id: string(10).isRequired()
});
