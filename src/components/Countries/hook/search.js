export const useSearch = (countries, term) => {

    const foundCountries = () => {
        if(!term){
            return countries
        }

        return countries.filter(countrie => countrie.name.toLowerCase().includes(term.toLowerCase().trim()))
    }

    const visibleItems = foundCountries()

    return { visibleItems }
}   