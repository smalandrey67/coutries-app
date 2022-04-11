export const getAllCoutries = () => { 
    return `${process.env.REACT_APP_URL}all?fields=name,capital,flag,population,region`
}

export const getCountrieByName = name => {
    return `${process.env.REACT_APP_URL}name/${name}`
}

export const getFilterCoutries = codes => {
    return `${process.env.REACT_APP_URL}alpha?codes=${codes.join(',')}`
}


