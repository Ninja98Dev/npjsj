/* eslint-disable */
const ingretionsGetDtoInType = shape({
    kod: integer().isRequired()
});

const ingretionsListDtoInType = shape({
    id: integer(),
    kod: integer(),
    nazov: string(100),
    norma: string(10),
    kategoria: string(50),
    mj: string(10),
    porcia: string(20),
    jpor: integer(),
    apor: integer(),
    bpor: integer(),
    cpor: integer(),
    dpor: integer(),
    vpor: integer(),
    jhruba: integer(),
    jcista: integer(),
    ahruba: integer(),
    acista: integer(),
    bhruba: integer(),
    bcista: integer(),
    chruba: integer(),
    ccista: integer(),
    dhruba: integer(),
    dcista: integer()
});