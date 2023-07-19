export const getCategories = async () => {
    let result = await fetch("http://api.risingassociates.co.in/api/v1/category/all")
    let data = await result.json()
    return data;
}

