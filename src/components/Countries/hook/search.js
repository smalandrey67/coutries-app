export const useSearch = (countries = [], term, selectedOption) => {

    const foundCountries = () => {
        let data = [...countries]
 
        if(selectedOption) {
            data = data.filter(country => country.information[1].description.includes(selectedOption))
        }

        if(term) {
            data = data.filter(country => country.name.toLowerCase().includes(term.toLowerCase().trim()))
        }
    

        return data
    }

    const visibleItems = foundCountries()

    return { visibleItems }
}   