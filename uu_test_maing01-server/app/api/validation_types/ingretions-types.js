/* eslint-disable */
const ingretionsGetDtoInType = shape({
    kod: string(10).isRequired()
});

const ingretionsListDtoInType = shape({
    id: string(10),
    kod: string(5),
    nazov: string(100),
    norma: string(10),
    kategoria: string(50),
    tu: string(10),
    mj: string(10),
    porcia: string(20),
    jpor: string(4),
    apor: string(4),
    bpor: string(4),
    cpor: string(4),
    dpor: string(4),
    vpor: string(4),
    jhruba: string(5),
    jcista: string(5),
    ahruba: string(5),
    acista: string(5),
    bhruba: string(5),
    bcista: string(5),
    chruba: string(5),
    ccista: string(5),
    dhruba: string(5),
    dcista: string(5)
});